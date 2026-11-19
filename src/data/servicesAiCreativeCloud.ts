import {hydrateServiceSeed, type CompactServiceSeed} from './servicesWeb.ts';
import type {ServicePageData} from './types.ts';

const AI_CREATIVE_CLOUD_SEEDS: CompactServiceSeed[] = [
  // D. AI & AUTOMATION (8)
  {
    slug: 'ai-chatbot-development',
    name: 'AI Chatbot Development',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    seoTitle: 'AI Chatbot Development | Controlled Knowledge-Based Chatbots | Klyia Technology',
    metaDescription:
      'Custom AI chatbot development grounded strictly in your verified company catalog, pricing policies, and enquiry capture workflows.',
    heroSubtitle:
      'Knowledge-grounded AI chatbots engineered to answer genuine customer questions accurately and route serious leads to your sales team.',
    introFocus:
      'Generic unguarded chatbots frustrate visitors or invent false promises. Klyia Technology engineers controlled AI chatbots backed by approved knowledge bases, deterministic fallbacks, and structured lead capture.',
    whyNeeded: [
      'Visitors expect instant answers outside office hours rather than waiting days for emails.',
      'Sales teams repeat basic service, product spec, and location answers daily.',
      'Ungrounded AI models hallucinate pricing or policies without server guardrails.',
    ],
    challenges: [
      'Preventing chatbots from inventing discounts, timelines, or guarantees.',
      'Connecting chat transcripts directly to CRM and WhatsApp follow-ups.',
      'Keeping chat widgets accessible without slowing page load.',
    ],
    solutions: [
      'Server-side LLM integration paired with curated company knowledge files.',
      'Deterministic fallback replies whenever topics sit outside approved boundaries.',
      'Built-in lead capture forms saving verified requirements directly into SQL.',
    ],
    features: [
      {title: 'Approved Knowledge Grounding', detail: 'Answers strictly aligned with verified service pages and brand facts.'},
      {title: 'Built-In Lead Routing', detail: 'Captures name, phone, city, and project scope smoothly inside conversation.'},
      {title: 'WhatsApp Handoff', detail: 'Transfers complex commercial enquiries directly to human specialists.'},
      {title: 'Server-Side API Security', detail: 'Zero exposed API keys in frontend bundles.'},
    ],
    benefits: [
      'Engages visitors around the clock without staffing overnight desks.',
      'Protects brand credibility through strict truthfulness guardrails.',
      'Converts anonymous browsing into qualified sales conversations.',
    ],
    technologies: ['Gemini Server API', 'TypeScript Express Proxy', 'SQL Lead Persistence', 'Accessible Chat UI'],
    industries: [
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Handling course, fee-enquiry, and admissions FAQs.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Guiding department hours and appointment booking requests.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Capturing flat configuration enquiries and site-visit slots.'},
    ],
    relatedServiceSlugs: ['website-ai-assistant', 'business-ai-integration', 'whatsapp-business-automation', 'crm-software-development'],
    faqs: [
      {question: 'How do you stop an AI chatbot from inventing prices or fake answers?', answer: 'We supply strict system knowledge rules, run prompts server-side, and route unknown topics to safe human-consultation fallbacks.'},
      {question: 'Can the chatbot save enquiries into our database?', answer: 'Yes, saving full contact details into SQL or your CRM immediately.'},
      {question: 'Does it work cleanly on mobile devices?', answer: 'Yes, opening inside a clean mobile sheet without blocking website text.'},
      {question: 'Can the bot hand over visitors to WhatsApp?', answer: 'Yes, with pre-filled enquiry context.'},
      {question: 'Can the knowledge base be updated as we add services?', answer: 'Yes, cleanly maintained modularly.'},
      {question: 'Is an AI chatbot suitable for B2B manufacturing?', answer: 'Yes—helping engineers locate product categories and submit RFQs faster.'},
      {question: 'Are API keys hidden safely?', answer: 'Yes, strictly executed through Express backend endpoints.'},
      {question: 'How do we launch one on our website?', answer: 'Discuss your FAQ knowledge scope via Get a Quote.'},
    ],
  },
  {
    slug: 'website-ai-assistant',
    name: 'Website AI Assistant',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    seoTitle: 'Website AI Assistant Development | Branded Virtual Guides | Klyia Technology',
    metaDescription:
      'Branded interactive website AI assistants engineered to guide visitors across services, industries, and quotation workflows.',
    heroSubtitle:
      'Give your website a calm, knowledgeable virtual assistant tailored visually to your brand and trained on your exact catalogue.',
    introFocus:
      'Complex corporate sites offer dozens of services and industry solutions. A branded Website AI Assistant helps busy buyers navigate directly to relevant pages, compare options, and submit project enquiries effortlessly.',
    whyNeeded: [
      'Busy B2B buyers often prefer asking one clear question instead of scanning multiple menus.',
      'Visual brand distinction matters—default blue widgets clash with corporate identities.',
      'First-time visitors benefit from guided topic prompts matching their industry.',
    ],
    challenges: [
      'Avoiding intrusive popups that cover headlines or annoy mobile readers.',
      'Delivering instant replies even when external AI providers rate-limit.',
      'Maintaining fast initial page speed alongside assistant components.',
    ],
    solutions: [
      'Custom visual avatar or compact floating trigger aligned to brand colours.',
      'Topic quick-chips backed by instant curated knowledge plus live AI mode.',
      'Respect for reduced-motion preferences and keyboard accessibility.',
    ],
    features: [
      {title: 'Branded Visual Presence', detail: 'Desktop assistant + clean mobile launcher matching corporate design.'},
      {title: 'Guided Discovery Prompts', detail: 'Instant topic buttons tailored to key services and sectors.'},
      {title: 'Page Deep-Linking', detail: 'Suggests direct navigation links to matching service or industry pages.'},
      {title: 'Resilient Fallback Mode', detail: 'Always stays functional with verified local knowledge if offline.'},
    ],
    benefits: [
      'Shortens visitor discovery time across rich service catalogs.',
      'Creates a memorable modern first impression for corporate buyers.',
      'Collects clearer lead briefs before sales calls begin.',
    ],
    technologies: ['React Portal UI', 'Motion Accessibility', 'Gemini Node SDK', 'Rule-Based Knowledge Engine'],
    industries: [
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Helping homeowners and industries explore EPC capabilities.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Directing clients to the right advisory service.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Helping procurement leads request technical quotes.'},
    ],
    relatedServiceSlugs: ['ai-chatbot-development', 'business-ai-integration', 'custom-web-application-development', 'customer-enquiry-automation'],
    faqs: [
      {question: 'What is the difference between a Website AI Assistant and a generic popup chat?', answer: 'A Website AI Assistant combines branded visual design, curated navigation guidance, and controlled factual answers rather than generic support tickets.'},
      {question: 'Does it block website content on mobile phones?', answer: 'No—mobile uses a compact launcher button keeping screens completely readable.'},
      {question: 'Can it suggest specific website pages?', answer: 'Yes, surfacing direct clickable buttons to matching pages.'},
      {question: 'What happens if the LLM service is unreachable?', answer: 'Built-in verified fallback answers keep the assistant reliable.'},
      {question: 'Can it respect reduced motion accessibility?', answer: 'Yes, animations soften automatically via prefers-reduced-motion.'},
      {question: 'Can we start with a standard website and add an AI assistant later?', answer: 'Yes—we engineer clean modular architectures so an interactive website AI assistant can be integrated cleanly whenever needed.'},
      {question: 'Can it capture leads into email or SQLite?', answer: 'Yes.'},
      {question: 'How do we scope a Website AI Assistant?', answer: 'Request a consultation via Get a Quote.'},
    ],
  },
  {
    slug: 'business-ai-integration',
    name: 'Business AI Integration',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    seoTitle: 'Business AI Integration | Practical AI Workflows for Indian Companies | Klyia Technology',
    metaDescription:
      'Integrate practical AI document parsing, lead classification, enquiry summarization, and internal knowledge tools securely into business systems.',
    heroSubtitle:
      'Embed practical AI into your CRM, ERP, and document workflows—focused on measurable time savings rather than AI hype.',
    introFocus:
      'Beyond public chatbots, AI accelerates real back-office work: summarizing incoming RFQs, classifying support tickets, extracting structured fields from purchase enquiries, and drafting clean customer communications with human approval.',
    whyNeeded: [
      'Staff spend hours sorting unstructured email and WhatsApp enquiries manually.',
      'Public copy-paste AI tools risk exposing private company data carelessly.',
      'Teams want AI embedded inside existing screens rather than switching extra apps.',
    ],
    challenges: [
      'Preventing unverified AI outputs from posting directly into accounting ledgers.',
      'Controlling monthly API token budgets cleanly.',
      'Designing fast fallback paths whenever AI models fail.',
    ],
    solutions: [
      'Human-in-the-loop review steps for every financial or dispatch action.',
      'Structured JSON output schemas validating AI extraction cleanly.',
      'Strict server-side API architecture with usage limits and clear logs.',
    ],
    features: [
      {title: 'RFQ & Lead Summarization', detail: 'Turn lengthy enquiry messages into neat requirement bullets for managers.'},
      {title: 'Structured Data Extraction', detail: 'Parse unstructured enquiry lists into clean JSON item drafts.'},
      {title: 'Internal Knowledge Search', detail: 'Let staff query company SOPs or product catalogs rapidly.'},
      {title: 'Approval Safeguards', detail: 'Operators review every draft before final dispatch or ERP save.'},
    ],
    benefits: [
      'Speeds repetitive admin tasks without risking ledger corruption.',
      'Improves response quality and speed on incoming enquiries.',
      'Keeps API credentials and prompt rules strictly on company servers.',
    ],
    technologies: ['Gemini Structured Outputs', 'TypeScript Express APIs', 'SQL Audit Tables', 'Webhook Orchestration'],
    industries: [
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Sorting multi-item technical RFQs efficiently.'},
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Drafting itemized quotes faster from WhatsApp requests.'},
      {label: 'Logistics & Transportation', slug: 'logistics-transportation', note: 'Summarizing shipment instructions and exception logs.'},
    ],
    relatedServiceSlugs: ['ai-powered-business-solutions', 'workflow-automation', 'ai-chatbot-development', 'database-api-integration'],
    faqs: [
      {question: 'Can AI safely touch our billing or stock balances directly?', answer: 'We design strict human-review workflows so AI drafts or summarizes—never mutating accounting balances unverified.'},
      {question: 'Which AI models do you integrate?', answer: 'We build cleanly using modern Gemini server SDK architectures.'},
      {question: 'Can AI organize incoming customer enquiries from our website?', answer: 'Yes, tagging service type, urgency, and city automatically.'},
      {question: 'How are API costs kept predictable?', answer: 'With concise prompt design, strict rate limits, and deterministic pre-filtering.'},
      {question: 'Do staff need technical prompt-engineering skills?', answer: 'No—capabilities sit behind ordinary buttons inside your software.'},
      {question: 'Can this connect with an existing CRM or ERP?', answer: 'Yes, via REST API hooks.'},
      {question: 'Are company credentials safe?', answer: 'Yes, kept server-side via environment variables.'},
      {question: 'How do we explore practical AI for our team?', answer: 'Book a workflow assessment via Get a Quote.'},
    ],
  },
  {
    slug: 'whatsapp-business-automation',
    name: 'WhatsApp Business Automation',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    seoTitle: 'WhatsApp Business Automation | Enquiry, Dispatch & ERP Alerts | Klyia Technology',
    metaDescription:
      'Automate WhatsApp customer enquiry routing, order confirmations, dispatch alerts, invoice notifications, and AMC reminders for Indian businesses.',
    heroSubtitle:
      'Connect official WhatsApp Business workflows directly with your website, CRM, and ERP for timely customer and dealer updates.',
    introFocus:
      'In India, business runs on WhatsApp—from steel dealer rate enquiries to solar site survey confirmations and clinic bookings. Manual copy-pasting causes delays and missed buyers; structured automation delivers consistent, traceable communication.',
    whyNeeded: [
      'Manual messaging from personal phones mixes business enquiries with personal chats.',
      'Dealers constantly call to check dispatch truck numbers and invoice PDFs.',
      'Missed renewal and AMC follow-ups leave recurring service revenue untouched.',
    ],
    challenges: [
      'Using unofficial bulk tools that risk permanent number bans.',
      'Triggering updates manually instead of directly from ERP dispatch screens.',
      'Losing track of which rep replied to a buyer on WhatsApp.',
    ],
    solutions: [
      'Official WhatsApp Business API integration architecture with approved templates.',
      'Automatic triggers when ERP invoices, dispatch challans, or orders update.',
      'Direct website-to-WhatsApp routing preserving page context and lead details.',
    ],
    features: [
      {title: 'Instant Lead Acknowledgements', detail: 'Confirm website enquiries professionally within seconds.'},
      {title: 'Dispatch & Invoice Alerts', detail: 'Notify buyers with order confirmation, dispatch status, or PDF summaries.'},
      {title: 'AMC & Payment Reminders', detail: 'Scheduled service checkups and polite overdue alerts.'},
      {title: 'CRM / ERP Sync', detail: 'Centralize enquiry records safely inside business databases.'},
    ],
    benefits: [
      'Cuts inbound "where is my order?" status calls.',
      'Improves buyer responsiveness professionally.',
      'Keeps customer communication organized under company numbers.',
    ],
    technologies: ['WhatsApp Business API Architecture', 'Node.js Webhooks', 'CRM/ERP Event Hooks', 'Approved Templates'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Vehicle dispatch alerts and dealer invoice updates.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Site survey confirmations and AMC service reminders.'},
      {label: 'Fruit & Vegetable Mandis', slug: 'fruit-vegetable-mandis', note: 'Daily farmer patti and buyer balance summaries.'},
    ],
    relatedServiceSlugs: ['customer-enquiry-automation', 'workflow-automation', 'crm-software-development', 'erp-software-development'],
    faqs: [
      {question: 'Do you support official WhatsApp Business API workflows rather than risky spam tools?', answer: 'Yes—we architect compliant template-driven workflows respecting Meta Business policies.'},
      {question: 'Can WhatsApp messages trigger automatically when an ERP invoice is saved?', answer: 'Yes, via backend event webhooks.'},
      {question: 'Can website buttons send visitors straight into a contextual WhatsApp message?', answer: 'Yes, pre-filled with the exact service or city page they viewed.'},
      {question: 'Can we share PDF invoices or delivery challans automatically?', answer: 'Yes, via supported document templates when configured with your ERP.'},
      {question: 'Are Meta API fees included in software fees?', answer: 'Messaging conversation charges follow official Meta provider tariffs transparently; development is scoped cleanly.'},
      {question: 'Does this replace our staff on WhatsApp?', answer: 'No—it handles routine notifications and intake so staff focus on high-value deals.'},
      {question: 'Can multiple team members handle enquiries cleanly?', answer: 'Yes, via multi-agent routing.'},
      {question: 'How do we integrate WhatsApp automation?', answer: 'Share your workflow triggers on Get a Quote.'},
    ],
  },
  {
    slug: 'customer-enquiry-automation',
    name: 'Customer Enquiry Automation',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    seoTitle: 'Customer Enquiry Automation | Website, CRM & WhatsApp Routing | Klyia Technology',
    metaDescription:
      'Automate lead capture, assignment, instant visitor confirmations, and follow-up tracking across website forms, WhatsApp, and CRM.',
    heroSubtitle:
      'Capture, validate, categorize, and route every incoming enquiry instantly so no hot B2B or local buyer goes cold.',
    introFocus:
      'Marketing investment fails when incoming enquiries sit unacknowledged for hours. Customer Enquiry Automation connects every landing page form, chat interaction, and WhatsApp prompt straight into structured tracking and instant team alerts.',
    whyNeeded: [
      'Shared email inboxes hide new leads inside newsletters and spam.',
      'Delayed responses drive impatient buyers straight to competitors.',
      'Directors lack clarity on which channels generate genuine commercial leads.',
    ],
    challenges: [
      'Spam bot submissions flooding contact mailboxes.',
      'Missing city or product context forcing slow back-and-forth calls.',
      'Zero automated follow-up tracking across busy sales staff.',
    ],
    solutions: [
      'Honeypot, validation, and rate-limited server intake APIs.',
      'Instant confirmation receipt + team alert routing by service/city.',
      'Direct persistence into SQL / CRM queues with status timestamps.',
    ],
    features: [
      {title: 'Zero Lost Enquiries', detail: 'Database-backed intake ensuring every submission receives a reference ID.'},
      {title: 'Spam & Bot Filtering', detail: 'Rate limits and honeypot guards keeping queues clean.'},
      {title: 'Department Routing', detail: 'Route ERP, web, solar, or steel leads cleanly to the right specialist.'},
      {title: 'Instant Visitor Acknowledgment', detail: 'Clear next steps and optional WhatsApp continuation.'},
    ],
    benefits: [
      'Boosts lead-to-call speed dramatically.',
      'Eliminates manual spreadsheet copying from email inboxes.',
      'Gives clear visibility into enquiry volume per campaign.',
    ],
    technologies: ['Express Validated APIs', 'SQL Lead Store', 'Honeypot & Rate Guards', 'WhatsApp & Email Triggers'],
    industries: [
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Handling admission season enquiry spikes cleanly.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Routing department appointment requests fast.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Assigning buyer enquiries per project automatically.'},
    ],
    relatedServiceSlugs: ['crm-software-development', 'whatsapp-business-automation', 'landing-page-design', 'ai-chatbot-development'],
    faqs: [
      {question: 'How does customer enquiry automation improve conversion rates?', answer: 'Rapid acknowledgement and instant internal routing ensure prospects speak with your team while their buying intent is highest.'},
      {question: 'Are enquiries saved safely if an email server hiccups?', answer: 'Yes, saved reliably inside SQL first.'},
      {question: 'Can enquiries assign automatically by city or service?', answer: 'Yes.'},
      {question: 'Does it protect forms from automated spam?', answer: 'Yes, via honeypot validation, rate limiting, and sanitization.'},
      {question: 'Can we export monthly enquiry reports?', answer: 'Yes.'},
      {question: 'Does it integrate with our existing website?', answer: 'Yes.'},
      {question: 'Can WhatsApp alerts notify managers immediately?', answer: 'Yes, when enabled.'},
      {question: 'How do we get started?', answer: 'Submit your current enquiry channels via Get a Quote.'},
    ],
  },
  {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    seoTitle: 'Workflow Automation Solutions | Connect Apps, Approvals & Alerts | Klyia Technology',
    metaDescription:
      'Automate multi-step approvals, report generation, order status notifications, and system syncs across departments cleanly.',
    heroSubtitle:
      'Connect approvals, notifications, document generation, and cross-system syncing so repetitive tasks run reliably in the background.',
    introFocus:
      'Departments waste countless hours chasing status updates, generating repetitive PDFs, and copying figures between tools. Workflow automation links events cleanly across steps with clear exception handling.',
    whyNeeded: [
      'Approvals stall inside informal chat threads without accountability.',
      'Daily closing summaries require manual aggregation across spreadsheets.',
      'Human handoffs between sales, stores, and billing frequently drop details.',
    ],
    challenges: [
      'Brittle scripts that fail silently without alerting supervisors.',
      'Lack of clear approval audit trails.',
      'Disjointed systems refusing to exchange clean JSON or CSV data.',
    ],
    solutions: [
      'Event-driven backend workflows connecting forms, databases, PDFs, and notifications.',
      'Multi-level approval routing with timestamped accountability.',
      'Scheduled daily/weekly digest summaries for management.',
    ],
    features: [
      {title: 'Event-Driven Triggers', detail: 'Quote approved -> create order -> alert warehouse -> notify client.'},
      {title: 'Automated PDF Generation', detail: 'Produce clean quotes, challans, or MIS summaries automatically.'},
      {title: 'Approval Escalations', detail: 'Ensure high-discount orders or purchases pass supervisor check.'},
      {title: 'Failure Logging', detail: 'Track every automated step transparently.'},
    ],
    benefits: [
      'Frees skilled staff from repetitive copy-paste work.',
      'Enforces operational SOPs consistently.',
      'Eliminates handoff delays between departments.',
    ],
    technologies: ['Node.js Event Queues', 'Scheduled Cron Jobs', 'REST Webhooks', 'SQL State Machines'],
    industries: [
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Syncing QC clearances with dispatch clearance.'},
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Automating credit checks before packing slips issue.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Advancing projects cleanly from survey to installation.'},
    ],
    relatedServiceSlugs: ['business-process-automation', 'database-api-integration', 'erp-software-development', 'whatsapp-business-automation'],
    faqs: [
      {question: 'What everyday workflows can be automated?', answer: 'Lead alerts, quote approvals, dispatch notifications, daily MIS digests, invoice triggers, and inter-app data syncing.'},
      {question: 'Is workflow automation only for huge enterprises?', answer: 'No—growing SMEs with 5–50 staff save massive time automating daily bottlenecks.'},
      {question: 'Can humans still review critical steps?', answer: 'Yes, via structured approval gates.'},
      {question: 'Do workflows require replacing every existing tool?', answer: 'Not always—API bridges often connect existing tools smoothly.'},
      {question: 'What happens if an external service times out?', answer: 'Clean error handling preserves state and logs retries.'},
      {question: 'Can scheduled reports be generated nightly?', answer: 'Yes.'},
      {question: 'Is audit history preserved?', answer: 'Yes.'},
      {question: 'How do we map our repetitive workflows?', answer: 'Book a process review via Get a Quote.'},
    ],
  },
  {
    slug: 'business-process-automation',
    name: 'Business Process Automation',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    seoTitle: 'Business Process Automation | End-to-End Operational Digitization | Klyia Technology',
    metaDescription:
      'Replace paper registers and manual Excel coordination with structured digital business process automation tailored for Indian enterprises.',
    heroSubtitle:
      'Transform fragmented paper, spreadsheet, and phone-based operations into clear, accountable end-to-end digital processes.',
    introFocus:
      'Business Process Automation (BPA) examines an entire operational chain—from customer enquiry to procurement, execution, billing, and closure—eliminating duplicate entry and blind spots across teams.',
    whyNeeded: [
      'Founder-dependent businesses struggle to scale when processes live only in people’s heads.',
      'Paper registers and chat messages fail financial or quality audits.',
      'Inconsistent workflows produce unpredictable service quality.',
    ],
    challenges: [
      'Resistance when new digital tools feel slower than old paper habits.',
      'Partial automation leaving half the work still on spreadsheets.',
      'Unaligned data formats between operations and accounts.',
    ],
    solutions: [
      'On-ground workflow mapping keeping operator screens fast and intuitive.',
      'Unified database design covering every lifecycle handoff.',
      'Phased rollout proving immediate time savings on each team.',
    ],
    features: [
      {title: 'Paper-to-Digital Conversion', detail: 'Structured registers matching real plant/office forms.'},
      {title: 'Role & Access Accountability', detail: 'Clear ownership at every stage without bottlenecks.'},
      {title: 'Automated Alerts & Summaries', detail: 'Proactive exception alerts before deadlines slip.'},
      {title: 'Real-Time Bottleneck Views', detail: 'See exactly where pending orders or approvals sit.'},
    ],
    benefits: [
      'Allows business owners to focus on growth rather than micromanaging tasks.',
      'Reduces operational errors and compliance friction.',
      'Creates repeatable scalability across branches.',
    ],
    technologies: ['Full-Stack TypeScript', 'Relational SQL', 'Role-Based Auth', 'API & WhatsApp Hooks'],
    industries: [
      {label: 'Logistics & Transportation', slug: 'logistics-transportation', note: 'Digitizing booking, trip sheet, and POD settlement processes.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Linking RFQs, POs, inward stock, and dispatch.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Connecting front-desk registration, labs, and follow-ups.'},
    ],
    relatedServiceSlugs: ['workflow-automation', 'erp-software-development', 'custom-software-development', 'business-management-software'],
    faqs: [
      {question: 'How is Business Process Automation different from buying one off-the-shelf tool?', answer: 'BPA redesigns and automates your end-to-end process across teams cleanly rather than forcing awkward manual gaps around a generic app.'},
      {question: 'Can non-technical office or plant staff adopt it easily?', answer: 'Yes—we design ultra-clean screens with simple validation and direct training.'},
      {question: 'Do we have to digitize the entire business on day one?', answer: 'No, phased delivery lowers risk and speeds adoption.'},
      {question: 'Can paper checklists become mobile web screens?', answer: 'Yes, usable seamlessly on tablets and smartphones.'},
      {question: 'Does BPA include management dashboards?', answer: 'Yes.'},
      {question: 'Can we start with Bhilai/Durg/Raipur on-site observation?', answer: 'Yes, our Bhilai team supports on-site requirement discovery.'},
      {question: 'Can existing Excel records feed the new system?', answer: 'Yes.'},
      {question: 'How do we begin process mapping?', answer: 'Reach out via Get a Quote.'},
    ],
  },
  {
    slug: 'ai-powered-business-solutions',
    name: 'AI-Powered Business Solutions',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    seoTitle: 'AI-Powered Business Solutions | Custom Intelligent Software | Klyia Technology',
    metaDescription:
      'Purpose-built software combining modern databases, automation, and safe AI capabilities for smarter enquiry handling and operations.',
    heroSubtitle:
      'Combine dependable enterprise software engineering with practical AI intelligence—built safely for commercial reliability.',
    introFocus:
      'The highest-value AI systems do not exist in isolation; they live inside reliable business software where structured data meets smart triage, drafting, search, and customer communication.',
    whyNeeded: [
      'Standalone generic AI chat apps do not know your inventory, services, or local markets.',
      'Teams need reliable software first, enhanced selectively where AI adds clear leverage.',
      'Businesses want future-ready platforms engineered without risky gimmicks.',
    ],
    challenges: [
      'Separating genuine productivity wins from flashy demos.',
      'Guaranteeing deterministic accuracy where numbers and billing matter.',
      'Securing proprietary customer data during AI calls.',
    ],
    solutions: [
      'Deterministic SQL core + controlled server-side Gemini AI assistance.',
      'Natural-language catalogue discovery paired with structured lead capture.',
      'Automated enquiry drafting with mandatory human sign-off.',
    ],
    features: [
      {title: 'Hybrid Deterministic + AI Stack', detail: 'Exact math in SQL; smart text comprehension in AI.'},
      {title: 'Verified Grounding Rules', detail: 'AI outputs stay strictly inside approved company facts.'},
      {title: 'Cross-Channel Intake', detail: 'Unified web assistant, enquiry triage, and CRM enrichment.'},
      {title: 'Private Server Execution', detail: 'Credentials and business rules stay protected on Express APIs.'},
    ],
    benefits: [
      'Deploys real intelligence without compromising billing or operational accuracy.',
      'Positions your brand as technically modern and responsive.',
      'Builds scalable infrastructure adaptable to newer AI capabilities.',
    ],
    technologies: ['Gemini Node SDK', 'TypeScript Express', 'Relational SQL', 'React SSR Platforms'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Smart product discovery and support assistants.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Faster client intake and document triage.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Guided student counselling and query routing.'},
    ],
    relatedServiceSlugs: ['business-ai-integration', 'website-ai-assistant', 'custom-software-development', 'workflow-automation'],
    faqs: [
      {question: 'What makes Klyia Technology’s AI business solutions reliable?', answer: 'We anchor every platform on deterministic SQL databases and clean TypeScript code, applying AI selectively where text understanding saves time.'},
      {question: 'Does AI ever modify invoice numbers or stock totals automatically?', answer: 'Never unverified—financial math stays strictly deterministic.'},
      {question: 'Can you upgrade our existing website or CRM with smart AI tools?', answer: 'Yes, via clean server API bridges.'},
      {question: 'Do you invent fake AI performance claims?', answer: 'Never—every feature is demonstrated transparently on real workflows.'},
      {question: 'Can AI assist in regional English/Hinglish customer queries?', answer: 'Yes, configured cleanly around Indian buyer communication styles.'},
      {question: 'Is data privacy protected?', answer: 'Yes, with minimized context and secure backend keys.'},
      {question: 'Do we get full training?', answer: 'Yes.'},
      {question: 'How do we evaluate where AI fits our business?', answer: 'Request a technical consultation via Get a Quote.'},
    ],
  },

  // E. CREATIVE & BRANDING (7 unique pages; UI/UX Design lives cleanly in Web Solutions & links here)
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    seoTitle: 'Corporate Graphic Design Services | Brochures, Specs & Digital Assets | Klyia Technology',
    metaDescription:
      'Clean corporate graphic design for company profiles, product specification sheets, exhibition banners, and digital marketing visuals.',
    heroSubtitle:
      'Authoritative visual communication—company profiles, product spec sheets, and marketing assets built cleanly around your brand.',
    introFocus:
      'Whether an industrial manufacturer sharing technical catalogs or a growing service firm pitching enterprise buyers, disciplined graphic design transforms dense details into memorable visual credibility.',
    whyNeeded: [
      'Cluttered brochures and inconsistent flyers weaken buyer trust in B2B meetings.',
      'Dense engineering specifications become hard to read without clean hierarchy.',
      'Digital campaigns convert poorly without sharp, cohesive visuals.',
    ],
    challenges: [
      'Disconnect between print profiles and website visual identity.',
      'Low-resolution graphics looking blurry across WhatsApp PDFs and large displays.',
      'Templates looking identical to competitors.',
    ],
    solutions: [
      'Clean typography, high-contrast palettes, and structured grid layouts.',
      'Digital-ready PDF profiles and print-ready vector artwork.',
      'Cohesive visual alignment matching your website and corporate branding.',
    ],
    features: [
      {title: 'Product Spec & Catalogs', detail: 'Crisp tables and technical layouts for industrial & solar offerings.'},
      {title: 'Company Profile PDFs', detail: 'WhatsApp-friendly and print-sharp B2B introductions.'},
      {title: 'Presentation Decks', detail: 'Clean corporate slides built for commercial pitches.'},
      {title: 'Consistent Brand Tokens', detail: 'Strict adherence to approved colours and logos.'},
    ],
    benefits: [
      'Elevates B2B pitch credibility immediately.',
      'Makes technical catalogs easier for procurement buyers to scan.',
      'Creates cohesive brand recognition online and offline.',
    ],
    technologies: ['Vector Brand Systems', 'High-DPI Print & Web Exports', 'Optimized WhatsApp PDFs'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Product grade brochures and structural weight charts.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Proposal decks and system component diagrams.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Project brochures and site hoardings.'},
    ],
    relatedServiceSlugs: ['brand-identity', 'business-branding', 'digital-creatives', 'ui-ux-design'],
    faqs: [
      {question: 'Do you design B2B company profile PDFs optimized for WhatsApp sharing?', answer: 'Yes—crisp typography and balanced compression so profiles open fast on mobile.'},
      {question: 'Can you design technical steel or manufacturing catalogs?', answer: 'Yes, organizing grades, dimensions, and specs cleanly.'},
      {question: 'Do you match our website’s visual identity?', answer: 'Yes, aligning print, PDF, and web assets seamlessly.'},
      {question: 'Are source and print-ready files delivered?', answer: 'Yes.'},
      {question: 'Can you design event backdrops and exhibition standees?', answer: 'Yes.'},
      {question: 'Do you help refine messy sales presentations?', answer: 'Yes, turning dense slides into sharp executive decks.'},
      {question: 'Can we bundle graphics with website design?', answer: 'Yes—most clients bundle both for consistency.'},
      {question: 'How do we share our design brief?', answer: 'Send requirements via Get a Quote.'},
    ],
  },
  {
    slug: 'brand-identity',
    name: 'Brand Identity',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    seoTitle: 'Brand Identity Design | Visual Systems, Typography & Guidelines | Klyia Technology',
    metaDescription:
      'Distinctive corporate brand identity design covering logo systems, colour palettes, typography rules, and digital design guidelines.',
    heroSubtitle:
      'Build a sharp, unmistakable corporate identity that earns immediate credibility across websites, proposals, signage, and digital search.',
    introFocus:
      'A logo alone is not a brand identity. True visual identity defines how colours, typography, icons, photography tone, and layout rules work together so your organization feels established and intentional everywhere buyers encounter it.',
    whyNeeded: [
      'Random colours and mismatched fonts signal lack of professionalism.',
      'Rebranding from local workshop to serious regional/national supplier demands cohesive identity.',
      'Digital and print vendors invent inconsistent visuals without clear guidelines.',
    ],
    challenges: [
      'Moving away from generic clip-art symbols toward refined mark systems.',
      'Ensuring colours pass legibility and contrast standards on screens and print.',
      'Translating identity seamlessly into websites and software UIs.',
    ],
    solutions: [
      'Original vector mark systems built for favicons, stamps, websites, and signage.',
      'Defined colour palettes, font pairings, and usage guidelines.',
      'Direct UI design tokens bridging identity cleanly into frontend web code.',
    ],
    features: [
      {title: 'Logo & Mark System', detail: 'Primary horizontal, stacked, and monochrome icon variants.'},
      {title: 'Verified Colour System', detail: 'Exact HEX, RGB, and print ratios with contrast balance.'},
      {title: 'Typography Hierarchy', detail: 'Crisp heading and readable body pairings across devices.'},
      {title: 'Brand Guidelines Document', detail: 'Practical rulebook for future vendors and staff.'},
    ],
    benefits: [
      'Commands stronger first impressions in competitive tenders and pitches.',
      'Eliminates visual guesswork for future marketing and web updates.',
      'Distinguishes your company from generic local competitors.',
    ],
    technologies: ['SVG Vector Architecture', 'Design Token Systems', 'Brand Style Guides'],
    industries: [
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Industrial authority across plant signage and portals.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Distinctive project and developer branding.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Refined trust signals across proposals and web.'},
    ],
    relatedServiceSlugs: ['logo-design', 'business-branding', 'graphic-design', 'website-design-services'],
    faqs: [
      {question: 'What is included in a complete Brand Identity package?', answer: 'Original logo variations, approved colour codes, font hierarchy, stationery/profile styling, and a practical brand usage guide.'},
      {question: 'Can you modernize an old family-business logo without losing recognition?', answer: 'Yes—thoughtful refinement preserves heritage while improving sharpness.'},
      {question: 'Are logos tested at tiny favicon sizes and large signage?', answer: 'Yes, ensuring clarity at every scale.'},
      {question: 'Are vector SVG and transparent PNG files included?', answer: 'Yes.'},
      {question: 'Do you align website UI directly with our new brand identity?', answer: 'Yes—that is one of Klyia’s key strengths.'},
      {question: 'Can brand identity help B2B buyers remember us?', answer: 'Yes, consistent visuals strengthen brand recall in search and AI mentions.'},
      {question: 'How long does brand identity take?', answer: 'Scope and rounds are clarified transparently upfront.'},
      {question: 'How do we discuss a brand refresh?', answer: 'Start a conversation on Get a Quote.'},
    ],
  },
  {
    slug: 'business-branding',
    name: 'Business Branding',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    seoTitle: 'Business Branding & Digital Positioning Services | Klyia Technology',
    metaDescription:
      'Align corporate messaging, visual identity, websites, and buyer trust signals into cohesive business branding built for B2B and local growth.',
    heroSubtitle:
      'Align how your business looks, communicates, and positions its strengths across every digital and commercial touchpoint.',
    introFocus:
      'As regional businesses expand across Chhattisgarh and India, informal word-of-mouth reputation must translate cleanly online. Business branding unites clear messaging, visual consistency, and structured proof so unfamiliar buyers trust you faster.',
    whyNeeded: [
      'Strong offline engineering teams often look small or generic online.',
      'Disconnected messaging confuses buyers about what core services you deliver.',
      'Consistent positioning strengthens Google, GBP, and AI answer-engine clarity.',
    ],
    challenges: [
      'Replacing vague buzzwords with sharp, honest business value.',
      'Aligning leadership vision across website, brochures, WhatsApp, and profiles.',
      'Standing out cleanly in crowded regional markets.',
    ],
    solutions: [
      'Messaging & positioning workshops clarifying real strengths and target buyers.',
      'Cohesive visual and verbal toolkit across web, social, and sales materials.',
      'Aligned website copy, GBP descriptions, and proposal templates.',
    ],
    features: [
      {title: 'Brand Positioning Clarity', detail: 'Clear value statements free of hollow exaggerations.'},
      {title: 'Consistent Verbal Tone', detail: 'Authoritative, trustworthy copy across pages and decks.'},
      {title: 'Digital & Print Alignment', detail: 'Unified look from LinkedIn banners to site signboards.'},
      {title: 'Entity Clarity for Search', detail: 'Consistent business profile naming helping SEO and GEO.'},
    ],
    benefits: [
      'Earns confidence from larger commercial procurement teams.',
      'Makes sales outreach and digital marketing far more persuasive.',
      'Aligns internal teams around one sharp company story.',
    ],
    technologies: ['Brand Positioning Frameworks', 'Entity Consistency Standards', 'Digital Asset Toolkits'],
    industries: [
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Repositioning traders as dependable multi-state partners.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Building homeowner and C&I EPC credibility.'},
      {label: 'Logistics & Transportation', slug: 'logistics-transportation', note: 'Projecting fleet reliability across industrial corridors.'},
    ],
    relatedServiceSlugs: ['brand-identity', 'corporate-website-development', 'content-marketing', 'graphic-design'],
    faqs: [
      {question: 'How does Business Branding differ from simple Graphic Design?', answer: 'Graphic design creates individual visuals; business branding defines positioning, messaging clarity, visual consistency, and trust across every buyer touchpoint.'},
      {question: 'Do you help refine company taglines and service descriptions?', answer: 'Yes.'},
      {question: 'Does consistent branding help SEO and GEO?', answer: 'Yes—uniform company naming, service descriptions, and visual identity reinforce search and AI entity trust.'},
      {question: 'Do you fabricate awards or fake testimonials during branding?', answer: 'Never—we build authentic authority around real capabilities.'},
      {question: 'Is this useful for Bhilai/Raipur SMEs targeting pan-India contracts?', answer: 'Yes—crucial when remote buyers evaluate credibility solely from online presence.'},
      {question: 'Can we bundle branding with a corporate website revamp?', answer: 'Yes.'},
      {question: 'What deliverables do we receive?', answer: 'Positioning brief, visual toolkit, and digital templates.'},
      {question: 'How do we discuss business branding?', answer: 'Submit your goals via Get a Quote.'},
    ],
  },
  {
    slug: 'logo-design',
    name: 'Logo Design',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    seoTitle: 'Custom Logo Design Services | Vector Corporate Marks | Klyia Technology',
    metaDescription:
      'Original vector logo design built for sharpness across websites, letterheads, packaging, WhatsApp profiles, and industrial signage.',
    heroSubtitle:
      'Original, scalable vector marks designed cleanly to represent industrial strength, digital clarity, and lasting recognition.',
    introFocus:
      'A cluttered or clip-art logo looks blurry as website favicons, stamps, or social avatars. Klyia Technology crafts clean, original vector marks balancing geometric precision with genuine sector character.',
    whyNeeded: [
      'DIY icon makers create duplicate logos shared across dozens of unrelated businesses.',
      'Raster bitmap logos blur when scaled for banners, letterheads, or vehicle decals.',
      'Intricate gradients fail when embossed or printed in single-colour ink.',
    ],
    challenges: [
      'Designing distinctive marks without visual clutter.',
      'Balancing bold modern geometry with serious corporate trust.',
      'Delivering versions tested for dark and light backgrounds.',
    ],
    solutions: [
      'Concept exploration starting from structural grids rather than stock icons.',
      'Clean SVG and vector master artwork tested across tiny and massive scales.',
      'Monochrome, dark-mode, light-mode, and favicon variants delivered together.',
    ],
    features: [
      {title: '100% Original Vector Craft', detail: 'Scalable crisp paths suitable for digital and physical media.'},
      {title: 'Multi-Surface Variants', detail: 'Horizontal lockup, stacked lockup, and square icon mark.'},
      {title: 'Dark & Light Adaptations', detail: 'Sharp legibility on obsidian dark headers and white invoices.'},
      {title: 'Complete File Handover', detail: 'SVG, PDF, high-res transparent PNG, and favicon icons.'},
    ],
    benefits: [
      'Immediate professional polish across GST invoices, visiting cards, and websites.',
      'Crisp rendering on every smartphone and display resolution.',
      'Built to serve the company cleanly for years ahead.',
    ],
    technologies: ['SVG Precision Geometry', 'Favicon & App Icon Grids', 'Print-Ready Vector'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Memorable marks suited for packaging and app icons.'},
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Strong geometric emblems for machinery and signage.'},
      {label: 'Agriculture & Agribusiness', slug: 'agriculture-agribusiness', note: 'Authentic modern marks for agri brands and exports.'},
    ],
    relatedServiceSlugs: ['brand-identity', 'graphic-design', 'website-design-services', 'business-branding'],
    faqs: [
      {question: 'Are your logos custom drawn rather than stock-icon copies?', answer: 'Yes—every mark is engineered originally as crisp vector geometry.'},
      {question: 'Do we get versions for both light paper bills and dark websites?', answer: 'Yes, full positive, negative, and monochrome versions are delivered.'},
      {question: 'Which file formats are handed over?', answer: 'Scalable SVG/PDF vectors plus high-resolution transparent PNG and web favicons.'},
      {question: 'Can you upgrade our existing outdated logo cleanly?', answer: 'Yes, preserving equity while fixing typography and vector sharpness.'},
      {question: 'Can logos be bundled with full website design?', answer: 'Yes.'},
      {question: 'How many refinement rounds are included?', answer: 'Aligned transparently before project kickoff.'},
      {question: 'Will it print sharply on factory uniforms or steel tags?', answer: 'Yes—single-colour scalability is tested explicitly.'},
      {question: 'How do we request a logo proposal?', answer: 'Share your company name and vision on Get a Quote.'},
    ],
  },
  {
    slug: 'digital-creatives',
    name: 'Digital Creatives',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    seoTitle: 'Digital Creatives & Performance Ad Design | Klyia Technology',
    metaDescription:
      'Conversion-focused digital banners, ad creatives, carousel graphics, and WhatsApp promotional visuals aligned to your brand.',
    heroSubtitle:
      'High-clarity campaign creatives designed to stop distracted scrolling and communicate real commercial offers fast.',
    introFocus:
      'Paid ads and website banners only have a split second to earn attention. Digital creatives engineered around clean visual hierarchy, crisp copy, and authentic imagery outperform noisy generic flyers.',
    whyNeeded: [
      'Text-heavy cluttered flyers get skipped instantly in mobile feeds.',
      'Stock-photo collages fail to communicate real product authority.',
      'Running ads with stale visuals drives click costs higher.',
    ],
    challenges: [
      'Formatting cleanly across square feeds, vertical stories, and widescreen banners.',
      'Keeping text concise while presenting key offers or specs accurately.',
      'Refreshing creative batches consistently during active campaigns.',
    ],
    solutions: [
      'Platform-native aspect-ratio kits tailored to Google, Meta, and LinkedIn.',
      'Bold typography paired with honest brand messaging and sharp CTAs.',
      'Reusable modular templates speeding up ongoing festival or product promos.',
    ],
    features: [
      {title: 'Ad Campaign Kits', detail: 'Coordinated visuals matched directly to landing page headlines.'},
      {title: 'Website Promo Banners', detail: 'Crisp feature cards and festival announcements.'},
      {title: 'WhatsApp Broadcast Cards', detail: 'Fast-loading graphics sized cleanly for mobile forwarding.'},
      {title: 'A/B Test Variations', detail: 'Alternative headline and layout cuts for campaign optimization.'},
    ],
    benefits: [
      'Improves ad click-through consistency without misleading clickbait.',
      'Reinforces brand polish across every marketing channel.',
      'Saves internal teams hours formatting banners manually.',
    ],
    technologies: ['Multi-Ratio Ad Design', 'WebP Optimization', 'Brand Creative Grids'],
    industries: [
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Admission season banners and course highlights.'},
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Product launch carousels and seasonal promos.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Subsidy awareness and commercial EPC banners.'},
    ],
    relatedServiceSlugs: ['social-media-creatives', 'google-ads-management', 'social-media-marketing', 'graphic-design'],
    faqs: [
      {question: 'How do digital creatives help Google and Meta campaigns?', answer: 'Clear, scannable visuals with strong contrast improve click relevance and keep messaging consistent with your landing page.'},
      {question: 'Do you optimize banner file sizes so landing pages stay fast?', answer: 'Yes—delivered cleanly in crisp WebP or optimized formats.'},
      {question: 'Can you design visuals for both B2B and local consumer offers?', answer: 'Yes.'},
      {question: 'Are sizes adapted for WhatsApp status and LinkedIn?', answer: 'Yes, tailored cleanly per platform.'},
      {question: 'Can creatives run alongside Klyia digital marketing?', answer: 'Yes—bundled seamlessly inside marketing retainers or projects.'},
      {question: 'Do you use misleading clickbait promises?', answer: 'Never—we craft honest, persuasive commercial messaging.'},
      {question: 'Can regional festivals or regional events be supported?', answer: 'Yes.'},
      {question: 'How do we order creative kits?', answer: 'Submit campaign requirements via Get a Quote.'},
    ],
  },
  {
    slug: 'social-media-creatives',
    name: 'Social Media Creatives',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    seoTitle: 'Social Media Creatives | Instagram, LinkedIn & Educational Carousels | Klyia Technology',
    metaDescription:
      'Consistent branded social media posts, technical carousels, and corporate visuals designed for LinkedIn, Instagram, and Facebook.',
    heroSubtitle:
      'Structured social media visuals and informative carousels that build ongoing authority and keep your brand looking sharp.',
    introFocus:
      'Buyers researching local companies routinely glance at Instagram, Facebook, and LinkedIn profiles to verify active credibility. Cohesive, informative social media creatives show a modern, trustworthy organization.',
    whyNeeded: [
      'Sporadic mismatched posts make established companies appear inactive.',
      'Good photos or insights fail without clean framing and legibility.',
      'Educational carousels earn higher saves and shares than generic greetings.',
    ],
    challenges: [
      'Maintaining a unified grid aesthetic across monthly calendars.',
      'Turning dry technical strengths into clear visual slides.',
      'Pairing sharp captions and calls-to-action smoothly.',
    ],
    solutions: [
      'Custom social design grids tailored to LinkedIn, Instagram, and GBP posts.',
      'Educational swipe carousels explaining products, specs, or service workflows.',
      'Clean post copy aligning with brand positioning and local geography.',
    ],
    features: [
      {title: 'Educational Carousels', detail: 'Multi-slide explainers showcasing expertise cleanly.'},
      {title: 'Consistent Grid Systems', detail: 'Cohesive borders, typography, and colour restraint.'},
      {title: 'Google Business Profile Visuals', detail: 'Sharp local update graphics reinforcing regional SEO.'},
      {title: 'Caption & CTA Pairing', detail: 'Clean text structured around enquiries and saves.'},
    ],
    benefits: [
      'Keeps brand profiles polished and active continuously.',
      'Educates B2B and local followers rather than posting hollow filler.',
      'Complements paid campaigns and SEO organically.',
    ],
    technologies: ['Social Aspect Templates', 'Carousel Storyboarding', 'Brand Typography Rules'],
    industries: [
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Patient awareness posts and facility highlights.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Program highlights and campus event visuals.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Construction milestone and project feature posts.'},
    ],
    relatedServiceSlugs: ['social-media-marketing', 'digital-creatives', 'graphic-design', 'brand-identity'],
    faqs: [
      {question: 'Can social media creatives cover LinkedIn B2B carousels as well as Instagram?', answer: 'Yes—layouts are adapted distinctly for B2B LinkedIn and consumer Instagram/Facebook feeds.'},
      {question: 'Can we share project photos to be cleanly branded into posts?', answer: 'Yes, turning authentic site photos into crisp corporate creatives.'},
      {question: 'Do you also craft captions?', answer: 'Yes, included cleanly with creative batches.'},
      {question: 'Can creatives also feed Google Business Profile photo updates?', answer: 'Yes—great practice for Local SEO freshness.'},
      {question: 'Do you lock clients into fixed viral promises?', answer: 'Never—we focus on quality consistency and audience relevance.'},
      {question: 'Are monthly packages available?', answer: 'Yes, scoped around post cadence.'},
      {question: 'Can regional holidays and announcements be planned ahead?', answer: 'Yes.'},
      {question: 'How do we discuss a monthly social kit?', answer: 'Connect via Get a Quote.'},
    ],
  },
  {
    slug: 'professional-landing-pages',
    name: 'Professional Landing Pages',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    seoTitle: 'Professional Landing Pages | Branded High-Converting Campaign Pages | Klyia Technology',
    metaDescription:
      'Custom-designed, ultra-fast professional landing pages combining sharp visual branding with focused conversion engineering.',
    heroSubtitle:
      'Bespoke campaign and product-spotlight pages uniting persuasive brand storytelling, crisp UI design, and instant lead capture.',
    introFocus:
      'When promoting a flagship product, regional launch, or paid ad campaign, sending buyers to a busy homepage dilutes focus. Professional landing pages blend brand aesthetics with distraction-free conversion flow.',
    whyNeeded: [
      'Campaign clicks bounce rapidly when landing pages feel messy or unbranded.',
      'Generic drag-and-drop funnels load slowly on regional mobile data.',
      'Paid ads and WhatsApp campaigns need message-matched destinations.',
    ],
    challenges: [
      'Balancing visual sophistication with near-instant page loads.',
      'Structuring answers clearly so cold visitors feel confident enquiring.',
      'Connecting submissions directly into WhatsApp or CRM.',
    ],
    solutions: [
      'Clean bespoke UI tailored directly to your campaign offer.',
      'Lean TypeScript & Tailwind rendering delivering sub-second responsiveness.',
      'Embedded instant enquiry forms, FAQs, and WhatsApp routes.',
    ],
    features: [
      {title: 'Visual Brand Craft', detail: 'Cohesive editorial polish matching your corporate identity.'},
      {title: 'Zero-Distraction Layout', detail: 'Every headline, visual, and FAQ guides toward enquiry.'},
      {title: 'Verified Speed & Clean HTML', detail: 'Minimal script overhead improving ad landing-page quality.'},
      {title: 'Instant Lead Persistence', detail: 'Database storage + immediate notification.'},
    ],
    benefits: [
      'Maximizes conversion quality from campaigns and outreach.',
      'Launches focused offers without waiting for full-site rebuilds.',
      'Projects superior brand trust immediately.',
    ],
    technologies: ['React & Tailwind CSS', 'Semantic HTML5', 'GA4 / Clarity Ready', 'REST Lead Capture'],
    industries: [
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Commercial rooftop and subsidy campaign pages.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Dedicated project launch micro-landing pages.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'High-trust consultation pages.'},
    ],
    relatedServiceSlugs: ['landing-page-design', 'google-ads-management', 'ui-ux-design', 'customer-enquiry-automation'],
    faqs: [
      {question: 'How does Professional Landing Pages differ from standard multi-page websites?', answer: 'A professional landing page focuses completely on one campaign, product, or city offer to convert incoming visitors efficiently.'},
      {question: 'Are these built using clean code rather than bloated no-code builders?', answer: 'Yes—lightweight semantic React/HTML keeping mobile speeds fast.'},
      {question: 'Can we run Google Ads directly to these pages?', answer: 'Yes, built explicitly with ad quality score and clarity in mind.'},
      {question: 'Are conversion tracking tags supported?', answer: 'Yes, configured cleanly with GA4 and Clarity.'},
      {question: 'Can forms connect straight to WhatsApp or CRM?', answer: 'Yes.'},
      {question: 'Do you include bespoke copywriting?', answer: 'Yes—clear commercial headings, benefits, and FAQs.'},
      {question: 'Can multiple landing pages sit cleanly under our main domain?', answer: 'Yes.'},
      {question: 'How do we start a campaign page?', answer: 'Share your offer details on Get a Quote.'},
    ],
  },

  // F. IT & CLOUD SUPPORT (6 unique pages; Website Maintenance & Speed Optimization live in Web Solutions)
  {
    slug: 'website-hosting-support',
    name: 'Website Hosting Support',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    seoTitle: 'Website Hosting Support & Server Setup | VPS, Node.js & SSL | Klyia Technology',
    metaDescription:
      'Reliable website hosting setup, VPS configuration, SSL management, Node.js deployment, and migration support without hidden downtime.',
    heroSubtitle:
      'Keep your websites and custom web applications running reliably with clean server setup, SSL configuration, and smooth migrations.',
    introFocus:
      'Great websites and ERPs lose value fast on misconfigured cheap shared hosting. Klyia Technology assists Indian businesses with clean VPS/Node.js setup, SSL certificates, reverse proxies, and stress-free migrations.',
    whyNeeded: [
      'Expired SSL certificates trigger frightening browser security warnings.',
      'Misconfigured shared hosting throttles traffic spikes and breaks SSR apps.',
      'Businesses lose access when old freelancers leave hosting unorganized.',
    ],
    challenges: [
      'Zero-downtime transfers between legacy cPanel hosts and modern VPS servers.',
      'Ensuring Node.js Express SSR processes restart cleanly after server reboots.',
      'Separating static asset caching from live API endpoints cleanly.',
    ],
    solutions: [
      'Clean Hostinger VPS / cloud hosting setup kept directly under your ownership.',
      'Automated process supervision, reverse-proxy routing, and SSL setup.',
      'Organized DNS, MX email, and backup verification during migrations.',
    ],
    features: [
      {title: 'Zero-Lock-In Ownership', detail: 'Hosting accounts stay in your company’s name cleanly.'},
      {title: 'SSL & HTTPS Hardening', detail: 'Proper certificate configuration and HTTP->HTTPS redirects.'},
      {title: 'Node.js & Static Tuning', detail: 'Clean configuration for SSR apps, APIs, and static sites.'},
      {title: 'Email DNS Care', detail: 'Protect SPF/DKIM/MX mail delivery cleanly during host changes.'},
    ],
    benefits: [
      'Prevents unexpected downtime and browser security warnings.',
      'Improves server response time (TTFB) benefiting SEO.',
      'Gives management clear, single-point hosting support.',
    ],
    technologies: ['Nginx Reverse Proxy', 'Node.js Process Management', 'HTTPS / SSL', 'SPF & DKIM DNS'],
    industries: [
      {label: 'Corporate & Industrial Firms', slug: 'manufacturing-engineering', note: 'Dependable hosting for corporate sites and portals.'},
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Handling campaign traffic without sudden slowdowns.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Reliable uptime during admission surges.'},
    ],
    relatedServiceSlugs: ['domain-hosting-assistance', 'server-deployment-support', 'website-maintenance-support', 'cloud-solutions'],
    faqs: [
      {question: 'Who owns the hosting account when Klyia Technology sets it up?', answer: 'Your business owns the domain and hosting account directly—never locked away under hidden agency control.'},
      {question: 'Do you configure Node.js production hosting such as Hostinger VPS?', answer: 'Yes, including process managers, ports, and HTTPS.'},
      {question: 'Will migrating our website disrupt business emails?', answer: 'No—we audit and preserve MX, SPF, and DKIM records carefully prior to DNS cutovers.'},
      {question: 'Do you assist with SSL errors and certificate renewals?', answer: 'Yes.'},
      {question: 'Can you help upgrade slow shared hosting to modern cloud/VPS?', answer: 'Yes.'},
      {question: 'Does hosting speed affect SEO?', answer: 'Yes—faster TTFB improves crawl efficiency and Core Web Vitals.'},
      {question: 'Do you support WordPress as well as React/Node stacks?', answer: 'Yes.'},
      {question: 'How do we request hosting assistance?', answer: 'Reach out via Get a Quote or WhatsApp (+91 8296887643).'},
    ],
  },
  {
    slug: 'domain-hosting-assistance',
    name: 'Domain & Hosting Assistance',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    seoTitle: 'Domain Registration, DNS & Business Email Assistance | Klyia Technology',
    metaDescription:
      'Clean domain selection, DNS record configuration, business email setup, and ownership recovery assistance for Indian companies.',
    heroSubtitle:
      'Secure your domain name cleanly, configure business email and DNS records accurately, and keep digital assets safely under company control.',
    introFocus:
      'Many organizations discover years later that their company domain was registered under a former developer’s personal email or has broken DNS settings causing business emails to land in spam. We bring full order and security to domains and hosting.',
    whyNeeded: [
      'Unorganized DNS causes lost sales emails and intermittent website outages.',
      'Domains nearing expiry risk total business disruption if missed.',
      'Proper SPF, DKIM, and DMARC records are required by modern inboxes.',
    ],
    challenges: [
      'Recovering scattered registrar logins safely.',
      'Configuring subdomains for ERP/CRM portals cleanly alongside main sites.',
      'Fixing email deliverability issues without interrupting daily correspondence.',
    ],
    solutions: [
      'Centralized DNS audit (A, CNAME, MX, TXT, SPF, DKIM, DMARC).',
      'Clean registrar transfer assistance into your corporate account.',
      'Structured subdomain routing (`erp.`, `app.`, `www.`) with SSL.',
    ],
    features: [
      {title: 'Corporate Asset Control', detail: 'Ensure domains and hosting sit securely in your company profile.'},
      {title: 'Email Deliverability DNS', detail: 'Proper SPF/DKIM/DMARC alignment keeping invoices out of spam.'},
      {title: 'Subdomain & Redirect Rules', detail: 'Canonical `www`/non-`www` 301 setups preventing duplicate SEO issues.'},
      {title: 'Renewal Organization', detail: 'Clear inventory tracking expiries and providers.'},
    ],
    benefits: [
      'Protects ownership over your most valuable digital address.',
      'Improves corporate email inbox delivery reliably.',
      'Prevents duplicate domain versions confusing Google.',
    ],
    technologies: ['DNSSEC & Canonical Redirects', 'SPF / DKIM / DMARC', 'Registrar Transfer Protocols'],
    industries: [
      {label: 'Professional Services', slug: 'professional-services', note: 'Ensuring critical client emails never land in spam.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Clean domain authority across quotes and GST comms.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Securing project brand domains cleanly.'},
    ],
    relatedServiceSlugs: ['website-hosting-support', 'security-backup-support', 'technical-seo', 'website-maintenance-support'],
    faqs: [
      {question: 'Can you help fix our company emails going to clients’ spam folders?', answer: 'Yes—configuring accurate SPF, DKIM, and DMARC DNS records resolves most authentication-related spam filtering.'},
      {question: 'Should domains be registered in our company’s own name?', answer: 'Always. We guide you directly so you hold full legal ownership.'},
      {question: 'Can you point our ERP portal to a subdomain like erp.ourcompany.com?', answer: 'Yes, cleanly with SSL.'},
      {question: 'Will setting up www vs non-www redirects help SEO?', answer: 'Yes, clean 301 canonicalization avoids split search signals.'},
      {question: 'Can you audit messy DNS left by a prior agency?', answer: 'Yes.'},
      {question: 'Do you help verify domain ownership for Google Search Console?', answer: 'Yes, cleanly via TXT DNS records.'},
      {question: 'Do you support Google Workspace and Zoho Mail DNS setup?', answer: 'Yes.'},
      {question: 'How do we start a domain/DNS checkup?', answer: 'Contact us via Get a Quote.'},
    ],
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud Solutions',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    seoTitle: 'Cloud Solutions & Scalable Application Hosting | Klyia Technology',
    metaDescription:
      'Architect scalable cloud deployments, database backups, multi-branch application access, and lean infrastructure for Indian companies.',
    heroSubtitle:
      'Migrate spreadsheets, billing tools, and portals onto dependable, cost-conscious cloud infrastructure accessible securely anywhere.',
    introFocus:
      'Running business systems on one office PC creates constant risk—power cuts, hard-drive crashes, or remote managers blocked from reports. Cloud solutions deliver multi-branch availability, encrypted access, and predictable costs.',
    whyNeeded: [
      'Single-PC local servers cut access whenever directors or sales reps travel.',
      'Hardware failures without off-site cloud backups risk permanent data loss.',
      'Oversized cloud setups waste monthly budgets unnecessarily.',
    ],
    challenges: [
      'Balancing reliability and speed with sensible Indian rupee cloud budgets.',
      'Securing cloud-hosted databases from public exposure.',
      'Monitoring storage, memory, and latency proactively.',
    ],
    solutions: [
      'Right-sized cloud/VPS architectures fitted accurately to team traffic.',
      'Isolated database volumes with encrypted backups and access policies.',
      'Browser-based HTTPS delivery usable securely across branches.',
    ],
    features: [
      {title: 'Multi-Branch Cloud Access', detail: 'Factories, warehouses, and offices share live unified data.'},
      {title: 'Right-Sized Cost Control', detail: 'Clean architectures avoiding bloated unnecessary cloud bills.'},
      {title: 'Automated Snapshot Backups', detail: 'Scheduled off-instance recovery points.'},
      {title: 'Environment Isolation', detail: 'Clean separation between staging tests and live production.'},
    ],
    benefits: [
      'Eliminates single-computer hardware dependency.',
      'Enables remote oversight cleanly for business owners.',
      'Scales smoothly without re-writing applications.',
    ],
    technologies: ['Linux Cloud VPS', 'Node.js SSR Clusters', 'PostgreSQL / SQLite Cloud Persistence', 'TLS Encryption'],
    industries: [
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Connecting regional depots and field reps live.'},
      {label: 'Logistics & Transportation', slug: 'logistics-transportation', note: 'Multi-branch fleet and dispatch access.'},
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Bridging factory plants with city sales offices.'},
    ],
    relatedServiceSlugs: ['server-deployment-support', 'security-backup-support', 'erp-software-development', 'saas-application-development'],
    faqs: [
      {question: 'Does moving software to the cloud require huge enterprise cloud bills?', answer: 'No—well-architected Node.js and SQL apps run remarkably smoothly on lean right-sized VPS or cloud instances.'},
      {question: 'Can both our plant in Bhilai and office in Raipur access the same cloud ERP?', answer: 'Yes, securely over HTTPS in real time.'},
      {question: 'Are daily backups configured on cloud setups?', answer: 'Yes, both database exports and server snapshots.'},
      {question: 'Can we test upgrades safely without breaking live operations?', answer: 'Yes, using isolated staging environments.'},
      {question: 'Is traffic encrypted?', answer: 'Yes, strictly over HTTPS/TLS.'},
      {question: 'Can on-premise legacy systems sync periodically to cloud dashboards?', answer: 'Yes, scoped via clean API syncs.'},
      {question: 'Do you assist businesses across Chhattisgarh and India?', answer: 'Yes.'},
      {question: 'How do we plan a cloud migration?', answer: 'Schedule a technical review on Get a Quote.'},
    ],
  },
  {
    slug: 'server-deployment-support',
    name: 'Server Deployment Support',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    seoTitle: 'Server Deployment Support | Node.js, Vite SSR & Production Pipelines | Klyia Technology',
    metaDescription:
      'Production deployment support for TypeScript, Node.js, Express SSR, React SPAs, Nginx reverse proxies, and CI/CD stability.',
    heroSubtitle:
      'Move applications cleanly from local code into stable, fast, reboot-safe production environments without deployment surprises.',
    introFocus:
      'Even well-written software fails if deployed sloppily—missing environment variables, crashed background processes, unbuilt bundles, or misrouted ports. Klyia Technology handles clean production deployment and operational handovers.',
    whyNeeded: [
      'Manual SSH file drags create inconsistent releases and broken routes.',
      'Server reboots leave Node.js websites offline if supervisors are missing.',
      'Production vs dev environment mismatches break live forms quietly.',
    ],
    challenges: [
      'Zero-downtime builds for SSR Node.js + Vite applications.',
      'Protecting SQLite databases and uploaded files across deployments.',
      'Validating healthchecks and port bindings reliably.',
    ],
    solutions: [
      'Clean production start scripts, systemd/PM2 supervision, and healthchecks.',
      'Strict `.env` separation keeping API secrets safe outside Git.',
      'Pre-deployment build + smoke checks verifying HTML, APIs, and sitemaps.',
    ],
    features: [
      {title: 'Process Supervision', detail: 'Automatic restarts and graceful shutdown handling.'},
      {title: 'Reverse Proxy & Gzip/Brotli', detail: 'Fast compressed static delivery via Nginx or Node headers.'},
      {title: 'Safe Persistence Paths', detail: 'Keeping SQLite and user records safely intact across code updates.'},
      {title: 'Clean Environment Checklists', detail: 'Repeatable `.env` validation preventing broken secrets.'},
    ],
    benefits: [
      'Eliminates stressful release nights and surprise downtime.',
      'Keeps business applications resilient after updates or restarts.',
      'Provides documented production setup for IT teams.',
    ],
    technologies: ['Node 22 Production', 'Nginx Proxy', 'PM2 / Systemd', 'Build & Smoke Verification'],
    industries: [
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Stable production hosting for internal plant portals.'},
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Safe releases without interrupting live checkouts.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Dependable SSR deployments for content platforms.'},
    ],
    relatedServiceSlugs: ['cloud-solutions', 'website-hosting-support', 'security-backup-support', 'custom-web-application-development'],
    faqs: [
      {question: 'Can you deploy Node.js SSR websites cleanly on VPS hosting?', answer: 'Yes—configuring Node builds, reverse proxy routing, SSL, and auto-restart supervision.'},
      {question: 'How do you protect databases during code updates?', answer: 'Keeping database storage cleanly isolated outside build artifact paths alongside pre-deploy backups.'},
      {question: 'Do you set up `/health` monitoring routes?', answer: 'Yes, verifying server uptime cleanly without distorting visitor counters.'},
      {question: 'Can you help fix a broken existing deployment?', answer: 'Yes.'},
      {question: 'Are API keys committed to repositories?', answer: 'Never—managed strictly through production environment files.'},
      {question: 'Do you verify builds before pushing live?', answer: 'Yes, compiling TypeScript, client bundles, and SSR routes thoroughly.'},
      {question: 'Can non-technical teams trigger simple content edits safely?', answer: 'Yes, engineered cleanly.'},
      {question: 'How do we request deployment assistance?', answer: 'Share your stack details via Get a Quote.'},
    ],
  },
  {
    slug: 'security-backup-support',
    name: 'Security & Backup Support',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    seoTitle: 'Website Security, Hardening & Automated Backup Support | Klyia Technology',
    metaDescription:
      'Protect business websites and databases with security headers, SQL/input sanitization, access hardening, and verified restore-tested backups.',
    heroSubtitle:
      'Proactive website hardening, parameterized data protection, spam defense, and verified backups that protect business continuity.',
    introFocus:
      'One compromised WordPress plugin or lost invoice database can halt sales for days. Security & Backup Support combines clean coding defenses, strict access control, and tested off-site backups.',
    whyNeeded: [
      'Outdated CMS plugins routinely suffer automated spam and malware injections.',
      'Untested backups often turn out empty or corrupted during emergencies.',
      'Open forms without rate limiting allow automated bot floods.',
    ],
    challenges: [
      'Closing security holes without breaking legitimate customer access.',
      'Hardening Express APIs against injection and payload abuse.',
      'Maintaining clean disaster-recovery routines effortlessly.',
    ],
    solutions: [
      'Security headers (`X-Frame-Options`, `nosniff`, `Referrer-Policy`), HTTPS, and input validation.',
      'Rate limiting, bot traps, and strict least-privilege database access.',
      'Scheduled automated backups verified cleanly for reliable recovery.',
    ],
    features: [
      {title: 'HTTP & API Hardening', detail: 'Payload limits, rate throttling, and parameterized SQL safety.'},
      {title: 'Scheduled Data Backups', detail: 'Automated exports keeping code and databases recoverable.'},
      {title: 'Malware & Spam Cleanup', detail: 'Audit and sanitize compromised WordPress or legacy sites.'},
      {title: 'Access & Credential Audits', detail: 'Clean rotation of stale passwords and API keys.'},
    ],
    benefits: [
      'Protects corporate reputation from embarrassing defacement or spam links.',
      'Safeguards valuable customer enquiries and operational data.',
      'Maintains search engine trust by preventing spam-link hacks.',
    ],
    technologies: ['HTTP Security Headers', 'Rate Limiting', 'Parameterized SQL', 'Automated Encrypted Backups'],
    industries: [
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Protecting sensitive enquiry and clinic data carefully.'},
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Safeguarding order records and dealer portals.'},
      {label: 'Financial & Advisory Firms', slug: 'professional-services', note: 'Hardening corporate portals and lead data.'},
    ],
    relatedServiceSlugs: ['website-maintenance-support', 'website-hosting-support', 'domain-hosting-assistance', 'cloud-solutions'],
    faqs: [
      {question: 'What happens if our existing WordPress website got hacked with spam redirects?', answer: 'We audit files and databases, clean malicious scripts, update core/plugins, harden permissions, and set up clean backups.'},
      {question: 'How often should business websites and ERPs be backed up?', answer: 'Active operational ERPs daily; corporate content sites weekly or on every update—plus pre-upgrade snapshots.'},
      {question: 'Do you test backups rather than just assuming they work?', answer: 'Yes, periodic verification guarantees data can actually be restored.'},
      {question: 'Does site security affect Google rankings?', answer: 'Yes—compromised sites trigger Safe Browsing warnings and drop severely in search.'},
      {question: 'How do your custom forms prevent spam bots?', answer: 'Using server-side rate limiting, field sanitization, and honeypots.'},
      {question: 'Do you audit exposed API keys in frontend code?', answer: 'Yes—moving all sensitive secrets strictly to backend routes.'},
      {question: 'Can we bundle security with monthly maintenance?', answer: 'Yes.'},
      {question: 'How do we schedule a security checkup?', answer: 'Submit your website URL via Get a Quote.'},
    ],
  },
  {
    slug: 'website-performance-optimization',
    name: 'Website Performance Optimization',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    seoTitle: 'Website Performance Optimization | Core Web Vitals & Server Speed | Klyia Technology',
    metaDescription:
      'Diagnose and eliminate slow server TTFB, heavy scripts, unoptimized images, and Core Web Vitals bottlenecks across existing websites.',
    heroSubtitle:
      'Audit and accelerate sluggish websites—cutting bloated scripts, compressing visuals, optimizing caching, and stabilizing Core Web Vitals.',
    introFocus:
      'Speed directly shapes visitor retention, ad conversion efficiency, and technical SEO health. Website Performance Optimization examines your entire stack—server response, CSS/JS bundles, fonts, and images—to make every click feel crisp.',
    whyNeeded: [
      'Sluggish mobile pages lose impatient B2B buyers before hero copy renders.',
      'Heavy slider plugins and oversized PNGs exhaust regional mobile bandwidth.',
      'Unstable layout shifts frustrate visitors tapping menus or buttons.',
    ],
    challenges: [
      'Third-party tracking scripts blocking initial browser painting.',
      'Legacy themes loading dozens of unused stylesheets and fonts.',
      'High server Time-To-First-Byte (TTFB) on uncached pages.',
    ],
    solutions: [
      'Asset optimization: WebP conversion, responsive widths, and lazy media.',
      'Bundle splitting, unused CSS removal, and deferred non-critical JavaScript.',
      'Edge/HTTP caching headers and server-rendered initial markup.',
    ],
    features: [
      {title: 'Core Web Vitals Focus', detail: 'Targeted improvements across LCP, INP, and CLS stability.'},
      {title: 'Server TTFB Tuning', detail: 'Clean SSR caching and static asset immutability headers.'},
      {title: 'Media & Font Slimming', detail: 'Eliminate multi-megabyte hero images and redundant fonts.'},
      {title: 'Before/After Diagnostics', detail: 'Transparent audit reporting covering actual code bottlenecks.'},
    ],
    benefits: [
      'Delivers snappy browsing on ordinary Indian 4G smartphones.',
      'Supports technical SEO crawlability and landing-page efficiency.',
      'Improves visitor satisfaction without always needing a full redesign.',
    ],
    technologies: ['Core Web Vitals Diagnostics', 'Bundle Code-Splitting', 'HTTP Cache-Control', 'Asset Compression'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Faster product browsing and smoother checkouts.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Keeping rich course portals quick on student phones.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Fast B2B catalogs on plant/factory mobile networks.'},
    ],
    relatedServiceSlugs: ['website-speed-optimization', 'technical-seo', 'website-redesign-revamp', 'website-hosting-support'],
    faqs: [
      {question: 'How is Website Performance Optimization related to Website Speed Optimization?', answer: 'It spans both frontend asset slimming and deeper IT/server caching, bundle profiling, and hosting response tuning.'},
      {question: 'Can you optimize an existing website without rebuilding it from zero?', answer: 'Often yes—image compression, script deferral, caching, and plugin cleanup deliver major speed gains cleanly.'},
      {question: 'Does faster performance guarantee #1 Google rankings?', answer: 'No single factor guarantees rankings, though strong performance eliminates technical drag and improves visitor engagement.'},
      {question: 'Do you break interactive forms or assistants while optimizing?', answer: 'Never—we thoroughly verify all UI interactions after tuning.'},
      {question: 'Why does CLS (layout shift) matter?', answer: 'Stopping buttons from jumping under thumbs prevents misclicks and poor mobile scores.'},
      {question: 'Do you optimize WordPress as well as custom React apps?', answer: 'Yes.'},
      {question: 'Can slow hosting bottleneck frontend fixes?', answer: 'Yes, which is why we audit server TTFB alongside frontend assets.'},
      {question: 'How do we request a speed audit?', answer: 'Share your URL via Get a Quote.'},
    ],
  },
];

export const AI_AUTOMATION_SERVICES: ServicePageData[] = AI_CREATIVE_CLOUD_SEEDS.filter(
  (s) => s.categoryId === 'ai-automation',
).map(hydrateServiceSeed);

export const CREATIVE_BRANDING_SERVICES: ServicePageData[] = AI_CREATIVE_CLOUD_SEEDS.filter(
  (s) => s.categoryId === 'creative-branding',
).map(hydrateServiceSeed);

export const IT_CLOUD_SERVICES: ServicePageData[] = AI_CREATIVE_CLOUD_SEEDS.filter(
  (s) => s.categoryId === 'it-cloud-support',
).map(hydrateServiceSeed);
