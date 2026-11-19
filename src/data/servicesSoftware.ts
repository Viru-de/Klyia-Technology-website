import {hydrateServiceSeed, type CompactServiceSeed} from './servicesWeb.ts';
import type {ServicePageData} from './types.ts';

const SOFTWARE_SEEDS: CompactServiceSeed[] = [
  {
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'Custom Software Development Company | Bhilai, Chhattisgarh & India | Klyia Technology',
    metaDescription:
      'Bespoke custom software development built around your pricing logic, approvals, GST rules, and workflows across Bhilai, Durg, Raipur, and India.',
    heroSubtitle:
      'Tailored software engineered specifically around your company’s pricing rules, approvals, stock units, and reporting workflows.',
    introFocus:
      'Every established business operates with specific commercial nuances—multi-tier discounts, regional unit conversions, multi-stage approvals, or unique plant calculations. Custom software digitizes those exact processes reliably instead of forcing teams into rigid generic tools.',
    whyNeeded: [
      'Generic software frequently covers only part of real operations, leaving staff still juggling manual Excel sheets.',
      'Paper registers and informal chat approvals introduce data loss, billing delays, and leakage.',
      'Growing teams require a centralized database linking sales, operations, and reporting.',
    ],
    challenges: [
      'Hours wasted re-typing identical records across Excel, billing tools, and stock registers.',
      'Rising per-seat subscription costs as headcount expands.',
      'Lack of support for Indian GST rules, e-Way prep, or dual weight/piece units.',
    ],
    solutions: [
      'Workflow discovery mapping your exact forms, ledgers, calculations, and roles.',
      'Modular TypeScript web or desktop applications backed by relational SQL databases.',
      'Clean reports, PDF documents, and WhatsApp notification integration.',
    ],
    features: [
      {title: 'Exact Business Rules', detail: 'Tailored calculations, pricing tiers, commission rules, and unit conversions.'},
      {title: 'Unified Database Truth', detail: 'Centralized records replacing duplicate spreadsheets across teams.'},
      {title: 'Maker-Checker Approvals', detail: 'Role permissions and audit logs protecting sensitive discounts or stock edits.'},
      {title: 'Actionable PDF & Excel Exports', detail: 'Custom printables and accountant-friendly exports.'},
    ],
    benefits: [
      'Cuts repetitive manual work and entry mistakes significantly.',
      'Scales smoothly as warehouses, branches, or product lines expand.',
      'Zero unused clutter—operators use clean screens designed for their exact job.',
    ],
    technologies: ['TypeScript & Node.js', 'React Enterprise UI', 'SQLite / PostgreSQL', 'REST APIs & PDF Engine'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Rolling mill, scrap, weighbridge, and dealer billing systems.'},
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Shop-floor job cards and quality logs.'},
      {label: 'Fruit & Vegetable Mandis', slug: 'fruit-vegetable-mandis', note: 'Arrival, auction lot, commission, and farmer patti software.'},
    ],
    relatedServiceSlugs: ['erp-software-development', 'crm-software-development', 'business-management-software', 'database-api-integration'],
    relatedBlogSlugs: ['custom-software-vs-ready-made-software', 'digital-transformation-for-small-and-medium-businesses'],
    faqs: [
      {question: 'When should a business choose custom software over ready-made software?', answer: 'When standard packages force your staff back into Excel workarounds or miss crucial pricing, billing, weight, or approval workflows.'},
      {question: 'Can custom software run in a browser across offices?', answer: 'Yes. Modern web applications run securely across branches without individual PC installs.'},
      {question: 'Can we phase development module by module?', answer: 'Yes. Starting with high-impact billing or stock modules speeds ROI and team adoption.'},
      {question: 'Are all niche workflows included automatically without scoping?', answer: 'No—every custom workflow is carefully documented, scoped, and engineered around your exact requirements.'},
      {question: 'Do you help migrate existing Excel masters?', answer: 'Yes, cleaning and importing customer, supplier, and SKU lists cleanly.'},
      {question: 'Is training provided after deployment?', answer: 'Yes, staff onboarding walkthroughs and operational guidance are included.'},
      {question: 'How do you protect company data?', answer: 'Through role access controls, parameterized SQL queries, HTTPS encryption, and backup routines.'},
      {question: 'How do we discuss requirements and pricing?', answer: 'Book a discovery session through Get a Quote or call +91 8296887643.'},
    ],
  },
  {
    slug: 'erp-software-development',
    name: 'ERP Software Development',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'ERP Software Development | Bhilai, Raipur, Chhattisgarh & India | Klyia Technology',
    metaDescription:
      'Modular custom ERP software for procurement, inventory, production, dispatch, GST billing, and management reporting across Indian industries.',
    heroSubtitle:
      'Unify procurement, multi-warehouse inventory, manufacturing or EPC stages, dispatch, GST billing, and owner oversight in one reliable platform.',
    introFocus:
      'Enterprise Resource Planning (ERP) aligns purchasing, stock control, production or project execution, dispatch, and billing inside one connected system—giving management real-time operational clarity instead of delayed end-of-month surprises.',
    whyNeeded: [
      'Isolated billing and inventory tools hide stock leaks, pending POs, and overdue receivables.',
      'Heavy multinational ERPs are costly and difficult for mid-sized Indian plants to adapt.',
      'Directors need live production, dispatch, and cashflow summaries in one place.',
    ],
    challenges: [
      'Purchase orders, GRNs, and vendor invoices failing to match accurately.',
      'Unreconciled stock across sheds, yards, or regional branches.',
      'Days spent compiling daily MIS reports manually.',
    ],
    solutions: [
      'Department-connected ERP modules built around Indian GST, dual-unit weights, and regional workflows.',
      'Role-tailored dashboards for supervisors, warehouse keepers, accounts, and directors.',
      'Structured phased implementation minimizing operational disruption.',
    ],
    features: [
      {title: 'Purchase & GRN Control', detail: 'Requisitions, rate comparisons, purchase orders, and inward receipts.'},
      {title: 'Inventory & Batch Control', detail: 'Multi-godown balances, unit conversions, and reorder alerts.'},
      {title: 'Dispatch & GST Billing', detail: 'Sales orders, challans, freight tracking, and tax invoices.'},
      {title: 'Management MIS Reports', detail: 'Live views over stock value, pending dispatches, and receivables.'},
    ],
    benefits: [
      'Replaces fragmented spreadsheets with real-time department synchronization.',
      'Reduces stock wastage, duplicate ordering, and billing delays.',
      'Built cleanly around Indian commercial and GST realities.',
    ],
    technologies: ['Modular TypeScript Architecture', 'PostgreSQL / SQLite', 'React ERP UI', 'PDF/Excel Engine & WhatsApp Hooks'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Weighbridge, rolling batches, TMT/MS stock, and dispatch ERP.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'EPC milestones, BOM, subsidy logs, and AMC tracking.'},
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'BOM planning, WIP shifts, and quality inspection workflows.'},
    ],
    relatedServiceSlugs: ['manufacturing-erp', 'solar-erp-software', 'wholesale-distribution-erp', 'inventory-management-software'],
    relatedBlogSlugs: ['what-is-erp-software-and-how-does-it-help-businesses', 'erp-software-for-steel-trading-and-manufacturing'],
    faqs: [
      {question: 'How is an ERP different from simple accounting software?', answer: 'Accounting logs financial vouchers after transactions; ERP controls live operations—procurement, warehouse stock, production/project steps, dispatch, approvals, and billing together.'},
      {question: 'Can we start with selected modules first?', answer: 'Yes. Modular rollout lets you deploy Inventory + Billing first and layer Production or CRM later.'},
      {question: 'Is every industry workflow included in a base ERP package?', answer: 'No—specialized rules such as weighbridge connections or subsidy trackers are scoped transparently as custom requirements.'},
      {question: 'Does it support multiple branches or factories?', answer: 'Yes, multi-location stock and user role permissions are built cleanly.'},
      {question: 'Can weights in MT/kg and bundle/piece counts track simultaneously?', answer: 'Yes, essential for steel, pipe, and industrial trades.'},
      {question: 'Can dispatch alerts be triggered via WhatsApp?', answer: 'Yes, via optional WhatsApp Business automation.'},
      {question: 'Do you support on-site ERP workshops in Bhilai, Durg, and Raipur?', answer: 'Yes, alongside remote onboarding across Chhattisgarh and India.'},
      {question: 'How do we scope an ERP build?', answer: 'Submit your modules and team size on Get a Quote.'},
    ],
  },
  {
    slug: 'crm-software-development',
    name: 'CRM Software Development',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'CRM Software Development | Lead, Quote & Sales Pipeline Control | Klyia Technology',
    metaDescription:
      'Custom CRM software built to organize website, WhatsApp, and field sales leads, quotations, follow-ups, and team accountability.',
    heroSubtitle:
      'Capture every enquiry, track every quotation, and ensure consistent follow-ups with a streamlined CRM built around your sales team.',
    introFocus:
      'Businesses lose substantial revenue simply when enquiries sit unreturned inside personal messaging threads or paper diaries. Custom CRM software centralizes lead intake, assigns ownership, schedules follow-ups, and logs every quote.',
    whyNeeded: [
      'Managers cannot see pending quotes or stagnant leads clearly.',
      'Staff turnover risks losing historical client relationships.',
      'B2B and EPC sales involve multi-week follow-ups across sites and revisions.',
    ],
    challenges: [
      'Overcomplicated enterprise CRMs ignored by busy sales executives.',
      'Manual copying from website forms and WhatsApp.',
      'Disconnected quote tracking and billing conversion.',
    ],
    solutions: [
      'Clean, fast CRM pipelines aligned with exact sales stages.',
      'Automatic intake from website enquiry forms and WhatsApp hooks.',
      'Daily follow-up queues, quote logs, and direct handover to ERP.',
    ],
    features: [
      {title: 'Unified Enquiry Inbox', detail: 'Website, phone, trade-show, and WhatsApp leads in one queue.'},
      {title: 'Custom Stage Pipelines', detail: 'Tailored stages matching B2B, EPC, or dealer workflows.'},
      {title: 'Follow-Up Scheduling', detail: 'Timely daily reminders preventing forgotten prospects.'},
      {title: 'Quotation Tracking', detail: 'Log quote revisions and win/loss outcomes cleanly.'},
    ],
    benefits: [
      'Keeps complete customer history inside company ownership.',
      'Improves response speed and lead conversion consistency.',
      'Links marketing sources directly to sales pipelines.',
    ],
    technologies: ['React & TypeScript', 'SQL Databases', 'Webhook & WhatsApp Intake', 'Role Permissions'],
    industries: [
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Site visits, unit interest, and broker follow-ups.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Lead-to-survey and proposal pipelines.'},
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Daily rate enquiries and dealer account management.'},
    ],
    relatedServiceSlugs: ['erp-software-development', 'whatsapp-business-automation', 'customer-enquiry-automation', 'business-management-software'],
    faqs: [
      {question: 'Why choose custom CRM over generic monthly subscriptions?', answer: 'Avoids escalating per-user costs, removes clutter your team ignores, and connects natively to your website and ERP.'},
      {question: 'Do website enquiry forms save directly into the CRM?', answer: 'Yes, automatically via secure API.'},
      {question: 'Can field executives log notes from smartphones?', answer: 'Yes, responsive mobile screens work seamlessly.'},
      {question: 'Can sales reps only see their assigned leads?', answer: 'Yes, via strict role access control.'},
      {question: 'Does it track quote revisions?', answer: 'Yes.'},
      {question: 'Can follow-up reminders connect with WhatsApp?', answer: 'Yes, optionally integrated via official API.'},
      {question: 'Can existing Excel contact sheets be imported?', answer: 'Yes.'},
      {question: 'How do we discuss CRM requirements?', answer: 'Share your sales stages via Get a Quote.'},
    ],
  },
  {
    slug: 'inventory-management-software',
    name: 'Inventory Management Software',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'Inventory Management Software | Multi-Warehouse & Stock Control | Klyia Technology',
    metaDescription:
      'Custom inventory management software for raw materials, finished stock, batch/heat tracking, reorder alerts, and multi-godown reconciliation.',
    heroSubtitle:
      'Real-time stock clarity across sheds, warehouses, raw inputs, and finished items—built for dual units, batches, and audit control.',
    introFocus:
      'Inaccurate inventory ties up cash in slow items while stalling dispatches on fast-moving SKUs. Custom inventory software connects Goods Receipt, transfers, production consumption, and outwards dispatch cleanly.',
    whyNeeded: [
      'Manual stock cards drift quickly out of sync across shifts.',
      'Missing reorder thresholds causes urgent procurement scrambles.',
      'Inter-godown movements and returns create billing disputes.',
    ],
    challenges: [
      'Dual measurement tracking (MT/kg alongside pieces/bundles).',
      'Tracing specific coils, batches, or lots accurately.',
      'Reconciling physical stock-takes without spreadsheet chaos.',
    ],
    solutions: [
      'Structured inwards, transfers, adjustments, and outwards logs.',
      'Configurable minimum-stock alerts and dead-stock ageing reports.',
      'Optional barcode/QR workflow support.',
    ],
    features: [
      {title: 'Multi-Godown Balances', detail: 'Live quantities per plant, yard, shed, or branch.'},
      {title: 'Dual Units & Grades', detail: 'Track weight, length, bundle, batch, or serial attributes.'},
      {title: 'Reorder & Ageing Views', detail: 'Spot shortages early and identify slow-moving stock.'},
      {title: 'Audited Stock Logs', detail: 'Full history of who adjusted or transferred stock and when.'},
    ],
    benefits: [
      'Prevents costly stock-outs and excess inventory lock-up.',
      'Improves warehouse team accountability.',
      'Speeds up monthly financial valuation.',
    ],
    technologies: ['SQL Transactional Ledgers', 'Barcode / QR Readiness', 'Express REST APIs', 'Exportable Stock Reports'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Section, grade, thickness, and yard stock visibility.'},
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Batch expiry and warehouse picking efficiency.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Fast SKU tracking with minimum reorder rules.'},
    ],
    relatedServiceSlugs: ['erp-software-development', 'billing-accounting-software', 'wholesale-distribution-erp', 'manufacturing-erp'],
    faqs: [
      {question: 'Can we track inventory across multiple warehouses?', answer: 'Yes, including inter-godown transfer vouchers.'},
      {question: 'Can steel items track both weight and piece counts?', answer: 'Yes, dual-unit tracking is specifically supported.'},
      {question: 'Are raw materials and finished goods both supported?', answer: 'Yes, including BOM issue and finished production receipt.'},
      {question: 'Can staff run physical stock verification?', answer: 'Yes, using reconciliation sheets with manager approval.'},
      {question: 'Does it connect with GST billing and purchase?', answer: 'Yes, unified inside ERP workflows.'},
      {question: 'Can barcode or QR tags be printed and scanned?', answer: 'Yes, scoped cleanly as required.'},
      {question: 'Are stock edits logged safely?', answer: 'Yes, preventing silent unrecorded deletions.'},
      {question: 'How do we discuss our SKU structure?', answer: 'Share item categories via Get a Quote.'},
    ],
  },
  {
    slug: 'billing-accounting-software',
    name: 'Billing & Accounting Software',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'Billing & Accounting Software | GST Invoicing & Party Ledgers | Klyia Technology',
    metaDescription:
      'Custom GST billing, proforma invoices, delivery challans, credit controls, and receivables tracking engineered for Indian businesses.',
    heroSubtitle:
      'Accurate GST billing, challan-to-invoice conversion, credit controls, and receivables tracking linked cleanly to operations.',
    introFocus:
      'Fast, error-free invoicing keeps cashflow moving cleanly. Custom billing software eliminates repetitive data entry between dispatch gates and accounts while keeping HSN/SAC, freight, GST splits, and party ledgers accurate.',
    whyNeeded: [
      'Manual invoicing delays collections and creates tax errors.',
      'Lack of real-time overdue visibility hides ageing receivables.',
      'Re-typing dispatch challans into separate accounting tools wastes staff time.',
    ],
    challenges: [
      'Managing freight, loading, discounts, and partial dispatches cleanly.',
      'Missing automated credit-limit alerts before billing overdue buyers.',
      'Slow end-of-month CA reconciliation.',
    ],
    solutions: [
      'One-click conversion from Quotes or Challans to GST Tax Invoices.',
      'Party ledgers tracking receipts, notes, and overdue ageing buckets.',
      'Clean CSV/Excel sales and purchase registers for Chartered Accountants.',
    ],
    features: [
      {title: 'GST Tax Invoicing', detail: 'CGST, SGST, IGST, HSN/SAC, and branded PDF output.'},
      {title: 'Challan Reconciliation', detail: 'Merge or convert dispatch challans into final bills seamlessly.'},
      {title: 'Credit Limit Guards', detail: 'Flag overdue parties automatically before dispatch.'},
      {title: 'Payment & Ageing Logs', detail: 'Track NEFT, RTGS, UPI, cheque clearances, and dues.'},
    ],
    benefits: [
      'Speeds up daily dispatch-to-billing execution.',
      'Tightens control over receivables and customer credit.',
      'Simplifies monthly GST return preparation.',
    ],
    technologies: ['SQL Ledger Integrity', 'PDF Invoice Generator', 'Audit Trails', 'WhatsApp Bill Sharing Hooks'],
    industries: [
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Rapid multi-item route invoicing.'},
      {label: 'Fruit & Vegetable Mandis', slug: 'fruit-vegetable-mandis', note: 'Grower patti slips and mandi commission bills.'},
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Weight-linked GST bills and freight calculations.'},
    ],
    relatedServiceSlugs: ['erp-software-development', 'inventory-management-software', 'mandi-fruit-trading-software', 'wholesale-distribution-erp'],
    faqs: [
      {question: 'Does it support CGST, SGST, IGST, and HSN/SAC codes?', answer: 'Yes, configured strictly around Indian GST structures.'},
      {question: 'Can generated invoices be sent over WhatsApp?', answer: 'Yes, via integrated notification hooks.'},
      {question: 'Can invoices deduct warehouse stock automatically?', answer: 'Yes, when connected with inventory workflows.'},
      {question: 'Are CA-friendly Excel/CSV tax registers included?', answer: 'Yes.'},
      {question: 'Are partial payments and cheque dates tracked?', answer: 'Yes, cleanly inside party ledgers.'},
      {question: 'Can e-Invoice or e-Way bill APIs be scoped?', answer: 'Yes, via authorized GSP APIs as custom scope.'},
      {question: 'Can discounts require manager sign-off?', answer: 'Yes.'},
      {question: 'How do we discuss custom billing formats?', answer: 'Contact us via Get a Quote.'},
    ],
  },
  {
    slug: 'manufacturing-erp',
    name: 'Manufacturing ERP',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'Manufacturing ERP Software | BOM, Production & QC | Klyia Technology',
    metaDescription:
      'Custom Manufacturing ERP covering Bill of Materials (BOM), shift production logs, raw-material control, QC checks, and plant dispatch.',
    heroSubtitle:
      'Synchronize raw-material procurement, BOM formulas, shift production logs, scrap tracking, and quality checks on the plant floor.',
    introFocus:
      'Manufacturing profitability depends on knowing exact raw inputs consumed, shift yields achieved, scrap recovered, and batch quality verified before dispatch. Our Manufacturing ERP fits SME and mid-sized plants practically.',
    whyNeeded: [
      'Untracked material wastage and scrap shrink plant margins quietly.',
      'Supervisors struggle coordinating raw stock with urgent order priorities.',
      'Paper QC logs fail batch traceability during buyer audits.',
    ],
    challenges: [
      'Invisible Work-in-Progress (WIP) quantities across factory stages.',
      'Inaccurate unit cost calculations per batch.',
      'Delayed coordination between purchase and shop floor.',
    ],
    solutions: [
      'BOM-driven production orders deducting raw inputs and recording finished yields.',
      'Shift logs capturing output, downtime notes, and scrap ratios.',
      'Quality inspection gates ahead of finished stock dispatch.',
    ],
    features: [
      {title: 'Bill of Materials (BOM)', detail: 'Structured raw material and consumable recipes.'},
      {title: 'Work Orders & Shift Yields', detail: 'Planned vs. actual output per machine, line, or shift.'},
      {title: 'Scrap & Wastage Logs', detail: 'Track recoverable scrap and process loss transparently.'},
      {title: 'Quality Verification', detail: 'Record test readings before batch release.'},
    ],
    benefits: [
      'Tightens control over raw-material consumption and yield.',
      'Improves coordination between sales, procurement, and production.',
      'Delivers reliable batch traceability.',
    ],
    technologies: ['Modular Node/SQL ERP', 'React Shop-Floor Views', 'Barcode / Weighbridge Readiness', 'MIS Dashboards'],
    industries: [
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Fabrication, machining, and assembly lines.'},
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Rolling mills, structural plants, and foundries.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Component assembly and kitting.'},
    ],
    relatedServiceSlugs: ['erp-software-development', 'inventory-management-software', 'custom-software-development', 'database-api-integration'],
    relatedBlogSlugs: ['what-is-erp-software-and-how-does-it-help-businesses'],
    faqs: [
      {question: 'Is this suited for plants in Bhilai, Raipur, and Chhattisgarh?', answer: 'Yes—designed cleanly for regional SME and mid-sized manufacturing plants.'},
      {question: 'Can it handle batch production and scrap tracking?', answer: 'Yes, batch inputs, yields, and scrap logs are core features.'},
      {question: 'Are machine/weighbridge integrations available?', answer: 'Hardware integrations depend on specific interfaces and are scoped transparently as custom engineering.'},
      {question: 'Can supervisors enter shift counts on shop-floor tablets?', answer: 'Yes.'},
      {question: 'Does BOM connect directly to raw material procurement?', answer: 'Yes.'},
      {question: 'Can multi-stage fabrication be modeled?', answer: 'Yes, configured around your specific routing stages.'},
      {question: 'Can it export vouchers to existing accounting tools?', answer: 'Yes.'},
      {question: 'How do we arrange a plant consultation?', answer: 'Book an on-site or remote walkthrough via Get a Quote.'},
    ],
  },
  {
    slug: 'solar-erp-software',
    name: 'Solar ERP Software',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'Solar ERP Software for Solar EPC Companies | Klyia Technology',
    metaDescription:
      'Dedicated Solar ERP software managing leads, rooftop site surveys, subsidy/DISCOM stages, BOM serials, installations, and AMC scheduling.',
    heroSubtitle:
      'End-to-end project control built specifically for solar EPC companies—from initial kW lead and site survey to net metering and AMC care.',
    introFocus:
      'Solar EPC teams juggle sales leads, rooftop engineering surveys, subsidy and net-metering filings, inverter/panel serial tracking, installation crews, and long-term AMC cleaning/service alerts—all across scattered spreadsheets unless unified inside a Solar ERP.',
    whyNeeded: [
      'Pending DISCOM or subsidy steps easily slip without clear milestone tracking.',
      'Field engineers need structured mobile checklists for roof photos and shading notes.',
      'Warranty management demands clean panel and inverter serial history per customer.',
    ],
    challenges: [
      'Communication gaps between sales, survey engineers, documentation staff, and installers.',
      'Missing BOS components delaying on-site commissioning.',
      'Forgotten post-installation AMC visits.',
    ],
    solutions: [
      'Stage-gated EPC pipeline from Enquiry → Survey → Proposal → Subsidy/Net-Metering → Installation → Commissioning → AMC.',
      'Material BOM & equipment serial tracking assigned directly to customer sites.',
      'Automated WhatsApp milestone updates keeping customers confident.',
    ],
    features: [
      {title: 'Site Survey & kW Logs', detail: 'Capture roof dimensions, sanctioned load, and photo uploads.'},
      {title: 'Subsidy & DISCOM Tracker', detail: 'Monitor portal applications, feasibility, and meter installation status.'},
      {title: 'BOM & Serial Mapping', detail: 'Track solar modules, inverters, cables, and warranty serials per site.'},
      {title: 'AMC Service Alerts', detail: 'Schedule periodic cleaning and maintenance tickets cleanly.'},
    ],
    benefits: [
      'Prevents documentation delays from holding up payments.',
      'Eliminates missing material trips during installation days.',
      'Improves post-installation AMC revenue and service responsiveness.',
    ],
    technologies: ['Mobile-Ready React Web App', 'SQL Project Database', 'Document Uploads', 'WhatsApp Milestone Notifications'],
    industries: [
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Residential rooftop & commercial/industrial solar EPC contractors.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Solar integration tracking for housing projects.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Solar hardware distributors.'},
    ],
    relatedServiceSlugs: ['erp-software-development', 'crm-software-development', 'whatsapp-business-automation', 'workflow-automation'],
    relatedBlogSlugs: ['solar-epc-erp-and-crm-software-guide'],
    faqs: [
      {question: 'Who uses Solar ERP Software?', answer: 'Solar EPC contractors, residential rooftop installers, and commercial solar integrators.'},
      {question: 'Can field teams submit site survey forms from smartphones?', answer: 'Yes, responsive screens work on site visits.'},
      {question: 'Does it track subsidy and net-metering steps?', answer: 'Yes, structured stages track documentation and DISCOM milestones cleanly.'},
      {question: 'Can module and inverter serial numbers be logged per client?', answer: 'Yes, building instant warranty traceability.'},
      {question: 'Can clients get WhatsApp updates on project progress?', answer: 'Yes, via integrated WhatsApp workflows.'},
      {question: 'Does it manage AMC contracts after installation?', answer: 'Yes.'},
      {question: 'Can solar quotation formats match our branding?', answer: 'Yes.'},
      {question: 'How do we discuss Solar ERP for our company?', answer: 'Use Get a Quote or WhatsApp (+91 8296887643).'},
    ],
  },
  {
    slug: 'wholesale-distribution-erp',
    name: 'Wholesale & Distribution ERP',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'Wholesale & Distribution ERP Software | Dealer & Route Control | Klyia Technology',
    metaDescription:
      'Custom wholesale and distribution ERP with field order apps, dealer portals, credit controls, batch picking, and GST invoicing.',
    heroSubtitle:
      'Streamline multi-brand SKU stock, salesman order capture, retailer credit checks, and daily route dispatch in one unified ERP.',
    introFocus:
      'High-volume distribution relies on fast order capture, accurate picking sheets, strict retailer credit oversight, and rapid route invoicing—where even small friction slows daily cash cycles.',
    whyNeeded: [
      'Handwritten order sheets over messaging apps create warehouse picking errors.',
      'Unchecked overdue retailer balances tie up working capital.',
      'Complex scheme discounts and rate slabs slow manual billing desks.',
    ],
    challenges: [
      'Late evening billing backlogs delaying delivery vehicles.',
      'Inaccurate outstanding statements during field salesman collections.',
      'Blind spots on slow-moving or near-expiry batches.',
    ],
    solutions: [
      'Mobile-ready order entry synced live to warehouse stock.',
      'Automated dealer price tiers, credit limit holds, and FIFO batch allocation.',
      'Route-wise loading summaries and GST invoicing.',
    ],
    features: [
      {title: 'Field Sales Order Capture', detail: 'Live stock visibility and quick ordering from retail beats.'},
      {title: 'Price Slabs & Credit Limits', detail: 'Automated tier discounts and overdue credit blocks.'},
      {title: 'Route Loading Summaries', detail: 'Vehicle-wise item picking and consolidated dispatch slips.'},
      {title: 'Collection & Ageing Logs', detail: 'Track salesman recoveries and pending party dues.'},
    ],
    benefits: [
      'Speeds up daily order-to-dispatch turnaround.',
      'Protects cashflow through automated credit discipline.',
      'Reduces picking mistakes and stock returns.',
    ],
    technologies: ['Responsive Web & Mobile UI', 'SQL Transactional DB', 'Route Invoice Engine', 'WhatsApp Payment Reminders'],
    industries: [
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Regional FMCG, hardware, pharma, and industrial distributors.'},
      {label: 'Agriculture & Agri-business', slug: 'agriculture-agribusiness', note: 'Fertilizer, seed, and agro-input dealer networks.'},
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Regional steel stockists supplying dealers.'},
    ],
    relatedServiceSlugs: ['inventory-management-software', 'billing-accounting-software', 'erp-software-development', 'crm-software-development'],
    faqs: [
      {question: 'Can salesmen enter orders directly from customer shops?', answer: 'Yes, via mobile browser access synced to the godown.'},
      {question: 'Can orders pause automatically if a party crosses their credit limit?', answer: 'Yes, configurable warnings or approval holds protect receivables.'},
      {question: 'Are batch and expiry dates tracked?', answer: 'Yes, supporting FIFO/FEFO allocation workflows.'},
      {question: 'Does it print consolidated vehicle loading sheets?', answer: 'Yes.'},
      {question: 'Can dealers get an online self-service login?', answer: 'Yes, as an optional dealer portal module.'},
      {question: 'Are GST rates and schemes applied automatically?', answer: 'Yes.'},
      {question: 'Can overdue reminders trigger over WhatsApp?', answer: 'Yes.'},
      {question: 'How do we discuss our SKU and route count?', answer: 'Reach out via Get a Quote.'},
    ],
  },
  {
    slug: 'mandi-fruit-trading-software',
    name: 'Mandi & Fruit Trading Software',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'Mandi & Fruit Trading Software | Arrival, Lot, Crate & Patti ERP | Klyia Technology',
    metaDescription:
      'Specialized mandi and fruit trading software handling morning arrival registers, lot auctions, commission/hamali math, crate tracking, and farmer patti.',
    heroSubtitle:
      'Built for morning mandi speeds—manage vehicle arrivals, partial lot sales, commission/hamali rules, crate balances, and instant pattis.',
    introFocus:
      'Fruit, vegetable, and agro-mandi commission agents settle hundreds of lots, varying rates, freight advances, hamali charges, and plastic crates daily before noon. Purpose-built software eliminates calculation mistakes and evening ledger backlogs.',
    whyNeeded: [
      'Manual paper slips produce costly arithmetic mistakes and party disputes.',
      'Lost crates and bardana quietly erode seasonal profits.',
      'Reconciling farmer payouts vs. buyer ugrahi manually takes hours nightly.',
    ],
    challenges: [
      'Standard corporate ERPs being far too slow for morning auction counters.',
      'Tracking splits across single truckloads sold to dozens of retail buyers.',
      'Weak mandi Wi-Fi interrupting cloud-only tools.',
    ],
    solutions: [
      'Keyboard-accelerated billing built specifically for mandi terminology.',
      'Unified grower patti, buyer billing, crate/bardana register, and ugrahi book.',
      'Offline-resilient desktop or local-first options with WhatsApp bill sharing.',
    ],
    features: [
      {title: 'Rapid Arrival & Lot Sales', detail: 'Split vehicle lots across multiple buyers cleanly in seconds.'},
      {title: 'Instant Farmer Patti', detail: 'Auto-calculates commission, mandi fee, hamali, freight, and net payout.'},
      {title: 'Crate & Bardana Register', detail: 'Live party-wise balances of crates/bags issued vs. returned.'},
      {title: 'Ugrahi & Cashbook', detail: 'Track cash/UPI collections and overdue buyer statements.'},
    ],
    benefits: [
      'Cuts daily auction accounting time dramatically.',
      'Prevents costly crate losses.',
      'Builds instant transparent documentation for farmers and buyers.',
    ],
    technologies: ['Keyboard-Fast Desktop/Web UI', 'Local/Cloud SQLite Ledger', 'Thermal & A4 Printing', 'WhatsApp Patti Alerts'],
    industries: [
      {label: 'Fruit & Vegetable Mandis', slug: 'fruit-vegetable-mandis', note: 'Adatiyas, fruit commission agents, and cold-room traders.'},
      {label: 'Agriculture & Agri-business', slug: 'agriculture-agribusiness', note: 'Grain/anaj mandi traders and aggregators.'},
      {label: 'Logistics & Transportation', slug: 'logistics-transportation', note: 'Freight advances and mandi transport settlements.'},
    ],
    relatedServiceSlugs: ['billing-accounting-software', 'desktop-application-development', 'inventory-management-software', 'whatsapp-business-automation'],
    faqs: [
      {question: 'Is it fast enough for early-morning mandi auctions?', answer: 'Yes—optimized for rapid keyboard entry rather than slow multi-step mouse clicks.'},
      {question: 'Does it track empty plastic crates and gunny bags?', answer: 'Yes, every slip updates party crate/bardana balances automatically.'},
      {question: 'Can it work reliably if mandi internet drops?', answer: 'Yes, via local/desktop or offline-first configurations.'},
      {question: 'Can we customize commission %, hamali, and mandi fees?', answer: 'Yes, configured around your exact local mandi rules.'},
      {question: 'Can patti slips and buyer statements be shared on WhatsApp?', answer: 'Yes.'},
      {question: 'Does it track farmer transport advances?', answer: 'Yes, deducted automatically during patti settlement.'},
      {question: 'Do you support mandis across Chhattisgarh and India?', answer: 'Yes, with direct consultation available in Bhilai, Durg, Raipur, and statewide.'},
      {question: 'How do we arrange a workflow demo?', answer: 'Contact us on WhatsApp (+91 8296887643) or Get a Quote.'},
    ],
  },
  {
    slug: 'desktop-application-development',
    name: 'Desktop Application Development',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'Desktop Application Development | Offline & Plant Software | Klyia Technology',
    metaDescription:
      'Custom desktop software for Windows engineered for offline resilience, local printer speed, and industrial peripheral connectivity.',
    heroSubtitle:
      'Reliable offline-capable desktop software engineered for factory dispatch gates, weighbridge cabins, and rapid billing counters.',
    introFocus:
      'When plants or counters face spotty internet or depend on direct serial-port devices and thermal printers, dedicated desktop applications keep billing and stock flowing uninterrupted.',
    whyNeeded: [
      'Gate dispatches and counter billing cannot halt when broadband drops.',
      'Direct thermal receipt and weighbridge serial communication need native OS hooks.',
      'Operators running fixed terminals rely on instant zero-lag keyboard navigation.',
    ],
    challenges: [
      'Web browsers restricting COM/serial hardware communication.',
      'Cloud tabs stalling during ISP glitches.',
      'Aging legacy desktop tools failing on modern Windows PCs.',
    ],
    solutions: [
      'Clean TypeScript desktop shells backed by local SQLite persistence.',
      'Hardware/printer hooks scoped around exact plant devices.',
      'Optional background cloud sync to director dashboards.',
    ],
    features: [
      {title: 'Offline-First Operation', detail: 'Zero interruption to billing or gate entries during internet outages.'},
      {title: 'Silent Local Printing', detail: 'Fast printing on thermal POS, dot-matrix, or A4 printers.'},
      {title: 'Hybrid Cloud Sync', detail: 'Optional sync pushing daily summaries to owner dashboards.'},
      {title: 'Modern Windows Support', detail: 'Reliable execution on current 64-bit Windows workstations.'},
    ],
    benefits: [
      'Uninterrupted gate and counter uptime.',
      'Upgrades fragile legacy Windows software without slowing operators down.',
      'Bridges local shop-floor hardware cleanly.',
    ],
    technologies: ['TypeScript Desktop Shell', 'Local SQLite Storage', 'ESC-POS / Laser Print', 'Optional REST Sync'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Gate dispatch and weighbridge terminal software.'},
      {label: 'Fruit & Vegetable Mandis', slug: 'fruit-vegetable-mandis', note: 'High-speed offline mandi counter billing.'},
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Rapid barcode POS counters.'},
    ],
    relatedServiceSlugs: ['custom-software-development', 'mandi-fruit-trading-software', 'database-api-integration', 'erp-software-development'],
    faqs: [
      {question: 'When should we choose a desktop app over a cloud web app?', answer: 'When reliable offline execution, zero-lag local counter printing, or direct local hardware/COM connections are essential.'},
      {question: 'Can a desktop app sync summaries to an online dashboard for owners?', answer: 'Yes, via scheduled hybrid sync.'},
      {question: 'Can you replace an old FoxPro or VB6 application cleanly?', answer: 'Yes, migrating existing master lists and opening balances.'},
      {question: 'Can multiple computers inside one office share the desktop database?', answer: 'Yes, over a local LAN database.'},
      {question: 'Are weighbridge integrations built automatically?', answer: 'Hardware integrations are scoped specifically around your exact indicator model and serial protocol.'},
      {question: 'How are local backups handled?', answer: 'With automated local plus optional cloud/external drive backup prompts.'},
      {question: 'Are per-PC subscription fees charged forever?', answer: 'No—custom builds follow clear agreed project terms.'},
      {question: 'How do we discuss a desktop build?', answer: 'Share your workflow and peripheral details via Get a Quote.'},
    ],
  },
  {
    slug: 'business-management-software',
    name: 'Business Management Software',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'Business Management Software | Approvals, Tasks & Insights | Klyia Technology',
    metaDescription:
      'Centralized business management software coordinating enquiries, team tasks, expenses, approvals, renewals, and director reporting.',
    heroSubtitle:
      'Give owners unified daily control across leads, team tasks, expenses, approvals, and contracts without overwhelming staff.',
    introFocus:
      'Growing service companies, EPC contractors, and trading houses outgrow spreadsheets long before needing massive factory ERPs. Business Management Software keeps teams aligned cleanly.',
    whyNeeded: [
      'Management wastes hours chasing routine status across calls and chat threads.',
      'Approvals for petty cash, expenses, or special discounts lack clear tracking.',
      'Important contract or AMC renewals get missed accidentally.',
    ],
    challenges: [
      'High staff resistance to bloated enterprise software.',
      'Scattered project attachments and historical quotations.',
      'Zero consolidated daily executive overview.',
    ],
    solutions: [
      'Clean operational workspace focused on daily actionable priorities.',
      'Lightweight modules covering tasks, expenses, approvals, documents, and CRM.',
      'Responsive screens easy for field and office teams alike.',
    ],
    features: [
      {title: 'Executive Overview', detail: 'Daily counts of open tasks, pending approvals, enquiries, and collections.'},
      {title: 'Expense & Approval Flows', detail: 'Structured requests with receipt uploads and sign-off logs.'},
      {title: 'Task & Renewal Tracking', detail: 'Assign responsibilities with clear deadlines and alerts.'},
      {title: 'Organized Client Dossiers', detail: 'Keep documents, quotes, and notes together per client.'},
    ],
    benefits: [
      'Reduces daily micromanagement for business owners.',
      'Improves accountability across branches.',
      'Forms a clean base ready for ERP expansion later.',
    ],
    technologies: ['React & TypeScript', 'Express APIs', 'SQL Databases', 'WhatsApp & Email Digest Hooks'],
    industries: [
      {label: 'Professional Services', slug: 'professional-services', note: 'Client deliverables, retainers, and billing milestones.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Site expense approvals and vendor logs.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Coordinating sales, survey, and installation teams.'},
    ],
    relatedServiceSlugs: ['custom-software-development', 'crm-software-development', 'erp-software-development', 'workflow-automation'],
    faqs: [
      {question: 'How does this differ from full Manufacturing ERP?', answer: 'It streamlines management oversight, tasks, approvals, leads, and expenses quickly without shop-floor machinery modules.'},
      {question: 'Can we start small and add inventory or billing later?', answer: 'Yes, cleanly expandable.'},
      {question: 'Works smoothly on mobile browsers?', answer: 'Yes.'},
      {question: 'Can attachments like PDF bills or site photos be stored?', answer: 'Yes.'},
      {question: 'Can owners receive daily summary alerts?', answer: 'Yes, configurable via WhatsApp or email hooks.'},
      {question: 'Can existing Excel trackers be converted cleanly?', answer: 'Yes.'},
      {question: 'Is role access strictly separated between staff and directors?', answer: 'Yes.'},
      {question: 'How do we discuss our operational workflows?', answer: 'Reach out via Contact Us or Get a Quote.'},
    ],
  },
  {
    slug: 'saas-application-development',
    name: 'SaaS Application Development',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'SaaS Application Development | Multi-Tenant Platforms | Klyia Technology',
    metaDescription:
      'Build reliable multi-tenant SaaS products featuring workspace isolation, onboarding flows, subscription gating, APIs, and scalable deployment.',
    heroSubtitle:
      'Engineer scalable, multi-tenant software products ready for commercial subscribers—built from clean MVP through production growth.',
    introFocus:
      'Turning deep domain knowledge into commercial Software-as-a-Service (SaaS) requires disciplined tenant isolation, smooth onboarding, predictable APIs, and responsive interfaces.',
    whyNeeded: [
      'Multi-customer products require strict separation of tenant data from day one.',
      'Poor early prototypes force expensive full rewrites once paying users onboard.',
      'Subscribers expect fast interfaces and dependable uptime.',
    ],
    challenges: [
      'Data isolation bugs risking cross-tenant leaks.',
      'Overbuilt complexity delaying MVP launch.',
      'Disconnected billing, trials, and user permissions.',
    ],
    solutions: [
      'Clean TypeScript monolith-first or modular API architectures.',
      'Workspace-scoped SQL schemas, role permissions, and billing webhooks.',
      'Integrated SEO product marketing sites alongside the core app.',
    ],
    features: [
      {title: 'Strict Tenant Isolation', detail: 'Scoped relational queries keeping every organization private.'},
      {title: 'Self-Serve Onboarding', detail: 'Team invites, workspace settings, and role permissions.'},
      {title: 'Plan & Billing Hooks', detail: 'Subscription tiers connected cleanly to payment gateways.'},
      {title: 'API & Integration Layer', detail: 'Clean endpoints ready for subscriber integrations.'},
    ],
    benefits: [
      'Launches focused MVPs quickly on maintainable engineering foundations.',
      'Supports confident subscriber onboarding.',
      'Combines marketing SEO site and SaaS product seamlessly.',
    ],
    technologies: ['React & TypeScript', 'Node.js & Express', 'PostgreSQL Multi-Tenant Schema', 'Cloud Container Hosting'],
    industries: [
      {label: 'Professional Services', slug: 'professional-services', note: 'Productizing specialized domain workflows into SaaS.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Multi-institute assessment or portal SaaS.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Multi-clinic practice scheduling tools.'},
    ],
    relatedServiceSlugs: ['custom-web-application-development', 'ui-ux-design', 'database-api-integration', 'cloud-solutions'],
    faqs: [
      {question: 'Can we launch a lean SaaS MVP first?', answer: 'Yes—focused MVP scoping validates core workflows quickly.'},
      {question: 'How is tenant data kept isolated?', answer: 'Strict workspace ID scoping and server-side permission checks across every query.'},
      {question: 'Can Indian payment gateways manage plans?', answer: 'Yes, via official gateway APIs.'},
      {question: 'Do we retain full IP ownership of our SaaS codebase?', answer: 'Yes, per agreed project terms.'},
      {question: 'Can Klyia build the public marketing website too?', answer: 'Yes, SSR marketing pages plus SaaS app under unified architecture.'},
      {question: 'Can AI features run inside our SaaS safely?', answer: 'Yes, via server-side Gemini or AI pipelines with rate controls.'},
      {question: 'Where should a SaaS app be hosted?', answer: 'On managed cloud servers/containers with managed PostgreSQL.'},
      {question: 'How do we discuss a SaaS build?', answer: 'Share your product scope via Get a Quote.'},
    ],
  },
  {
    slug: 'database-api-integration',
    name: 'Database & API Integration',
    categoryId: 'software-development',
    categoryLabel: 'Software Development',
    seoTitle: 'Database Architecture & API Integration Services | Klyia Technology',
    metaDescription:
      'Unify disconnected websites, CRMs, ERPs, payment gateways, and WhatsApp APIs via normalized SQL databases and resilient REST webhooks.',
    heroSubtitle:
      'Eliminate manual data re-entry by bridging websites, CRMs, ERPs, payment gateways, and messaging APIs cleanly.',
    introFocus:
      'Operational friction multiplies when tools cannot talk to one another. Klyia Technology builds reliable relational databases, REST integrations, and webhook pipelines keeping business systems synchronized safely.',
    whyNeeded: [
      'Staff lose hours re-entering website enquiries or e-commerce orders manually.',
      'Unindexed flat tables make dashboards painfully slow.',
      'External APIs need retry safety and secret protection on the backend.',
    ],
    challenges: [
      'Dropped webhooks causing missed payments or unlogged leads.',
      'Credentials accidentally exposed in client scripts.',
      'Duplicate unvalidated customer records across spreadsheets.',
    ],
    solutions: [
      'Normalized SQL schemas with transactions and proper indexing.',
      'Idempotent webhook endpoints, input sanitization, and server-side API proxies.',
      'Automated cleanup and migration of legacy Excel/CSV archives.',
    ],
    features: [
      {title: 'Normalized SQL Design', detail: 'SQLite / PostgreSQL integrity preventing corrupted partial records.'},
      {title: 'Resilient REST & Webhooks', detail: 'Validated payloads, rate guards, and clear error logging.'},
      {title: 'Server-Side API Proxies', detail: 'Keep Gemini, WhatsApp, and payment keys strictly off browsers.'},
      {title: 'Data Deduplication & Import', detail: 'Clean legacy spreadsheets into structured master tables.'},
    ],
    benefits: [
      'Saves manual re-typing hours across teams.',
      'Protects secret credentials cleanly on backend servers.',
      'Improves dashboard speed and cross-department accuracy.',
    ],
    technologies: ['Node.js REST APIs', 'PostgreSQL / SQLite', 'Webhook Validation', 'CSV/Excel ETL Scripts'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Order, payment, and inventory sync.'},
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Connecting field apps with billing databases.'},
      {label: 'Logistics & Transportation', slug: 'logistics-transportation', note: 'Syncing trip portals with WhatsApp alerts.'},
    ],
    relatedServiceSlugs: ['custom-software-development', 'workflow-automation', 'erp-software-development', 'whatsapp-business-automation'],
    faqs: [
      {question: 'Can website enquiry forms sync automatically to our CRM or ERP?', answer: 'Yes, via secure server webhooks.'},
      {question: 'Are API keys ever placed in frontend code?', answer: 'Never—secrets remain strictly on backend servers.'},
      {question: 'Can messy Excel files be cleaned and migrated into SQL?', answer: 'Yes, deduplicating phone numbers, SKUs, and GSTINs cleanly.'},
      {question: 'What if a third-party API goes down briefly?', answer: 'Our endpoints handle failures gracefully with logging and safe persistence so leads aren’t lost.'},
      {question: 'Can you connect existing tools that only support CSV exports?', answer: 'Yes, via scheduled import/export bridges.'},
      {question: 'Do you optimize sluggish SQL queries?', answer: 'Yes, through schema indexing and query refactoring.'},
      {question: 'Can webhooks send WhatsApp alerts automatically?', answer: 'Yes.'},
      {question: 'How do we discuss an integration project?', answer: 'Send the list of tools you wish to connect via Get a Quote.'},
    ],
  },
];

export const SOFTWARE_DEVELOPMENT_SERVICES: ServicePageData[] =
  SOFTWARE_SEEDS.map(hydrateServiceSeed);
