import {BANNER_IMAGES} from '../config/banners.ts';
import type {BlogArticleData} from './types.ts';

export const ALL_BLOG_ARTICLES: BlogArticleData[] = [
  {
    slug: 'website-development-cost-in-india-what-affects-pricing',
    title: 'Website Development Cost in India: What Actually Affects Pricing?',
    h1: 'Website Development Cost in India: What Actually Affects Pricing?',
    excerpt:
      'An honest engineering breakdown of why corporate websites, B2B catalogs, e-commerce stores, and custom portals differ in scope and cost.',
    category: 'Web Engineering',
    authorName: 'Klyia Engineering Team',
    authorRole: 'Web & Systems Architecture',
    publishedAt: '2026-09-12',
    updatedAt: '2026-11-18',
    readTime: '6 min read',
    heroImage: BANNER_IMAGES.webDesignUi,
    heroImageAlt: 'Corporate web engineering layout and pricing architecture comparison',
    canonicalPath: '/blog/website-development-cost-in-india-what-affects-pricing/',
    seoTitle: 'Website Development Cost in India | Klyia Technology',
    metaDescription:
      'Learn what genuinely determines website development cost in India—from architecture, SSR SEO, custom portals, and integrations to post-launch support.',
    indexable: true,
    sections: [
      {
        heading: 'Why Flat "One-Price" Website Quotes Mislead Businesses',
        paragraphs: [
          'Indian business owners often see website quotes ranging from ₹6,000 templates to multi-lakh enterprise builds without clear explanation of what separates them.',
          'The real driver of cost is not page count alone—it is engineering architecture, content structure, custom workflow integrations, Core Web Vitals speed, and whether the site is built to rank on Google and AI engines.',
        ],
      },
      {
        heading: 'Key Scope Tiers & What Each Covers',
        paragraphs: [
          'Understanding scope tiers helps procurement and founders compare proposals fairly rather than chasing the cheapest initial number.',
        ],
        table: {
          headers: ['Website Tier', 'Typical Scope', 'Primary Cost Drivers'],
          rows: [
            ['Business Presence Site', '6–10 core pages, mobile responsive, inquiry form', 'UI design quality, copywriting, speed & basic SEO hygiene'],
            ['Corporate SEO & GEO Platform', '20+ service/industry/location pages, Schema JSON-LD, SSR', 'Information architecture, SSR setup, structured data, content engineering'],
            ['E-commerce or B2B Portal', 'Catalog filters, role logins, UPI/ERP sync, WhatsApp alerts', 'Database modeling, payment/API integrations, security & admin dashboards'],
          ],
        },
      },
      {
        heading: 'Hidden Costs to Ask About Before Signing',
        paragraphs: [
          'Always clarify domain/hosting ownership, SSL renewal, annual maintenance, and whether you own the source code cleanly without proprietary page-builder lock-in.',
        ],
        bullets: [
          'Do you retain full ownership of the domain registrar and source code repository?',
          'Is Server-Side Rendering (SSR) or clean static HTML included for Google indexing?',
          'Are WhatsApp notifications, CRM webhooks, and Schema.org markup part of the base quote?',
        ],
      },
    ],
    practicalChecklist: [
      'List all user roles (public visitors, dealers, internal admins) before requesting quotes.',
      'Separate one-time engineering build cost from recurring hosting/domain charges.',
      'Verify Core Web Vitals and mobile usability on real 4G connections before sign-off.',
    ],
    relatedServiceSlugs: [
      'website-development-services',
      'corporate-website-development',
      'ecommerce-website-development',
      'website-speed-optimization',
    ],
    relatedArticleSlugs: [
      'custom-software-vs-ready-made-software',
      'seo-vs-geo-vs-aeo-difference-explained',
    ],
    faqs: [
      {
        question: 'Why does custom React/TypeScript SSR cost more than a drag-and-drop template?',
        answer:
          'Custom SSR eliminates bloated plugins, delivers significantly faster page loads, strengthens security, and gives complete control over Schema markup and custom portals.',
      },
      {
        question: 'Can we start with a core corporate site and add a dealer portal later?',
        answer:
          'Yes. Clean modular architecture allows launching your core SEO-ready site first and phasing in dealer logins or ERP integrations later.',
      },
    ],
  },
  {
    slug: 'erp-software-for-steel-trading-and-manufacturing',
    title: 'ERP Software for Steel Trading & Rolling Mills: What Matters Most',
    h1: 'ERP Software for Steel Trading and Manufacturing: Essential Modules',
    excerpt:
      'Why dual MT/piece tracking, rolling yield reconciliation, weighbridge integration, and dealer credit locks are critical for steel businesses.',
    category: 'Industrial ERP',
    authorName: 'Klyia Industrial Systems Group',
    authorRole: 'ERP Architecture',
    publishedAt: '2026-09-25',
    updatedAt: '2026-11-18',
    readTime: '7 min read',
    heroImage: BANNER_IMAGES.steelIron,
    heroImageAlt: 'Industrial steel rolling plant and inventory management workflow',
    canonicalPath: '/blog/erp-software-for-steel-trading-and-manufacturing/',
    seoTitle: 'Steel Trading & Manufacturing ERP Guide | Klyia Technology',
    metaDescription:
      'Explore essential modules in Steel ERP software: dual MT/piece units, rolling yield, scrap control, weighbridge gate-passes, and dealer credit locks.',
    indexable: true,
    sections: [
      {
        heading: 'Where Generic Accounting Tools Break in Steel Yards',
        paragraphs: [
          'In steel trading and rolling mills across Bhilai, Raipur, and India, stock is purchased by weight (Metric Tonnes), stored by section and bundle, and sold either by actual weighbridge weight or theoretical section weight per piece.',
          'Standard accounting software treats inventory as a single unit, creating constant mismatches between book stock, physical yard bundles, and scrap recovery.',
        ],
      },
      {
        heading: 'Core Modules Every Steel ERP Needs',
        paragraphs: [
          'An effective Steel ERP connects plant floor, weighbridge gate, godown, and accounts in one live ledger.',
        ],
        bullets: [
          'Dual-Unit Inventory: Simultaneous MT/kg weight and bundle/piece count per heat or grade.',
          'Rolling Yield & Scrap Control: Track billet inward vs finished TMT/structural output and end-cuts.',
          'Weighbridge Gate Integration: Capture gross, tare, and net truck weight directly without manual tampering.',
          'Credit Limit Enforcement: Automatic dispatch blocks when dealer receivables exceed approved limits.',
        ],
      },
    ],
    practicalChecklist: [
      'Audit whether your team tracks theoretical vs actual weight variance per dispatch.',
      'Ensure weighbridge slips link directly to GST invoices and e-Way bill exports.',
      'Implement automated WhatsApp dispatch challans for dealer transparency.',
    ],
    relatedServiceSlugs: [
      'erp-software-development',
      'manufacturing-erp',
      'wholesale-distribution-erp',
      'steel-iron-industry',
    ],
    relatedArticleSlugs: [
      'custom-software-vs-ready-made-software',
      'how-whatsapp-business-automation-helps-increase-lead-response',
    ],
    faqs: [
      {
        question: 'Can Steel ERP handle both trading stockyards and rolling manufacturing?',
        answer:
          'Yes. Modular deployment lets traders use dual-unit stock, weighbridge, and credit modules while rolling mills add billet-to-section yield tracking.',
      },
    ],
  },
  {
    slug: 'seo-vs-geo-vs-aeo-difference-explained',
    title: 'SEO vs GEO vs AEO Explained for Indian Businesses',
    h1: 'SEO vs GEO vs AEO: How Search & AI Discovery Work Together',
    excerpt:
      'Understand the practical differences between Search Engine Optimization, Generative Engine Optimization, and Answer Engine Optimization.',
    category: 'SEO, GEO & AEO',
    authorName: 'Klyia Growth Engineering',
    authorRole: 'Search & AI Visibility',
    publishedAt: '2026-10-03',
    updatedAt: '2026-11-18',
    readTime: '6 min read',
    heroImage: BANNER_IMAGES.seoGeoAnalytics,
    heroImageAlt: 'Search analytics, entity optimization, and AI visibility metrics',
    canonicalPath: '/blog/seo-vs-geo-vs-aeo-difference-explained/',
    seoTitle: 'SEO vs GEO vs AEO Difference Explained | Klyia Technology',
    metaDescription:
      'Clear comparison of SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) for B2B and local businesses in India.',
    indexable: true,
    sections: [
      {
        heading: 'How Buyers Discover Businesses Today',
        paragraphs: [
          'Buyers no longer rely solely on ten blue links on Google. Procurement managers and consumers now read Google AI Overviews, ask ChatGPT or Gemini for vendor recommendations, and scan direct featured answers.',
          'Winning organic visibility requires aligning SEO, GEO, and AEO on a single clean technical foundation.',
        ],
        table: {
          headers: ['Discipline', 'Primary Target', 'Core Engineering Tactics'],
          rows: [
            ['SEO (Search Engine Optimization)', 'Google & Bing organic rankings + Local Maps', 'Clean URLs, SSR HTML, Core Web Vitals, internal linking, GBP'],
            ['GEO (Generative Engine Optimization)', 'AI citations in Gemini, ChatGPT, Perplexity', 'Clear brand entity facts, consistent NAP, verifiable specialization'],
            ['AEO (Answer Engine Optimization)', 'Featured snippets, voice answers & zero-click Q&A', 'Direct factual answers, comparison tables, Schema.org FAQPage'],
          ],
        },
      },
      {
        heading: 'Why Entity Clarity Beats Keyword Stuffing',
        paragraphs: [
          'Modern search and generative models reward verifiable clarity—stating exact services, authentic physical addresses, and real industry capabilities rather than repeating stuffed city keywords.',
        ],
      },
    ],
    practicalChecklist: [
      'Serve full semantic HTML via SSR so crawlers and AI bots read content immediately.',
      'Embed Organization, LocalBusiness, Service, and FAQPage JSON-LD schemas.',
      'Publish genuine comparison tables and concise Q&A blocks on key service pages.',
    ],
    relatedServiceSlugs: [
      'search-engine-optimization',
      'geo-generative-engine-optimization',
      'aeo-answer-engine-optimization',
      'local-seo-services',
    ],
    relatedArticleSlugs: [
      'google-business-profile-optimization-for-local-indian-businesses',
      'website-development-cost-in-india-what-affects-pricing',
    ],
    faqs: [
      {
        question: 'Do we need separate websites for SEO, GEO, and AEO?',
        answer:
          'No. One well-structured, server-rendered corporate website with clean Schema markup and clear factual content powers SEO, GEO, and AEO simultaneously.',
      },
    ],
  },
  {
    slug: 'solar-epc-erp-and-crm-software-guide',
    title: 'Solar EPC ERP & CRM Guide: From Site Survey to 5-Year AMC',
    h1: 'Solar EPC ERP & CRM Software Guide for Growing Solar Companies',
    excerpt:
      'How residential and C&I Solar EPC teams eliminate lead leakage, track BOM & inverter serials, and manage DISCOM & subsidy stages.',
    category: 'CleanTech ERP',
    authorName: 'Klyia Industrial Systems Group',
    authorRole: 'CleanTech Software',
    publishedAt: '2026-10-14',
    updatedAt: '2026-11-18',
    readTime: '7 min read',
    heroImage: BANNER_IMAGES.solarEnergy,
    heroImageAlt: 'Solar EPC rooftop installation and project workflow management',
    canonicalPath: '/blog/solar-epc-erp-and-crm-software-guide/',
    seoTitle: 'Solar EPC ERP & CRM Software Guide | Klyia Technology',
    metaDescription:
      'Complete guide to Solar ERP & CRM software covering site surveys, BOM, PM Surya Ghar subsidy tracking, DISCOM net metering, and AMC alerts.',
    indexable: true,
    sections: [
      {
        heading: 'Why Solar EPC Companies Outgrow Spreadsheets Quickly',
        paragraphs: [
          'As monthly residential rooftop and commercial C&I installations scale past 15–20 projects, tracking site survey photos, kW proposals, inverter serial numbers, DISCOM net-metering files, and subsidy disbursements in Excel breaks down.',
        ],
        bullets: [
          'Lead-to-Survey Handoff: Capture roof dimensions, sanctioned load, and monthly bill instantly.',
          'BOM & Serial Allocation: Link specific panel and inverter serial numbers to each customer site.',
          'DISCOM & Subsidy Milestones: Highlight stalled files before working capital gets locked.',
          '5-Year AMC Automation: Schedule preventive cleaning and inspection visits with WhatsApp reminders.',
        ],
      },
    ],
    practicalChecklist: [
      'Standardize site-survey checklists across all field engineers.',
      'Tie every dispatched inverter/panel serial number to the client warranty record.',
      'Automate customer milestone updates via WhatsApp Business API.',
    ],
    relatedServiceSlugs: [
      'solar-erp-software',
      'crm-software-development',
      'whatsapp-business-automation',
      'solar-renewable-energy',
    ],
    relatedArticleSlugs: [
      'how-whatsapp-business-automation-helps-increase-lead-response',
      'custom-software-vs-ready-made-software',
    ],
    faqs: [
      {
        question: 'Can a Solar ERP track PM Surya Ghar and C&I projects in one dashboard?',
        answer:
          'Yes. Separate workflow templates track subsidy/net-metering stages for residential jobs alongside multi-stage engineering milestones for C&I plants.',
      },
    ],
  },
  {
    slug: 'custom-software-vs-ready-made-software',
    title: 'Custom Software vs Ready-Made SaaS: How Indian SMEs Should Decide',
    h1: 'Custom Software vs Ready-Made Software: Making the Right Investment',
    excerpt:
      'A practical decision framework comparing off-the-shelf SaaS subscriptions against custom-engineered business software.',
    category: 'Software Strategy',
    authorName: 'Klyia Engineering Team',
    authorRole: 'Systems Consulting',
    publishedAt: '2026-10-22',
    updatedAt: '2026-11-18',
    readTime: '5 min read',
    heroImage: BANNER_IMAGES.customSoftware,
    heroImageAlt: 'Custom software architecture versus off-the-shelf tools',
    canonicalPath: '/blog/custom-software-vs-ready-made-software/',
    seoTitle: 'Custom Software vs Ready-Made Software | Klyia Technology',
    metaDescription:
      'Compare custom software development vs ready-made SaaS tools for Indian SMEs—weighing per-user fees, workflow fit, and long-term ROI.',
    indexable: true,
    sections: [
      {
        heading: 'When Ready-Made Software Works—and When It Costs More',
        paragraphs: [
          'Ready-made SaaS tools are great when your process is completely standard—such as basic email, general accounting, or simple document storage.',
          'However, when you have 30+ staff paying recurring per-seat fees and still exporting data into Excel every evening because the tool cannot handle your pricing, dual units, or approval rules, custom software becomes dramatically more economical.',
        ],
        table: {
          headers: ['Factor', 'Ready-Made SaaS', 'Custom Software'],
          rows: [
            ['Workflow Fit', 'Force-fits team into generic screens', 'Engineered around your exact operations'],
            ['Pricing Model', 'Per-user monthly/annual fees forever', 'One-time build + predictable support'],
            ['Integrations', 'Limited to vendor-supported plugins', 'Direct weighbridge, WhatsApp & ERP APIs'],
            ['Data Control', 'Vendor-controlled schemas & lock-in', 'Full database and business-logic ownership'],
          ],
        },
      },
    ],
    practicalChecklist: [
      'Calculate 3-year per-user SaaS subscription cost before dismissing custom builds.',
      'Identify manual Excel workarounds your staff currently perform outside existing software.',
      'Start with a focused Phase-1 MVP covering the highest-friction workflow.',
    ],
    relatedServiceSlugs: [
      'custom-software-development',
      'erp-software-development',
      'business-management-software',
    ],
    relatedArticleSlugs: [
      'website-development-cost-in-india-what-affects-pricing',
      'erp-software-for-steel-trading-and-manufacturing',
    ],
    faqs: [
      {
        question: 'Does custom software have to be built all at once?',
        answer:
          'No. Phased modular delivery lets you deploy core billing, inventory, or CRM first and expand into analytics or portals over time.',
      },
    ],
  },
  {
    slug: 'how-whatsapp-business-automation-helps-increase-lead-response',
    title: 'How WhatsApp Business Automation Increases Lead Response & Trust',
    h1: 'How WhatsApp Business Automation Improves Lead Response & Operations',
    excerpt:
      'Practical ways Indian businesses connect website forms, ERPs, and official WhatsApp APIs for instant replies and zero missed follow-ups.',
    category: 'AI & Automation',
    authorName: 'Klyia Automation Lab',
    authorRole: 'Workflow & AI Engineering',
    publishedAt: '2026-11-01',
    updatedAt: '2026-11-18',
    readTime: '5 min read',
    heroImage: BANNER_IMAGES.aiAutomation,
    heroImageAlt: 'Automated WhatsApp Business API and enterprise CRM workflow',
    canonicalPath: '/blog/how-whatsapp-business-automation-helps-increase-lead-response/',
    seoTitle: 'WhatsApp Automation for Faster Leads | Klyia Technology',
    metaDescription:
      'Learn how official WhatsApp Business API automation connects website inquiries, CRM follow-ups, and ERP dispatch alerts for faster conversions.',
    indexable: true,
    sections: [
      {
        heading: 'Why Speed of First Response Wins B2B & Local Inquiries',
        paragraphs: [
          'When a buyer submits a quote form or clicks an ad, waiting 6 hours for a manual callback often means they have already spoken to two competitors.',
          'Integrating official WhatsApp Business API triggers immediate, polite acknowledgment with a brochure or scheduling link while notifying your sales desk in real time.',
        ],
        bullets: [
          'Instant Inquiry Confirmation: Send reference ID and catalog PDF within seconds of form submission.',
          'ERP Dispatch Alerts: Automatically share truck number, challan, and GST invoice PDF on gate-out.',
          'AMC & Payment Reminders: Polite scheduled reminders that reduce overdue receivables.',
        ],
      },
    ],
    practicalChecklist: [
      'Always use official Meta WhatsApp Business API rather than unofficial browser scrapers.',
      'Route incoming replies straight into your CRM lead record so context is never lost.',
      'Keep message templates concise, factual, and opt-in compliant.',
    ],
    relatedServiceSlugs: [
      'whatsapp-business-automation',
      'crm-software-development',
      'workflow-automation',
      'ai-chatbot-development',
    ],
    relatedArticleSlugs: [
      'solar-epc-erp-and-crm-software-guide',
      'erp-software-for-steel-trading-and-manufacturing',
    ],
    faqs: [
      {
        question: 'Is official WhatsApp Business API safe for our main company number?',
        answer:
          'Yes. Official API templates follow Meta opt-in policies, avoiding the sudden number bans caused by unauthorized bulk-sender tools.',
      },
    ],
  },
  {
    slug: 'google-business-profile-optimization-for-local-indian-businesses',
    title: 'Google Business Profile Optimization for Indian Businesses',
    h1: 'Google Business Profile (GBP) Optimization Checklist for Local Growth',
    excerpt:
      'Compliant Local SEO practices for Indian offices and service providers to rank cleanly in Google Maps without risking suspension.',
    category: 'Local SEO',
    authorName: 'Klyia Growth Engineering',
    authorRole: 'Local Search Strategy',
    publishedAt: '2026-11-06',
    updatedAt: '2026-11-18',
    readTime: '5 min read',
    heroImage: BANNER_IMAGES.bhilaiChhattisgarh,
    heroImageAlt: 'Local business visibility across Bhilai, Durg, and Raipur corridors',
    canonicalPath: '/blog/google-business-profile-optimization-for-local-indian-businesses/',
    seoTitle: 'Google Business Profile SEO Guide | Klyia Technology',
    metaDescription:
      'Practical, policy-compliant Google Business Profile optimization steps for Indian companies to strengthen Maps and Local SEO visibility.',
    indexable: true,
    sections: [
      {
        heading: 'Build Long-Term Maps Authority Without Suspension Risk',
        paragraphs: [
          'Creating fake virtual pins or stuffing city names into your business title violates Google Business Profile rules and triggers costly suspensions.',
          'Instead, align your verified physical address, authentic service areas, accurate categories, and structured website landing pages.',
        ],
        bullets: [
          'Exact NAP Consistency: Match business name, address, and +91 phone identically across GBP and website schema.',
          'Authentic Service Areas: List real cities served (e.g., Bhilai, Durg, Raipur, Chhattisgarh) inside GBP service areas.',
          'Category & Service Depth: Add clear descriptions for each core service linked to dedicated website URLs.',
        ],
      },
    ],
    practicalChecklist: [
      'Keep your GBP business name strictly equal to your real-world signage.',
      'Link GBP directly to your canonical HTTPS homepage or relevant local hub.',
      'Collect authentic customer reviews describing the specific service delivered.',
    ],
    relatedServiceSlugs: [
      'google-business-profile-optimization',
      'local-seo-services',
      'search-engine-optimization',
    ],
    relatedArticleSlugs: [
      'seo-vs-geo-vs-aeo-difference-explained',
      'website-development-cost-in-india-what-affects-pricing',
    ],
    faqs: [
      {
        question: 'Should we create fake branch pins in nearby cities to rank there?',
        answer:
          'No. Google suspends unverified virtual pins. Use genuine Service Area settings on your verified office profile combined with dedicated city pages on your website.',
      },
    ],
  },
  {
    slug: 'fruit-vegetable-mandi-billing-and-crate-tracking-software',
    title: 'Fruit & Vegetable Mandi Billing and Plastic Crate Tracking Guide',
    h1: 'Eliminating Crate Losses & Patti Errors with Mandi Software',
    excerpt:
      'How commission agents (arhatiyas) speed up morning auctions, issue accurate farmer patti slips, and recover missing plastic crates.',
    category: 'Agro & Mandi Software',
    authorName: 'Klyia Industrial Systems Group',
    authorRole: 'Trade & Agro Systems',
    publishedAt: '2026-11-11',
    updatedAt: '2026-11-18',
    readTime: '5 min read',
    heroImage: BANNER_IMAGES.agricultureMandi,
    heroImageAlt: 'Wholesale fruit and vegetable mandi billing and crate tracking',
    canonicalPath: '/blog/fruit-vegetable-mandi-billing-and-crate-tracking-software/',
    seoTitle: 'Mandi Billing & Crate Software Guide | Klyia Technology',
    metaDescription:
      'Learn how specialized mandi software streamlines morning lot auctions, farmer patti calculations, and buyer plastic crate ledgers.',
    indexable: true,
    sections: [
      {
        heading: 'Why Crate Tracking Matters as Much as Cash Ledgers',
        paragraphs: [
          'In busy vegetable and fruit mandis across Chhattisgarh and India, hundreds of plastic crates circulate daily between farmers, commission agents, and retail buyers.',
          'Without crate counts printed directly on every buyer bill and settled in a live crate ledger, silent losses erode seasonal margins.',
        ],
        bullets: [
          'Keyboard-First Auction Grid: Enter vehicle inward, split buyers, weights, and rates in seconds.',
          'Automated Farmer Patti: Deduct commission, hammali, mandi tax, and freight cleanly.',
          'Live Crate & Bardana Balance: Print previous + today’s crate balance on every buyer receipt.',
        ],
      },
    ],
    practicalChecklist: [
      'Print net crate balances automatically on thermal buyer bills.',
      'Separate cash vs credit buyer settlements at morning auction close.',
      'Back up daily mandi ledgers automatically to cloud storage.',
    ],
    relatedServiceSlugs: [
      'mandi-fruit-trading-software',
      'billing-accounting-software',
      'fruit-vegetable-mandis',
    ],
    relatedArticleSlugs: [
      'custom-software-vs-ready-made-software',
      'how-whatsapp-business-automation-helps-increase-lead-response',
    ],
    faqs: [
      {
        question: 'Can operators enter auction entries fast without using a mouse?',
        answer:
          'Yes. Our mandi billing screens are built around rapid keyboard shortcuts for busy morning auction hours.',
      },
    ],
  },
];

export function getBlogArticleBySlug(slug: string): BlogArticleData | undefined {
  return ALL_BLOG_ARTICLES.find((item) => item.slug === slug);
}
