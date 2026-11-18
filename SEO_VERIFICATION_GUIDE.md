# Klyia Technology — SEO Verification, Sitemaps & Analytics Setup Guide

Use this checklist when deploying **https://klyiatechnology.com/** to production hosting (such as Hostinger VPS running `node server.ts`).

---

## 1. Environment Variables (`.env`)

Configure these optional production variables inside your server `.env` (never commit real secrets to Git):

```env
SITE_URL="https://klyiatechnology.com"
GOOGLE_SITE_VERIFICATION="your-google-search-console-token"
BING_SITE_VERIFICATION="your-bing-webmaster-token"
GA4_MEASUREMENT_ID="G-XXXXXXXXXX"
CLARITY_PROJECT_ID="yourclarityid"
```

> Note: SSR HTML automatically omits any verification `<meta>` or analytics `<script>` tag whenever a key is empty or still uses placeholder text.

---

## 2. Google Search Console Setup

1. Open [Google Search Console](https://search.google.com/search-console/) and add property `https://klyiatechnology.com`.
2. Verify via **HTML Tag** (paste the verification token into `GOOGLE_SITE_VERIFICATION`) or **DNS TXT record** cleanly at your domain registrar.
3. Under **Sitemaps**, submit only the primary Sitemap Index:
   - `https://klyiatechnology.com/sitemap.xml`
4. Verify Google discovers all five child sitemaps cleanly:
   - `https://klyiatechnology.com/sitemap-pages.xml`
   - `https://klyiatechnology.com/sitemap-services.xml`
   - `https://klyiatechnology.com/sitemap-industries.xml`
   - `https://klyiatechnology.com/sitemap-locations.xml`
   - `https://klyiatechnology.com/sitemap-blog.xml`
5. Use **URL Inspection** on `/`, `/services/erp-software-development/`, `/industries/steel-iron-industry/`, `/industries/solar-renewable-energy/`, and `/locations/website-development-company-in-bhilai/` to confirm SSR HTML and structured Schema validate cleanly.

---

## 3. Bing Webmaster Tools Setup

1. Sign in to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Import from Google Search Console or set `BING_SITE_VERIFICATION` inside `.env`.
3. Submit `https://klyiatechnology.com/sitemap.xml`.

---

## 4. Google Business Profile (Bhilai Headquarters)

1. Verify sole official address:
   `First Floor, Bajrang Hardware, Krishna Talkies Road, Risali, Bhilai, Chhattisgarh, India`
2. Ensure official contact matches identically everywhere:
   - Phone / WhatsApp: `+91 8296887643`
   - Website: `https://klyiatechnology.com/`
3. Add core service categories: Software company, Website designer, Internet marketing service, Business management consultant.
4. Set authentic **Service Areas**: Bhilai, Durg, Raipur, Bilaspur, Korba, Raigarh, Chhattisgarh, India (never add unverified virtual branch addresses).

---

## 5. Google Analytics 4 (GA4) & Microsoft Clarity

1. Create a GA4 Web Stream for `https://klyiatechnology.com/` and place its `G-...` ID into `GA4_MEASUREMENT_ID`.
2. Track key conversions: form submissions on `/contact-us/` and `/get-a-quote/`, WhatsApp link clicks, and Klyia AI lead submissions.
3. Add Microsoft Clarity (`CLARITY_PROJECT_ID`) to review anonymized mobile scroll depth and tap friction across service and industry pages.
