import {createHash} from 'node:crypto';
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

export interface LeadRecordInput {
  source: 'contact' | 'quote';
  name: string;
  company?: string;
  phone: string;
  email?: string;
  city?: string;
  service?: string;
  industry?: string;
  subject?: string;
  message: string;
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
      created_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_leads_created_at
      ON leads (created_at DESC);
  `);

  dbInstance = db;
  return dbInstance;
}

export function hashVisitorIdentifier(rawId: string): string {
  return createHash('sha256').update(`${VISITOR_HASH_SALT}:${rawId}`).digest('hex');
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
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `KLY-${stamp}-${randomSuffix}`;
  const createdAt = now.toISOString();

  db.prepare(
    `INSERT INTO leads (
      reference_id, source, name, company, phone, email, city, service, industry, subject, message, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
    createdAt,
  );

  return {referenceId, createdAt};
}

export function closeDatabase(): void {
  if (dbInstance) {
    dbInstance.close();
    dbInstance = null;
  }
}
