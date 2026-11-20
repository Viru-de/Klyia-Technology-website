import React, {useEffect, useState} from 'react';
import {FloatingSupportDock} from './components/layout/FloatingSupportDock.tsx';
import {Footer} from './components/layout/Footer.tsx';
import {Header} from './components/layout/Header.tsx';
import {BRAND} from './config/brand.ts';
import {ROUTES, extractRouteSlug, normalizePathname} from './config/routes.ts';
import {resolvePageSeo} from './config/seo.ts';
import {
  getBlogArticleBySlug,
  getErpProductBySlug,
  getIndustryBySlug,
  getLocationBySlug,
  getServiceBySlug,
} from './data/index.ts';
import {RouterProvider, useRouter} from './lib/router.tsx';
import {AboutPage} from './pages/AboutPage.tsx';
import {BlogPostPage} from './pages/BlogPostPage.tsx';
import {ContactPage} from './pages/ContactPage.tsx';
import {ErpHubPage} from './pages/ErpHubPage.tsx';
import {ErpProductDetailPage} from './pages/ErpProductDetailPage.tsx';
import {GetAQuotePage} from './pages/GetAQuotePage.tsx';
import {HomePage} from './pages/HomePage.tsx';
import {HtmlSitemapPage} from './pages/HtmlSitemapPage.tsx';
import {IndustriesPage} from './pages/IndustriesPage.tsx';
import {IndustryDetailPage} from './pages/IndustryDetailPage.tsx';
import {InsightsPage} from './pages/InsightsPage.tsx';
import {LegalPage} from './pages/LegalPage.tsx';
import {LocationDetailPage} from './pages/LocationDetailPage.tsx';
import {LocationsHubPage} from './pages/LocationsHubPage.tsx';
import {NotFoundPage} from './pages/NotFoundPage.tsx';
import {OurWorkPage} from './pages/OurWorkPage.tsx';
import {ServiceDetailPage} from './pages/ServiceDetailPage.tsx';
import {ServicesPage} from './pages/ServicesPage.tsx';

interface AppProps {
  initialPath?: string;
}

function updateClientMetaTag(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function AppShell() {
  const {pathname} = useRouter();
  const normalizedPath = normalizePathname(pathname);
  const {seo, isNotFound} = resolvePageSeo(normalizedPath);
  const [gmpQuotaExceeded, setGmpQuotaExceeded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const handleQuotaExceeded = () => setGmpQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => {
      window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    };
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    document.title = seo.title;
    const canonicalUrl = `${BRAND.domain}${seo.canonicalPath}`;
    updateClientMetaTag('meta[name="description"]', 'name', 'description', seo.description);
    updateClientMetaTag('meta[property="og:title"]', 'property', 'og:title', seo.title);
    updateClientMetaTag('meta[property="og:description"]', 'property', 'og:description', seo.description);
    updateClientMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateClientMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    updateClientMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);

    const canonicalTags = document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]');
    let canonicalLink = canonicalTags[0];
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    for (let i = 1; i < canonicalTags.length; i += 1) {
      canonicalTags[i].remove();
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [seo]);

  const renderPage = () => {
    if (isNotFound) {
      return <NotFoundPage breadcrumbs={seo.breadcrumbs} />;
    }

    const serviceSlug = extractRouteSlug(normalizedPath, ROUTES.SERVICES);
    if (serviceSlug) {
      const srv = getServiceBySlug(serviceSlug);
      if (srv) {
        return <ServiceDetailPage service={srv} breadcrumbs={seo.breadcrumbs} />;
      }
    }

    const erpSlug = extractRouteSlug(normalizedPath, ROUTES.ERP_PRODUCTS);
    if (erpSlug) {
      const erpProduct = getErpProductBySlug(erpSlug);
      if (erpProduct) {
        return <ErpProductDetailPage product={erpProduct} breadcrumbs={seo.breadcrumbs} />;
      }
    }

    const industrySlug = extractRouteSlug(normalizedPath, ROUTES.INDUSTRIES);
    if (industrySlug) {
      const ind = getIndustryBySlug(industrySlug);
      if (ind) {
        return <IndustryDetailPage industry={ind} breadcrumbs={seo.breadcrumbs} />;
      }
    }

    const locationSlug = extractRouteSlug(normalizedPath, ROUTES.LOCATIONS);
    if (locationSlug) {
      const loc = getLocationBySlug(locationSlug);
      if (loc) {
        return <LocationDetailPage location={loc} breadcrumbs={seo.breadcrumbs} />;
      }
    }

    const blogSlug = extractRouteSlug(normalizedPath, ROUTES.INSIGHTS);
    if (blogSlug) {
      const post = getBlogArticleBySlug(blogSlug);
      if (post) {
        return <BlogPostPage article={post} breadcrumbs={seo.breadcrumbs} />;
      }
    }

    switch (normalizedPath) {
      case ROUTES.HOME:
        return <HomePage />;
      case ROUTES.ABOUT:
        return <AboutPage breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.SERVICES:
        return <ServicesPage breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.ERP_HUB:
        return <ErpHubPage breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.INDUSTRIES:
        return <IndustriesPage breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.LOCATIONS:
        return <LocationsHubPage breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.OUR_WORK:
        return <OurWorkPage breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.INSIGHTS:
        return <InsightsPage breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.CONTACT:
        return <ContactPage breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.GET_A_QUOTE:
        return <GetAQuotePage breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.PRIVACY_POLICY:
        return <LegalPage mode="privacy" breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.TERMS:
        return <LegalPage mode="terms" breadcrumbs={seo.breadcrumbs} />;
      case ROUTES.SITEMAP:
        return <HtmlSitemapPage breadcrumbs={seo.breadcrumbs} />;
      default:
        return <NotFoundPage breadcrumbs={seo.breadcrumbs} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#080808] text-[#CDCBCA]">
      {gmpQuotaExceeded && (
        <div
          role="status"
          className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm"
        >
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#D41514] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <Footer />
      <FloatingSupportDock />
    </div>
  );
}

export default function App({initialPath = '/'}: AppProps) {
  return (
    <RouterProvider initialPath={initialPath}>
      <AppShell />
    </RouterProvider>
  );
}
