import {hydrateServiceSeed, type CompactServiceSeed} from './servicesWeb.ts';
import type {ServicePageData} from './types.ts';

const GROWTH_SEEDS: CompactServiceSeed[] = [
  {
    slug: 'search-engine-optimization',
    name: 'Search Engine Optimization (SEO)',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'Search Engine Optimization (SEO) Services | Bhilai & India | Klyia Technology',
    metaDescription:
      'Ethical, technical and content-driven SEO services improving crawlability, relevance, and organic search discovery across Google and Bing without false ranking guarantees.',
    heroSubtitle:
      'Earn consistent organic visibility by fixing technical crawlability, structuring buyer-focused service pages, and building genuine topic authority.',
    introFocus:
      'Search Engine Optimization (SEO) aligns your website structure, speed, headings, and content depth with how real buyers search on Google and Bing—capturing high-intent organic demand sustainably rather than relying purely on daily ad spend. Results depend on competition, site health, technical execution, and consistent effort; we never guarantee exact rankings.',
    whyNeeded: [
      'Even great websites fail to win organic enquiries if service pages lack depth or search engines cannot crawl them cleanly.',
      'B2B buyers researching steel suppliers, ERP vendors, or solar EPCs start on search engines long before calling.',
      'Rising ad click costs make strong organic search equity essential over time.',
    ],
    challenges: [
      'Thin pages repeating city names unnaturally without explaining real services.',
      'Client-rendered templates hiding core copy from crawlers.',
      'Missing canonicals, duplicate titles, and slow mobile load times.',
    ],
    solutions: [
      'Complete technical SEO audit paired with clean SSR/HTML crawlability fixes.',
      'Topic-clustered service, industry, and educational blog architecture.',
      'Transparent measurement via Google Search Console impressions, clicks, indexing coverage, and enquiry tracking.',
    ],
    features: [
      {title: 'Technical & Crawl Hygiene', detail: 'Clean XML sitemap indexes, robots.txt, canonical tags, and Core Web Vitals.'},
      {title: 'Buyer-Intent Architecture', detail: 'Dedicated pages matching commercial services, industries, and locations.'},
      {title: 'Structured Schema Graphs', detail: 'Organization, Service, BreadcrumbList, and valid FAQ markup.'},
      {title: 'Search Console Progress Review', detail: 'Track indexed URLs, search impressions, CTR, and genuine lead actions.'},
    ],
    benefits: [
      'Builds long-term organic visibility owned directly by your business domain.',
      'Attracts informed B2B and local buyers actively comparing solutions.',
      'Pairs seamlessly with GEO and AEO for modern AI-assisted search.',
    ],
    technologies: ['Google Search Console', 'Bing Webmaster Tools', 'Google Analytics 4', 'Schema.org JSON-LD', 'XML Sitemap Index'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Product grade visibility for TMT, plates, pipes, and structural buyers.'},
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Industrial supplier and OEM discovery across India.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'High-intent treatment and regional patient searches.'},
    ],
    relatedServiceSlugs: ['local-seo-services', 'technical-seo', 'geo-generative-engine-optimization', 'aeo-answer-engine-optimization'],
    relatedBlogSlugs: ['seo-vs-geo-vs-aeo-difference-explained', 'how-to-improve-google-visibility-for-businesses-in-chhattisgarh'],
    faqs: [
      {question: 'How are SEO, GEO, and AEO different?', answer: 'SEO improves visibility in traditional search engine results (Google/Bing); GEO (Generative Engine Optimization) strengthens entity clarity for AI search synthesis; AEO (Answer Engine Optimization) formats structured answers and Schema for direct answer extraction.'},
      {question: 'Do you guarantee #1 Google rankings within 30 days?', answer: 'No ethical SEO provider can guarantee exact ranking positions. Rankings depend on market competition, domain history, technical execution, and ongoing search algorithms.'},
      {question: 'What activities are included in SEO?', answer: 'Technical crawl/speed audits, clean metadata, internal linking, useful service/industry pages, Schema.org setup, local citations, and Search Console monitoring.'},
      {question: 'How is SEO progress measured realistically?', answer: 'Through Search Console index coverage, impressions, query clicks, Core Web Vitals, and tracked form/phone/WhatsApp enquiries.'},
      {question: 'Why does SSR matter for SEO?', answer: 'Server-rendered HTML exposes every heading, copy section, and link immediately to crawlers without waiting for heavy JS.'},
      {question: 'How long does organic SEO usually take to mature?', answer: 'Meaningful organic gains typically build progressively over several months depending on competition and starting site condition.'},
      {question: 'Can you optimize an existing website without rebuilding it?', answer: 'Often yes, though severely broken templates may benefit from speed or revamp upgrades.'},
      {question: 'How do we request an SEO review?', answer: 'Share your domain via Get a Quote.'},
    ],
    complianceNote: 'Organic search visibility depends on competition, site quality, crawl health, and search algorithm updates; Klyia Technology never promises guaranteed rankings, traffic, or leads.',
  },
  {
    slug: 'local-seo-services',
    name: 'Local SEO Services',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'Local SEO Services in Bhilai, Raipur & India | Klyia Technology',
    metaDescription:
      'Local SEO services in Bhilai, Durg, Raipur, and India featuring LocalBusiness Structured Data, Google Business Profile optimization, and call/enquiry tracking.',
    heroSubtitle:
      'Strengthen visibility across Bhilai, Durg, Raipur, and your target service cities with authentic Local SEO signals, Structured Data, and Google Business Profile alignment.',
    introFocus:
      'Local SEO connects nearby buyers and B2B procurement teams with your business across city-modified searches and Google Maps packs—built cleanly through accurate NAP consistency, Schema.org Structured Data, regional service pages, and transparent enquiry tracking.',
    whyNeeded: [
      'Service buyers, clinics, traders, and solar customers search with city names or "near me" modifiers daily.',
      'Inconsistent phone numbers or old addresses across listings confuse search engines.',
      'Thin doorway pages swapping only city names hurt trust and fail indexing.',
    ],
    challenges: [
      'Unclaimed or incomplete Google Business Profiles losing map visibility.',
      'Inconsistent business names/addresses across directories.',
      'Zero regional context explaining which cities you actually visit or supply.',
    ],
    solutions: [
      'Accurate LocalBusiness Structured Data reflecting verified office location and genuine service areas.',
      'Distinct location pages grounded in real regional industry context—no doorway duplication.',
      'Aligned Google Business Profile optimization, categories, services, and UTM call/click tracking.',
    ],
    features: [
      {title: 'NAP & Citation Consistency', detail: 'Uniform Name, Address, Phone, and WhatsApp identity across web properties.'},
      {title: 'Authentic Regional Pages', detail: 'Genuine service corridors without copy-paste keyword spam.'},
      {title: 'Structured Data & GBP Sync', detail: 'Linking regional landing pages and LocalBusiness Schema cleanly with Google Business Profile.'},
      {title: 'Local Query & Call Tracking', detail: 'Measuring city impressions, profile calls, and direction clicks transparently.'},
    ],
    benefits: [
      'Attracts ready-to-buy regional prospects right in your service belt.',
      'Builds local trust without pretending to hold fake branch offices.',
      'Reinforces Google Business Profile performance cleanly.',
    ],
    technologies: ['LocalBusiness JSON-LD', 'Google Business Profile', 'Search Console Geo Queries', 'GA4 Event Tracking'],
    industries: [
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'City-level rooftop and commercial EPC enquiries.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Local patient discovery and appointment calls.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Industrial estate buyer discovery in Bhilai & Raipur.'},
    ],
    relatedServiceSlugs: ['google-business-profile-optimization', 'search-engine-optimization', 'digital-marketing-services', 'business-website-development'],
    relatedBlogSlugs: ['google-business-profile-optimization-for-local-businesses'],
    faqs: [
      {question: 'Should a business create fake office addresses in other cities for Local SEO?', answer: 'No—violating profile guidelines risks suspension. Instead, verify your genuine physical office cleanly and build honest service-area pages explaining how you serve surrounding cities.'},
      {question: 'How does Local SEO relate to Google Business Profile?', answer: 'Website local signals reinforce your Business Profile relevance and accuracy for map pack visibility.'},
      {question: 'Do you serve Bhilai, Durg, and Raipur businesses directly?', answer: 'Yes, along with regional service strategies across India.'},
      {question: 'What metrics show Local SEO progress?', answer: 'Regional search impressions, profile calls, website clicks, and city-tagged enquiries.'},
      {question: 'How are city pages kept non-spammy?', answer: 'Each location page addresses genuine local industries, commercial constraints, and service logistics rather than spinning identical templates.'},
      {question: 'Do reviews help Local SEO?', answer: 'Authentic customer feedback on your Google Business Profile helps build trust—never fabricated reviews.'},
      {question: 'Can multi-service companies target multiple nearby cities?', answer: 'Yes, via structured service-area hubs.'},
      {question: 'How do we review our local visibility?', answer: 'Request a local presence review via Contact Us.'},
    ],
    complianceNote: 'Local map rankings depend on proximity, profile verification, genuine customer signals, and competition; Klyia Technology never guarantees map pack placement.',
  },
  {
    slug: 'technical-seo',
    name: 'Technical SEO',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'Technical SEO Audits & Fixes | SSR, Speed, Sitemaps & Schema | Klyia Technology',
    metaDescription:
      'Resolve crawl errors, Core Web Vitals bottlenecks, canonical conflicts, broken redirects, XML sitemaps, and Schema.org structured data.',
    heroSubtitle:
      'Ensure search engines and AI bots crawl, render, canonicalize, and index every valuable page smoothly without technical friction.',
    introFocus:
      'Content cannot rank if search crawlers waste crawl budget on broken redirects, blocked scripts, duplicate URLs, or empty JavaScript shells. Technical SEO establishes crisp architectural hygiene across server, HTML, and structured data.',
    whyNeeded: [
      'Broken canonicals or accidental `noindex` tags silently de-index revenue pages.',
      'JavaScript-only SPAs hide vital copy and links from crawlers.',
      'Oversized scripts degrade Core Web Vitals.',
    ],
    challenges: [
      'Trailing-slash duplicates (`/services` vs `/services/`) splitting link equity.',
      'Invalid JSON-LD Schema syntax failing rich-result validation.',
      'Orphan pages disconnected from main navigation or sitemaps.',
    ],
    solutions: [
      'Server-side rendering (SSR) outputting crisp HTML, canonical links, and HTTP 404/301 status codes.',
      'Partitioned XML sitemap index (`/sitemap.xml` + child sitemaps) and validated `robots.txt`.',
      'Core Web Vitals speed tuning and clean JSON-LD verification.',
    ],
    features: [
      {title: 'Crawl & Index Diagnostics', detail: 'Audit Search Console coverage, `robots.txt`, and HTTP status codes.'},
      {title: 'Canonical & Redirect Rules', detail: 'Unify URL normalization and clean 301 migration paths.'},
      {title: 'Structured Data Validation', detail: 'Error-free JSON-LD aligned strictly with visible page content.'},
      {title: 'Core Web Vitals Engineering', detail: 'LCP, INP, CLS, and server TTFB remediation.'},
    ],
    benefits: [
      'Maximizes indexation efficiency of key commercial and industry pages.',
      'Prevents silent technical penalties from duplicate or broken routes.',
      'Gives Search Console and Bing Webmaster Tools crisp signals.',
    ],
    technologies: ['Google Search Console', 'Bing Webmaster Tools', 'Express SSR Status Codes', 'XML Sitemaps & Schema JSON-LD'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Handling large filter/category canonicals cleanly.'},
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Indexing multi-product catalogue pages cleanly.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Cleaning old academic year URLs and PDFs.'},
    ],
    relatedServiceSlugs: ['website-speed-optimization', 'search-engine-optimization', 'on-page-seo', 'react-website-development'],
    relatedBlogSlugs: ['why-fast-website-speed-matters-for-seo-and-conversions'],
    faqs: [
      {question: 'What does a Technical SEO audit inspect?', answer: 'HTTP status codes, robots.txt, XML sitemaps, canonicals, SSR HTML renderability, internal link depth, Core Web Vitals, mobile usability, and JSON-LD Schema.'},
      {question: 'Why do canonical URLs matter?', answer: 'They prevent duplicate URL variations (query params or trailing slashes) from splitting ranking signals.'},
      {question: 'Do you help verify Search Console and Bing Webmaster Tools?', answer: 'Yes, setting up ownership meta/DNS verification and sitemap submissions cleanly.'},
      {question: 'Can you fix `Discovered - currently not indexed` issues?', answer: 'Yes—by diagnosing crawl bottlenecks, improving internal links, and enriching thin pages.'},
      {question: 'Does Technical SEO help GEO and AEO too?', answer: 'Yes! Clean SSR HTML and accurate Schema markup are essential for AI and answer crawlers.'},
      {question: 'Do you repair broken links after past redesigns?', answer: 'Yes, implementing accurate 301 redirects cleanly.'},
      {question: 'Is HTML valid without JavaScript?', answer: 'In SSR setups, primary content and navigation links remain fully readable even without JavaScript.'},
      {question: 'How do we order a Technical SEO review?', answer: 'Send your site URL via Contact Us.'},
    ],
  },
  {
    slug: 'on-page-seo',
    name: 'On-Page SEO',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'On-Page SEO Services | Metadata, Structure & Content Clarity | Klyia Technology',
    metaDescription:
      'On-page SEO refining page titles, meta descriptions, H1-H3 hierarchy, internal links, image alt tags, and factual content clarity.',
    heroSubtitle:
      'Make every individual page crystal clear to human readers, search crawlers, and answer engines through purposeful hierarchy and linking.',
    introFocus:
      'On-page SEO optimizes the visible content and HTML signals inside every URL—turning vague pages into clear, scannable answers with unique titles, logical H1–H3 headings, descriptive image alt text, and contextual internal links.',
    whyNeeded: [
      'Duplicate or missing page titles confuse searchers and reduce organic click-through rates.',
      'Walls of unstructured text discourage both readers and answer extraction.',
      'Disconnected pages become invisible orphan URLs.',
    ],
    challenges: [
      'Keyword-stuffed paragraphs reading unnaturally to real buyers.',
      'Multiple H1 headings or skipped heading levels breaking semantic clarity.',
      'Missing descriptive alt attributes on key product images.',
    ],
    solutions: [
      'Unique, accurate title tags (50–60 chars) and compelling meta descriptions per page.',
      'Logical H1 → H2 → H3 topical structure answering genuine customer questions.',
      'Contextual cross-links linking services, industries, locations, and articles.',
    ],
    features: [
      {title: 'Unique Titles & Meta Copy', detail: 'Clear snippet writing tailored to search intent.'},
      {title: 'Semantic Heading Flow', detail: 'Single clear H1 supported by descriptive H2/H3 subsections.'},
      {title: 'Internal Link Weaving', detail: 'Natural contextual pathways uniting related services and industries.'},
      {title: 'Image Alt & Accessibility', detail: 'Meaningful alt descriptions supporting image search and screen readers.'},
    ],
    benefits: [
      'Improves organic snippet click-through rates from search results.',
      'Helps visitors navigate seamlessly across related topics.',
      'Reinforces AEO and GEO comprehension naturally.',
    ],
    technologies: ['Semantic HTML5', 'Metadata Templates', 'Internal Link Graph', 'Search Console CTR Review'],
    industries: [
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Clarifying machine specs and process terminology.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Structuring kW, EPC, and net-metering topics clearly.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Organizing advisory scopes into readable subtopics.'},
    ],
    relatedServiceSlugs: ['search-engine-optimization', 'content-marketing', 'aeo-answer-engine-optimization', 'technical-seo'],
    faqs: [
      {question: 'Does On-Page SEO mean stuffing keywords repeatedly?', answer: 'No—modern SEO rewards natural, helpful topic coverage and clear synonyms over spammy repetition.'},
      {question: 'Should every page have a unique title and meta description?', answer: 'Yes, uniqueness prevents keyword cannibalization and improves snippet clarity.'},
      {question: 'How do internal links help SEO?', answer: 'They guide visitors to logical next steps while helping crawlers discover and understand topical relationships.'},
      {question: 'Does On-Page SEO include FAQ sections?', answer: 'Yes, useful customer FAQs directly serve visitors and AEO.'},
      {question: 'Can we apply On-Page SEO to our existing pages?', answer: 'Yes, auditing and upgrading current pages is a common first step.'},
      {question: 'Are image filenames and alt texts updated?', answer: 'Yes, accurately describing visual context.'},
      {question: 'Does On-Page SEO work alongside Google Ads?', answer: 'Yes—clearer landing copy also supports stronger Quality Scores.'},
      {question: 'How do we begin?', answer: 'Request a page audit via Get a Quote.'},
    ],
  },
  {
    slug: 'off-page-seo',
    name: 'Off-Page SEO',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'Off-Page SEO & Brand Authority Building | Klyia Technology',
    metaDescription:
      'Ethical off-page SEO building genuine industry citations, verified business directories, and trustworthy brand mentions without spammy link farms.',
    heroSubtitle:
      'Build authentic domain credibility through verified business citations, trade directories, and share-worthy industry resources—never spam link networks.',
    introFocus:
      'Off-page SEO encompasses trustworthy signals outside your own website—verified trade directories, consistent regional business listings, authentic PR/resource mentions, and brand searches that corroborate your real-world reputation.',
    whyNeeded: [
      'Competitive markets require external trust corroboration alongside strong on-site quality.',
      'Outdated phone numbers or addresses on older directories hurt local consistency.',
      'Useful technical articles and tools earn natural external references over time.',
    ],
    challenges: [
      'Cheap paid link packages risking manual search penalties.',
      'Conflicting NAP entries scattered across regional B2B portals.',
      'Weak external visibility for new corporate domains.',
    ],
    solutions: [
      'Strict white-hat citation building on verified Indian business, industrial, and regional directories.',
      'Cleanup of conflicting legacy directory listings.',
      'Content assets engineered for genuine editorial referencing.',
    ],
    features: [
      {title: 'Verified Trade Citations', detail: 'Consistent profiles on reputable B2B and local directories.'},
      {title: 'Citation & NAP Cleanup', detail: 'Correcting outdated phone, email, or address entries.'},
      {title: 'Editorial Resource Outreach', detail: 'Promoting genuinely helpful industry guides safely.'},
      {title: 'Zero Spam Pledge', detail: 'Strict avoidance of automated link farms or PBN schemes.'},
    ],
    benefits: [
      'Safeguards long-term domain health against algorithm spam filters.',
      'Strengthens trust signals supporting Local SEO and GEO entity validation.',
      'Expands referral discovery from reputable industry hubs.',
    ],
    technologies: ['Citation Audits', 'Search Console Link Review', 'Entity Consistency Alignment', 'Digital PR Support'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Industrial supplier & trade directory accuracy.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Consistent vendor citations across Indian portals.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Verified builder & project entity alignment.'},
    ],
    relatedServiceSlugs: ['search-engine-optimization', 'local-seo-services', 'content-marketing', 'google-business-profile-optimization'],
    faqs: [
      {question: 'Do you buy bulk backlinks or use private blog networks (PBNs)?', answer: 'Never. Paid spam link schemes expose domains to ranking drops and manual penalties.'},
      {question: 'What safe off-page work do you actually execute?', answer: 'Verified B2B/local citations, Google Business Profile consistency, citation cleanup, and promoting original guides.'},
      {question: 'Why does off-page consistency help GEO too?', answer: 'Consistent brand facts across reputable third-party directories corroborate entity identity for AI search systems.'},
      {question: 'How is off-page work tracked?', answer: 'Via transparent citation logs and Search Console external link reports.'},
      {question: 'Can you audit existing toxic or old directory listings?', answer: 'Yes, listing inconsistencies and cleanup steps are mapped cleanly.'},
      {question: 'Are results guaranteed on external directories?', answer: 'Listing approvals depend on each publisher’s editorial policies.'},
      {question: 'Does brand search volume help off-page trust?', answer: 'Yes, aligned marketing and quality offline service build natural brand searches.'},
      {question: 'How do we discuss off-page strategy?', answer: 'Contact us via Get a Quote.'},
    ],
    complianceNote: 'Klyia Technology practices strictly white-hat citation and authority outreach; we never buy spam backlinks or guarantee external placements.',
  },
  {
    slug: 'google-business-profile-optimization',
    name: 'Google Business Profile Optimization',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'Google Business Profile Optimization | Maps & Local Trust | Klyia Technology',
    metaDescription:
      'Complete Google Business Profile optimization covering accurate categories, verified Bhilai/local office setup, services, photos, Q&As, and policy compliance.',
    heroSubtitle:
      'Present accurate hours, verified location details, services, and helpful Q&As directly inside Google Search and Maps.',
    introFocus:
      'For local offices, plants, clinics, and commercial traders, your Google Business Profile (GBP) often wins calls before users even click through to a website. Proper optimization follows Google’s strict representation rules without risking suspension.',
    whyNeeded: [
      'Incomplete profiles miss primary and secondary categories, hiding businesses from relevant map searches.',
      'Outdated phone numbers, holidays, or blurry uploads lower buyer confidence.',
      'Violating address or keyword rules can trigger profile suspensions.',
    ],
    challenges: [
      'Unverified or duplicate map pins confusing customers.',
      'Missing structured service catalogs inside GBP.',
      'Slow or unaddressed customer questions on profiles.',
    ],
    solutions: [
      'Accurate primary/secondary category configuration and detailed service descriptions.',
      'Verified NAP consistency aligning GBP strictly with website Schema markup.',
      'Regular informational updates, authentic facility photo guidelines, and Q&A readiness.',
    ],
    features: [
      {title: 'Category & Service Setup', detail: 'Map real services cleanly inside official GBP taxonomies.'},
      {title: 'Website & Schema Sync', detail: 'Align domain URL, phone (+91 8296887643 style), and verified address.'},
      {title: 'Profile Health & Policy Compliance', detail: 'Keep naming honest—zero spammy keyword stuffing in titles.'},
      {title: 'Insights & Call Tracking', detail: 'Review monthly profile calls, clicks, and direction requests.'},
    ],
    benefits: [
      'Increases confidence when local prospects check your office on Google Maps.',
      'Strengthens regional alignment across Bhilai, Durg, Raipur, and nearby service belts.',
      'Maintains policy-safe longevity without suspension risks.',
    ],
    technologies: ['Google Business Profile', 'LocalBusiness Schema Alignment', 'UTM Tracking Links', 'Monthly Performance Insights'],
    industries: [
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Accurate clinic hours, departments, and map pins.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Campus navigation and admissions contact clarity.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Local EPC office credibility and regional service areas.'},
    ],
    relatedServiceSlugs: ['local-seo-services', 'search-engine-optimization', 'digital-marketing-services', 'off-page-seo'],
    relatedBlogSlugs: ['google-business-profile-optimization-for-local-businesses'],
    faqs: [
      {question: 'Can we add extra keywords into our Google Business Profile business name?', answer: 'No—adding city or service keywords not in your real legal/signage name violates Google policies and risks suspension.'},
      {question: 'Should we create virtual offices on GBP for cities where we don’t have physical staff?', answer: 'No. Only list real staffed physical offices; use service-area settings and website location pages honestly for surrounding towns.'},
      {question: 'Does website SEO affect our Google Business Profile?', answer: 'Yes—linking GBP to a relevant, fast, schema-aligned page reinforces entity trust.'},
      {question: 'What information improves profile engagement?', answer: 'Accurate categories, clear service summaries, authentic photos of your office/products, updated timings, and responsive customer replies.'},
      {question: 'Can you help audit a suspended or duplicate profile?', answer: 'Yes, guiding policy remediation steps honestly based on official Google guidelines.'},
      {question: 'Do we track clicks coming from our Business Profile?', answer: 'Yes, using clean UTM parameters on the website link.'},
      {question: 'Do you fabricate Google reviews?', answer: 'Never—we help you ask genuine satisfied customers ethically.'},
      {question: 'How do we get started?', answer: 'Share your profile name and location via Contact Us.'},
    ],
  },
  {
    slug: 'geo-generative-engine-optimization',
    name: 'GEO — Generative Engine Optimization',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'GEO (Generative Engine Optimization) Services | Klyia Technology',
    metaDescription:
      'GEO services by Klyia Technology structuring factual brand entities, Structured Data, and crawlable service pages for generative AI search platforms.',
    heroSubtitle:
      'Help AI-driven generative search systems accurately understand who your company is, what you build, and which regions you serve through clean GEO and Structured Data.',
    introFocus:
      'Generative Engine Optimization (GEO) structures verifiable company facts, service definitions, industry specializations, and Schema.org Structured Data so AI-assisted discovery systems interpret your brand accurately. We never promise guaranteed AI citations—instead, we build genuine factual clarity and authority.',
    whyNeeded: [
      'Buyers increasingly ask conversational AI tools for vendor shortlists and capability comparisons.',
      'Vague marketing slogans give generative models zero concrete facts to interpret.',
      'Contradictory address or service lists across websites confuse entity resolution.',
    ],
    challenges: [
      'Websites stuffed with buzzwords rather than clear explanations of services and scope.',
      'Unreadable JavaScript-only layouts blocking automated extraction crawlers.',
      'Missing Structured Data entity links connecting company, services, industries, and locations.',
    ],
    solutions: [
      'Factual, well-structured service and industry encyclopedias with crisp entity definitions.',
      'Complete JSON-LD Structured Data graphs (`Organization`, `LocalBusiness`, `Service`, `WebSite`, `Article`).',
      'Clean SSR HTML delivery and `llms.txt` documentation ensuring every crawler reads identical authoritative facts.',
    ],
    features: [
      {title: 'Entity Clarity & Structured Data', detail: 'Consistent official identity, address, services, and Schema.org JSON-LD alignment.'},
      {title: 'Plain-Language Domain Explanations', detail: 'Clear "what it is / why needed / how it works" prose.'},
      {title: 'Crawlable SSR & llms.txt Readiness', detail: 'Accessible HTML structure without JS-gated hidden copy.'},
      {title: 'Interconnected Topic Clusters', detail: 'Contextual links uniting services, industries, and insights.'},
    ],
    benefits: [
      'Makes your business identity unambiguous for modern AI search crawlers.',
      'Delivers substantially clearer explanations for human B2B buyers at the same time.',
      'Protects brand accuracy against misattribution.',
    ],
    technologies: ['Schema.org Entity Graphs', 'SSR HTML Content', 'Factual Knowledge Modeling', 'XML Sitemaps'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Clear steel product & ERP capability definitions.'},
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Structured machinery and OEM capabilities.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Authoritative advisory profiles.'},
    ],
    relatedServiceSlugs: ['aeo-answer-engine-optimization', 'ai-search-visibility', 'search-engine-optimization', 'technical-seo'],
    relatedBlogSlugs: ['seo-vs-geo-vs-aeo-difference-explained'],
    faqs: [
      {question: 'What is GEO (Generative Engine Optimization)?', answer: 'GEO is the discipline of organizing factual, attributable, structured brand and service information so generative AI search interfaces interpret your organization accurately.'},
      {question: 'How is GEO different from SEO?', answer: 'SEO focuses primarily on ranking pages in classic search result links; GEO focuses on entity clarity, structured facts, and contextual authority across generative summaries.'},
      {question: 'Can any agency guarantee citations inside ChatGPT, Gemini, or Perplexity?', answer: 'No. AI model outputs are non-deterministic and evolve continually. Ethical GEO maximizes factual clarity and crawlability without false guarantees.'},
      {question: 'Does GEO replace SEO?', answer: 'No—GEO works alongside strong Technical SEO and On-Page SEO rather than replacing them.'},
      {question: 'Why does SSR help GEO?', answer: 'Many AI crawlers parse raw HTML directly rather than executing complex single-page JS bundles.'},
      {question: 'What content format supports GEO best?', answer: 'Honest factual descriptions, structured comparisons, clear regional context, and non-promotional explanations.'},
      {question: 'Does GEO help Indian B2B and regional companies too?', answer: 'Yes—especially when buyers compare regional software, ERP, or manufacturing suppliers.'},
      {question: 'How do we prepare our site for GEO?', answer: 'Request an assessment via Get a Quote.'},
    ],
    complianceNote: 'Generative AI outputs are governed by third-party model providers; Klyia Technology never guarantees AI citations, mentions, or recommendations.',
  },
  {
    slug: 'aeo-answer-engine-optimization',
    name: 'AEO — Answer Engine Optimization',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'AEO (Answer Engine Optimization) Services | Klyia Technology',
    metaDescription:
      'Answer Engine Optimization formatting clear question-based headings, concise direct answers, comparison tables, and eligible Schema.org FAQ markup.',
    heroSubtitle:
      'Structure direct, accurate answers to customer questions so search snippets, voice search, and answer engines understand your solutions.',
    introFocus:
      'Answer Engine Optimization (AEO) focuses on matching real buyer questions with crisp, direct, honest answers—paired with structured HTML headings, comparison tables, and valid Schema.org markup.',
    whyNeeded: [
      'Buyers type full natural questions ("Custom software vs ready-made software", "SEO vs GEO vs AEO").',
      'Pages filled with vague marketing fluff fail to answer direct questions clearly.',
      'Voice assistants and featured snippets favor concise, scannable answers.',
    ],
    challenges: [
      'Hiding FAQ answers behind inaccessible non-crawlable JavaScript triggers.',
      'Marking up invalid or non-visible FAQPage JSON-LD.',
      'Overlong rambling paragraphs that bury simple definitions.',
    ],
    solutions: [
      'Clean Q&A subsections rendered directly in SSR HTML on service, industry, and blog pages.',
      'Descriptive H2/H3 question headings paired with concise 2–3 sentence direct answers.',
      'Structured comparison tables and accurate `FAQPage` / `Article` Schema where eligible.',
    ],
    features: [
      {title: 'Question-Led H2/H3 Architecture', detail: 'Built directly around real customer buying questions.'},
      {title: 'Visible Crawlable FAQs', detail: 'All FAQ questions and answers present directly in SSR HTML.'},
      {title: 'Comparison Tables & Definitions', detail: 'Simple explanations of technical differences (e.g., SEO vs GEO vs AEO).'},
      {title: 'Policy-Clean Schema Markup', detail: 'Valid JSON-LD strictly matching visible page content.'},
    ],
    benefits: [
      'Answers buyer objections cleanly before they even pick up the phone.',
      'Aligns website structure for voice search and direct-answer extraction.',
      'Pairs seamlessly with conversational website AI assistants.',
    ],
    technologies: ['FAQPage & Service Schema', 'Semantic HTML Headings', 'SSR Crawlable Copy', 'Structured Knowledge Bases'],
    industries: [
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Clear admissions, eligibility, and fee FAQ hubs.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Patient-friendly procedure and scheduling FAQs.'},
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Technical specification and compliance Q&As.'},
    ],
    relatedServiceSlugs: ['geo-generative-engine-optimization', 'ai-search-visibility', 'on-page-seo', 'content-marketing'],
    relatedBlogSlugs: ['seo-vs-geo-vs-aeo-difference-explained'],
    faqs: [
      {question: 'What is Answer Engine Optimization (AEO)?', answer: 'AEO is the practice of organizing clear questions, concise direct answers, and structured markup so search and answer systems surface accurate explanations.'},
      {question: 'How does AEO differ from GEO and SEO?', answer: 'SEO focuses on overall search rankings; AEO focuses specifically on clear question-and-answer precision; GEO optimizes holistic entity and factual authority for generative AI summaries.'},
      {question: 'Should FAQ answers be hidden until clicked?', answer: 'For crawlability, ensuring answers reside clearly in the SSR HTML DOM helps search bots and non-JS browsers read everything cleanly.'},
      {question: 'Does Klyia guarantee Google Featured Snippets?', answer: 'No—snippet selection is automated by search engines. We focus on quality formatting and policy-compliant structured data.'},
      {question: 'Can AEO help voice search queries?', answer: 'Yes, conversational question headings and concise definitions align naturally with voice queries.'},
      {question: 'Do comparison tables help AEO?', answer: 'Yes—structured comparisons clarify trade-offs clearly for readers and extraction systems.'},
      {question: 'Does AEO also improve our website AI chatbot accuracy?', answer: 'Yes! Structured factual Q&As double as grounded training material for website assistants.'},
      {question: 'How do we add AEO to our site?', answer: 'Contact our team via Get a Quote.'},
    ],
  },
  {
    slug: 'ai-search-visibility',
    name: 'AI Search Visibility',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'AI Search Visibility Strategy (SEO + GEO + AEO) | Klyia Technology',
    metaDescription:
      'Unified search visibility combining Technical SEO, GEO entity structure, AEO answer formatting, and consistent corporate citations without hype.',
    heroSubtitle:
      'Position your brand clearly across modern search journeys—combining technical web speed, structured entities, and verifiable expertise.',
    introFocus:
      'Discovery is no longer limited to ten blue links. Buyers compare vendors across Google search, local maps, AI summaries, and answer interfaces. AI Search Visibility unites Technical SEO, GEO, and AEO into one disciplined foundation.',
    whyNeeded: [
      'Modern buyers verify vendors across multiple search surfaces before reaching out.',
      'Inconsistent descriptions across your site and directories weaken brand confidence.',
      'Slow or un-indexed sites remain invisible to automated crawlers.',
    ],
    challenges: [
      'Falling for overstated hype promising guaranteed AI engine placements.',
      'Fragmented content lacking clear entity attribution.',
      'Missing technical foundations (SSR, XML sitemaps, clean HTTPS).',
    ],
    solutions: [
      'Combined audit of crawlability, entity structure, Q&A clarity, and external NAP citations.',
      'Original industry & service content anchored in verified corporate facts.',
      'Ongoing Search Console and analytics monitoring.',
    ],
    features: [
      {title: 'Integrated SEO + GEO + AEO Stack', detail: 'Coordinated execution rather than isolated piecemeal tweaks.'},
      {title: 'Factual Entity Architecture', detail: 'Zero invented claims—strict verifiable business alignment.'},
      {title: 'Crawlable Technical Core', detail: 'Fast SSR rendering, clean URLs, and multi-sitemap indexing.'},
      {title: 'Practical Growth Measurement', detail: 'Measuring real organic traffic trends and genuine leads.'},
    ],
    benefits: [
      'Future-proofs your web platform across evolving search interfaces.',
      'Builds genuine topical trust with human enterprise buyers.',
      'Unifies engineering, content, and technical SEO under one partner.',
    ],
    technologies: ['SSR Architecture', 'Schema.org Graph', 'Search Console & GA4', 'Entity Citation Audits'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Industrial buyer clarity across web and AI discovery.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Clear EPC capability positioning.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Discoverable advisory credibility.'},
    ],
    relatedServiceSlugs: ['geo-generative-engine-optimization', 'aeo-answer-engine-optimization', 'search-engine-optimization', 'content-marketing'],
    faqs: [
      {question: 'What is included in an AI Search Visibility program?', answer: 'Technical SEO hygiene, crawlable content upgrades, GEO entity structuring, AEO Q&As, Schema.org graphs, and citation consistency.'},
      {question: 'Do you promise guaranteed visibility inside ChatGPT or Gemini?', answer: 'Never—we implement verified technical and content best practices while transparently avoiding false guarantees.'},
      {question: 'Is AI Search Visibility useful for regional businesses in Chhattisgarh?', answer: 'Yes—both regional and national B2B buyers increasingly research technical solutions via AI-assisted search.'},
      {question: 'Does this benefit traditional Google rankings too?', answer: 'Yes, because helpful factual prose, fast SSR speed, and clean Schema benefit classic search simultaneously.'},
      {question: 'Do we need a full site rebuild for AI Search Visibility?', answer: 'Not always—if your current site is crawlable, we can upgrade architecture and content progressively.'},
      {question: 'How is progress evaluated?', answer: 'Via Search Console metrics, indexed coverage, brand search growth, and tracked enquiries.'},
      {question: 'Do you connect site data with an on-site AI assistant too?', answer: 'Yes, via our Website AI Assistant service.'},
      {question: 'How do we discuss AI Search Visibility?', answer: 'Reach out via Get a Quote.'},
    ],
  },
  {
    slug: 'digital-marketing-services',
    name: 'Digital Marketing Services',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'Digital Marketing Services | Bhilai, Raipur & India | Klyia Technology',
    metaDescription:
      'Goal-oriented digital marketing uniting SEO, Google Ads, social media creatives, landing pages, and lead tracking for Indian businesses.',
    heroSubtitle:
      'Connect high-intent buyer searches and regional campaigns directly with fast landing pages, WhatsApp intake, and transparent lead tracking.',
    introFocus:
      'Digital marketing works best when creative campaigns, targeted search ads, SEO, and website conversion paths work as one cohesive funnel rather than disconnected isolated boosts.',
    whyNeeded: [
      'Boosting random social posts without landing pages or lead capture wastes budget.',
      'New products and regional expansions require immediate visibility alongside slower organic SEO.',
      'Owners need transparent reporting tied to real enquiries rather than vanity impressions.',
    ],
    challenges: [
      'Unqualified ad clicks coming from overly broad geographic or keyword targeting.',
      'Sending paid clicks to slow homepages without clear enquiry paths.',
      'No call/form/WhatsApp attribution.',
    ],
    solutions: [
      'Coordinated channel planning across Google Search Ads, Local SEO, Social Media, and WhatsApp intake.',
      'Dedicated intent-matched landing pages engineered for speed.',
      'Clean analytics reporting tracking cost-per-enquiry signals where configured.',
    ],
    features: [
      {title: 'Integrated Funnel Design', detail: 'Ads, landing pages, forms, and WhatsApp connected smoothly.'},
      {title: 'Regional & B2B Targeting', detail: 'Focused audience reach across Bhilai, Durg, Raipur, Chhattisgarh, and India.'},
      {title: 'Creative & Copy Alignment', detail: 'Clear messaging free from misleading clickbait claims.'},
      {title: 'GA4 Conversion Tracking', detail: 'Monitor genuine form submissions and engagement trends.'},
    ],
    benefits: [
      'Balances immediate campaign visibility with long-term organic SEO assets.',
      'Eliminates wasted ad traffic through clean landing UX.',
      'Keeps marketing messaging unified with sales teams.',
    ],
    technologies: ['Google Ads', 'Google Analytics 4', 'Meta Business Suite', 'Conversion Landing Pages'],
    industries: [
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Project launch campaigns and site-visit booking.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Admissions season search & social outreach.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Regional rooftop & commercial solar lead drives.'},
    ],
    relatedServiceSlugs: ['google-ads-management', 'social-media-marketing', 'search-engine-optimization', 'landing-page-design'],
    faqs: [
      {question: 'Which digital marketing channels work best for B2B vs B2C?', answer: 'B2B and industrial sectors typically see highest intent from SEO, Google Search Ads, and LinkedIn; regional consumer sectors also leverage Meta campaigns and Google Business Profile.'},
      {question: 'Do ad budgets go directly to Google/Meta or through Klyia?', answer: 'Clients fund official Google/Meta ad accounts transparently for complete billing clarity.'},
      {question: 'Do you build the landing pages needed for campaigns?', answer: 'Yes, engineered for fast load and validated lead capture.'},
      {question: 'Can campaigns focus specifically on Bhilai, Durg, and Raipur?', answer: 'Yes, using crisp geo-targeted campaign settings.'},
      {question: 'Do you promise exact fixed lead counts before launching?', answer: 'No—ad performance depends on budget, market competition, seasonality, and offer positioning.'},
      {question: 'Can ad leads flow straight to WhatsApp or CRM?', answer: 'Yes.'},
      {question: 'How often are campaigns reviewed?', answer: 'Structured optimization reviews evaluate search terms, wasted clicks, and conversion efficiency.'},
      {question: 'How do we discuss a campaign plan?', answer: 'Share your target cities and goals via Get a Quote.'},
    ],
  },
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'Social Media Marketing & Brand Presence | Klyia Technology',
    metaDescription:
      'Consistent social media calendars, brand creatives, LinkedIn B2B positioning, and regional engagement campaigns for Indian enterprises.',
    heroSubtitle:
      'Maintain a crisp, authoritative brand presence across LinkedIn, Instagram, and Facebook with purposeful creatives and regional consistency.',
    introFocus:
      'Active social channels validate that a business is alive, trustworthy, and approachable when B2B buyers or local families look you up. We focus on thoughtful industry posts, visual branding consistency, and genuine engagement rather than hollow spam memes.',
    whyNeeded: [
      'Dormant profiles dated two years back create doubt during vendor checks.',
      'Inconsistent graphic templates dilute corporate identity.',
      'Paid social promotions require disciplined creatives and clear enquiry hooks.',
    ],
    challenges: [
      'Random off-brand templates failing to convey technical professionalism.',
      'Irregular posting streaks followed by months of silence.',
      'No connection between social posts and website/WhatsApp enquiries.',
    ],
    solutions: [
      'Cohesive graphic design templates aligned strictly to your corporate colour palette.',
      'Monthly content calendars balancing educational tips, service spotlights, and updates.',
      'Optional targeted Meta/LinkedIn promotion paired with clean landing pages.',
    ],
    features: [
      {title: 'Branded Visual Templates', detail: 'Clean, recognizable layouts crafted specifically for your company.'},
      {title: 'B2B & Local Positioning', detail: 'LinkedIn industry clarity paired with Facebook/Instagram regional presence.'},
      {title: 'Enquiry Link Integration', detail: 'Direct click-through paths to WhatsApp or landing pages.'},
      {title: 'Consistent Monthly Cadence', detail: 'Planned calendars approved transparently with your team.'},
    ],
    benefits: [
      'Reinforces visual professionalism whenever prospects check your profiles.',
      'Keeps existing clients and regional networks aware of new solutions.',
      'Supports paid social reach cleanly when promotions run.',
    ],
    technologies: ['Meta Business Suite', 'LinkedIn Company Tools', 'Custom Brand Creatives', 'WhatsApp Ad Hooks'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Product launches and seasonal visual showcases.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Architectural project updates and booking outreach.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Patient awareness posts and clinic updates.'},
    ],
    relatedServiceSlugs: ['social-media-creatives', 'digital-marketing-services', 'brand-identity', 'content-marketing'],
    faqs: [
      {question: 'Which social platforms do you support?', answer: 'Primarily LinkedIn, Instagram, and Facebook aligned to whether your buyers are B2B industrial or local consumer.'},
      {question: 'Do we approve posts before publishing?', answer: 'Yes, monthly calendars and creatives are reviewed clearly with your team.'},
      {question: 'Do you design custom graphics rather than stock templates?', answer: 'Yes, branded visual layouts aligned with your colour system and typography.'},
      {question: 'Does social media directly replace SEO?', answer: 'No—social supports brand trust and awareness while SEO captures high-intent search queries.'},
      {question: 'Can Instagram/Facebook ads route straight to WhatsApp?', answer: 'Yes.'},
      {question: 'Do you guarantee viral reach or follower counts?', answer: 'No—we focus on genuine brand credibility and targeted enquiries, never fake followers.'},
      {question: 'Can you help set up or clean up neglected company pages?', answer: 'Yes.'},
      {question: 'How do we plan a social calendar?', answer: 'Reach out via Get a Quote.'},
    ],
  },
  {
    slug: 'google-ads-management',
    name: 'Google Ads Management',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'Google Ads Management | High-Intent Search Campaigns | Klyia Technology',
    metaDescription:
      'Disciplined Google Search and Display campaign setup, negative keyword pruning, geo-targeting, and conversion tracking focused on genuine enquiries.',
    heroSubtitle:
      'Capture high-intent active searchers immediately through disciplined keyword targeting, negative filtering, and speed-tuned landing pages.',
    introFocus:
      'When you need enquiries right now—for a new product line, regional expansion, or admissions intake—Google Search Ads place your offer in front of buyers actively searching those terms, provided budgets are protected rigorously with negative keywords and strict geo-fencing.',
    whyNeeded: [
      'Organic SEO builds steadily over months; paid search provides immediate visibility when launching.',
      'Default Google Ads settings waste substantial spend on irrelevant broad terms and out-of-area clicks.',
      'Without conversion tracking, businesses cannot tell which campaigns yield real calls.',
    ],
    challenges: [
      'Budget draining rapidly on job-seeker, free-download, or competitor support queries.',
      'Sending paid traffic to slow pages without clear call or quote actions.',
      'Unclear billing vs. agency fee breakdowns.',
    ],
    solutions: [
      'Tightly themed Search ad groups, exact/phrase matching, and ongoing negative keyword exclusion.',
      'Strict city/state geo-targeting (e.g., Bhilai, Durg, Raipur, Chhattisgarh, or targeted Pan-India zones).',
      'Clean GA4 / Google Ads conversion setup measuring real enquiries.',
    ],
    features: [
      {title: 'Intent-Tight Ad Groups', detail: 'High-relevance ad copy aligned closely to landing headlines.'},
      {title: 'Negative Keyword Hygiene', detail: 'Pruning non-buyer search queries continuously to safeguard budget.'},
      {title: 'Geo-Fenced Delivery', detail: 'Show ads only inside regions your sales/delivery team serves.'},
      {title: 'Transparent Reporting', detail: 'Clear spend, click, and conversion visibility inside your own ad account.'},
    ],
    benefits: [
      'Starts generating targeted search visibility rapidly after campaign approval.',
      'Reduces wasted clicks on non-commercial searches.',
      'Feeds conversion data back into your SEO and keyword strategy.',
    ],
    technologies: ['Google Ads', 'Google Analytics 4', 'Conversion Tracking Tags', 'Custom Landing Pages'],
    industries: [
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Captive regional rooftop & commercial solar searches.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Immediate specialty consultation visibility.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'High-intent B2B procurement searches.'},
    ],
    relatedServiceSlugs: ['landing-page-design', 'digital-marketing-services', 'search-engine-optimization', 'website-speed-optimization'],
    faqs: [
      {question: 'Who pays Google directly for the ad spend?', answer: 'You retain full ownership and billing access to your Google Ads account—making media spend 100% transparent.'},
      {question: 'How do you prevent budget waste on irrelevant searches?', answer: 'Through focused phrase/exact keywords, negative keyword lists, geo-targeting restrictions, and regular search-term audits.'},
      {question: 'Do we need dedicated landing pages for Google Ads?', answer: 'Dedicated, fast landing pages typically outperform sending paid clicks to general homepages.'},
      {question: 'Can campaigns target only Bhilai, Durg, and Raipur?', answer: 'Yes, radius and city-level targeting restrict impressions precisely.'},
      {question: 'Do you guarantee a fixed cost per lead?', answer: 'No—actual CPC and conversion rates fluctuate with auction competition, seasonality, and offer strength.'},
      {question: 'Can call clicks and form submissions both be tracked?', answer: 'Yes, via clean conversion tags.'},
      {question: 'Can we pause or adjust budgets anytime?', answer: 'Yes, your account stays under full business control.'},
      {question: 'How do we discuss a Google Ads launch?', answer: 'Share your target services and monthly budget range via Get a Quote.'},
    ],
  },
  {
    slug: 'content-marketing',
    name: 'Content Marketing',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'Content Marketing & Technical B2B Writing | Klyia Technology',
    metaDescription:
      'Original industry guides, ERP explainers, comparison articles, and educational resources engineered for SEO, GEO, AEO, and B2B buyer trust.',
    heroSubtitle:
      'Turn your engineering and operational knowledge into clear, authoritative articles and guides that buyers actually read and search engines trust.',
    introFocus:
      'Generic, repetitive AI-spun blog posts hurt credibility. Thoughtful Content Marketing answers real commercial questions—like how custom software compares against off-the-shelf apps or why Solar EPC teams need milestone ERPs—earning long-term search trust and educating prospects before sales calls.',
    whyNeeded: [
      'Complex services like ERP, custom software, and GEO require clear plain-language education.',
      'Buyers researching problems before choosing a vendor discover companies through educational guides.',
      'Original expertise differentiates authentic companies from thin agency templates.',
    ],
    challenges: [
      'Flooding blogs with shallow 300-word filler articles nobody reads.',
      'Missing internal links connecting helpful posts back to service pages.',
      'Technical jargon alienating non-technical business owners.',
    ],
    solutions: [
      'Deep, original, human-readable articles grounded in verified industry examples.',
      'Comparison tables, practical checklists, and FAQs built for SEO + AEO.',
      'Structured publication metadata and contextual internal links.',
    ],
    features: [
      {title: 'Buyer-Question Topic Planning', detail: 'Guides addressing real cost, workflow, and comparison questions.'},
      {title: 'Plain-English B2B Depth', detail: 'Clear writing accessible to factory owners and procurement managers.'},
      {title: 'Article Schema & Attribution', detail: 'Clean publish/update history and structured metadata.'},
      {title: 'Hub-and-Spoke Internal Links', detail: 'Routing readers seamlessly to relevant service and quote pages.'},
    ],
    benefits: [
      'Shortens sales cycles by educating prospects ahead of discovery calls.',
      'Expands non-branded organic search visibility over time.',
      'Feeds clean verified material into your on-site AI guide.',
    ],
    technologies: ['Editorial Knowledge CMS', 'Article JSON-LD Schema', 'Search Console Topic Analysis', 'AEO Formatting'],
    industries: [
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Technical process explainers and ERP insights.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Buyer guides on commercial ROI workflows and EPC software.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Thought leadership and regulatory checklists.'},
    ],
    relatedServiceSlugs: ['search-engine-optimization', 'aeo-answer-engine-optimization', 'geo-generative-engine-optimization', 'on-page-seo'],
    relatedBlogSlugs: ['seo-vs-geo-vs-aeo-difference-explained', 'custom-software-vs-ready-made-software'],
    faqs: [
      {question: 'How is content marketing different from copying generic articles?', answer: 'We craft original guides grounded in real Indian operational contexts, clear examples, and honest trade-offs rather than generic filler.'},
      {question: 'Do articles include FAQs and internal links?', answer: 'Yes, every published guide connects cleanly to related services and relevant next reads.'},
      {question: 'Is publishing 100 auto-generated posts better than 10 strong guides?', answer: 'No—quality, originality, and real helpfulness dramatically outperform high-volume thin spam.'},
      {question: 'Can we share our team’s technical notes for you to structure?', answer: 'Yes, interviewing your subject-matter leads creates the strongest authentic content.'},
      {question: 'Does content marketing support GEO and AEO?', answer: 'Yes—informative comparisons and clear definitions are ideal for AI and answer discovery.'},
      {question: 'Are publish dates and update dates tracked cleanly?', answer: 'Yes, reflecting real publication history transparently.'},
      {question: 'Can articles feed LinkedIn posts too?', answer: 'Yes, insights repurpose cleanly into B2B social summaries.'},
      {question: 'How do we start an editorial plan?', answer: 'Request a content roadmap via Get a Quote.'},
    ],
  },
  {
    slug: 'ecommerce-seo',
    name: 'E-commerce SEO',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO & Digital Growth',
    seoTitle: 'E-commerce SEO Services | Category, Product & Filter Architecture | Klyia Technology',
    metaDescription:
      'Specialized e-commerce SEO optimizing product taxonomies, category copy, faceted filter canonicals, page speed, and structured product visibility.',
    heroSubtitle:
      'Turn category pages and product catalogs into steady organic discovery engines without duplicate filter traps.',
    introFocus:
      'Online stores face distinct SEO pitfalls—thousands of filter URLs causing crawl waste, thin manufacturer product descriptions duplicated across dealers, and heavy product galleries slowing mobile pages. E-commerce SEO organizes category structure cleanly for shoppers and search crawlers alike.',
    whyNeeded: [
      'Duplicate supplier descriptions prevent product pages from standing out organically.',
      'Uncapped faceted filter parameters waste search crawl budgets rapidly.',
      'Slow mobile image loads hurt shopper conversions and Core Web Vitals.',
    ],
    challenges: [
      'Out-of-stock pages returning abrupt 404s and dropping organic history.',
      'Thin category pages lacking buyer buying-guide clarity.',
      'Broken pagination or overlapping variant URLs.',
    ],
    solutions: [
      'Clean canonical strategies governing sort, pagination, and variant parameters.',
      'Original category introductions, spec highlights, and buyer FAQs.',
      'Optimized image sizing, alt descriptions, and clean `robots.txt` filter rules.',
    ],
    features: [
      {title: 'Category Taxonomy & Copy', detail: 'Structure high-intent parent and child category hubs clearly.'},
      {title: 'Faceted URL Canonical Hygiene', detail: 'Prevent filter combinations from creating duplicate index bloat.'},
      {title: 'Product Page Enrichment', detail: 'Clean specifications, sizing notes, and descriptive alt attributes.'},
      {title: 'Catalog Speed Tuning', detail: 'Lazy-loaded gallery frames protecting mobile LCP scores.'},
    ],
    benefits: [
      'Improves organic discoverability across category and SKU searches.',
      'Keeps crawl budget focused cleanly on commercial money pages.',
      'Enhances shopper trust and mobile speed simultaneously.',
    ],
    technologies: ['Canonical Parameter Rules', 'XML Product Sitemaps', 'Lazy Media Delivery', 'Search Console Diagnostics'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Direct-to-consumer category & product organic growth.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'B2B catalog specification SEO.'},
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Bulk brand/category catalog discoverability.'},
    ],
    relatedServiceSlugs: ['ecommerce-website-development', 'technical-seo', 'website-speed-optimization', 'on-page-seo'],
    faqs: [
      {question: 'Why does E-commerce SEO differ from standard corporate SEO?', answer: 'Online stores juggle category trees, variants, filters, out-of-stock items, and image-heavy speed challenges requiring specialized technical governance.'},
      {question: 'Should every filter combination be indexed by Google?', answer: 'Usually no—indexing unlimited sort/price combinations causes duplicate bloat. We configure clean canonical/robots strategies.'},
      {question: 'How should out-of-stock products be handled for SEO?', answer: 'Keep permanent URLs live with clear availability notes or redirect discontinued SKUs thoughtfully to relevant categories.'},
      {question: 'Do unique product descriptions really matter?', answer: 'Yes—copying identical manufacturer paragraphs limits search differentiation.'},
      {question: 'Do you support custom React/Node stores as well as standard platforms?', answer: 'Yes.'},
      {question: 'Are rankings guaranteed for every SKU?', answer: 'No—rankings depend on search volume, domain trust, competition, and pricing competitiveness.'},
      {question: 'Does catalog speed impact store conversions too?', answer: 'Yes, noticeably on smartphone shoppers.'},
      {question: 'How do we request an e-commerce audit?', answer: 'Share your storefront URL via Contact Us.'},
    ],
  },
];

export const GROWTH_AND_SEO_SERVICES: ServicePageData[] = GROWTH_SEEDS.map(hydrateServiceSeed);
