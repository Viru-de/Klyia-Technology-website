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
2. `vite build --ssr src/entry-server.tsx --outDir dist/server` — builds the SSR bundle (`dist/server/entry-server.js`).

## 5. Production Startup Command
```bash
npm start
```
Executes `NODE_ENV=production node server.ts`, binding to `0.0.0.0` on `process.env.PORT` (default `3000`).

## 6. Environment Variable Instructions
Configure these environment variables in your Hostinger Node.js application settings (never commit secrets or `.env` files to Git):

| Variable | Value | Purpose |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Enables production static serving and compiled SSR bundle |
| `SITE_URL` | `https://klyiatechnology.com` | Canonical domain for `<link rel="canonical">`, OpenGraph, and `/sitemap.xml` |
| `PORT` | *(Injected by Hostinger, or `3000`)* | Listening port for the Express SSR server |
| `GEMINI_API_KEY` | *(Secret — optional)* | Server-side Google Gemini API key for conversational KLYIA AI responses (falls back safely to approved knowledge base when unset) |
| `AI_PROVIDER` | `gemini` | AI provider selector (`gemini` or `knowledge-base`) |
| `AI_MODEL` | `gemini-4-hydrogen` | Configurable Gemini model alias used by `server/aiAssistant.ts` |
| `DATABASE_PATH` | `./data/klyia.db` | Optional custom path for persistent SQLite storage (`visitor_stats`, `visitor_sessions`, `leads`) |
| `VISITOR_HASH_SALT` | *(Random secret string)* | Salt used for privacy-preserving SHA-256 visitor deduplication |

## 7. Persistent SQLite Storage (Visitor Counter & Leads)
- Built-in Node 22 `node:sqlite` stores visitor counts and lead/inquiry submissions in `data/klyia.db` (or `DATABASE_PATH`).
- Ensure the Node.js process has write permissions to the `data/` folder across deployments, or point `DATABASE_PATH` to a persistent writable directory outside ephemeral build directories.

## 8. Hostinger Deployment Steps
1. Push your repository to GitHub/GitLab or upload project files (excluding `node_modules`, `dist`, and `data`) to your Hostinger Node.js hosting directory.
2. In **Hostinger hPanel -> Websites -> Node.js**:
   - Select **Node.js 22.x**.
   - Set **Entry file / Startup command** to `server.ts` (or `npm start`).
   - Set **Build command** to `npm install && npm run build`.
3. Add the environment variables listed in Section 6 inside Hostinger's Environment Variables panel.
4. Trigger **Build & Deploy** from hPanel (or via SSH: `npm ci && npm run build && npm start`).

## 9. Domain Configuration
1. Point `klyiatechnology.com` and `www.klyiatechnology.com` DNS `A` / `CNAME` records to your Hostinger hosting IP/target as shown in hPanel.
2. Configure `www` -> apex (`https://klyiatechnology.com`) redirect rule in Hostinger or DNS/reverse-proxy settings so canonical URLs stay consistent.

## 10. SSL Setup
1. In **Hostinger hPanel -> Security -> SSL**, enable and install Let's Encrypt / Auto-SSL for `klyiatechnology.com` and `www.klyiatechnology.com`.
2. Enable **Force HTTPS** in Hostinger hPanel. `server.ts` sets `app.set('trust proxy', 1)` so `x-forwarded-proto` is respected behind Hostinger's reverse proxy.

## 11. Post-Deployment Verification
After deploying, verify all items below on the live domain:
- `GET https://klyiatechnology.com/health` returns `200 OK` with `{"status":"ok","service":"klyia-technology"}`.
- View page source (`curl -s https://klyiatechnology.com/`) and confirm full SSR HTML, `<title>`, `<meta name="description">`, `<link rel="canonical">`, OpenGraph tags, and JSON-LD Schema are present in the initial HTML response.
- Verify all routes load with `200 OK`: `/`, `/about-us/`, `/services/`, `/industries/`, `/our-work/`, `/blog/`, `/contact-us/`, `/get-a-quote/`.
- Verify an unknown route (e.g. `/non-existent-route/`) returns HTTP `404`.
- Verify `/robots.txt` and `/sitemap.xml` resolve with `https://klyiatechnology.com/...` URLs.
- Verify `GET /api/visitors` returns persistent visitor count and `POST /api/assistant/chat` / `POST /api/leads` operate cleanly.
- Test desktop and mobile mega-menus, mobile drawer accordions, KLYIA AI assistant, and Contact / Get a Quote form submission.
