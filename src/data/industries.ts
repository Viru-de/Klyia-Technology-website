import {BANNER_IMAGES} from '../config/banners.ts';
import type {IndustryPageData} from './types.ts';

const UPDATED_DATE = '2026-11-18';

export const ALL_INDUSTRIES: IndustryPageData[] = [
  {
    slug: 'steel-iron-industry',
    name: 'Steel & Iron Industry',
    h1: 'Software, ERP & Digital Solutions for the Steel & Iron Industry',
    heroSubtitle:
      'Dual MT/piece inventory control, rolling-mill yield tracking, weighbridge integration, dealer portals, and B2B search growth for steel plants and traders.',
    heroImage: BANNER_IMAGES.steelIron,
    heroImageAlt: 'Steel rolling mill coils, structural beams, and industrial plant operations',
    canonicalPath: '/industries/steel-iron-industry/',
    priorityBadge: 'Priority Industrial Specialization',
    seoTitle: 'Steel & Iron ERP, Software & Web | Bhilai | Klyia Technology',
    metaDescription:
      'Custom Steel ERP, TMT & structural steel inventory (MT/pieces), weighbridge tracking, dealer portals, and B2B websites by Klyia Technology in Bhilai.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Operating from Bhilai—one of India’s premier steel and industrial belts—Klyia Technology understands the operational realities of rolling mills, sponge iron plants, structural fabricators, and multi-godown steel stockists.',
      'Generic accounting tools struggle with dual weight-and-piece tracking, length tolerances, heat/batch numbers, rolling scrap recovery, and rapid daily rate fluctuations. We engineer custom Steel ERP and B2B web systems tailored specifically to how steel moves from furnace to dealer.',
    ],
    customDevelopmentNote:
      'We integrate cleanly with serial/RS-232 weighbridge indicators, barcode/bundle tag printers, and GST e-Way bill export formats used across Indian steel plants.',
    challenges: [
      'Tracking inventory simultaneously in Metric Tonnes (MT), bundles, and exact piece counts without stock drift.',
      'Managing rolling yield, end-cutting scrap, and furnace-to-dispatch batch reconciliation.',
      'Slow manual quotation and daily rate updates across hundreds of regional dealers and contractors.',
      'Lack of real-time credit limit enforcement before trucks leave the weighbridge.',
    ],
    modulesOrCatalogueHighlight: [
      'TMT Bars (Fe-500 / Fe-550D)',
      'MS Angles, Channels & Joist Beams',
      'HR / CR Sheets, Plates & Coils',
      'MS Pipes, Hollow Sections & Tubes',
      'Billets, Ingots & Sponge Iron',
      'Weighbridge & Gate-Pass Control',
    ],
    websiteSolutions: [
      {
        title: 'B2B Steel Product Catalog & Spec Portals',
        detail: 'Structured grade, section, and weight-chart pages built for EPC contractors and procurement buyers.',
      },
      {
        title: 'Dealer Inquiry & RFQ Portals',
        detail: 'Allow registered dealers to submit section-wise quantity requests and view dispatch statuses.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Dual-Unit Steel Inventory & Yield ERP',
        detail: 'Track theoretical vs actual weight, bundle counts, heat numbers, and mill test certificate (MTC) links.',
      },
      {
        title: 'Weighbridge, Gate Pass & GST Dispatch',
        detail: 'Capture gross/tare/net weights directly at dispatch gates with automated e-Way bill and invoice generation.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Capture national and regional B2B procurement searches for TMT, structural steel sections, and fabricators.',
      'Structure clear entity data and grade specifications so AI search engines recommend your plant or stockyard.',
      'Optimize Google Business Profile for regional yard and office inquiries across Chhattisgarh and central India.',
    ],
    whatsappAndAutomation: [
      'Broadcast daily rate-list updates and stock availability alerts via approved WhatsApp Business API lists.',
      'Send automatic truck dispatch notifications, bilty numbers, and PDF invoices to dealers on gate-out.',
    ],
    extendedSections: [
      {
        heading: 'Rolling Mill Production & Scrap Reconciliation',
        paragraphs: [
          'Monitor billet/ingot issue versus finished section output shift by shift, isolating burning loss, miss-rolls, and reusable end-cuts.',
        ],
        bullets: [
          'Shift-wise production logs and section change tracking',
          'Raw material vs finished weight variance alerts',
          'Automated Mill Test Certificate (MTC) batch linking',
        ],
      },
      {
        heading: 'Dealer Credit Exposure & Dispatch Locks',
        paragraphs: [
          'Prevent overdue receivables from compounding by validating party credit limits and aging buckets before loading orders are approved.',
        ],
        bullets: [
          'Real-time ledger aging and PDC tracking',
          'Manager override audit trails for urgent dispatches',
          'Instant WhatsApp payment reminders and statement PDFs',
        ],
      },
    ],
    relatedServiceSlugs: [
      'erp-software-development',
      'manufacturing-erp',
      'wholesale-distribution-erp',
      'whatsapp-business-automation',
      'corporate-website-development',
      'search-engine-optimization',
    ],
    relatedBlogSlugs: [
      'erp-software-for-steel-trading-and-manufacturing',
      'custom-software-vs-ready-made-software',
    ],
    faqs: [
      {
        question: 'Can your Steel ERP track both exact weight (MT) and piece/bundle counts?',
        answer:
          'Yes. Every inward GRN, rolling output, stock transfer, and sales dispatch maintains synchronized MT/kg weights alongside bundle and piece counts.',
      },
      {
        question: 'Do you support weighbridge hardware integration?',
        answer:
          'Yes. We build local bridge utilities that read verified serial weights from standard Indian weighbridge indicators directly into the dispatch screen.',
      },
    ],
  },
  {
    slug: 'solar-renewable-energy',
    name: 'Solar & Renewable Energy',
    h1: 'Solar EPC ERP, CRM & Growth Systems for Renewable Energy Companies',
    heroSubtitle:
      'End-to-end Solar EPC management covering lead pipelines, site surveys, PM Surya Ghar & C&I workflows, BOM tracking, DISCOM stages, and AMC alerts.',
    heroImage: BANNER_IMAGES.solarEnergy,
    heroImageAlt: 'Commercial and residential solar photovoltaic installation arrays',
    canonicalPath: '/industries/solar-renewable-energy/',
    priorityBadge: 'Priority CleanTech Specialization',
    seoTitle: 'Solar EPC ERP, CRM & Website Development | Klyia Technology',
    metaDescription:
      'Dedicated Solar ERP & Solar EPC CRM software, DISCOM & subsidy tracking, BOM serials, and Local SEO websites by Klyia Technology in Bhilai & India.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Solar EPC companies juggle high inquiry volumes, technical site surveys, kW sizing proposals, inverter/panel serial tracking, DISCOM net-metering approvals, and 5-year AMC commitments.',
      'Klyia Technology builds dedicated Solar EPC platforms combining fast lead-capturing websites, WhatsApp qualification, and a structured Solar ERP so no rooftop or C&I project stalls between sales and commissioning.',
    ],
    customDevelopmentNote:
      'All milestone checklists, subsidy documentation stages, and inverter serial-number warranties are tailored to your state DISCOM and PM Surya Ghar / C&I processes.',
    challenges: [
      'Leads leaking between Facebook/Google Ads, WhatsApp chats, and disconnected spreadsheets.',
      'Delayed site survey handoffs and inconsistent kW quotation calculations.',
      'Poor visibility into DISCOM approval bottlenecks, net-metering status, and subsidy stage delays.',
      'Missed preventive maintenance (AMC) visits and untracked inverter/panel serial numbers.',
    ],
    modulesOrCatalogueHighlight: [
      'Lead & Site Survey CRM',
      'Automated kW Proposal Generator',
      'BOM & Serial-Number Inventory',
      'PM Surya Ghar & DISCOM Tracker',
      'Installation & Commissioning Checklist',
      '5-Year AMC & Cleaning Scheduler',
    ],
    websiteSolutions: [
      {
        title: 'Solar Savings Calculator & Lead Websites',
        detail: 'Educate residential and C&I buyers with electricity-bill calculators, rooftop checklists, and instant quote forms.',
      },
      {
        title: 'Project Portfolio & Subsidy Clarity Pages',
        detail: 'Showcase completed kW/MW installations with structured trust proof and local city SEO pages.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Solar EPC ERP & Milestone Pipeline',
        detail: 'Track every project from enquiry and site survey to BOM allocation, structure mounting, net-metering, and handover.',
      },
      {
        title: 'Serial-Number Warranty & AMC Portal',
        detail: 'Log panel and inverter serial numbers per customer site with automated annual cleaning and maintenance reminders.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Rank for high-intent city searches like rooftop solar installation, solar subsidy guidance, and C&I solar EPC.',
      'Answer buyer questions clearly for AI assistants (GEO/AEO) covering payback periods, on-grid vs hybrid, and net metering.',
    ],
    whatsappAndAutomation: [
      'Send instant roof-photo upload links and preliminary kW estimates on WhatsApp when a prospect submits a form.',
      'Notify customers automatically as DISCOM inspection, meter installation, and commissioning milestones complete.',
    ],
    relatedServiceSlugs: [
      'solar-erp-software',
      'crm-software-development',
      'whatsapp-business-automation',
      'local-seo-services',
      'professional-landing-pages',
    ],
    relatedBlogSlugs: [
      'solar-epc-erp-and-crm-software-guide',
      'how-whatsapp-business-automation-helps-increase-lead-response',
    ],
    faqs: [
      {
        question: 'Can the Solar ERP handle both residential subsidy jobs and large C&I projects?',
        answer:
          'Yes. Separate configurable milestone templates let residential teams track subsidy and DISCOM stages while C&I teams manage multi-phase engineering and billing.',
      },
      {
        question: 'Does it track individual solar panel and inverter serial numbers?',
        answer:
          'Yes. Barcode or manual serial capture ties every delivered module and inverter directly to the client site and warranty ledger.',
      },
    ],
  },
  {
    slug: 'manufacturing-engineering',
    name: 'Manufacturing & Engineering',
    h1: 'Custom Manufacturing ERP, BOM & B2B Portals for Engineering Units',
    heroSubtitle:
      'Production planning, multi-level Bill of Materials, shop-floor WIP tracking, quality inspection logs, and global/domestic B2B buyer websites.',
    heroImage: BANNER_IMAGES.manufacturing,
    heroImageAlt: 'Precision CNC machining and modern manufacturing production line',
    canonicalPath: '/industries/manufacturing-engineering/',
    priorityBadge: 'Priority Manufacturing Specialization',
    seoTitle: 'Manufacturing ERP & Engineering Web Solutions | Klyia Technology',
    metaDescription:
      'Manufacturing ERP software, multi-level BOM, shop-floor WIP, QC logs, and B2B industrial websites built by Klyia Technology.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Mid-sized fabrication units, foundry operations, machine shops, and process manufacturers often outgrow disconnected Tally + Excel tracking long before rigid global ERPs become practical.',
      'Klyia Technology builds modular Manufacturing ERP systems and authoritative B2B websites that align raw material procurement, shop-floor execution, quality control, and buyer discovery.',
    ],
    customDevelopmentNote:
      'We model your exact multi-level BOMs, job-work vendor movements, and batch QC tolerances rather than forcing workarounds.',
    challenges: [
      'Raw material stockouts halting machine lines due to delayed reorder visibility.',
      'Inability to calculate true job-costing including scrap, consumables, and outside job-work.',
      'Outdated corporate websites that fail to showcase machining capabilities and ISO certifications to enterprise buyers.',
    ],
    modulesOrCatalogueHighlight: [
      'Multi-Level Bill of Materials (BOM)',
      'Material Requirement Planning (MRP)',
      'Job-Work & Subcontractor Tracking',
      'In-Process & Final QC Checklists',
      'Finished Goods & Dispatch Control',
      'ISO / Audit Documentation Logs',
    ],
    websiteSolutions: [
      {
        title: 'Industrial Capability & Machinery Showcase',
        detail: 'Present tolerances, plant capacity, testing labs, and downloadable technical brochures for OEM procurement teams.',
      },
      {
        title: 'RFQ & Drawing Upload Portals',
        detail: 'Capture structured B2B engineering inquiries with specification fields and instant routing.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Production & BOM Control ERP',
        detail: 'Convert confirmed sales orders into material indents, work orders, and stage-wise WIP tracking.',
      },
      {
        title: 'Vendor Job-Work & Costing Module',
        detail: 'Track challans sent out for galvanizing, heat treatment, or machining and reconcile returned quantities.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Structure technical specification pages so industrial procurement teams and AI search tools find your exact capabilities.',
      'Target pan-India OEM and industrial cluster search demand cleanly.',
    ],
    whatsappAndAutomation: [
      'Automated PO approvals and low-stock reorder alerts sent to procurement leads.',
      'Instant dispatch challan and invoice delivery to B2B clients on WhatsApp.',
    ],
    relatedServiceSlugs: [
      'manufacturing-erp',
      'erp-software-development',
      'inventory-management-software',
      'corporate-website-development',
      'search-engine-optimization',
    ],
    relatedBlogSlugs: [
      'custom-software-vs-ready-made-software',
      'erp-software-for-steel-trading-and-manufacturing',
    ],
    faqs: [
      {
        question: 'Can your Manufacturing ERP track outside job-work vendors?',
        answer:
          'Yes. Outward job-work challans, expected return dates, weight/quantity reconciliation, and vendor billing are built into the core workflow.',
      },
      {
        question: 'Can we start with inventory and production first, then add finance later?',
        answer:
          'Yes. Our modular architecture lets you deploy BOM, procurement, and production modules first while integrating smoothly with existing accounting.',
      },
    ],
  },
  {
    slug: 'industrial-suppliers-traders',
    name: 'Industrial Suppliers & Traders',
    h1: 'B2B Catalogs, Inventory & Billing Systems for Industrial Suppliers',
    heroSubtitle:
      'Multi-SKU hardware catalogs, rapid GST quotation-to-invoice flows, multi-godown stock tracking, and B2B search authority.',
    heroImage: BANNER_IMAGES.suppliers,
    heroImageAlt: 'Industrial engineering parts, bearings, valves, and hardware supply warehouse',
    canonicalPath: '/industries/industrial-suppliers-traders/',
    seoTitle: 'Industrial Supplier Websites & ERP | Klyia Technology',
    metaDescription:
      'Multi-SKU B2B catalogs, fast RFQ billing, inventory tracking software, and Local SEO/GEO visibility for industrial suppliers and hardware traders.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Industrial hardware dealers, safety gear distributors, bearing/valve suppliers, and electrical stockists manage thousands of SKUs across brands, sizes, and tax slabs.',
      'We build searchable B2B websites and fast counter-billing + godown management systems that turn technical buyer searches into fulfilled orders.',
    ],
    customDevelopmentNote:
      'Supports SKU aliases, OEM part numbers, HSN codes, and multi-unit pack conversions (box/piece/meter).',
    challenges: [
      'Buyers unable to browse full SKU ranges or part numbers online.',
      'Slow manual quotation preparation for multi-line industrial RFQs.',
      'Dead stock accumulating in one branch while another loses orders.',
    ],
    websiteSolutions: [
      {
        title: 'Filterable Multi-Brand Product Catalogs',
        detail: 'Fast search by part number, size, grade, or application with one-click RFQ basket submission.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Rapid Quote-to-Invoice & Multi-Godown ERP',
        detail: 'Convert multi-item RFQs into GST quotations and tax invoices in seconds with live branch stock visibility.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Optimize brand + city + part-category pages to capture urgent plant procurement searches.',
      'Strengthen Google Business Profile visibility across industrial estates and corridors.',
    ],
    whatsappAndAutomation: [
      'Share instant PDF quotations and stock confirmations on WhatsApp directly from the billing screen.',
    ],
    relatedServiceSlugs: [
      'inventory-management-software',
      'billing-accounting-software',
      'ecommerce-website-development',
      'local-seo-services',
    ],
    faqs: [
      {
        question: 'Can customers submit a multi-item quote list without online checkout?',
        answer:
          'Yes. We regularly build B2B RFQ cart workflows where buyers select parts and quantities to request a formal GST quotation.',
      },
    ],
  },
  {
    slug: 'wholesale-distribution',
    name: 'Wholesale & Distribution',
    h1: 'Wholesale & Distribution ERP, Dealer Portals & Order Systems',
    heroSubtitle:
      'Beat-wise order booking, dealer portals, credit limit controls, batch/expiry tracking, and GST-compliant dispatch workflows.',
    heroImage: BANNER_IMAGES.wholesale,
    heroImageAlt: 'High-bay wholesale distribution warehouse and pallet logistics',
    canonicalPath: '/industries/wholesale-distribution/',
    seoTitle: 'Wholesale & Distribution ERP Portals | Klyia Technology',
    metaDescription:
      'Wholesale distribution ERP, field salesman order tracking, dealer credit controls, and GST dispatch software across Chhattisgarh & India.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Wholesalers and super-stockists rely on speed, accurate credit control, route discipline, and zero-error dispatch loading.',
      'Klyia Technology builds unified wholesale ERP and B2B ordering portals connecting field sales teams, godown pickers, and accounting.',
    ],
    customDevelopmentNote:
      'Configurable price lists by dealer tier, scheme/free-qty rules, and route-wise loading sheets.',
    challenges: [
      'Salesmen taking orders on WhatsApp without knowing real-time godown stock or party overdue status.',
      'Loading mistakes and mismatched challans across multi-stop delivery vans.',
      'Manual reconciliation of pending bills, credit notes, and salesman collections.',
    ],
    websiteSolutions: [
      {
        title: 'Self-Service B2B Dealer Ordering Portal',
        detail: 'Let verified retailers place repeat orders, download statements, and track dispatch status 24/7.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Distribution ERP & Route Loading System',
        detail: 'Generate consolidated route pick-lists, apply dealer tier pricing, and enforce credit blocks automatically.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Establish regional brand authority for distributorship inquiries and B2B trade partnerships.',
    ],
    whatsappAndAutomation: [
      'Automated outstanding payment reminders, ledger confirmations, and dispatch alerts via WhatsApp.',
    ],
    relatedServiceSlugs: [
      'wholesale-distribution-erp',
      'inventory-management-software',
      'crm-software-development',
      'whatsapp-business-automation',
    ],
    faqs: [
      {
        question: 'Can field sales reps check stock and party balance before booking orders?',
        answer:
          'Yes. Mobile-friendly order screens display live available stock and party credit exposure in real time.',
      },
    ],
  },
  {
    slug: 'fruit-vegetable-mandis',
    name: 'Fruit & Vegetable Mandis',
    h1: 'High-Speed Mandi Auction Billing, Patti & Crate Tracking Software',
    heroSubtitle:
      'Built for commission agents (arhatiyas) and wholesale fruit/vegetable traders: rapid auction entry, farmer patti slips, and crate ledgers.',
    heroImage: BANNER_IMAGES.fruitVegetableMandi,
    heroImageAlt: 'Wholesale fruit and vegetable mandi produce market with stacked crates and trader auction stalls',
    canonicalPath: '/industries/fruit-vegetable-mandis/',
    seoTitle: 'Mandi Billing & Crate Tracking Software | Klyia Technology',
    metaDescription:
      'High-speed mandi auction billing, farmer patti printing, commission & hammali calculations, and plastic crate tracking software in Chhattisgarh.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Morning mandi hours demand extreme data-entry speed: dozens of buyers, split lot weights, commission percentages, hammali/labour deductions, and plastic crate returns must be settled accurately within hours.',
      'Klyia Technology engineers specialized Mandi & Fruit Trading Software designed for keyboard-first speed, instant thermal/A5 patti slips, and crystal-clear party and crate balances.',
    ],
    customDevelopmentNote:
      'Supports custom mandi cess, commission slabs, bardana/crate deposits, and bilingual receipt headers.',
    challenges: [
      'Lost plastic crates and unbilled bardana costing lakhs every season.',
      'Calculation errors in farmer pattis when a single inward truck is sold across 20+ buyers.',
      'Slow manual ledger closing at day-end delaying cash collection.',
    ],
    websiteSolutions: [
      {
        title: 'Wholesale Trade Presence & Supplier Portal',
        detail: 'Present cold-chain capacity, seasonal commodity schedules, and buyer inquiry contacts clearly.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Auction Lot & Farmer Patti System',
        detail: 'Record inward vehicle arrivals, split lots by weight/rate, and generate instant farmer pattis and buyer bills.',
      },
      {
        title: 'Plastic Crate & Bardana Ledger',
        detail: 'Track crate issues and returns per buyer and farmer with live net-crate balance on every receipt.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Position wholesale trading firms and cold-chain hubs for regional supplier and buyer discovery.',
    ],
    whatsappAndAutomation: [
      'Send daily buyer bill totals, crate balances, and farmer patti PDFs directly to WhatsApp.',
    ],
    relatedServiceSlugs: [
      'mandi-fruit-trading-software',
      'billing-accounting-software',
      'inventory-management-software',
      'whatsapp-business-automation',
    ],
    relatedBlogSlugs: [
      'fruit-vegetable-mandi-billing-and-crate-tracking-software',
    ],
    faqs: [
      {
        question: 'Can one inward farmer truck be split across multiple wholesale buyers in seconds?',
        answer:
          'Yes. Our keyboard-driven auction grid lets operators enter buyer, crates, weight, and rate rapidly while automatically balancing the lot.',
      },
    ],
  },
  {
    slug: 'agriculture-agribusiness',
    name: 'Agriculture & Agribusiness',
    h1: 'Software & Digital Growth for Rice Mills, Cold Storages & Agribusiness',
    heroSubtitle:
      'Grain/paddy procurement logs, cold storage chamber ledgers, seed/fertilizer dealer networks, and regional agribusiness websites.',
    heroImage: BANNER_IMAGES.agritechFarming,
    heroImageAlt: 'Modern agribusiness supply chain, grain storage, and precision farming operations',
    canonicalPath: '/industries/agriculture-agribusiness/',
    seoTitle: 'Agribusiness & Rice Mill Software | Klyia Technology',
    metaDescription:
      'Custom software for rice mills, cold storages, seed & agro-input distributors, plus B2B agribusiness websites across Chhattisgarh & India.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Chhattisgarh and central India rely heavily on rice mills, dal mills, cold storages, and agro-input distribution networks.',
      'We build practical procurement, moisture/weight deduction, chamber rent billing, and dealer management software aligned with seasonal agribusiness cycles.',
    ],
    customDevelopmentNote:
      'Handles moisture cut rules, gunny bag tracking, chamber-wise lot storage, and seasonal rent calculations.',
    challenges: [
      'Manual paper slips for paddy/grain arrivals and moisture deductions.',
      'Tracking chamber-wise cold storage rent and partial lot withdrawals.',
      'Managing credit cycles across rural and semi-urban agro dealers.',
    ],
    websiteSolutions: [
      {
        title: 'Agribusiness Brand & Dealer Catalogs',
        detail: 'Showcase milled products, seed varieties, and export/bulk inquiry channels cleanly.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Mill Procurement & Cold Storage ERP',
        detail: 'Automate weighment slips, quality deductions, milling yield logs, and lot-wise storage billing.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Capture B2B bulk grain, cold storage, and agro-equipment buyer searches across India.',
    ],
    whatsappAndAutomation: [
      'Send instant weighment confirmations, dispatch updates, and seasonal payment reminders on WhatsApp.',
    ],
    relatedServiceSlugs: [
      'erp-software-development',
      'mandi-fruit-trading-software',
      'inventory-management-software',
      'website-development-services',
    ],
    faqs: [
      {
        question: 'Can the software handle cold storage chamber and partial-withdrawal rent?',
        answer:
          'Yes. Lot inward dates, partial outward dispatches, and slab-based storage rent are calculated automatically.',
      },
    ],
  },
  {
    slug: 'real-estate-construction',
    name: 'Real Estate & Construction',
    h1: 'Real Estate Websites, Unit Inventory CRM & Site-Visit Automation',
    heroSubtitle:
      'Project showcase platforms, live plot/flat availability matrices, lead follow-up CRM, and automated WhatsApp brochure delivery.',
    heroImage: BANNER_IMAGES.realEstate,
    heroImageAlt: 'Contemporary residential and commercial real estate architecture',
    canonicalPath: '/industries/real-estate-construction/',
    seoTitle: 'Real Estate Websites, CRM & Lead Automation | Klyia Technology',
    metaDescription:
      'High-converting real estate project websites, unit availability CRM, and WhatsApp brochure automation for builders and developers.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Real estate buyers and investors evaluate project credibility online before booking a site visit.',
      'We craft fast architectural project websites paired with unit-status CRMs and instant WhatsApp brochure workflows so sales teams never miss warm property inquiries.',
    ],
    customDevelopmentNote:
      'Includes RERA disclosure blocks, floor-plan galleries, payment milestone schedules, and broker attribution.',
    challenges: [
      'High ad spend wasted when property inquiries receive delayed manual callbacks.',
      'Multiple brokers quoting outdated plot or flat availability.',
      'Heavy image-laden websites that load slowly on mobile networks.',
    ],
    websiteSolutions: [
      {
        title: 'Fast Project Showcase & Location Websites',
        detail: 'Present master plans, connectivity maps, amenities, and RERA details with sub-2s mobile load.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Unit Availability & Payment Milestone CRM',
        detail: 'Centralize available/booked/hold unit statuses, booking receipts, and installment reminders.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Target city and micro-locality property buyer keywords with clean schema and Google Ads landing pages.',
    ],
    whatsappAndAutomation: [
      'Send project brochures, floor plans, and Google Maps pin locations automatically on WhatsApp upon inquiry.',
    ],
    relatedServiceSlugs: [
      'crm-software-development',
      'professional-landing-pages',
      'google-ads-management',
      'whatsapp-business-automation',
    ],
    faqs: [
      {
        question: 'Can sales teams update sold or on-hold plots in real time?',
        answer:
          'Yes. A simple admin matrix lets authorized staff update unit availability immediately across the team.',
      },
    ],
  },
  {
    slug: 'healthcare-clinics',
    name: 'Healthcare & Clinics',
    h1: 'Healthcare Websites, OPD Scheduling & Ethical Local SEO for Clinics',
    heroSubtitle:
      'Patient-friendly hospital and diagnostic portals, appointment booking, doctor profiles, and compliant Google Business Profile visibility.',
    heroImage: BANNER_IMAGES.healthcare,
    heroImageAlt: 'Modern diagnostic healthcare center and clinical reception',
    canonicalPath: '/industries/healthcare-clinics/',
    seoTitle: 'Healthcare Websites & Clinic Local SEO | Klyia Technology',
    metaDescription:
      'Fast medical clinic and hospital websites, OPD appointment scheduling, patient WhatsApp alerts, and compliant Local SEO by Klyia Technology.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Patients searching for specialists, diagnostic labs, or multi-specialty clinics look for clear doctor credentials, OPD timings, location clarity, and effortless appointment booking.',
      'Klyia Technology builds trustworthy healthcare web platforms and ethical Local SEO/AEO programs that serve patients accurately.',
    ],
    customDevelopmentNote:
      'Built with clean patient privacy practices and strict adherence to factual medical service representation.',
    challenges: [
      'Outdated clinic websites lacking mobile-friendly doctor schedules or department clarity.',
      'Missed OPD slots due to lack of automated appointment confirmations.',
      'Low visibility in local Google Maps and voice-search queries.',
    ],
    websiteSolutions: [
      {
        title: 'Department & Specialist Doctor Portals',
        detail: 'Clear specialty pages, doctor profiles, OPD timings, and accessible appointment request forms.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'OPD Appointment & Lab Follow-Up Portals',
        detail: 'Streamline slot scheduling, patient queue coordination, and clinic reception workflows.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Optimize Google Business Profile categories, department pages, and FAQ schema for local patient discovery.',
    ],
    whatsappAndAutomation: [
      'Send automated OPD slot confirmations, clinic location pins, and follow-up reminders on WhatsApp.',
    ],
    relatedServiceSlugs: [
      'website-development-services',
      'local-seo-services',
      'google-business-profile-optimization',
      'whatsapp-business-automation',
    ],
    faqs: [
      {
        question: 'Can patients request or book OPD appointments directly on mobile?',
        answer:
          'Yes. Mobile-first booking forms confirm slots cleanly and can trigger instant WhatsApp confirmation messages.',
      },
    ],
  },
  {
    slug: 'education-training-institutes',
    name: 'Education & Training Institutes',
    h1: 'Admission Portals, Student CRM & Digital Visibility for Institutions',
    heroSubtitle:
      'High-speed college, school, and coaching websites, admission season inquiry pipelines, fee trackers, and counselling automation.',
    heroImage: BANNER_IMAGES.education,
    heroImageAlt: 'Modern academic campus and digital learning center',
    canonicalPath: '/industries/education-training-institutes/',
    seoTitle: 'Education Websites, Admission CRM & Local SEO | Klyia Technology',
    metaDescription:
      'Institutional websites, admission inquiry CRM, fee management portals, and SEO/AEO visibility for schools, colleges, and coaching centers.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'During peak admission seasons, schools, colleges, and skill-training institutes handle thousands of parent and student inquiries across web forms, phone calls, and walk-ins.',
      'We build structured institutional websites paired with admission CRMs and automated counselling follow-ups.',
    ],
    customDevelopmentNote:
      'Supports multi-campus programs, batch intake trackers, and custom fee-installment schedules.',
    challenges: [
      'Admission inquiries lost during peak counseling months due to manual follow-ups.',
      'Slow or confusing course pages causing prospective students to drop off.',
      'Disconnected fee, attendance, and student document records.',
    ],
    websiteSolutions: [
      {
        title: 'Course Catalog & Admission Websites',
        detail: 'Clear syllabus breakdowns, faculty credibility, placement highlights, and instant brochure downloads.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Admission CRM & Fee Management Portals',
        detail: 'Track inquiries from counseling call to enrollment, fee receipts, and student records.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Rank for regional course, coaching, and degree queries with clear AEO-ready FAQ sections.',
    ],
    whatsappAndAutomation: [
      'Deliver course brochures, counseling schedules, and fee reminders automatically on WhatsApp.',
    ],
    relatedServiceSlugs: [
      'web-portal-development',
      'crm-software-development',
      'local-seo-services',
      'whatsapp-business-automation',
    ],
    faqs: [
      {
        question: 'Can our counseling team track inquiry sources across ads and walk-ins?',
        answer:
          'Yes. Every website, ad, and walk-in inquiry is tagged by source and assigned automatically to counselors.',
      },
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    h1: 'High-Speed E-commerce Storefronts, Stock Sync & Growth Systems',
    heroSubtitle:
      'Mobile-first online stores, UPI/payment gateway integration, live warehouse stock alignment, E-commerce SEO, and WhatsApp order alerts.',
    heroImage: BANNER_IMAGES.retailEcommerce,
    heroImageAlt: 'Modern retail showroom and omnichannel e-commerce fulfillment',
    canonicalPath: '/industries/retail-ecommerce/',
    seoTitle: 'Retail & E-commerce Web & ERP Systems | Klyia Technology',
    metaDescription:
      'Custom e-commerce storefronts, POS & stock tracking, Structured Data SEO, and WhatsApp order alerts for Indian retail brands.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Modern retail brands need fast mobile shopping experiences synchronized with real store and warehouse inventory—without paying punitive commission fees on every order.',
      'Klyia Technology develops custom e-commerce storefronts, inventory bridges, and E-commerce SEO architectures built for higher margins and repeat buyers.',
    ],
    customDevelopmentNote:
      'Integrates with Indian UPI/card payment gateways, shipping aggregators, and GST invoice PDFs.',
    challenges: [
      'Overselling out-of-stock SKUs because website inventory lags behind offline retail counters.',
      'Slow mobile checkout pages hurting ad ROAS.',
      'Poor product visibility on Google Shopping and organic product searches.',
    ],
    websiteSolutions: [
      {
        title: 'Custom High-Speed E-commerce Platforms',
        detail: 'Clean category filtering, variant selectors, GST checkout, and sub-second page transitions.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Omnichannel Stock & Order Sync',
        detail: 'Unify store POS, godown inventory, and online order fulfillment in one ledger.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Product Schema markup, clean canonical category pages, and high-intent Google Ads funnels.',
    ],
    whatsappAndAutomation: [
      'Automated order confirmations, shipping tracking links, and abandoned-cart recovery via WhatsApp.',
    ],
    relatedServiceSlugs: [
      'ecommerce-website-development',
      'ecommerce-seo',
      'inventory-management-software',
      'whatsapp-business-automation',
    ],
    faqs: [
      {
        question: 'Which payment and shipping integrations do you support?',
        answer:
          'We integrate standard Indian UPI/card gateways and leading courier/shipping APIs with automated tracking updates.',
      },
    ],
  },
  {
    slug: 'logistics-transportation',
    name: 'Logistics & Transportation',
    h1: 'Fleet, LR/Bilty Billing & Dispatch Portals for Logistics Operators',
    heroSubtitle:
      'Transport bilty/LR generation, trip expense and diesel tracking, POD management, and corporate logistics portals.',
    heroImage: BANNER_IMAGES.logisticsFleet,
    heroImageAlt: 'Commercial freight fleet and highway logistics operations',
    canonicalPath: '/industries/logistics-transportation/',
    seoTitle: 'Logistics & Transport Management Software | Klyia Technology',
    metaDescription:
      'Custom LR/bilty billing, trip expense tracking, POD workflows, and logistics portals engineered by Klyia Technology.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Industrial transporters and fleet operators across Chhattisgarh and India manage tight margins across fuel, toll, driver advances, and delayed POD settlements.',
      'We build custom LR/bilty billing systems, trip profitability trackers, and client tracking portals tailored to Indian road transport workflows.',
    ],
    customDevelopmentNote:
      'Supports full-truckload (FTL), part-load, own-fleet vs attached-market-vehicle ledgers, and e-Way bill references.',
    challenges: [
      'Delayed customer invoicing caused by missing or unverified Proof of Delivery (POD) slips.',
      'Unclear per-trip profitability after diesel, toll, and driver advance deductions.',
      'Manual tracking of vehicle fitness, insurance, and permit renewals.',
    ],
    websiteSolutions: [
      {
        title: 'Corporate Fleet & Consignment Tracking Portals',
        detail: 'Showcase fleet capacity, industrial routes, and allow enterprise shippers to verify consignment milestones.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'LR/Bilty, Trip Expense & POD Software',
        detail: 'Generate LRs, track advance-vs-balance freight, attach scanned PODs, and raise consolidated party bills.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Capture industrial contract logistics and regional freight inquiries through targeted service pages.',
    ],
    whatsappAndAutomation: [
      'Send consignment LR details, vehicle numbers, and POD confirmations automatically to shippers.',
    ],
    relatedServiceSlugs: [
      'custom-software-development',
      'billing-accounting-software',
      'web-portal-development',
      'workflow-automation',
    ],
    faqs: [
      {
        question: 'Can we track both our own trucks and hired market vehicles?',
        answer:
          'Yes. Separate ledgers track own-fleet maintenance/fuel expenses alongside market-vehicle hire challans and balance settlements.',
      },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    h1: 'Authority Websites, Client Trackers & AEO for Advisory Firms',
    heroSubtitle:
      'Executive websites, compliance/task trackers, client document portals, and Answer Engine Optimization for CAs, legal, and consulting practices.',
    heroImage: BANNER_IMAGES.professionalAdvisory,
    heroImageAlt: 'Executive corporate advisory and consulting boardroom',
    canonicalPath: '/industries/professional-services/',
    seoTitle: 'Advisory Websites & Client Portals | Klyia Technology',
    metaDescription:
      'Authoritative websites, client workflow trackers, Structured Data, and GEO/AEO content systems for advisory, engineering, and consulting firms.',
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      'Chartered accountants, industrial consultants, architecture firms, and corporate advisories win clients through trust, clarity, and domain authority.',
      'Klyia Technology creates refined executive websites, secure client document portals, and AEO-structured knowledge hubs.',
    ],
    customDevelopmentNote:
      'Designed around clean compliance reminders, recurring retainer tracking, and structured knowledge publishing.',
    challenges: [
      'Generic websites that fail to communicate specialized industrial or regulatory expertise.',
      'Scattered client documents across email threads and chat apps.',
      'Low visibility when decision-makers ask search or AI engines for specialist advisors.',
    ],
    websiteSolutions: [
      {
        title: 'Executive Advisory & Practice Websites',
        detail: 'Communicate credentials, practice areas, and consultation workflows with understated corporate polish.',
      },
    ],
    softwareAndErpSolutions: [
      {
        title: 'Client Compliance & Engagement Trackers',
        detail: 'Organize recurring deliverables, team assignments, and secure document exchanges.',
      },
    ],
    seoGeoAeoAndMarketing: [
      'Authoritative Knowledge Centre guides structured for Google rankings and AI citation.',
    ],
    whatsappAndAutomation: [
      'Automated appointment confirmations and compliance due-date reminders for retained clients.',
    ],
    relatedServiceSlugs: [
      'corporate-website-development',
      'aeo-answer-engine-optimization',
      'geo-generative-engine-optimization',
      'business-management-software',
    ],
    faqs: [
      {
        question: 'How does AEO help professional advisory firms?',
        answer:
          'Structured FAQ and guide content positions your firm’s expertise directly inside search answer boxes and AI-assisted research summaries.',
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryPageData | undefined {
  return ALL_INDUSTRIES.find((item) => item.slug === slug);
}
