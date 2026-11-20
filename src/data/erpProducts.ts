import {BANNER_IMAGES} from '../config/banners.ts';
import type {
  ErpModuleItem,
  ErpProductData,
  ErpResourceGuide,
  ErpShowcaseItem,
  ErpWhyChooseItem,
  FaqEntry,
  WorkProcessStep,
} from './types.ts';

export const ERP_POSITIONING = {
  tagline: 'Klyia Technology – Custom ERP Software, Enterprise Solutions & Business Automation.',
  heroH1: 'Custom ERP Software Solutions for Every Business',
  heroSubheading:
    'Connect your operations, automate daily workflows, manage business performance and grow with intelligent ERP solutions developed by Klyia Technology.',
  workflowPhilosophy:
    'Generic software forces growing businesses to abandon proven commercial rules and maintain manual spreadsheets alongside paid subscriptions. Klyia Technology designs and engineers custom ERP software around each company’s actual workflow—connecting procurement, production, stock, billing, approvals, and branch reporting inside one structured system.',
};

export const ERP_PRODUCTS: ErpProductData[] = [
  {
    slug: 'manufacturing-industrial-erp',
    code: 'A',
    name: 'Manufacturing & Industrial ERP',
    shortTitle: 'Manufacturing ERP',
    h1: 'Manufacturing & Industrial ERP Software',
    heroSubtitle:
      'Production planning, multi-stage Bill of Materials, raw material traceability, work orders, quality inspection, and dispatch costing.',
    industryLabel: 'Manufacturing, Steel & Industrial Plants',
    heroImage: BANNER_IMAGES.manufacturing,
    heroImageAlt: 'Industrial manufacturing shop-floor production planning and ERP workflow',
    canonicalPath: '/erp/manufacturing-industrial-erp/',
    seoTitle: 'Manufacturing & Industrial ERP Software | Klyia Technology',
    metaDescription:
      'Custom Manufacturing ERP software by Klyia Technology for production planning, BOM, raw material control, work orders, QC, vendor procurement, and costing.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Manufacturing enterprises lose profitability when raw material receipts, shop-floor consumption, work-order progress, quality rejections, and final dispatch invoicing live in disconnected registers or separate accounting packages.',
      'Klyia Technology builds Manufacturing & Industrial ERP around your exact plant structure—supporting steel rolling, fabrication, machinery assembly, and process industries with batch tracking, theoretical-vs-actual yield visibility, and real-time job costing.',
    ],
    workflowFitNote:
      'Engineered to fit your existing floor supervisors, storekeepers, weighbridge clerks, and finance controllers—without forcing complex enterprise jargon onto fast-moving production teams.',
    workflowSteps: [
      {
        step: '01',
        title: 'Material Requirement & Vendor PO',
        detail: 'Check current store stock against active sales orders and raise approved purchase orders with supplier rate comparisons.',
      },
      {
        step: '02',
        title: 'Raw Material GRN & Quality Check',
        detail: 'Log inward truck slips, weighbridge measurements, heat/batch numbers, and QC acceptance before moving stock to active bins.',
      },
      {
        step: '03',
        title: 'BOM Allocation & Work Orders',
        detail: 'Issue raw inputs directly against scheduled work orders across cutting, rolling, machining, or assembly stages.',
      },
      {
        step: '04',
        title: 'Finished Output, Scrap & Costing',
        detail: 'Record finished goods yield, recoverable scrap/by-products, machine hours, and landed per-unit manufacturing cost.',
      },
      {
        step: '05',
        title: 'Dispatch, GST Billing & Receivables',
        detail: 'Generate dispatch challans, e-Way/GST invoices, transport LR links, and real-time dealer credit balance checks.',
      },
    ],
    modules: [
      {
        title: 'Production Planning',
        detail: 'Schedule daily and weekly production runs based on open customer orders, machine availability, and shift capacity.',
      },
      {
        title: 'Raw Material Management',
        detail: 'Track inward batches, grade specifications, dual weight/unit quantities, and minimum reorder triggers.',
      },
      {
        title: 'Bill of Materials (BOM)',
        detail: 'Define single-level and multi-level BOM recipes with standard wastage tolerances and substitution controls.',
      },
      {
        title: 'Work Orders',
        detail: 'Release shop-floor job cards, track stage-wise WIP completion, and reconcile issued vs consumed materials.',
      },
      {
        title: 'Quality Control',
        detail: 'Capture incoming material inspection results, in-process checks, finished batch approvals, and rejection notes.',
      },
      {
        title: 'Inventory and Warehouse',
        detail: 'Maintain real-time raw, WIP, scrap, and finished goods balances across factory bays and storage yards.',
      },
      {
        title: 'Purchase and Vendor Management',
        detail: 'Automate indents, supplier quotation comparisons, partial GRN reconciliations, and pending PO tracking.',
      },
      {
        title: 'Dispatch and Costing',
        detail: 'Combine raw input cost, wastage variance, overhead allocation, and gate-pass dispatch into accurate unit margins.',
      },
    ],
    benefits: [
      'Eliminates unrecorded raw material leakage between store rooms and shop-floor lines',
      'Tracks exact production status of every customer work order without floor phone calls',
      'Links supplier GRN quality checks directly with accounts payable and vendor performance',
      'Supports dual units such as Metric Tonnes, kilograms, bundles, and piece counts',
      'Provides owners live visibility into batch costing, scrap recovery, and dispatch margins',
    ],
    standaloneVsIntegratedNote:
      'Deploy Inventory and Work Orders first as a focused production phase, or run the full unified suite connecting Purchase, BOM, Quality Control, GST Billing, and HR Attendance.',
    compatibleModuleNames: [
      'Inventory Management',
      'Purchase Management',
      'Sales Management',
      'Finance & Accounting',
      'Workflow Automation',
      'Multi-Branch Management',
    ],
    relatedErpSlugs: [
      'inventory-wholesale-distribution-erp',
      'accounting-billing-erp',
      'hr-payroll-erp',
    ],
    relatedServiceSlugs: ['manufacturing-erp', 'erp-software-development', 'workflow-automation'],
    relatedIndustrySlug: 'manufacturing-engineering',
    faqs: [
      {
        question: 'Can Manufacturing ERP track both weight in tonnes and piece counts?',
        answer:
          'Yes. Our industrial inventory architecture supports dual-unit tracking so rolling mills, steel yards, and fabricators can view stock simultaneously in MT/kg and bundles or pieces.',
      },
      {
        question: 'Does the ERP handle multi-level Bill of Materials?',
        answer:
          'Yes. You can configure raw inputs, sub-assemblies, standard process tolerances, and recoverable scrap items across multiple production stages.',
      },
      {
        question: 'Can store and dispatch staff use restricted role permissions?',
        answer:
          'Yes. Storekeepers, QC inspectors, production supervisors, and billing accountants each receive role-scoped screens and approval boundaries.',
      },
      {
        question: 'Can existing supplier and item lists be imported?',
        answer:
          'Yes. During Phase 04 (Testing, Data Migration & Deployment), we assist with importing verified Excel/CSV item masters, vendor records, and opening stock balances.',
      },
    ],
  },
  {
    slug: 'solar-erp-epc-software',
    code: 'B',
    name: 'Solar ERP & EPC Management',
    shortTitle: 'Solar ERP & EPC',
    h1: 'Solar ERP & EPC Management Software',
    heroSubtitle:
      'Unified platform built for residential rooftop and C&I Solar EPC teams—connecting enquiries, site surveys, BOM serials, installations, and service AMC.',
    industryLabel: 'Solar EPC & Renewable Energy Companies',
    heroImage: BANNER_IMAGES.solarErpDashboard,
    heroImageAlt: 'Solar EPC ERP software tracking project installations, BOM inventory, and site surveys',
    canonicalPath: '/erp/solar-erp-epc-software/',
    seoTitle: 'Solar ERP & EPC Management Software | Klyia Technology',
    metaDescription:
      'Dedicated Solar ERP & EPC software by Klyia Technology covering lead CRM, site survey, installation tracking, BOM serial inventory, procurement, and AMC.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Solar EPC companies manage complex multi-week lifecycles per customer—spanning rooftop load inquiries, technical site surveys, kW sizing proposals, vendor procurement, panel/inverter serial tracking, site execution, net-metering/subsidy paperwork, and long-term maintenance.',
      'Generic CRMs stop once the order is signed, leaving installation engineers and finance teams juggling spreadsheets. Klyia Solar ERP connects sales, survey engineers, store managers, site teams, and AMC technicians in one continuous operational pipeline.',
    ],
    workflowFitNote:
      'Structured specifically around how residential PM Surya Ghar and Commercial & Industrial (C&I) Solar EPC firms execute projects from lead inquiry through 5-year service obligations.',
    workflowSteps: [
      {
        step: '01',
        title: 'Solar Lead Capture & kW Sizing',
        detail: 'Capture customer electricity bills, sanctioned load, roof type, and generate standardized capacity proposals.',
      },
      {
        step: '02',
        title: 'Mobile-Friendly Site Survey',
        detail: 'Survey engineers record roof dimensions, shadow observations, earthing path notes, and site inspection checklists.',
      },
      {
        step: '03',
        title: 'BOM Allocation & Serial Procurement',
        detail: 'Reserve solar modules, inverters, structures, ACDB/DCDB kits, and DC cables against specific project IDs with serial number traceability.',
      },
      {
        step: '04',
        title: 'Installation & Commissioning Milestones',
        detail: 'Monitor structure erection, wiring, earthing, DISCOM net-metering stages, subsidy documentation, and inspection sign-offs.',
      },
      {
        step: '05',
        title: 'Project Costing & AMC Service Logs',
        detail: 'Compare quoted budget against actual project material & labour expenses, then automate preventive AMC and fault tickets.',
      },
    ],
    modules: [
      {
        title: 'Customer and Lead Management',
        detail: 'Track residential rooftop and C&I industrial leads, follow-ups, quotation revisions, and sales team conversion pipelines.',
      },
      {
        title: 'Site Survey',
        detail: 'Capture structured site parameters, roof area measurements, transformer proximity, and engineer feasibility checklists.',
      },
      {
        title: 'Project Management',
        detail: 'Manage project-by-project stage checklists across engineering approval, subsidy documentation, and DISCOM coordination.',
      },
      {
        title: 'Installation Tracking',
        detail: 'Monitor assigned installation crews, daily milestone completion, commissioning status, and handover documentation.',
      },
      {
        title: 'Material and Inventory Management',
        detail: 'Maintain real-time warehouse stock alongside panel and inverter serial numbers mapped directly to customer warranty records.',
      },
      {
        title: 'Procurement',
        detail: 'Automate vendor purchase orders for modules, inverters, BOS items, and mounting structures linked to project demand.',
      },
      {
        title: 'Project Costing',
        detail: 'Evaluate material consumed, contractor labour, logistics, and milestone billing profitability for every kW plant installed.',
      },
      {
        title: 'Service and Maintenance',
        detail: 'Schedule recurring cleaning and preventive AMC visits while logging inverter alerts and customer support tickets.',
      },
    ],
    benefits: [
      'Prevents missed follow-ups between enquiry teams and field survey engineers',
      'Maintains 100% serial number traceability for every solar module and inverter installed',
      'Flags stalled DISCOM, net-metering, or documentation bottlenecks immediately',
      'Calculates accurate per-project margin including BOS consumables and site travel',
      'Keeps AMC service commitments organized for years after plant commissioning',
    ],
    standaloneVsIntegratedNote:
      'Run the Solar Lead & Site Survey CRM independently as Phase 1, or deploy the complete unified Solar EPC ERP integrating Inventory, Procurement, Costing, and WhatsApp milestone updates.',
    compatibleModuleNames: [
      'CRM and Lead Management',
      'Project Management',
      'Inventory Management',
      'Purchase Management',
      'Customer Support & Ticketing',
      'WhatsApp Integration',
      'Document Management',
    ],
    relatedErpSlugs: [
      'construction-real-estate-erp',
      'inventory-wholesale-distribution-erp',
      'accounting-billing-erp',
    ],
    relatedServiceSlugs: ['solar-erp-software', 'crm-software-development', 'whatsapp-business-automation'],
    relatedIndustrySlug: 'solar-renewable-energy',
    faqs: [
      {
        question: 'Can Solar ERP handle both residential rooftop and commercial C&I projects?',
        answer:
          'Yes. Separate project stage templates let residential teams track consumer subsidy/net-metering steps while C&I teams manage larger BOQ milestones and multi-phase billing.',
      },
      {
        question: 'Does it track individual panel and inverter serial numbers?',
        answer:
          'Yes. Every dispatched module batch and inverter serial number can be scanned or entered at issue time and linked permanently to the customer project record.',
      },
      {
        question: 'Can field survey teams access the system from mobile devices?',
        answer:
          'Yes. Klyia builds responsive web-based interfaces so field engineers and site supervisors can update checklists from smartphones or tablets.',
      },
      {
        question: 'Can we start with Lead & Site Survey modules first?',
        answer:
          'Yes. Our modular architecture allows rolling out CRM and Site Survey first and expanding later into full Procurement, Inventory, and AMC modules.',
      },
    ],
  },
  {
    slug: 'inventory-wholesale-distribution-erp',
    code: 'C',
    name: 'Inventory, Wholesale & Distribution ERP',
    shortTitle: 'Wholesale & Inventory ERP',
    h1: 'Inventory, Wholesale & Distribution ERP Software',
    heroSubtitle:
      'Control stock across multiple warehouses, automate dealer credit rules, manage GST invoicing, and monitor dispatch routes in real time.',
    industryLabel: 'Wholesale Distributors, Stockists & Traders',
    heroImage: BANNER_IMAGES.wholesale,
    heroImageAlt: 'Multi-warehouse wholesale distribution center and ERP inventory control',
    canonicalPath: '/erp/inventory-wholesale-distribution-erp/',
    seoTitle: 'Wholesale & Distribution ERP Software | Klyia Technology',
    metaDescription:
      'Custom Inventory & Wholesale Distribution ERP by Klyia Technology with multi-warehouse stock, dealer pricing, GST billing, dispatch, and party ledgers.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Wholesale and distribution enterprises handle thin unit margins where dead stock, uncollected dealer balances, pricing tier mistakes, and dispatch bottlenecks directly erode profitability.',
      'Klyia Technology builds Wholesale & Distribution ERP tailored to your warehouse bays, sub-dealer slabs, transport loading processes, and regional collection rules—keeping inventory, billing, and outstanding ledgers continuously synchronized.',
    ],
    workflowFitNote:
      'Tailored around multi-unit cartons/pieces, scheme/slab discounts, credit lock thresholds, and rapid order-to-dispatch invoicing.',
    workflowSteps: [
      {
        step: '01',
        title: 'Purchase & Multi-Godown Receipt',
        detail: 'Record supplier purchase bills and allocate inward quantities across specific godowns, racks, or batch numbers.',
      },
      {
        step: '02',
        title: 'Dealer Order & Credit Validation',
        detail: 'Accept dealer or field-sales orders with automated credit-limit, overdue aging, and tier-rate verification.',
      },
      {
        step: '03',
        title: 'Pick-List & Warehouse Transfer',
        detail: 'Generate godown pick slips, execute inter-branch stock transfers, and reserve items cleanly against confirmed orders.',
      },
      {
        step: '04',
        title: 'GST Invoicing & Route Dispatch',
        detail: 'Convert confirmed pick slips into GST invoices, transport delivery sheets, and customer dispatch receipts.',
      },
      {
        step: '05',
        title: 'Collection & Ageing Analytics',
        detail: 'Reconcile cash, cheque, and bank transfers against specific invoices and inspect party-wise outstanding aging.',
      },
    ],
    modules: [
      {
        title: 'Stock Management',
        detail: 'Live SKU visibility across SKUs, units of measure, batches, minimum stock alerts, and slow-moving item tracking.',
      },
      {
        title: 'Purchase and Sales',
        detail: 'Streamline vendor purchase cycles, dealer quotations, backorders, sales returns, and credit/debit notes.',
      },
      {
        title: 'Customer and Supplier Ledger',
        detail: 'Maintain clean bill-by-bill party statements, payment receipts, PDC records, and overdue aging schedules.',
      },
      {
        title: 'Multi-Warehouse',
        detail: 'Monitor godown-wise inventory balances, approve inter-warehouse transfers, and prevent overselling across branches.',
      },
      {
        title: 'Dealer Management',
        detail: 'Configure dealer-specific price lists, credit exposure ceilings, territory assignments, and order history logs.',
      },
      {
        title: 'Dispatch and Delivery',
        detail: 'Organize vehicle-wise loading manifests, transporter bilty details, and delivery confirmation tracking.',
      },
      {
        title: 'GST Billing',
        detail: 'Produce accurate GST-compliant tax invoices with HSN summaries, tax breakdowns, and structured export reports.',
      },
      {
        title: 'Business Reports',
        detail: 'View product-wise profitability, godown valuation, salesman collection logs, and customer buying trends.',
      },
    ],
    benefits: [
      'Stops stockouts and duplicate purchasing with live multi-warehouse visibility',
      'Enforces credit limits automatically before billing overdue dealers',
      'Eliminates manual rate lookup errors across wholesale slab pricing',
      'Shortens daily dispatch loading and route paperwork',
      'Delivers instant party statements and stock valuation summaries to management',
    ],
    standaloneVsIntegratedNote:
      'Use Stock Management and GST Billing as a standalone wholesale suite, or combine with CRM Salesman Orders, Finance Ledgers, and Multi-Branch analytics.',
    compatibleModuleNames: [
      'Inventory Management',
      'Purchase Management',
      'Sales Management',
      'Finance & Accounting',
      'Multi-Branch Management',
      'Reports & Analytics',
      'WhatsApp Integration',
    ],
    relatedErpSlugs: [
      'manufacturing-industrial-erp',
      'fruit-mandi-trading-erp',
      'retail-pos-erp',
      'accounting-billing-erp',
    ],
    relatedServiceSlugs: [
      'wholesale-distribution-erp',
      'inventory-management-software',
      'billing-accounting-software',
    ],
    relatedIndustrySlug: 'wholesale-distribution',
    faqs: [
      {
        question: 'Can we manage separate warehouses and regional branches in one ERP?',
        answer:
          'Yes. Multi-warehouse stock views show exact quantities per location while supporting branch-wise billing and inter-godown stock transfers.',
      },
      {
        question: 'Does the system block orders from dealers who exceed credit limits?',
        answer:
          'Yes. Configurable credit ceilings and overdue day limits notify billing clerks or hold dispatch until management approval.',
      },
      {
        question: 'Can multiple units like boxes, cartons, and loose pieces be handled?',
        answer:
          'Yes. Conversion factors allow purchasing in bulk cartons and invoicing dealers cleanly in boxes, packs, or single units.',
      },
      {
        question: 'Can customers receive ledger balances or invoices automatically?',
        answer:
          'Yes. When paired with the WhatsApp Integration module, invoice PDFs and payment reminders can be triggered systematically.',
      },
    ],
  },
  {
    slug: 'fruit-mandi-trading-erp',
    code: 'D',
    name: 'Fruit Mandi & Trading ERP',
    shortTitle: 'Fruit Mandi & Trading ERP',
    h1: 'Fruit Mandi & Commission Trading ERP Software',
    heroSubtitle:
      'High-speed morning auction entry, farmer patti calculations, plastic crate tracking, cash/credit buyer billing, and daily trading reports.',
    industryLabel: 'Fruit & Vegetable Mandis, Commission Agents & Agro Traders',
    heroImage: BANNER_IMAGES.fruitVegetableMandi,
    heroImageAlt: 'Fruit and vegetable mandi trading floor, crate management, and auction ERP',
    canonicalPath: '/erp/fruit-mandi-trading-erp/',
    seoTitle: 'Fruit Mandi & Trading ERP Software | Klyia Technology',
    metaDescription:
      'Specialized Fruit Mandi ERP software by Klyia Technology for farmer arrivals, rapid auction billing, credit/cash sales, crate weight tracking, and sale proceeds.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Fruit and vegetable mandis operate under intense early-morning time pressure where hundreds of lots, farmer arrivals, partial buyer splits, hammali deductions, and plastic crates move in just a few hours.',
      'Standard retail billing software slows down counter operators and ignores crate recovery. Klyia Technology engineers Fruit Mandi & Trading ERP for keyboard-fast morning auction entry, accurate farmer sale proceeds (patti/beejak), and airtight buyer crate ledgers.',
    ],
    workflowFitNote:
      'Designed with rapid keyboard-driven auction grids and commission rules modeled directly on working agricultural mandi operations.',
    workflowSteps: [
      {
        step: '01',
        title: 'Farmer / Supplier Arrival Entry',
        detail: 'Log incoming vehicle arrivals, lot varieties, grower/supplier names, tare weights, and crate inward counts.',
      },
      {
        step: '02',
        title: 'Fast Auction Split & Weight Billing',
        detail: 'Allocate lots rapidly across multiple wholesale cash and credit buyers with instant net-weight calculations.',
      },
      {
        step: '03',
        title: 'Crate Balance & Receipt Print',
        detail: 'Print buyer receipts showing item totals alongside opening, issued, returned, and closing crate balances.',
      },
      {
        step: '04',
        title: 'Farmer Sale Proceeds (Patti)',
        detail: 'Calculate gross lot value minus configured commission, mandi charges, unloading/hammali, and farmer advances.',
      },
      {
        step: '05',
        title: 'Daily Collection & Mandi Close',
        detail: 'Reconcile cash collections, credit recoveries, crate shortages, and daily mandi profit summaries before counter close.',
      },
    ],
    modules: [
      {
        title: 'Farmer and Supplier Management',
        detail: 'Track grower/supplier profiles, advance payouts, seasonal arrival history, and bank settlement details.',
      },
      {
        title: 'Purchase Entries',
        detail: 'Capture direct purchases, consignment lot receipts, grading splits, and inward freight expenses quickly.',
      },
      {
        title: 'Wholesale Sales',
        detail: 'Support keyboard-first lot splitting, variable market rates per buyer, and fast multi-buyer billing.',
      },
      {
        title: 'Credit and Cash Sales',
        detail: 'Separate immediate counter cash receipts from approved credit buyers with instant due tracking.',
      },
      {
        title: 'Customer Ledger',
        detail: 'View buyer-wise outstanding dues, partial daily cash recoveries, and printable settlement statements.',
      },
      {
        title: 'Crate and Weight Management',
        detail: 'Automate tare-weight deductions and track plastic crates, bardana, and boxes issued to every party.',
      },
      {
        title: 'Sale Proceeds',
        detail: 'Generate accurate farmer sale proceeds sheets deducting commission percentages, labour, and transport charges cleanly.',
      },
      {
        title: 'Daily Trading Reports',
        detail: 'Review daily arrivals vs sales, lot balance unsold stock, cash book position, and crate recovery alerts.',
      },
    ],
    benefits: [
      'Accelerates busy morning mandi billing without counter queues',
      'Stops expensive plastic crate losses with party-wise balance printing on bills',
      'Eliminates manual calculation disputes in farmer patti and commission sheets',
      'Tracks cash vs credit recoveries daily without evening register totals',
      'Supports multi-firm or multi-shed mandi counter operations smoothly',
    ],
    standaloneVsIntegratedNote:
      'Start with Core Auction Billing, Farmer Proceeds, and Crate Management, then integrate multi-branch accounting, automated WhatsApp patti sharing, or cold storage tracking.',
    compatibleModuleNames: [
      'Sales Management',
      'Purchase Management',
      'Finance & Accounting',
      'Inventory Management',
      'Reports & Analytics',
      'WhatsApp Integration',
    ],
    relatedErpSlugs: [
      'inventory-wholesale-distribution-erp',
      'accounting-billing-erp',
      'logistics-fleet-erp',
    ],
    relatedServiceSlugs: [
      'mandi-fruit-trading-software',
      'billing-accounting-software',
      'wholesale-distribution-erp',
    ],
    relatedIndustrySlug: 'fruit-vegetable-mandis',
    faqs: [
      {
        question: 'Can Fruit Mandi ERP handle rapid auction entries without slowing down staff?',
        answer:
          'Yes. Billing grids are optimized for keyboard shortcuts so operators can enter buyer codes, weights, crates, and rates in seconds.',
      },
      {
        question: 'How does the ERP help recover missing plastic crates?',
        answer:
          'Every purchase and sale records crates in and out, automatically printing previous and current crate dues directly on buyer bills and party reports.',
      },
      {
        question: 'Can we customize mandi commission, hammali, and freight deductions?',
        answer:
          'Yes. Deduction rules are configurable per commodity, firm, or transaction type before generating farmer sale proceeds sheets.',
      },
      {
        question: 'Does it track both commission-based lots and self-purchased stock?',
        answer:
          'Yes. Both consignment/arhat lots and direct trader purchases can be managed cleanly within the same interface.',
      },
    ],
  },
  {
    slug: 'hospital-clinic-management',
    code: 'E',
    name: 'Hospital & Clinic Management',
    shortTitle: 'Hospital & Clinic ERP',
    h1: 'Hospital & Clinic Management ERP Software',
    heroSubtitle:
      'Integrated healthcare platform connecting patient registration, OPD scheduling, doctor workflows, billing, pharmacy, diagnostics lab, and medical records.',
    industryLabel: 'Multi-Specialty Hospitals, Nursing Homes & Clinics',
    heroImage: BANNER_IMAGES.healthcare,
    heroImageAlt: 'Modern hospital and clinic management software workstation',
    canonicalPath: '/erp/hospital-clinic-management/',
    seoTitle: 'Hospital & Clinic Management Software | Klyia Technology',
    metaDescription:
      'Custom Hospital & Clinic Management ERP by Klyia Technology covering patient registration, OPD appointments, doctor portal, billing, pharmacy, lab & EHR records.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Hospitals and clinics struggle when reception queues, doctor consultation rooms, diagnostic labs, pharmacies, and inpatient billing rely on disconnected applications and paper slips.',
      'Klyia Technology develops Hospital & Clinic Management ERP tailored to your reception counters, specialty workflows, pharmacy dispensing rules, and billing departments—creating one coordinated patient journey from token generation to discharge.',
    ],
    workflowFitNote:
      'Built around clinical staff speed and clear role privacy—allowing receptionists, doctors, lab technicians, and pharmacists to work from one live patient record.',
    workflowSteps: [
      {
        step: '01',
        title: 'Patient Registration & UHID',
        detail: 'Register new or returning patients once with a permanent Patient ID, demographic record, and visit history lookup.',
      },
      {
        step: '02',
        title: 'OPD Appointment & Queue Management',
        detail: 'Assign doctor slots, manage walk-in tokens, track consultation status, and reschedule follow-ups cleanly.',
      },
      {
        step: '03',
        title: 'Clinical Notes, Lab & Prescriptions',
        detail: 'Doctors record vitals, consultation notes, pathology test requests, and structured e-prescriptions linked to the pharmacy.',
      },
      {
        step: '04',
        title: 'Pharmacy & Laboratory Execution',
        detail: 'Dispense batch/expiry-checked medicines and publish diagnostic test results directly back into the patient chart.',
      },
      {
        step: '05',
        title: 'Consolidated Billing & Audits',
        detail: 'Combine consultation fees, procedures, diagnostics, ward charges, and pharmacy receipts into transparent invoices.',
      },
    ],
    modules: [
      {
        title: 'Patient Registration',
        detail: 'Fast patient onboarding, unique ID indexing, contact records, referral tracking, and visit history summaries.',
      },
      {
        title: 'Appointment Scheduling',
        detail: 'Manage doctor calendars, slot durations, walk-in tokens, and automated appointment confirmation alerts.',
      },
      {
        title: 'Doctor Management',
        detail: 'Configure specialty schedules, consultation fee structures, doctor-wise revenue summaries, and patient queues.',
      },
      {
        title: 'Billing',
        detail: 'Generate itemized OPD/IPD receipts, advance deposits, package billing, discounts, and shift cash closure reports.',
      },
      {
        title: 'Pharmacy',
        detail: 'Control medicine stock by batch number, expiry alerts, supplier returns, and prescription-linked counter dispensing.',
      },
      {
        title: 'Laboratory',
        detail: 'Log sample collection, test parameter ranges, technician validation, and printable diagnostic report generation.',
      },
      {
        title: 'Medical Records',
        detail: 'Maintain role-protected digital patient case histories, scanned attachments, prescriptions, and discharge summaries.',
      },
    ],
    benefits: [
      'Reduces front-desk waiting queues with quick returning-patient lookup',
      'Minimizes medicine expiry losses and stock mismatches in hospital pharmacies',
      'Connects doctor test orders straight to laboratory desks without illegible slips',
      'Consolidates daily shift collections across reception, pharmacy, and diagnostics',
      'Enforces strict role-based confidentiality over clinical records and billing adjustments',
    ],
    standaloneVsIntegratedNote:
      'Clinics can start cleanly with Appointment Scheduling, OPD Billing, and Medical Records, while hospitals can deploy the integrated Lab, Pharmacy, and HR Payroll suite.',
    compatibleModuleNames: [
      'Finance & Accounting',
      'Inventory Management',
      'HRM and Payroll',
      'Document Management',
      'Role-Based Access Control',
      'WhatsApp Integration',
    ],
    relatedErpSlugs: ['accounting-billing-erp', 'hr-payroll-erp', 'retail-pos-erp'],
    relatedServiceSlugs: [
      'custom-software-development',
      'erp-software-development',
      'whatsapp-business-automation',
    ],
    relatedIndustrySlug: 'healthcare-clinics',
    faqs: [
      {
        question: 'Can small multi-doctor clinics use only OPD, Appointments, and Billing?',
        answer:
          'Yes. Modular deployment lets outpatient clinics use Appointment Scheduling, Doctor Notes, and Billing without enabling full inpatient ward modules.',
      },
      {
        question: 'Does the Pharmacy module track batch numbers and expiry dates?',
        answer:
          'Yes. Every inward medicine batch records batch ID, MRP, purchase rate, and expiry alerts so near-expiry stock is prioritized.',
      },
      {
        question: 'How is patient record access controlled across hospital staff?',
        answer:
          'Role-Based Access Control ensures receptionists, pharmacists, lab staff, and clinicians only view and edit fields permitted to their role.',
      },
      {
        question: 'Can the software send appointment reminders via WhatsApp?',
        answer:
          'Yes, by pairing the official WhatsApp Integration module for opt-in appointment confirmations and follow-up notices.',
      },
    ],
  },
  {
    slug: 'school-college-erp',
    code: 'F',
    name: 'School & College ERP',
    shortTitle: 'School & College ERP',
    h1: 'School & College Management ERP Software',
    heroSubtitle:
      'Complete academic and administrative ERP connecting admissions, student records, fee collection, attendance, examinations, timetables, and parent alerts.',
    industryLabel: 'Schools, Colleges, Coaching Institutes & Trusts',
    heroImage: BANNER_IMAGES.education,
    heroImageAlt: 'School and college academic campus using integrated campus ERP software',
    canonicalPath: '/erp/school-college-erp/',
    seoTitle: 'School & College ERP Software | Klyia Technology',
    metaDescription:
      'Custom School & College ERP by Klyia Technology for admissions, student profiles, fee management, attendance, exams, timetables, and parent communication.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Educational institutions juggle admission season enquiries, variable fee concession rules, daily attendance tracking, exam grading formats, timetable clashes, and parent communication across thousands of students.',
      'Klyia Technology builds School & College ERP tailored to your board, department structure, fee installments, and trust accounting—replacing fragmented Excel sheets with one organized academic and administrative platform.',
    ],
    workflowFitNote:
      'Built to handle Indian school/college fee structures, transport/hostel add-ons, section promotions, and multi-campus management trusts.',
    workflowSteps: [
      {
        step: '01',
        title: 'Enquiry & Digital Admissions',
        detail: 'Track prospective admission enquiries, application forms, document verification, and batch seat allocation.',
      },
      {
        step: '02',
        title: 'Student Master & Section Setup',
        detail: 'Organize classes, semesters, roll numbers, academic sessions, scholarships, and guardian contact profiles.',
      },
      {
        step: '03',
        title: 'Fee Schedules & Installment Collection',
        detail: 'Automate tuition, lab, transport, and late-fee calculations with printable receipts and pending-dues tracking.',
      },
      {
        step: '04',
        title: 'Attendance, Timetables & Exams',
        detail: 'Capture daily attendance, balance faculty timetables, publish exam schedules, and generate report cards.',
      },
      {
        step: '05',
        title: 'Parent Notices & Campus Reports',
        detail: 'Distribute attendance alerts, fee reminders, exam circulars, and institutional financial summaries to leadership.',
      },
    ],
    modules: [
      {
        title: 'Admissions',
        detail: 'Manage enquiry follow-ups, admission merit/document checklists, and seamless promotion from applicant to enrolled student.',
      },
      {
        title: 'Student Management',
        detail: 'Maintain centralized academic profiles, family contacts, transfer history, certificates, and document uploads.',
      },
      {
        title: 'Fee Management',
        detail: 'Handle custom installment slabs, sibling discounts, transport fees, daily collection summaries, and defaulter lists.',
      },
      {
        title: 'Attendance',
        detail: 'Record class-wise or subject-wise student attendance rapidly with absence alerts and monthly percentage sheets.',
      },
      {
        title: 'Examinations',
        detail: 'Configure unit tests, term grading formulas, mark entry permissions, and printable progress report layouts.',
      },
      {
        title: 'Timetable',
        detail: 'Assign faculty lectures, classrooms, and lab sessions while avoiding overlapping faculty scheduling conflicts.',
      },
      {
        title: 'Parent Communication',
        detail: 'Share verified institutional circulars, fee reminders, exam schedules, and absence notices reliably.',
      },
    ],
    benefits: [
      'Cuts fee counter reconciliation errors and overdue tuition follow-up delays',
      'Gives principals and trustees clear daily snapshots of admissions and fee collections',
      'Simplifies report card preparation and annual student batch promotions',
      'Keeps parent communication consistent via structured circulars and automated notices',
      'Connects seamlessly with Staff HR & Payroll across teaching and administrative teams',
    ],
    standaloneVsIntegratedNote:
      'Institutes can launch Admissions and Fee Management immediately before adding Examinations, Timetables, HR Payroll, and Multi-Campus Consolidation.',
    compatibleModuleNames: [
      'CRM and Lead Management',
      'Finance & Accounting',
      'HRM and Payroll',
      'Document Management',
      'WhatsApp Integration',
      'Multi-Branch Management',
    ],
    relatedErpSlugs: ['hr-payroll-erp', 'accounting-billing-erp'],
    relatedServiceSlugs: ['custom-software-development', 'crm-software-development', 'whatsapp-business-automation'],
    relatedIndustrySlug: 'education-training-institutes',
    faqs: [
      {
        question: 'Can Fee Management handle custom concessions and transport charges?',
        answer:
          'Yes. Fee heads can be configured per class, academic stream, transport route, scholarship category, or quarterly/monthly installment plan.',
      },
      {
        question: 'Does the ERP support both K-12 schools and degree/diploma colleges?',
        answer:
          'Yes. Because we customize schemas to your workflow, both class-section structures and semester/subject-wise college setups are supported.',
      },
      {
        question: 'Can a trust managing multiple campuses view unified reports?',
        answer:
          'Yes. With Multi-Branch Management enabled, leadership sees combined fee collections and admissions across every campus while keeping campus admins isolated.',
      },
      {
        question: 'Can parents receive automated fee or attendance reminders?',
        answer:
          'Yes. Connecting the WhatsApp Integration module enables scheduled opt-in circulars, attendance alerts, and fee due notices.',
      },
    ],
  },
  {
    slug: 'retail-pos-erp',
    code: 'G',
    name: 'Retail & POS ERP',
    shortTitle: 'Retail & POS ERP',
    h1: 'Retail & Point-of-Sale (POS) ERP Software',
    heroSubtitle:
      'Fast counter POS billing, barcode scanning, real-time multi-store stock synchronization, returns handling, and unified payment tracking.',
    industryLabel: 'Retail Stores, Supermarkets, Showrooms & Chains',
    heroImage: BANNER_IMAGES.erpPosRetailCounter,
    heroImageAlt: 'Modern retail point-of-sale checkout terminal running barcode billing and inventory sync',
    canonicalPath: '/erp/retail-pos-erp/',
    seoTitle: 'Retail & POS ERP Software | Klyia Technology',
    metaDescription:
      'Custom Retail & POS ERP software by Klyia Technology with high-speed counter POS billing, barcode stock sync, multi-store control, returns, and payment tracking.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Modern retail and multi-store businesses need rapid checkout counters paired with accurate central warehouse visibility—especially when managing size/variant SKUs, promotional pricing, exchanges, and split payments.',
      'Klyia Technology engineers Retail & POS ERP so cashiers bill fast using barcodes while owners monitor live store-by-store stock levels, cash-drawer reconciliations, supplier reorders, and optional e-commerce inventory alignment from one backend.',
    ],
    workflowFitNote:
      'Optimized for quick counter checkouts, GST tax slabs, multi-store transfers, and practical shift closing reconciliation.',
    workflowSteps: [
      {
        step: '01',
        title: 'Central Purchase & Barcode Tagging',
        detail: 'Receive supplier consignments into the main warehouse, generate item barcodes, and price-tag variants cleanly.',
      },
      {
        step: '02',
        title: 'Store Allocation & Transfers',
        detail: 'Dispatch replenishment stock to individual showroom outlets with automated inter-store transfer confirmations.',
      },
      {
        step: '03',
        title: 'Rapid POS Counter Checkout',
        detail: 'Scan barcodes at the billing terminal, apply approved discounts, and accept split Cash, UPI, or Card tenders.',
      },
      {
        step: '04',
        title: 'Returns, Exchanges & Credit Notes',
        detail: 'Process customer exchanges cleanly against original invoice numbers while updating store stock automatically.',
      },
      {
        step: '05',
        title: 'Shift Cash Close & Store Analytics',
        detail: 'Reconcile counter cash drawers against system totals and track fast-moving categories across all branches.',
      },
    ],
    modules: [
      {
        title: 'POS Billing',
        detail: 'Touch- and keyboard-friendly checkout screen built for thermal receipts, GST billing, and held customer carts.',
      },
      {
        title: 'Barcode',
        detail: 'Support existing EAN/UPC manufacturer barcodes or print custom store barcode labels for garments, hardware, or groceries.',
      },
      {
        title: 'Inventory',
        detail: 'Monitor store-wise quantities across brands, sizes, colours, and reorder points in real time.',
      },
      {
        title: 'Purchase and Sales',
        detail: 'Manage supplier purchase orders, inward GRNs, margin verification, and daily store sales registers.',
      },
      {
        title: 'Multi-Store',
        detail: 'Connect multiple showrooms under one central catalogue with branch-wise stock transfers and store P&L views.',
      },
      {
        title: 'Returns',
        detail: 'Handle itemized sales returns, exchange adjustments, damaged stock write-offs, and supplier debit notes.',
      },
      {
        title: 'Payment Tracking',
        detail: 'Break down daily settlements across Cash, UPI, Credit/Debit Cards, and customer credit accounts accurately.',
      },
    ],
    benefits: [
      'Speeds up checkout lines while updating central stock immediately',
      'Eliminates manual price lookup errors with barcode-driven billing',
      'Reveals fast-moving and dead stock across every retail outlet',
      'Tracks split payment collections cleanly during daily counter closing',
      'Synchronizes seamlessly if your business expands into online e-commerce orders',
    ],
    standaloneVsIntegratedNote:
      'Single showrooms can start with POS Billing, Barcode, and Inventory, then expand cleanly to Multi-Store ERP, E-commerce Integration, and Finance & Accounting.',
    compatibleModuleNames: [
      'POS Billing',
      'Inventory Management',
      'Finance & Accounting',
      'E-commerce Integration',
      'Multi-Branch Management',
      'Reports & Analytics',
    ],
    relatedErpSlugs: [
      'inventory-wholesale-distribution-erp',
      'accounting-billing-erp',
      'hr-payroll-erp',
    ],
    relatedServiceSlugs: [
      'ecommerce-website-development',
      'inventory-management-software',
      'billing-accounting-software',
    ],
    relatedIndustrySlug: 'retail-ecommerce',
    faqs: [
      {
        question: 'Does the Retail POS ERP work with standard barcode scanners and thermal printers?',
        answer:
          'Yes. The interface works seamlessly with standard USB/wireless barcode scanners and browser-compatible 58mm/80mm thermal receipt printers.',
      },
      {
        question: 'Can we track inventory separately across 3 or more retail outlets?',
        answer:
          'Yes. Multi-Store support maintains branch-specific stock balances while letting head office staff transfer stock between stores.',
      },
      {
        question: 'Can split payments like half UPI and half Cash be billed on one receipt?',
        answer:
          'Yes. Cashiers can record multiple tender modes per invoice so daily payment reconciliation matches bank and drawer deposits.',
      },
      {
        question: 'Can our online store share inventory with retail POS stock?',
        answer:
          'Yes. When paired with our E-commerce Integration module, web orders deduct from designated store or central warehouse balances.',
      },
    ],
  },
  {
    slug: 'accounting-billing-erp',
    code: 'H',
    name: 'Accounting & Billing ERP',
    shortTitle: 'Accounting & Billing ERP',
    h1: 'Accounting, GST Billing & Financial ERP Software',
    heroSubtitle:
      'Connected GST invoicing, purchase and sales accounts, expense controls, receipts/payments, customer & supplier ledgers, and live financial reporting.',
    industryLabel: 'SMEs, Trading Houses, Agencies & Multi-Branch Firms',
    heroImage: BANNER_IMAGES.erpDashboard,
    heroImageAlt: 'Enterprise financial accounting and GST billing ERP dashboard',
    canonicalPath: '/erp/accounting-billing-erp/',
    seoTitle: 'Accounting & Billing ERP Software | Klyia Technology',
    metaDescription:
      'Custom Accounting & Billing ERP software by Klyia Technology for GST invoices, purchase/sales accounts, expense tracking, party ledgers, and financial reports.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Growing organizations often maintain billing in one application, field expenses in spreadsheets, and final ledgers in separate accounting files—creating reconciliation delays every month and at GST filing deadlines.',
      'Klyia Technology builds Accounting & Billing ERP designed to unify operational transactions directly with clean financial accounting—so every invoice, purchase voucher, expense entry, receipt, and credit note updates customer, vendor, and tax ledgers simultaneously.',
    ],
    workflowFitNote:
      'Tailored around multi-series GST invoicing, branch cost centers, bank reconciliation, and strict voucher approval rules.',
    workflowSteps: [
      {
        step: '01',
        title: 'Chart of Accounts & Tax Setup',
        detail: 'Structure account groups, GST rate slabs, branch cost centers, and opening party balances cleanly.',
      },
      {
        step: '02',
        title: 'Sales & Purchase Invoicing',
        detail: 'Generate GST tax invoices, proformas, credit/debit notes, and record verified supplier purchase bills.',
      },
      {
        step: '03',
        title: 'Receipts, Payments & Expenses',
        detail: 'Log bill-by-bill customer receipts, vendor payments, petty cash vouchers, and categorized operating expenses.',
      },
      {
        step: '04',
        title: 'Automated Ledger Posting',
        detail: 'Keep customer statements, vendor payables, cash books, and bank ledgers continuously balanced without double entry.',
      },
      {
        step: '05',
        title: 'GST & Financial Reporting',
        detail: 'Export structured tax summaries, trial balances, aging analyses, and branch-wise income/expense reports.',
      },
    ],
    modules: [
      {
        title: 'GST Invoices',
        detail: 'Create B2B/B2C tax invoices, HSN/SAC tax calculations, reverse charge notes, and custom branded invoice PDFs.',
      },
      {
        title: 'Purchase and Sales Accounts',
        detail: 'Record sales registers, purchase inward bills, service vouchers, and automated tax ledger postings.',
      },
      {
        title: 'Expenses',
        detail: 'Capture branch overheads, travel reimbursements, utility bills, and approval-backed vendor expense claims.',
      },
      {
        title: 'Receipts and Payments',
        detail: 'Track invoice-wise settlement against NEFT/RTGS, UPI, cheque clearances, and scheduled post-dated payments.',
      },
      {
        title: 'Customer and Supplier Ledger',
        detail: 'Inspect instant party statements, overdue interest or aging buckets, and share verified balance confirmations.',
      },
      {
        title: 'Financial Reports',
        detail: 'Review cash flow trends, receivable/payable summaries, expense breakdowns, profit statements, and GST summaries.',
      },
    ],
    benefits: [
      'Eliminates duplicate data entry between billing desks and accounting staff',
      'Keeps receivables and vendor dues visible in real time rather than week-old sheets',
      'Enforces manager approval before backdated voucher edits or credit notes',
      'Organizes GST sales and purchase registers cleanly for monthly compliance',
      'Consolidates branch-level P&L and expense controls on one management dashboard',
    ],
    standaloneVsIntegratedNote:
      'Deploy Accounting & Billing ERP as a clean finance system on its own, or connect it seamlessly as the accounting backbone for Manufacturing, Solar, Wholesale, or Retail modules.',
    compatibleModuleNames: [
      'Finance & Accounting',
      'Sales Management',
      'Purchase Management',
      'Reports & Analytics',
      'Role-Based Access Control',
      'Multi-Branch Management',
    ],
    relatedErpSlugs: [
      'inventory-wholesale-distribution-erp',
      'manufacturing-industrial-erp',
      'hr-payroll-erp',
    ],
    relatedServiceSlugs: [
      'billing-accounting-software',
      'erp-software-development',
      'business-management-software',
    ],
    relatedIndustrySlug: 'professional-services',
    faqs: [
      {
        question: 'Can Billing & Accounting ERP work alongside our Inventory or Solar modules?',
        answer:
          'Yes. Because all modules share a unified database schema, every purchase, inventory dispatch, or project milestone can post directly to accounting ledgers.',
      },
      {
        question: 'Can we control who is allowed to edit or cancel an approved invoice?',
        answer:
          'Yes. Role-based permissions and audit logs restrict voucher modifications and require structured credit/debit notes after finalization.',
      },
      {
        question: 'Does it support multiple company billing series or branches?',
        answer:
          'Yes. Separate invoice numbering series and branch cost centers allow multi-unit businesses to report individually and consolidated.',
      },
      {
        question: 'Can party statements be exported easily for auditors or customers?',
        answer:
          'Yes. Clean PDF and CSV/Excel exports are available across party ledgers, expense registers, and GST transaction summaries.',
      },
    ],
  },
  {
    slug: 'hr-payroll-erp',
    code: 'I',
    name: 'HR & Payroll ERP',
    shortTitle: 'HR & Payroll ERP',
    h1: 'HR, Attendance & Payroll Management ERP Software',
    heroSubtitle:
      'Organize employee profiles, daily attendance, leave approvals, payroll calculations, salary slips, and staff performance tracking in one system.',
    industryLabel: 'Factories, Offices, Hospitals, Schools & Multi-Site Teams',
    heroImage: BANNER_IMAGES.erpHrPayrollOffice,
    heroImageAlt: 'HR and payroll enterprise workstation managing attendance calendars and salary ledgers',
    canonicalPath: '/erp/hr-payroll-erp/',
    seoTitle: 'HR & Payroll ERP Software | Klyia Technology',
    metaDescription:
      'Custom HR & Payroll ERP software by Klyia Technology covering employee profiles, attendance, leave approvals, payroll processing, salary slips, and performance.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Manual muster rolls, scattered leave messages on WhatsApp, overtime spreadsheets, and salary calculation errors cost HR teams days of repetitive effort every month.',
      'Klyia Technology builds HR & Payroll ERP around your actual shift patterns, salary structures, attendance rules, advance deductions, and appraisal cycles—delivering accurate payroll registers and downloadable employee salary slips on schedule.',
    ],
    workflowFitNote:
      'Adapts smoothly to factory shifts, salaried office staff, field site engineers, and variable overtime/allowance rules.',
    workflowSteps: [
      {
        step: '01',
        title: 'Employee Onboarding & Salary Rules',
        detail: 'Store employee records, department roles, bank details, statutory identifiers, and custom CTC/earning components.',
      },
      {
        step: '02',
        title: 'Attendance & Shift Tracking',
        detail: 'Log daily check-ins, shift rosters, late marks, overtime hours, and biometric CSV/API imports seamlessly.',
      },
      {
        step: '03',
        title: 'Leave & Advance Approvals',
        detail: 'Process casual, sick, and earned leave requests along with staff salary advances and loan EMI schedules.',
      },
      {
        step: '04',
        title: 'Automated Monthly Payroll Run',
        detail: 'Compute prorated earnings, overtime payouts, deductions, PF/ESI components, and net payable bank transfer sheets.',
      },
      {
        step: '05',
        title: 'Salary Slips & Performance Reviews',
        detail: 'Distribute clean monthly salary slips and track structured periodic appraisal and KPI review notes.',
      },
    ],
    modules: [
      {
        title: 'Employee Management',
        detail: 'Maintain complete digital employee directories, department hierarchies, joining documents, and contract records.',
      },
      {
        title: 'Attendance',
        detail: 'Manage daily attendance registers, shift schedules, overtime calculations, and holiday calendars cleanly.',
      },
      {
        title: 'Leave',
        detail: 'Configure leave policies, annual balances, manager approval chains, and automated deduction rules for unpaid leave.',
      },
      {
        title: 'Payroll',
        detail: 'Run accurate monthly salary processing incorporating allowances, overtime, advances, and statutory deductions.',
      },
      {
        title: 'Salary Slips',
        detail: 'Generate standardized, itemized PDF salary slips ready for employee portals or confidential distribution.',
      },
      {
        title: 'Employee Performance',
        detail: 'Record quarterly/annual review criteria, manager feedback, attendance consistency, and increment histories.',
      },
    ],
    benefits: [
      'Cuts monthly payroll processing time from days of spreadsheet checking to minutes',
      'Eliminates manual overtime, leave, and salary advance deduction errors',
      'Centralizes employee onboarding documents across offices and factory plants',
      'Gives managers clear visibility into absenteeism trends and department staffing costs',
      'Integrates directly with Finance & Accounting salary expense postings when combined',
    ],
    standaloneVsIntegratedNote:
      'Run HR & Payroll as an independent human-resource module, or embed it inside Manufacturing, Hospital, School, or Multi-Branch ERP setups.',
    compatibleModuleNames: [
      'HRM and Payroll',
      'Finance & Accounting',
      'Document Management',
      'Role-Based Access Control',
      'Multi-Branch Management',
    ],
    relatedErpSlugs: ['manufacturing-industrial-erp', 'accounting-billing-erp', 'hospital-clinic-management'],
    relatedServiceSlugs: ['custom-software-development', 'erp-software-development', 'workflow-automation'],
    relatedIndustrySlug: 'manufacturing-engineering',
    faqs: [
      {
        question: 'Can HR & Payroll ERP handle factory shifts as well as office salaries?',
        answer:
          'Yes. Salary templates support monthly fixed salaries, daily attendance-based wages, overtime multipliers, and department shift rules.',
      },
      {
        question: 'Can attendance data from existing biometric machines be imported?',
        answer:
          'Yes. Attendance punch logs from standard biometric exports can be imported directly for monthly payroll calculation.',
      },
      {
        question: 'Does it track staff salary advances and loan installments?',
        answer:
          'Yes. Approved advances and recurring monthly deductions are automatically reflected in payroll runs until settled.',
      },
      {
        question: 'Can salary expenses flow automatically into company accounting?',
        answer:
          'Yes. When connected with our Finance & Accounting module, approved payroll summaries post cleanly into department expense ledgers.',
      },
    ],
  },
  {
    slug: 'logistics-fleet-erp',
    code: 'J',
    name: 'Logistics & Fleet ERP',
    shortTitle: 'Logistics & Fleet ERP',
    h1: 'Logistics, Transport & Fleet Management ERP Software',
    heroSubtitle:
      'Control vehicle fleets, trip sheets, route expenses, diesel fuel logs, consignment deliveries, and transport freight billing in one workspace.',
    industryLabel: 'Transporters, Fleet Operators & Industrial Logistics',
    heroImage: BANNER_IMAGES.logisticsFleet,
    heroImageAlt: 'Commercial freight fleet and logistics ERP dispatch control workspace',
    canonicalPath: '/erp/logistics-fleet-erp/',
    seoTitle: 'Logistics & Fleet Management ERP | Klyia Technology',
    metaDescription:
      'Custom Logistics & Fleet ERP software by Klyia Technology for fleet control, trip management, vehicle expenses, fuel tracking, delivery POD, and transport billing.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Fleet operators and transport companies watch profits leak through unverified diesel slips, delayed POD collections, unbilled detention days, missed vehicle fitness renewals, and scattered trip advance ledgers.',
      'Klyia Technology develops Logistics & Fleet ERP built around real Indian transport workflows—connecting booking desks, LR/bilty generation, driver trip advances, diesel mileage logs, maintenance tracking, and customer freight invoicing.',
    ],
    workflowFitNote:
      'Supports own-fleet operators, attached market vehicles, industrial bulk haulers, and branch-to-branch parcel transport networks.',
    workflowSteps: [
      {
        step: '01',
        title: 'Consignment Booking & LR / Bilty',
        detail: 'Create consignment notes, assign consignor/consignee billing rules, weight slabs, and freight rates.',
      },
      {
        step: '02',
        title: 'Vehicle Assignment & Trip Dispatch',
        detail: 'Allocate own or hired trucks, record driver details, issue route cash advances, and launch trip tracking.',
      },
      {
        step: '03',
        title: 'Fuel, Toll & Route Expense Logs',
        detail: 'Capture diesel pump slips, Fastag/toll charges, border fees, and loading/unloading charges against each trip ID.',
      },
      {
        step: '04',
        title: 'POD Upload & Delivery Confirmation',
        detail: 'Record delivery timestamps, signed Proof of Delivery (POD) uploads, and shortage/damage remarks.',
      },
      {
        step: '05',
        title: 'Transport Billing & Vehicle P&L',
        detail: 'Generate consolidated client freight bills and analyze exact net profitability per truck, driver, and route.',
      },
    ],
    modules: [
      {
        title: 'Fleet Management',
        detail: 'Track vehicle masters, RC, insurance, fitness, permit renewal dates, tyre histories, and workshop maintenance costs.',
      },
      {
        title: 'Trip Management',
        detail: 'Monitor active route trips, origin-destination manifests, trip advances, and round-trip turnaround schedules.',
      },
      {
        title: 'Vehicle Expenses',
        detail: 'Record toll, repair, driver allowance, loading hammali, and spare parts expenses mapped directly to vehicle numbers.',
      },
      {
        title: 'Fuel Tracking',
        detail: 'Verify diesel fill-ups, odometer readings, and calculated km-per-litre mileage variances across trips.',
      },
      {
        title: 'Delivery Management',
        detail: 'Track pending vs delivered consignments, Proof of Delivery attachments, and party confirmation alerts.',
      },
      {
        title: 'Transport Billing',
        detail: 'Automate trip-based or monthly consolidated GST transport bills, detention charges, and transporter settlement ledgers.',
      },
    ],
    benefits: [
      'Exposes fuel mileage anomalies and excessive route repair costs per truck',
      'Prevents missed insurance, permit, and fitness renewals with automated reminders',
      'Eliminates unbilled trips by linking POD verification directly to transport invoicing',
      'Simplifies driver advance and trip settlement sheets after route completion',
      'Computes real route-wise and vehicle-wise net margins automatically',
    ],
    standaloneVsIntegratedNote:
      'Operate Logistics & Fleet ERP standalone for transport businesses, or integrate it into Manufacturing, Steel, or Wholesale ERPs for in-house dispatch fleets.',
    compatibleModuleNames: [
      'Finance & Accounting',
      'Workflow Automation',
      'Document Management',
      'Reports & Analytics',
      'WhatsApp Integration',
    ],
    relatedErpSlugs: [
      'manufacturing-industrial-erp',
      'inventory-wholesale-distribution-erp',
      'accounting-billing-erp',
    ],
    relatedServiceSlugs: [
      'erp-software-development',
      'workflow-automation',
      'billing-accounting-software',
    ],
    relatedIndustrySlug: 'logistics-transportation',
    faqs: [
      {
        question: 'Can the ERP calculate truck diesel mileage per trip automatically?',
        answer:
          'Yes. Recording starting/closing odometer readings alongside diesel receipts calculates trip mileage and flags unusual fuel consumption.',
      },
      {
        question: 'Does it support both owned vehicles and hired market trucks?',
        answer:
          'Yes. Own trucks track maintenance, fuel, and driver settlements while hired market trucks track broker freight rates, advances, and balance payouts.',
      },
      {
        question: 'Can we prevent billing delays caused by missing POD copies?',
        answer:
          'Yes. Dispatch desks see clear pending-POD alerts per trip and can upload scanned or mobile-captured POD receipts directly to the trip record.',
      },
      {
        question: 'Does it integrate with company GST accounting?',
        answer:
          'Yes. Freight bills, vendor settlements, and trip expenses post cleanly when paired with our Finance & Accounting module.',
      },
    ],
  },
  {
    slug: 'construction-real-estate-erp',
    code: 'K',
    name: 'Construction & Real Estate ERP',
    shortTitle: 'Construction & Real Estate ERP',
    h1: 'Construction & Real Estate ERP Software',
    heroSubtitle:
      'Control multi-site project execution, contractor billing, construction material stocks, site expenses, property unit inventory, and buyer CRM.',
    industryLabel: 'Builders, Infrastructure Contractors & Property Developers',
    heroImage: BANNER_IMAGES.realEstate,
    heroImageAlt: 'Real estate development and construction site project management ERP',
    canonicalPath: '/erp/construction-real-estate-erp/',
    seoTitle: 'Construction & Real Estate ERP | Klyia Technology',
    metaDescription:
      'Custom Construction & Real Estate ERP software by Klyia Technology for project control, contractor bills, site materials, expenses, property units, and buyer CRM.',
    indexable: true,
    updatedAt: '2026-11-20',
    overview: [
      'Construction contractors and real estate developers manage simultaneous multi-site material deliveries, contractor running-account (RA) bills, fluctuating site expenses, unit booking schedules, and milestone buyer payment plans.',
      'Klyia Technology builds Construction & Real Estate ERP around your engineering sites and sales desks—giving builders clear oversight over material consumption vs BOQ budgets alongside live apartment, plot, or commercial unit availability.',
    ],
    workflowFitNote:
      'Built separately or together for EPC infrastructure contractors (BOQ, RA bills, site stores) and Real Estate developers (unit inventory, CRM, demand letters).',
    workflowSteps: [
      {
        step: '01',
        title: 'Project, BOQ & Property Setup',
        detail: 'Define construction projects, tower/plot inventories, stage budgets, and contractor rate schedules.',
      },
      {
        step: '02',
        title: 'Site Material Procurement & GRN',
        detail: 'Process site indents, deliver steel/cement/aggregates directly to project stores, and verify weighment/challans.',
      },
      {
        step: '03',
        title: 'Contractor Work & RA Billing',
        detail: 'Track contractor measurement books, running bills, retention holds, and labour/material advance recoveries.',
      },
      {
        step: '04',
        title: 'Property CRM & Unit Bookings',
        detail: 'Track prospect site visits, available/blocked/sold property units, allotment letters, and payment milestones.',
      },
      {
        step: '05',
        title: 'Site Expenses & Project Cashflow',
        detail: 'Monitor site-by-site expenditure against client receipts, overdue installments, and projected completion budgets.',
      },
    ],
    modules: [
      {
        title: 'Project Management',
        detail: 'Track stage-wise civil milestones, engineer site progress logs, BOQ budgets, and project completion timelines.',
      },
      {
        title: 'Contractor Management',
        detail: 'Maintain sub-contractor work orders, measurement entries, Running Account (RA) bill deductions, and retention balances.',
      },
      {
        title: 'Material Management',
        detail: 'Control cement, TMT steel, electrical, and finishing material indents, receipts, and inter-site transfers.',
      },
      {
        title: 'Site Expenses',
        detail: 'Log daily petty cash expenses, machinery rental hours, and supervisor vouchers with approval tracking.',
      },
      {
        title: 'Property Management',
        detail: 'Display live availability across plots, flats, and commercial units along with floor plans and payment stages.',
      },
      {
        title: 'Customer CRM',
        detail: 'Manage buyer enquiries, site visit follow-ups, booking allocations, demand letters, and receipt schedules.',
      },
    ],
    benefits: [
      'Prevents cement, steel, and consumable over-ordering or site wastage',
      'Audits contractor RA bills accurately against approved work measurements and advances',
      'Eliminates double-booking of plots or flats across multiple sales executives',
      'Automates buyer construction-linked demand notes and installment reminders',
      'Gives directors clear project-by-project cash flow and cost-overrun visibility',
    ],
    standaloneVsIntegratedNote:
      'Deploy Customer CRM & Property Management independently for real estate sales offices, or run the full integrated Construction Site Materials, Contractor Billing & Finance ERP.',
    compatibleModuleNames: [
      'CRM and Lead Management',
      'Project Management',
      'Purchase Management',
      'Inventory Management',
      'Finance & Accounting',
      'Document Management',
      'WhatsApp Integration',
    ],
    relatedErpSlugs: [
      'solar-erp-epc-software',
      'manufacturing-industrial-erp',
      'accounting-billing-erp',
    ],
    relatedServiceSlugs: [
      'crm-software-development',
      'erp-software-development',
      'whatsapp-business-automation',
    ],
    relatedIndustrySlug: 'real-estate-construction',
    faqs: [
      {
        question: 'Can builders track both civil construction site expenses and property buyer payments?',
        answer:
          'Yes. Site Material & Contractor modules track execution costs while Property Management & Customer CRM manage unit bookings and installment receipts.',
      },
      {
        question: 'Does Contractor Management track retention money and advances?',
        answer:
          'Yes. Running bills automatically deduct material/cash advances and retain configured retention percentages until project defect-liability completion.',
      },
      {
        question: 'Can site engineers request materials directly from construction sites?',
        answer:
          'Yes. Web-based mobile-friendly access allows site supervisors to raise material indents and verify GRN deliveries on site.',
      },
      {
        question: 'Can sales teams check live unit availability during customer meetings?',
        answer:
          'Yes. Interactive unit charts display Available, Hold, and Booked status in real time with role-based booking locks.',
      },
    ],
  },
];

export const ERP_MODULES: ErpModuleItem[] = [
  {
    id: 'crm-lead-management',
    name: 'CRM and Lead Management',
    summary:
      'Capture enquiries from websites, ads, and field teams; assign follow-ups, track quotation stages, and convert prospects cleanly without lead leakage.',
    architecture: 'Standalone or Integrated',
    standaloneCapable: true,
    capabilities: [
      'Automated lead capture and source tagging',
      'Quotation pipeline and follow-up reminders',
      'Sales team activity tracking and conversion logs',
    ],
    recommendedErpSlugs: ['solar-erp-epc-software', 'construction-real-estate-erp'],
  },
  {
    id: 'inventory-management',
    name: 'Inventory Management',
    summary:
      'Monitor real-time stock quantities across multi-unit items, batches, serial numbers, minimum reorder alerts, and multi-warehouse locations.',
    architecture: 'Standalone or Integrated',
    standaloneCapable: true,
    capabilities: [
      'Multi-godown and bin-level stock ledger',
      'Batch, serial number, and dual-unit tracking',
      'Reorder alerts and physical audit reconciliation',
    ],
    recommendedErpSlugs: ['manufacturing-industrial-erp', 'inventory-wholesale-distribution-erp'],
  },
  {
    id: 'purchase-management',
    name: 'Purchase Management',
    summary:
      'Coordinate material indents, vendor RFQ comparisons, approved purchase orders, partial GRNs, and supplier bill verification.',
    architecture: 'Unified Core Module',
    standaloneCapable: false,
    capabilities: [
      'Department/site purchase indents and approvals',
      'Vendor quotation rate history comparison',
      'PO-to-GRN quantity & quality matching',
    ],
    recommendedErpSlugs: ['manufacturing-industrial-erp', 'construction-real-estate-erp'],
  },
  {
    id: 'sales-management',
    name: 'Sales Management',
    summary:
      'Handle customer price tiers, sales orders, credit limit checks, dispatch challans, returns, and sales team target tracking.',
    architecture: 'Unified Core Module',
    standaloneCapable: false,
    capabilities: [
      'Dealer rate slabs and discount approval rules',
      'Sales order to dispatch note conversion',
      'Automatic overdue credit limit holds',
    ],
    recommendedErpSlugs: ['inventory-wholesale-distribution-erp', 'fruit-mandi-trading-erp'],
  },
  {
    id: 'finance-accounting',
    name: 'Finance & Accounting',
    summary:
      'Unify GST billing, general ledgers, party statements, expense vouchers, receipts/payments, and financial reporting inside the same database.',
    architecture: 'Standalone or Integrated',
    standaloneCapable: true,
    capabilities: [
      'GST-compliant tax invoicing and summaries',
      'Bill-by-bill customer and supplier ledgers',
      'Expense approvals and bank/cash book logs',
    ],
    recommendedErpSlugs: ['accounting-billing-erp', 'inventory-wholesale-distribution-erp'],
  },
  {
    id: 'hrm-payroll',
    name: 'HRM and Payroll',
    summary:
      'Automate employee onboarding records, shift attendance, leave approvals, monthly payroll calculations, advances, and printable salary slips.',
    architecture: 'Standalone or Integrated',
    standaloneCapable: true,
    capabilities: [
      'Attendance register & biometric log import',
      'Leave balances and advance/loan EMI deductions',
      'Monthly payroll register & PDF salary slips',
    ],
    recommendedErpSlugs: ['hr-payroll-erp', 'manufacturing-industrial-erp'],
  },
  {
    id: 'pos-billing',
    name: 'POS Billing',
    summary:
      'Deliver rapid counter billing with barcode scanning, held carts, split payment modes, thermal receipts, and live branch stock deduction.',
    architecture: 'Standalone or Integrated',
    standaloneCapable: true,
    capabilities: [
      'Barcode scan checkout & thermal bill printing',
      'Split Cash / UPI / Card tender support',
      'Shift cash drawer opening & closing totals',
    ],
    recommendedErpSlugs: ['retail-pos-erp', 'hospital-clinic-management'],
  },
  {
    id: 'reports-analytics',
    name: 'Reports & Analytics',
    summary:
      'Provide owners and department managers with role-scoped live dashboards covering sales, stock valuation, project margins, and overdue receivables.',
    architecture: 'Unified Core Module',
    standaloneCapable: false,
    capabilities: [
      'Stock aging, profitability & branch summaries',
      'Scheduled Excel/CSV & PDF management exports',
      'Variance alerts for production, fuel, or margins',
    ],
    recommendedErpSlugs: ['manufacturing-industrial-erp', 'accounting-billing-erp'],
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    summary:
      'Automate multi-level discount, PO, and credit approvals alongside scheduled operational triggers so routine tasks never stall in email threads.',
    architecture: 'Automation & Extension',
    standaloneCapable: true,
    capabilities: [
      'Conditional approval rules by amount or role',
      'Automated follow-up & AMC schedule reminders',
      'Zero-manual handoff between departments',
    ],
    recommendedErpSlugs: ['solar-erp-epc-software', 'logistics-fleet-erp'],
  },
  {
    id: 'project-management',
    name: 'Project Management',
    summary:
      'Manage task milestones, installation teams, site surveys, BOQ consumption, and project-wise budget vs actual profitability.',
    architecture: 'Standalone or Integrated',
    standaloneCapable: true,
    capabilities: [
      'Milestone checklists and crew assignments',
      'Project material vs budget variance tracking',
      'Stage-linked customer billing schedules',
    ],
    recommendedErpSlugs: ['solar-erp-epc-software', 'construction-real-estate-erp'],
  },
  {
    id: 'customer-support-ticketing',
    name: 'Customer Support & Ticketing',
    summary:
      'Log AMC breakdowns, installation service calls, technician assignments, and resolution SLA timelines linked directly to customer equipment records.',
    architecture: 'Standalone or Integrated',
    standaloneCapable: true,
    capabilities: [
      'Serial-linked warranty & AMC ticket history',
      'Field technician assignment and status logs',
      'Spare parts consumption tracking per ticket',
    ],
    recommendedErpSlugs: ['solar-erp-epc-software', 'retail-pos-erp'],
  },
  {
    id: 'whatsapp-integration',
    name: 'WhatsApp Integration',
    summary:
      'Trigger official opt-in WhatsApp notifications directly from ERP events—including lead acknowledgements, invoice PDFs, dispatch alerts, and payment reminders.',
    architecture: 'Automation & Extension',
    standaloneCapable: false,
    capabilities: [
      'Automated GST invoice & patti PDF sharing',
      'Truck dispatch & appointment confirmations',
      'Polite scheduled receivable & AMC alerts',
    ],
    recommendedErpSlugs: ['solar-erp-epc-software', 'fruit-mandi-trading-erp'],
  },
  {
    id: 'ecommerce-integration',
    name: 'E-commerce Integration',
    summary:
      'Synchronize online web store SKUs, pricing, order statuses, and central warehouse inventory with back-office ERP billing automatically.',
    architecture: 'Automation & Extension',
    standaloneCapable: false,
    capabilities: [
      'Live catalogue & stock sync with web store',
      'Automated online order import into dispatch',
      'Customer return & refund stock adjustments',
    ],
    recommendedErpSlugs: ['retail-pos-erp', 'inventory-wholesale-distribution-erp'],
  },
  {
    id: 'multi-branch-management',
    name: 'Multi-Branch Management',
    summary:
      'Operate multiple factories, warehouses, showrooms, or offices in one system with branch-isolated transactions and consolidated head-office oversight.',
    architecture: 'Unified Core Module',
    standaloneCapable: false,
    capabilities: [
      'Branch-scoped billing & cash books',
      'Inter-branch stock transfers & reconciliations',
      'Consolidated company-wide leadership reports',
    ],
    recommendedErpSlugs: ['inventory-wholesale-distribution-erp', 'school-college-erp'],
  },
  {
    id: 'role-based-access-control',
    name: 'Role-Based Access Control',
    summary:
      'Protect sensitive financial margins, pricing rules, and employee records with granular screen-level, action-level, and branch-level permissions.',
    architecture: 'Unified Core Module',
    standaloneCapable: false,
    capabilities: [
      'View, create, edit & approve permission scopes',
      'Immutable user activity & audit trails',
      'Department & branch data isolation',
    ],
    recommendedErpSlugs: ['hospital-clinic-management', 'accounting-billing-erp'],
  },
  {
    id: 'document-management',
    name: 'Document Management',
    summary:
      'Attach KYC proofs, site survey photos, vendor quotes, test certificates, POD scans, and signed contracts directly to corresponding ERP records.',
    architecture: 'Automation & Extension',
    standaloneCapable: false,
    capabilities: [
      'Record-linked file storage across modules',
      'Document expiry tracking for permits/contracts',
      'Fast role-controlled retrieval & audit readiness',
    ],
    recommendedErpSlugs: ['construction-real-estate-erp', 'logistics-fleet-erp'],
  },
];

export const ERP_WHY_CHOOSE_POINTS: ErpWhyChooseItem[] = [
  {
    title: 'Custom-developed business software',
    detail:
      'Engineered from your real commercial rules, billing formats, and approval flows rather than forcing compromises with rigid boxed packages.',
  },
  {
    title: 'Industry-specific workflows',
    detail:
      'Practical domain knowledge across Steel & Manufacturing, Solar EPC, Mandis, Wholesale Distribution, Healthcare, Education, Fleet, and Retail.',
  },
  {
    title: 'Modular ERP architecture',
    detail:
      'Launch high-impact modules first or deploy an integrated multi-department system—every module shares clean, expandable relational tables.',
  },
  {
    title: 'Cloud and on-premise deployment options where suitable',
    detail:
      'Hosted on secure cloud infrastructure for distributed teams or deployed on private local/on-premise servers where operational policies require it.',
  },
  {
    title: 'Web-based and mobile-friendly access',
    detail:
      'Responsive modern browser interfaces let factory supervisors, site engineers, and directors check dashboards from desktops, tablets, or smartphones.',
  },
  {
    title: 'Role-based permissions',
    detail:
      'Granular user roles restrict pricing edits, backdated voucher modifications, margin visibility, and branch access across every screen.',
  },
  {
    title: 'Secure database architecture',
    detail:
      'Structured SQL database design, server-side input validation, parameterized queries, and scheduled backup strategies protect business continuity.',
  },
  {
    title: 'Third-party API integrations',
    detail:
      'Connect ERP workflows cleanly with official WhatsApp Business APIs, weighbridge/biometric exports, e-commerce sites, and accounting exports.',
  },
  {
    title: 'Custom reports and dashboards',
    detail:
      'Build management MIS views, daily close summaries, aging schedules, and downloadable Excel/PDF reports tailored to how owners review numbers.',
  },
  {
    title: 'Data migration assistance',
    detail:
      'Structured cleaning and import support for verified item masters, customer/vendor directories, and opening stock/ledger balances.',
  },
  {
    title: 'Training and technical support',
    detail:
      'Hands-on staff onboarding sessions (on-site in Bhilai, Durg & Raipur or remotely across India) alongside ongoing technical maintenance.',
  },
  {
    title: 'Scalable architecture',
    detail:
      'Designed so adding new warehouses, branches, users, or workflow extensions later does not require rebuilding your core platform.',
  },
];

export const ERP_DEVELOPMENT_PROCESS: WorkProcessStep[] = [
  {
    step: '01',
    title: 'Business Requirement Analysis',
    description:
      'We audit your current registers, Excel sheets, GST billing rules, approval steps, and team roles to map every operational bottleneck clearly.',
  },
  {
    step: '02',
    title: 'Workflow Planning & UI/UX Design',
    description:
      'Our architects design clean relational database schemas, role permissions, screen wireframes, and modular phase milestones tailored to your staff.',
  },
  {
    step: '03',
    title: 'ERP Development & Integration',
    description:
      'Engineers build the backend APIs, interactive web dashboards, validation rules, reporting engines, and approved external API integrations.',
  },
  {
    step: '04',
    title: 'Testing, Data Migration & Deployment',
    description:
      'Every calculation is verified with your real sample vouchers, existing item/party masters are migrated cleanly, and the system is deployed securely.',
  },
  {
    step: '05',
    title: 'Training, Support & Maintenance',
    description:
      'We conduct practical operator training across departments and provide ongoing technical support, updates, and module expansion as you grow.',
  },
];

export const ERP_SHOWCASE_ITEMS: ErpShowcaseItem[] = [
  {
    id: 'klyia-solar-erp',
    title: 'Klyia Solar ERP',
    category: 'Solar EPC & Renewable Energy',
    summary:
      'Unified Solar EPC software architecture covering rooftop and C&I enquiries, site surveys, module/inverter serial allocation, installation stages, and AMC scheduling.',
    workflowFocus: 'Enquiry → Survey → BOM Serials → DISCOM/Installation → AMC',
    detailHref: '/erp/solar-erp-epc-software/',
    enquirySolutionValue: 'Solar ERP & EPC Management',
    highlights: [
      'Project-wise kW proposal & survey tracking',
      'Panel and inverter serial-level BOM inventory',
      'DISCOM stage milestones & AMC service logs',
    ],
    image: BANNER_IMAGES.solarErpDashboard,
    imageAlt: 'Klyia Solar ERP system managing solar EPC projects and material serials',
  },
  {
    id: 'hari-kripa-fruit-erp',
    title: 'Hari Kripa Fruit ERP / FreshERP',
    category: 'Fruit Mandi & Commission Trading',
    summary:
      'High-speed mandi ERP software system engineered for morning fruit & vegetable lot auctions, farmer arrival entries, net-weight patti calculations, and buyer crate balances.',
    workflowFocus: 'Arrival → Rapid Auction Split → Crate Ledger → Farmer Patti',
    detailHref: '/erp/fruit-mandi-trading-erp/',
    enquirySolutionValue: 'Fruit Mandi & Trading ERP',
    highlights: [
      'Keyboard-fast auction entry for high-volume counters',
      'Automated farmer sale proceeds (patti) deductions',
      'Live plastic crate & cash/credit buyer balance printing',
    ],
    image: BANNER_IMAGES.fruitVegetableMandi,
    imageAlt: 'Hari Kripa Fruit ERP / FreshERP architecture for wholesale mandi and crate tracking',
  },
  {
    id: 'nav-durga-ispat-erp',
    title: 'Nav Durga Ispat ERP',
    category: 'Steel Trading & Manufacturing',
    summary:
      'Industrial steel ERP system connecting inward raw material receipts, dual-unit weight/bundle stock, production work orders, weighbridge dispatch, and party credit controls.',
    workflowFocus: 'Raw Inward → Rolling / BOM → Dual MT/Pcs Stock → Dispatch',
    detailHref: '/erp/manufacturing-industrial-erp/',
    enquirySolutionValue: 'Manufacturing & Industrial ERP',
    highlights: [
      'Dual MT/kg weight and bundle/piece stock visibility',
      'Production yield, scrap control & costing logs',
      'Dispatch challans & dealer credit limit verification',
    ],
    image: BANNER_IMAGES.steelIron,
    imageAlt: 'Nav Durga Ispat ERP architecture built for steel manufacturing and stockyards',
  },
  {
    id: 'custom-crm-business-systems',
    title: 'Custom CRM and Business Management Systems',
    category: 'B2B Sales, Operations & Automation',
    summary:
      'Bespoke CRM, approval workflow, billing, and customer management platforms designed for growing organizations whose commercial workflows do not fit off-the-shelf templates.',
    workflowFocus: 'Lead Pipeline → Quotations → Approvals → Billing → Alerts',
    detailHref: '/services/crm-software-development/',
    enquirySolutionValue: 'Custom CRM & Business Applications',
    highlights: [
      'Custom pipeline stages & field follow-up logs',
      'Automated WhatsApp & email enquiry routing',
      'Role-based dashboards & custom MIS exports',
    ],
    image: BANNER_IMAGES.crmDashboard,
    imageAlt: 'Custom CRM and business management dashboard engineered by Klyia Technology',
  },
];

export const ERP_RESOURCE_GUIDES: ErpResourceGuide[] = [
  {
    slug: 'what-is-erp-software',
    title: 'What is ERP Software?',
    category: 'ERP Fundamentals',
    summary:
      'Understand how Enterprise Resource Planning unites inventory, purchasing, sales, finance, HR, and approvals in a single shared source of truth.',
    fullContent: [
      'ERP (Enterprise Resource Planning) software integrates core daily business functions—such as inventory, procurement, sales billing, production, finance, and human resources—into one centralized database.',
      'Instead of each department maintaining isolated Excel sheets or disconnected billing tools that require manual reconciliation at month-end, every approved transaction updates inventory balances, party ledgers, and operational reports simultaneously.',
    ],
    keyTakeaways: [
      'Replaces disconnected registers and manual spreadsheet copying between teams',
      'Provides real-time visibility into stock levels, pending orders, and receivables',
      'Enforces role-based permissions and clean audit trails across departments',
    ],
    relatedErpSlug: 'manufacturing-industrial-erp',
  },
  {
    slug: 'benefits-of-custom-erp',
    title: 'Benefits of Custom ERP',
    category: 'Business Strategy',
    summary:
      'Why building software around your commercial rules, pricing formulas, and dual units outperforms forcing staff into generic boxed tools.',
    fullContent: [
      'Generic software works adequately only when every company operates identically. In real Indian manufacturing, trading, solar EPC, and distribution businesses, competitive advantage comes from unique pricing slabs, credit rules, wastage formulas, and multi-unit inventory.',
      'Custom ERP eliminates daily Excel workarounds, removes recurring per-user seat fees across large teams, and grows modularly whenever you add branches or new product lines.',
    ],
    keyTakeaways: [
      '100% alignment with your actual pricing, tax, credit, and approval workflows',
      'Zero dependency on bloated paid plugins or unwanted per-user licensing ceilings',
      'Full ownership over your operational data structures and upgrade roadmap',
    ],
    relatedErpSlug: 'inventory-wholesale-distribution-erp',
    relatedBlogSlug: 'custom-software-vs-ready-made-software',
  },
  {
    slug: 'erp-vs-traditional-software',
    title: 'ERP vs Traditional Software',
    category: 'Architecture Comparison',
    summary:
      'Compare standalone accounting/billing software against integrated ERP systems when headcount, warehouses, and order volume expand.',
    fullContent: [
      'Traditional accounting packages are engineered primarily to record invoices and tax entries after transactions finish—they do not control shop-floor BOM wastage, site survey stages, credit locks prior to billing, or crate returns.',
      'An ERP connects operational execution before billing (purchases, work orders, site surveys, dispatch approvals) directly to financial ledgers so problems are prevented rather than discovered weeks later.',
    ],
    keyTakeaways: [
      'Traditional tools record history; ERP actively coordinates live operations',
      'Prevents unauthorized dispatches, unrecorded wastage, and duplicate entries',
      'Connects multi-branch stock, staff tasks, and accounting in real time',
    ],
    relatedErpSlug: 'accounting-billing-erp',
    relatedBlogSlug: 'custom-software-vs-ready-made-software',
  },
  {
    slug: 'cloud-erp-vs-on-premise-erp',
    title: 'Cloud ERP vs On-Premise ERP',
    category: 'Deployment Planning',
    summary:
      'How to decide between secure cloud hosting for multi-branch/mobile access vs local on-premise deployment for plant-specific requirements.',
    fullContent: [
      'Cloud ERP deployment enables multi-branch warehouses, field engineers, and travelling directors to access real-time data over encrypted web browsers without managing physical office servers.',
      'On-premise deployment runs on dedicated hardware inside your facility—sometimes preferred by factories with strict internal LAN isolation policies or existing local infrastructure. Klyia Technology helps evaluate internet reliability, backup governance, and user locations before recommending either approach.',
    ],
    keyTakeaways: [
      'Cloud suits multi-location teams, field apps, and automatic offsite backups',
      'On-premise works where local plant network isolation is specifically required',
      'Both options use clean web-based interfaces rather than heavy legacy installs',
    ],
    relatedErpSlug: 'logistics-fleet-erp',
  },
  {
    slug: 'erp-implementation-guide',
    title: 'ERP Implementation Guide',
    category: 'Implementation Playbook',
    summary:
      'A realistic checklist for rolling out custom ERP without disrupting daily billing—covering data cleanup, parallel runs, and role training.',
    fullContent: [
      'Successful ERP rollouts happen in focused, well-tested phases rather than switching off every existing process overnight. Start by standardizing clean item codes, customer/supplier ledgers, and opening stock balances.',
      'Run structured user-acceptance testing using real sample vouchers, train operators department by department, and establish clear role boundaries before live cutover.',
    ],
    keyTakeaways: [
      'Audit and clean SKU codes and party ledgers before importing opening data',
      'Validate complex GST, rounding, and deduction cases on real past bills first',
      'Roll out in practical phases starting with highest-friction operational bottlenecks',
    ],
    relatedErpSlug: 'manufacturing-industrial-erp',
  },
  {
    slug: 'manufacturing-erp-guide',
    title: 'Manufacturing ERP Guide',
    category: 'Industrial Operations',
    summary:
      'Essential workflows in plant ERP software: Bill of Materials, raw material GRNs, work orders, scrap reconciliation, and landed unit costing.',
    fullContent: [
      'Effective Manufacturing ERP links store rooms, production supervisors, quality labs, and dispatch gates together. Every work order tracks standard BOM vs actual raw material issued, recovered scrap, and rejection reasons.',
      'In sectors like steel rolling, fabrication, and machinery assembly, dual-unit weight + piece tracking ensures physical bundles match ERP stock continuously.',
    ],
    keyTakeaways: [
      'Track standard vs actual BOM variance on every production batch',
      'Reconcile recoverable scrap and by-products automatically',
      'Link incoming raw QC checks directly to vendor performance & payment clearance',
    ],
    relatedErpSlug: 'manufacturing-industrial-erp',
    relatedBlogSlug: 'erp-software-for-steel-trading-and-manufacturing',
  },
  {
    slug: 'solar-erp-guide',
    title: 'Solar ERP Guide',
    category: 'Renewable Energy',
    summary:
      'How residential and C&I Solar EPC businesses coordinate lead pipelines, site surveys, panel/inverter serial numbers, installation milestones, and AMC.',
    fullContent: [
      'Scaling beyond 15–20 monthly solar installations strains Excel sheets quickly. Solar EPC companies must align site survey engineers, procurement teams, installation crews, and DISCOM paperwork without losing inverter warranty serial numbers.',
      'Purpose-built Solar ERP binds every enquiry, survey form, kW BOM, serial dispatch, project cost sheet, and 5-year AMC visit under one traceable project code.',
    ],
    keyTakeaways: [
      'Eliminate survey-to-procurement communication gaps',
      'Maintain complete solar module & inverter serial traceability per site',
      'Track DISCOM net-metering, subsidy milestones, and preventive AMC tickets',
    ],
    relatedErpSlug: 'solar-erp-epc-software',
    relatedBlogSlug: 'solar-epc-erp-and-crm-software-guide',
  },
  {
    slug: 'inventory-management-guide',
    title: 'Inventory Management Guide',
    category: 'Supply Chain & Wholesale',
    summary:
      'Stop stockouts, batch expiry losses, and multi-warehouse blind spots using live godown ledgers, reorder rules, and pick-to-dispatch tracking.',
    fullContent: [
      'Inventory ties up the largest share of working capital in wholesale, manufacturing, and retail businesses. Without accurate godown-level stock balances, sales teams over-promise out-of-stock items while slow-moving SKUs gather dust.',
      'Modern ERP inventory tracking uses reorder minimums, inter-warehouse transfer logs, batch/expiry priorities, and conversion factors between bulk cartons and retail units.',
    ],
    keyTakeaways: [
      'Separate physical godowns and damaged/quarantine stock cleanly',
      'Use automated low-stock alerts to reduce emergency high-cost purchasing',
      'Tie dispatch pick slips directly to GST invoicing to stop unbilled movement',
    ],
    relatedErpSlug: 'inventory-wholesale-distribution-erp',
    relatedBlogSlug: 'fruit-vegetable-mandi-billing-and-crate-tracking-software',
  },
  {
    slug: 'business-automation-guide',
    title: 'Business Automation Guide',
    category: 'Workflow & Integration',
    summary:
      'Automate high-frequency operational handoffs—like approval alerts, WhatsApp dispatch notifications, invoice sharing, and recurring AMC reminders.',
    fullContent: [
      'Business automation delivers the highest return when applied to predictable, repetitive manual steps: notifying buyers of dispatched trucks, escalating credit-limit overrides to directors, or sending polite overdue reminders.',
      'Built directly inside your ERP and paired with official WhatsApp Business APIs, controlled automation saves staff hours daily while improving customer response speed.',
    ],
    keyTakeaways: [
      'Automate event-driven customer updates without spammy manual broadcasting',
      'Replace verbal approval bottlenecks with clear audit-logged digital sign-offs',
      'Connect website enquiries straight into ERP/CRM sales queues immediately',
    ],
    relatedErpSlug: 'solar-erp-epc-software',
    relatedBlogSlug: 'how-whatsapp-business-automation-helps-increase-lead-response',
  },
];

export const ERP_LANDING_FAQS: FaqEntry[] = [
  {
    question: 'What is custom ERP software?',
    answer:
      'Custom ERP software is a centralized business management platform built specifically around your company’s workflows, billing formats, inventory units, approvals, and reporting needs—uniting departments inside one shared database rather than forcing you to change your business to fit generic off-the-shelf software.',
  },
  {
    question: 'Can ERP be customized for my business?',
    answer:
      'Yes. Every ERP solution developed by Klyia Technology is designed around your operational rules—including custom multi-unit inventory (such as MT and pieces or crates and kg), approval thresholds, dealer pricing slabs, GST invoicing formats, and industry-specific checklists.',
  },
  {
    question: 'Can I purchase only selected modules?',
    answer:
      'Yes. Our modular architecture lets you deploy priority standalone modules first—such as CRM & Lead Management, Inventory Management, HR & Payroll, POS Billing, or Accounting—and integrate additional departments later inside the same unified system.',
  },
  {
    question: 'Can ERP integrate with existing software?',
    answer:
      'Yes. Where supported by standard APIs or structured file exports, our ERP modules can integrate with official WhatsApp Business APIs, e-commerce websites, biometric attendance logs, weighbridge exports, and existing accounting workflows.',
  },
  {
    question: 'Can I access ERP from mobile?',
    answer:
      'Yes. Our ERP interfaces are web-based and responsive, allowing owners, field engineers, survey teams, and managers to view dashboards, approve requests, and update workflows securely from mobile browsers or tablets.',
  },
  {
    question: 'Is cloud deployment available?',
    answer:
      'Yes. We support secure cloud deployment for multi-branch teams requiring anywhere access, as well as on-premise deployment options where specific facility policies or internal network setups make local hosting suitable.',
  },
  {
    question: 'Can you migrate our existing data?',
    answer:
      'Yes. As part of our deployment workflow (Step 04), we assist with validating, cleaning, and importing verified customer/vendor directories, SKU/BOM item masters, and opening stock or ledger balances from structured Excel/CSV sheets.',
  },
  {
    question: 'Do you provide training and support?',
    answer:
      'Yes. We conduct practical role-based training for operators, storekeepers, accountants, and managers—on-site across Bhilai, Durg, and Raipur or remotely across India—and provide ongoing technical support and maintenance.',
  },
  {
    question: 'How long does ERP development take?',
    answer:
      'Timelines depend directly on the number of modules, custom workflow rules, and integrations involved. Focused single-department or phase-1 deployments roll out significantly faster than multi-branch enterprise suites; we provide an honest milestone schedule after Business Requirement Analysis.',
  },
  {
    question: 'Can the system support multiple branches?',
    answer:
      'Yes. With Multi-Branch Management enabled, organizations can manage separate warehouses, factories, showrooms, or offices under role-isolated branch permissions while viewing consolidated company-wide performance reports.',
  },
];

export const ERP_CONSULTATION_INDUSTRY_OPTIONS: string[] = [
  'Manufacturing & Steel',
  'Solar & Renewable Energy',
  'Wholesale & Distribution',
  'Fruit Mandi & Agro Trading',
  'Hospital & Healthcare',
  'School & Education',
  'Retail & E-commerce',
  'Logistics & Transportation',
  'Construction & Real Estate',
  'Professional & Other Services',
];

export const ERP_CONSULTATION_SOLUTION_OPTIONS: string[] = [
  ...ERP_PRODUCTS.map((p) => p.name),
  'Custom ERP Development (Tailored Scope)',
  'Custom CRM & Business Applications',
];

export function getErpProductBySlug(slug: string): ErpProductData | undefined {
  return ERP_PRODUCTS.find((item) => item.slug === slug);
}
