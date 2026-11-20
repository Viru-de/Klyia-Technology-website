# Klyia Technology — Hostinger Node.js Deployment Guide

This guide covers building, configuring, and deploying the Phase 1 SSR website of **Klyia Technology** (`https://klyiatechnology.com/`) on Hostinger Node.js hosting.

## 1. Required Node.js Version
- **Node.js `v22.x` LTS** (tested on Node `v22.23.2`).
- Node 22 is required so `server.ts` executes directly in production (`node server.ts`) without requiring `tsx` at runtime.

## 2. Installation Command
```bash
npm ci
```
*(Or `npm install` if deploying without a lockfile.)*

## 3. Development Command
```bash
npm run dev
```
Runs `tsx server.ts` on port `3000` with Vite SSR middleware enabled.

## 4. Production Build Command
```bash
npm run build
```
This runs two builds:
1. `vite build --outDir dist/client` — builds optimized client bundles and copies `src/assets` into `dist/client/src/assets`.
2. `vite build --ssr src/entry-server.tsx --outDir dist/server` — builds the SSR bundle (`dist/server/entry-server.js`), and `esbuild server.ts` compiles the production server entry (`dist/server/server.js`).

## 5. Production Startup Command
```bash
npm start
```
Executes `NODE_ENV=production node server.cjs`, which dynamically loads `dist/server/server.js` and binds to `0.0.0.0` on `process.env.PORT` (default `3000`).

## 6. Environment Variable Instructions
Configure these environment variables in your Hostinger Node.js application settings (never commit secrets or `.env` files to Git):

| Variable | Value | Purpose |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Enables production static serving and compiled SSR bundle |
| `SITE_URL` | `https://klyiatechnology.com` | Canonical domain for `<link rel="canonical">`, OpenGraph, and `/sitemap.xml` |
| `PORT` | *(Injected by Hostinger, or `3000`)* | Listening port for the Express SSR server |
| `SMTP_HOST` | `smtp.gmail.com` | Outgoing SMTP host used by `server/mailer.ts` |
| `SMTP_PORT` | `587` *(Option A)* or `465` *(Option B)* | Use `587` with `SMTP_SECURE=false` (STARTTLS) or `465` with `SMTP_SECURE=true` (SSL/TLS) |
| `SMTP_SECURE` | `false` *(for 587)* or `true` *(for 465)* | Must match `SMTP_PORT` (`server/mailer.ts` auto-normalizes mismatched pairs and logs a warning) |
| `SMTP_USER` | `klyiatechnology@gmail.com` | Authenticated Gmail address |
| `SMTP_PASS` | *(Secret — 16-char Google App Password)* | **Must** be a Google App Password (requires 2-Step Verification on the Gmail account), never your normal Gmail login password |
| `SMTP_FROM` | `Klyia Technology <klyiatechnology@gmail.com>` | Sender display header (envelope & From address stay locked to `SMTP_USER` on Gmail SMTP to prevent relay rejection) |
| `ENQUIRY_TO_EMAIL` | `klyiatechnology@gmail.com` | Destination inbox for all enquiry forms and chatbox transcripts |
| `ADMIN_API_KEY` | *(Random 32+ char secret)* | Bearer / `x-admin-key` secret for `/api/admin/smtp-diagnostics` and `/api/admin/enquiries/retry` |
| `DATABASE_PATH` | `./data/klyia.db` | Optional custom path for persistent SQLite storage (`visitor_stats`, `leads`, `chat_sessions`, `chat_messages`) |
| `VISITOR_HASH_SALT` | *(Random secret string)* | Salt used for privacy-preserving SHA-256 visitor deduplication |

> **Important Gmail & Hostinger Notes:**
> - **Option A (Recommended for Hostinger):** `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_SECURE=false`.
> - **Option B (SSL/TLS):** `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_SECURE=true`.
> - **Restart Required:** After adding or modifying environment variables in Hostinger hPanel (or `.env`), you **must restart** the Node.js application so the running process loads the updated values.
> - **Persistent Storage:** All enquiries are always saved to SQLite **before** SMTP delivery is attempted. If Gmail temporarily fails or credentials are misconfigured, no customer lead is lost; transient failures are retried automatically in the background and can also be replayed via `POST /api/admin/enquiries/retry`.

## 7. Persistent SQLite Storage (Visitor Counter & Leads)
- Built-in Node 22 `node:sqlite` stores visitor counts and lead/inquiry submissions in `data/klyia.db` (or `DATABASE_PATH`).
- Ensure the Node.js process has write permissions to the `data/` folder across deployments, or point `DATABASE_PATH` to a persistent writable directory outside ephemeral build directories.

## 8. Hostinger Deployment Steps
1. Push your repository to GitHub/GitLab or upload project files (excluding `node_modules`, `dist`, and `data`) to your Hostinger Node.js hosting directory.
2. In **Hostinger hPanel -> Websites -> Node.js**:
   - Select **Node.js 22.x**.
   - Set **Entry file / Startup file** to `server.cjs` (or `npm start`).
   - Set **Build command** to `npm install && npm run build`.
3. Add the environment variables listed in Section 6 inside Hostinger's Environment Variables panel.
4. Trigger **Build & Deploy** from hPanel (or via SSH: `npm ci && npm run build && npm start`) and **Restart** the Node.js app whenever env variables change.

## 9. Domain & Canonical `www` Redirect Configuration (Hostinger hPanel)
1. In **Hostinger hPanel -> Domains -> DNS / Nameservers**:
   - Point apex `@` (`klyiatechnology.com`) `A` record to your Hostinger VPS/hosting IPv4 address (and `AAAA` if applicable).
   - Point `www` (`www.klyiatechnology.com`) `CNAME` record to `klyiatechnology.com` (or `A` record to the same Hostinger IP) so both hostnames resolve to your Node.js app.
2. In **Hostinger hPanel -> Websites -> Domains / Redirects** (or Nginx/Apache reverse proxy if using VPS):
   - Do **not** configure a conflicting non-www-to-www redirect. The preferred canonical domain is `https://klyiatechnology.com/`.
   - Ensure Hostinger passes `Host` / `X-Forwarded-Host` and `X-Forwarded-Proto` headers to the Node.js application.
   - `server.ts` enforces a permanent single-hop HTTP `301` redirect from `https://www.klyiatechnology.com/*` to `https://klyiatechnology.com/*` (preserving path and query parameters, without redirecting `/api/*` or `/health`).
   - If you also add a Hostinger edge rule for `www.klyiatechnology.com` -> `https://klyiatechnology.com`, ensure it forwards path + query string (`$request_uri`) so only 1 redirect hop occurs.

## 10. SSL Setup
1. In **Hostinger hPanel -> Security -> SSL**, enable and install Let's Encrypt / Auto-SSL for **both** `klyiatechnology.com` and `www.klyiatechnology.com` (required so HTTPS requests to `www.klyiatechnology.com` complete TLS before the 301 redirect).
2. Enable **Force HTTPS** in Hostinger hPanel. `server.ts` sets `app.set('trust proxy', 1)` so `x-forwarded-proto` is respected behind Hostinger's reverse proxy.

## 11. Post-Deployment Verification & SMTP Diagnostics
After deploying, verify all items below on the live domain:
- `GET https://klyiatechnology.com/health` returns `200 OK` with `{"status":"ok","service":"klyia-technology"}`.
- Verify live SMTP configuration & Gmail handshake without sending spam:
  ```bash
  curl -s -H "x-admin-key: YOUR_ADMIN_API_KEY" https://klyiatechnology.com/api/admin/smtp-diagnostics
  ```
  Confirm `primaryVerify.ok` is `true` (or inspect `missingVars`, `errorCode`, and `alternatePortVerify` if port `465`/`587` is blocked or auth failed).
- Replay any delayed/failed enquiries saved during an outage (after fixing `SMTP_*` env vars):
  ```bash
  curl -s -X POST -H "x-admin-key: YOUR_ADMIN_API_KEY" -H "Content-Type: application/json" -d '{"includeAuthErrors":true}' https://klyiatechnology.com/api/admin/enquiries/retry
  ```
- View page source (`curl -s https://klyiatechnology.com/`) and confirm full SSR HTML, `<title>`, `<meta name="description">`, `<link rel="canonical">`, OpenGraph tags, and JSON-LD Schema are present in the initial HTML response.
- Verify all routes load with `200 OK`: `/`, `/about-us/`, `/services/`, `/industries/`, `/locations/`, `/insights/`, `/contact-us/`, `/get-a-quote/`.
- Verify an unknown route (e.g. `/non-existent-route/`) returns HTTP `404`.
- Verify `/robots.txt`, `/llms.txt`, `/llms-full.txt`, and `/sitemap.xml` resolve with `https://klyiatechnology.com/...` URLs.
- Verify `GET /api/visitors` returns persistent visitor count and test Contact / Get a Quote / Service / Website Chatbox form submissions end-to-end.

