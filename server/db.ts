import {createHash, randomBytes, randomUUID} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {DatabaseSync} from 'node:sqlite';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot =
  path.basename(__dirname) === 'server' && path.basename(path.dirname(__dirname)) === 'dist'
    ? path.resolve(__dirname, '../..')
    : path.resolve(__dirname, '..');

const DEFAULT_DB_PATH = path.resolve(projectRoot, 'data/klyia.db');
const VISITOR_HASH_SALT = process.env.VISITOR_HASH_SALT || 'klyia-tech-bhilai-visitor-salt-v1';

let dbInstance: DatabaseSync | null = null;

export type LeadSourceType = 'contact' | 'quote' | 'service' | 'solar' | 'chat' | 'callback';

export interface LeadRecordInput {
  source: LeadSourceType;
  name: string;
  company?: string;
  phone: string;
  email?: string;
  city?: string;
  service?: string;
  industry?: string;
  subject?: string;
  message: string;
  sourcePage?: string;
  sourceSection?: string;
  consentGiven: boolean;
  fingerprint: string;
}

export interface ChatSessionRecord {
  id: string;
  sessionToken: string;
  referenceId: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  initialRequirement: string;
  sourcePage: string;
  consent: boolean;
  emailStatus: string;
  createdAt: string;
}

export interface ChatMessageRecord {
  id: number;
  sessionId: string;
  sender: 'visitor' | 'system';
  message: string;
  emailStatus: string;
  createdAt: string;
}

export type EmailDeliveryStatus = 'pending' | 'sent' | 'failed';

export interface StoredLeadSummary {
  id: number;
  referenceId: string;
  source: LeadSourceType;
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  industry: string;
  subject: string;
  message: string;
  sourcePage: string;
  sourceSection: string;
  consent: boolean;
  emailStatus: EmailDeliveryStatus;
  emailErrorCode: string | null;
  retryCount: number;
  lastEmailAttemptAt: string | null;
  createdAt: string;
}

function ensureColumnMigrations(db: DatabaseSync) {
  const leadCols = db.prepare('PRAGMA table_info(leads)').all() as {name?: string}[];
  const existingLeads = new Set(leadCols.map((c) => c.name).filter(Boolean));

  const leadMigrations: [string, string][] = [
    ['consent', 'ALTER TABLE leads ADD COLUMN consent INTEGER NOT NULL DEFAULT 0'],
    ['source_page', 'ALTER TABLE leads ADD COLUMN source_page TEXT'],
    ['source_section', 'ALTER TABLE leads ADD COLUMN source_section TEXT'],
    ['email_status', "ALTER TABLE leads ADD COLUMN email_status TEXT NOT NULL DEFAULT 'pending'"],
    ['email_error', 'ALTER TABLE leads ADD COLUMN email_error TEXT'],
    ['email_error_code', 'ALTER TABLE leads ADD COLUMN email_error_code TEXT'],
    ['retry_count', 'ALTER TABLE leads ADD COLUMN retry_count INTEGER NOT NULL DEFAULT 0'],
    ['last_email_attempt_at', 'ALTER TABLE leads ADD COLUMN last_email_attempt_at TEXT'],
    ['email_sent_at', 'ALTER TABLE leads ADD COLUMN email_sent_at TEXT'],
    ['email_message_id', 'ALTER TABLE leads ADD COLUMN email_message_id TEXT'],
    ['submission_fingerprint', 'ALTER TABLE leads ADD COLUMN submission_fingerprint TEXT'],
  ];

  for (const [col, ddl] of leadMigrations) {
    if (!existingLeads.has(col)) {
      db.exec(ddl);
    }
  }

  db.exec(
    'CREATE INDEX IF NOT EXISTS idx_leads_fingerprint_time ON leads (submission_fingerprint, created_at DESC)',
  );
  db.exec(
    'CREATE INDEX IF NOT EXISTS idx_leads_email_status ON leads (email_status, retry_count, created_at DESC)',
  );

  // Normalize any legacy 'smtp_unconfigured' rows to 'failed' with explicit error code
  db.exec(`
    UPDATE leads
    SET email_status = 'failed',
        email_error_code = COALESCE(email_error_code, 'SMTP_NOT_CONFIGURED')
    WHERE email_status = 'smtp_unconfigured'
  `);
  db.exec(`
    UPDATE chat_sessions
    SET email_status = 'failed'
    WHERE email_status = 'smtp_unconfigured'
  `);
  db.exec(`
    UPDATE chat_messages
    SET email_status = 'failed'
    WHERE email_status = 'smtp_unconfigured'
  `);
}

export function getDatabase(): DatabaseSync {
  if (dbInstance) {
    return dbInstance;
  }

  const dbPath = process.env.DATABASE_PATH
    ? path.resolve(process.env.DATABASE_PATH)
    : DEFAULT_DB_PATH;

  fs.mkdirSync(path.dirname(dbPath), {recursive: true});

  const db = new DatabaseSync(dbPath);
  db.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA synchronous = NORMAL;
    PRAGMA busy_timeout = 5000;

    CREATE TABLE IF NOT EXISTS visitor_stats (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      total_visitors INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL
    );

    INSERT OR IGNORE INTO visitor_stats (id, total_visitors, updated_at)
    VALUES (1, 0, datetime('now'));

    CREATE TABLE IF NOT EXISTS visitor_sessions (
      visitor_hash TEXT PRIMARY KEY,
      first_seen_at TEXT NOT NULL,
      last_counted_at TEXT NOT NULL,
      count_date TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_visitor_sessions_date
      ON visitor_sessions (count_date);

    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      reference_id TEXT UNIQUE NOT NULL,
      source TEXT NOT NULL,
      name TEXT NOT NULL,
      company TEXT,
      phone TEXT NOT NULL,
      email TEXT,
      city TEXT,
      service TEXT,
      industry TEXT,
      subject TEXT,
      message TEXT NOT NULL,
      consent INTEGER NOT NULL DEFAULT 0,
      source_page TEXT,
      source_section TEXT,
      email_status TEXT NOT NULL DEFAULT 'pending',
      email_error TEXT,
      email_error_code TEXT,
      retry_count INTEGER NOT NULL DEFAULT 0,
      last_email_attempt_at TEXT,
      email_sent_at TEXT,
      email_message_id TEXT,
      submission_fingerprint TEXT,
      created_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_leads_created_at
      ON leads (created_at DESC);

    CREATE TABLE IF NOT EXISTS chat_sessions (
      id TEXT PRIMARY KEY,
      session_token TEXT NOT NULL,
      reference_id TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT NOT NULL,
      service TEXT NOT NULL,
      initial_requirement TEXT NOT NULL,
      source_page TEXT,
      consent INTEGER NOT NULL DEFAULT 1,
      email_status TEXT NOT NULL DEFAULT 'pending',
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS chat_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT NOT NULL,
      sender TEXT NOT NULL,
      message TEXT NOT NULL,
      email_status TEXT NOT NULL DEFAULT 'sent',
      created_at TEXT NOT NULL,
      FOREIGN KEY (session_id) REFERENCES chat_sessions(id)
    );

    CREATE INDEX IF NOT EXISTS idx_chat_messages_session
      ON chat_messages (session_id, id ASC);
  `);

  ensureColumnMigrations(db);

  dbInstance = db;
  return dbInstance;
}

export function hashVisitorIdentifier(rawId: string): string {
  return createHash('sha256').update(`${VISITOR_HASH_SALT}:${rawId}`).digest('hex');
}

export function computeSubmissionFingerprint(parts: string[]): string {
  return createHash('sha256')
    .update(parts.map((p) => p.trim().toLowerCase()).join('|'))
    .digest('hex');
}

export function findRecentDuplicateLead(
  fingerprint: string,
  windowSeconds = 120,
): {
  referenceId: string;
  createdAt: string;
  emailStatus: EmailDeliveryStatus;
  lastEmailAttemptAt: string | null;
} | null {
  const db = getDatabase();
  const cutoffIso = new Date(Date.now() - windowSeconds * 1000).toISOString();
  const row = db
    .prepare(
      `SELECT reference_id, created_at, email_status, last_email_attempt_at
       FROM leads
       WHERE submission_fingerprint = ? AND created_at >= ?
       ORDER BY id DESC LIMIT 1`,
    )
    .get(fingerprint, cutoffIso) as
    | {
        reference_id?: string;
        created_at?: string;
        email_status?: string;
        last_email_attempt_at?: string | null;
      }
    | undefined;

  if (!row?.reference_id || !row?.created_at) {
    return null;
  }

  const normalizedStatus: EmailDeliveryStatus =
    row.email_status === 'sent' ? 'sent' : row.email_status === 'failed' ? 'failed' : 'pending';

  return {
    referenceId: row.reference_id,
    createdAt: row.created_at,
    emailStatus: normalizedStatus,
    lastEmailAttemptAt: row.last_email_attempt_at ?? null,
  };
}

export function getTotalVisitors(): number {
  const db = getDatabase();
  const row = db
    .prepare('SELECT total_visitors FROM visitor_stats WHERE id = 1')
    .get() as {total_visitors?: number} | undefined;
  return typeof row?.total_visitors === 'number' ? row.total_visitors : 0;
}

export function recordUniqueVisitor(visitorHash: string): {
  totalVisitors: number;
  counted: boolean;
} {
  const db = getDatabase();
  const now = new Date();
  const nowIso = now.toISOString();
  const todayUtc = nowIso.slice(0, 10);

  db.exec('BEGIN IMMEDIATE');
  try {
    const existing = db
      .prepare('SELECT count_date FROM visitor_sessions WHERE visitor_hash = ?')
      .get(visitorHash) as {count_date?: string} | undefined;

    let counted = false;

    if (!existing) {
      db.prepare(
        'INSERT INTO visitor_sessions (visitor_hash, first_seen_at, last_counted_at, count_date) VALUES (?, ?, ?, ?)',
      ).run(visitorHash, nowIso, nowIso, todayUtc);

      db.prepare(
        'UPDATE visitor_stats SET total_visitors = total_visitors + 1, updated_at = ? WHERE id = 1',
      ).run(nowIso);
      counted = true;
    } else if (existing.count_date !== todayUtc) {
      db.prepare(
        'UPDATE visitor_sessions SET last_counted_at = ?, count_date = ? WHERE visitor_hash = ?',
      ).run(nowIso, todayUtc, visitorHash);

      db.prepare(
        'UPDATE visitor_stats SET total_visitors = total_visitors + 1, updated_at = ? WHERE id = 1',
      ).run(nowIso);
      counted = true;
    }

    const row = db
      .prepare('SELECT total_visitors FROM visitor_stats WHERE id = 1')
      .get() as {total_visitors?: number} | undefined;

    db.exec('COMMIT');
    return {
      totalVisitors: typeof row?.total_visitors === 'number' ? row.total_visitors : 0,
      counted,
    };
  } catch (error) {
    db.exec('ROLLBACK');
    throw error;
  }
}

export function saveLeadRecord(input: LeadRecordInput): {referenceId: string; createdAt: string} {
  const db = getDatabase();
  const now = new Date();
  const stamp = `${now.getUTCFullYear()}${String(now.getUTCMonth() + 1).padStart(2, '0')}${String(now.getUTCDate()).padStart(2, '0')}`;
  const randomSuffix = randomBytes(3).toString('hex').toUpperCase();
  const referenceId = `KLY-${stamp}-${randomSuffix}`;
  const createdAt = now.toISOString();

  db.prepare(
    `INSERT INTO leads (
      reference_id, source, name, company, phone, email, city, service, industry, subject, message,
      consent, source_page, source_section, email_status, retry_count, submission_fingerprint, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?)`,
  ).run(
    referenceId,
    input.source,
    input.name,
    input.company || null,
    input.phone,
    input.email || null,
    input.city || null,
    input.service || null,
    input.industry || null,
    input.subject || null,
    input.message,
    input.consentGiven ? 1 : 0,
    input.sourcePage || null,
    input.sourceSection || null,
    'pending',
    input.fingerprint,
    createdAt,
  );

  return {referenceId, createdAt};
}

export function updateLeadEmailStatus(
  referenceId: string,
  status: EmailDeliveryStatus,
  options?: {
    errorMsg?: string;
    errorCode?: string;
    messageId?: string;
    incrementRetry?: boolean;
  },
): void {
  const db = getDatabase();
  const attemptedAt = new Date().toISOString();
  const safeErrorMsg = options?.errorMsg ? options.errorMsg.slice(0, 500) : null;
  const safeErrorCode = options?.errorCode ? options.errorCode.slice(0, 64) : null;
  const sentAt = status === 'sent' ? attemptedAt : null;
  const retryDelta = options?.incrementRetry ? 1 : 0;

  db.prepare(
    `UPDATE leads
     SET email_status = ?,
         email_error = ?,
         email_error_code = ?,
         retry_count = retry_count + ?,
         last_email_attempt_at = ?,
         email_sent_at = COALESCE(?, email_sent_at),
         email_message_id = COALESCE(?, email_message_id)
     WHERE reference_id = ?`,
  ).run(
    status,
    safeErrorMsg,
    safeErrorCode,
    retryDelta,
    attemptedAt,
    sentAt,
    options?.messageId ?? null,
    referenceId,
  );
}

function mapLeadRow(row: Record<string, unknown>): StoredLeadSummary {
  const rawStatus = String(row.email_status || 'pending');
  const emailStatus: EmailDeliveryStatus =
    rawStatus === 'sent' ? 'sent' : rawStatus === 'failed' ? 'failed' : 'pending';

  return {
    id: Number(row.id),
    referenceId: String(row.reference_id),
    source: (String(row.source) as LeadSourceType) || 'contact',
    name: String(row.name || ''),
    company: String(row.company || ''),
    phone: String(row.phone || ''),
    email: String(row.email || ''),
    city: String(row.city || ''),
    service: String(row.service || ''),
    industry: String(row.industry || ''),
    subject: String(row.subject || ''),
    message: String(row.message || ''),
    sourcePage: String(row.source_page || '/'),
    sourceSection: String(row.source_section || 'Website Form'),
    consent: Boolean(row.consent),
    emailStatus,
    emailErrorCode: row.email_error_code ? String(row.email_error_code) : null,
    retryCount: Number(row.retry_count || 0),
    lastEmailAttemptAt: row.last_email_attempt_at ? String(row.last_email_attempt_at) : null,
    createdAt: String(row.created_at || ''),
  };
}

export function getLeadByReferenceId(referenceId: string): StoredLeadSummary | null {
  const db = getDatabase();
  const row = db
    .prepare('SELECT * FROM leads WHERE reference_id = ? LIMIT 1')
    .get(referenceId) as Record<string, unknown> | undefined;
  return row ? mapLeadRow(row) : null;
}

export function listFailedLeadsForRetry(options?: {
  maxRetries?: number;
  limit?: number;
  includeAuthErrors?: boolean;
}): StoredLeadSummary[] {
  const db = getDatabase();
  const maxRetries = options?.maxRetries ?? 5;
  const limit = options?.limit ?? 10;

  const query = options?.includeAuthErrors
    ? `SELECT * FROM leads
       WHERE email_status IN ('pending', 'failed')
         AND retry_count < ?
       ORDER BY id ASC LIMIT ?`
    : `SELECT * FROM leads
       WHERE email_status IN ('pending', 'failed')
         AND retry_count < ?
         AND COALESCE(email_error_code, '') NOT IN ('EAUTH', 'SMTP_NOT_CONFIGURED', 'INVALID_RECIPIENT')
       ORDER BY id ASC LIMIT ?`;

  const rows = db.prepare(query).all(maxRetries, limit) as Record<string, unknown>[];
  return rows.map(mapLeadRow);
}

export function getLeadEmailStatusCounts(): Record<EmailDeliveryStatus, number> {
  const db = getDatabase();
  const rows = db
    .prepare('SELECT email_status, COUNT(*) AS cnt FROM leads GROUP BY email_status')
    .all() as {email_status?: string; cnt?: number}[];

  const counts: Record<EmailDeliveryStatus, number> = {pending: 0, sent: 0, failed: 0};
  for (const row of rows) {
    if (row.email_status === 'sent') counts.sent += Number(row.cnt || 0);
    else if (row.email_status === 'failed') counts.failed += Number(row.cnt || 0);
    else counts.pending += Number(row.cnt || 0);
  }
  return counts;
}

export function createChatSession(input: {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  service?: string;
  initialRequirement?: string;
  sourcePage: string;
}): {session: ChatSessionRecord; initialMessages: ChatMessageRecord[]} {
  const db = getDatabase();
  const now = new Date();
  const stamp = `${now.getUTCFullYear()}${String(now.getUTCMonth() + 1).padStart(2, '0')}${String(now.getUTCDate()).padStart(2, '0')}`;
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `KLY-CHAT-${stamp}-${randomSuffix}`;
  const sessionId = randomUUID();
  const sessionToken = randomBytes(24).toString('hex');
  const createdAt = now.toISOString();
  const safeEmail = (input.email || '').trim();
  const safeCompany = (input.company || '').trim();
  const safeService = (input.service || 'Website Enquiry Chat').trim();
  const safeRequirement = (input.initialRequirement || '').trim();
  const leadMessage =
    safeRequirement || 'Visitor started Website Enquiry Chat with Full Name and Phone Number.';

  db.exec('BEGIN IMMEDIATE');
  try {
    db.prepare(
      `INSERT INTO chat_sessions (
        id, session_token, reference_id, name, phone, email, company, service,
        initial_requirement, source_page, consent, email_status, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 'pending', ?)`,
    ).run(
      sessionId,
      sessionToken,
      referenceId,
      input.name,
      input.phone,
      safeEmail,
      safeCompany,
      safeService,
      safeRequirement,
      input.sourcePage,
      createdAt,
    );

    db.prepare(
      `INSERT INTO leads (
        reference_id, source, name, company, phone, email, service, subject, message,
        consent, source_page, source_section, email_status, submission_fingerprint, created_at
      ) VALUES (?, 'chat', ?, ?, ?, ?, ?, ?, ?, 1, ?, 'Website Chatbox', 'pending', ?, ?)`,
    ).run(
      referenceId,
      input.name,
      safeCompany || null,
      input.phone,
      safeEmail || null,
      safeService,
      `Chatbox Enquiry: ${safeService}`,
      leadMessage,
      input.sourcePage,
      computeSubmissionFingerprint(['chat', input.name, input.phone, leadMessage]),
      createdAt,
    );

    const initialMessages: ChatMessageRecord[] = [];
    if (safeRequirement) {
      const userMsgInfo = db
        .prepare(
          `INSERT INTO chat_messages (session_id, sender, message, email_status, created_at)
           VALUES (?, 'visitor', ?, 'pending', ?)`,
        )
        .run(sessionId, safeRequirement, createdAt);
      initialMessages.push({
        id: Number(userMsgInfo.lastInsertRowid),
        sessionId,
        sender: 'visitor',
        message: safeRequirement,
        emailStatus: 'pending',
        createdAt,
      });
    }

    db.exec('COMMIT');

    const session: ChatSessionRecord = {
      id: sessionId,
      sessionToken,
      referenceId,
      name: input.name,
      phone: input.phone,
      email: safeEmail,
      company: safeCompany,
      service: safeService,
      initialRequirement: safeRequirement,
      sourcePage: input.sourcePage,
      consent: true,
      emailStatus: 'pending',
      createdAt,
    };

    return {session, initialMessages};
  } catch (error) {
    db.exec('ROLLBACK');
    throw error;
  }
}

export function getChatSessionAuthorized(
  sessionId: string,
  sessionToken: string,
): {session: ChatSessionRecord; messages: ChatMessageRecord[]} | null {
  const db = getDatabase();
  const row = db
    .prepare(
      `SELECT id, session_token, reference_id, name, phone, email, company, service,
              initial_requirement, source_page, consent, email_status, created_at
       FROM chat_sessions WHERE id = ? AND session_token = ?`,
    )
    .get(sessionId, sessionToken) as
    | {
        id: string;
        session_token: string;
        reference_id: string;
        name: string;
        phone: string;
        email: string;
        company: string;
        service: string;
        initial_requirement: string;
        source_page: string;
        consent: number;
        email_status: string;
        created_at: string;
      }
    | undefined;

  if (!row) {
    return null;
  }

  const msgRows = db
    .prepare(
      `SELECT id, session_id, sender, message, email_status, created_at
       FROM chat_messages WHERE session_id = ? ORDER BY id ASC`,
    )
    .all(sessionId) as {
    id: number;
    session_id: string;
    sender: 'visitor' | 'system';
    message: string;
    email_status: string;
    created_at: string;
  }[];

  return {
    session: {
      id: row.id,
      sessionToken: row.session_token,
      referenceId: row.reference_id,
      name: row.name,
      phone: row.phone,
      email: row.email,
      company: row.company,
      service: row.service,
      initialRequirement: row.initial_requirement,
      sourcePage: row.source_page || '/',
      consent: Boolean(row.consent),
      emailStatus: row.email_status,
      createdAt: row.created_at,
    },
    messages: msgRows.map((m) => ({
      id: m.id,
      sessionId: m.session_id,
      sender: m.sender,
      message: m.message,
      emailStatus: m.email_status,
      createdAt: m.created_at,
    })),
  };
}

export function appendChatMessage(
  sessionId: string,
  sender: 'visitor' | 'system',
  message: string,
  emailStatus: string,
): ChatMessageRecord {
  const db = getDatabase();
  const createdAt = new Date().toISOString();
  const info = db
    .prepare(
      `INSERT INTO chat_messages (session_id, sender, message, email_status, created_at)
       VALUES (?, ?, ?, ?, ?)`,
    )
    .run(sessionId, sender, message, emailStatus, createdAt);

  return {
    id: Number(info.lastInsertRowid),
    sessionId,
    sender,
    message,
    emailStatus,
    createdAt,
  };
}

export function updateChatEmailStatus(
  sessionId: string,
  status: EmailDeliveryStatus,
  messageId?: number,
): void {
  const db = getDatabase();
  db.prepare('UPDATE chat_sessions SET email_status = ? WHERE id = ?').run(status, sessionId);
  if (typeof messageId === 'number') {
    db.prepare('UPDATE chat_messages SET email_status = ? WHERE id = ?').run(status, messageId);
  }
}

export function closeDatabase(): void {
  if (dbInstance) {
    dbInstance.close();
    dbInstance = null;
  }
}
