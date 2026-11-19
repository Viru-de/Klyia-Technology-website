import React from 'react';
import {Cpu, Database, Globe, Lock, MessageSquare, Workflow} from 'lucide-react';
import {Container} from '../ui/Container.tsx';

const STACK_LAYERS = [
  {
    icon: Globe,
    category: 'Frontend & SSR Web',
    items: 'TypeScript, React 19, Server-Side Rendering (SSR), Vite, Tailwind CSS & Semantic HTML5',
  },
  {
    icon: Database,
    category: 'Backend & Relational Data',
    items: 'Node.js, Express REST APIs, SQLite WAL Persistence, PostgreSQL & Parameterized SQL',
  },
  {
    icon: Cpu,
    category: 'Controlled AI Engineering',
    items: 'Server-Side Gemini SDK Integration, Approved Knowledge Guardrails & Deterministic Fallbacks',
  },
  {
    icon: MessageSquare,
    category: 'Business Integrations',
    items: 'Official WhatsApp Business API Hooks, CRM/ERP Webhooks, Payment & Email DNS Alignment',
  },
  {
    icon: Workflow,
    category: 'Search & Semantic Standards',
    items: 'Schema.org JSON-LD Graphs, Multi-Part XML Sitemap Indexes, Core Web Vitals & GA4 Ready',
  },
  {
    icon: Lock,
    category: 'Security & Deployment',
    items: 'HTTPS TLS, Security Headers, Rate Limits, Input Sanitization & Hostinger VPS Node Deployments',
  },
];

export function HomeTechStackSection() {
  return (
    <section className="bg-[#080808] py-16 sm:py-20 border-b border-[#303030]">
      <Container className="space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514]">
            <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
            <span>Engineering Architecture</span>
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white leading-[1.18]">
            Clean, Maintainable Technology &amp; Integration Stack
          </h2>
          <p className="text-base leading-relaxed text-[#969696]">
            We build practical, standard-compliant systems your company actually owns—avoiding brittle plugins, exposed secrets, or locked proprietary traps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STACK_LAYERS.map((layer) => {
            const IconComponent = layer.icon;
            return (
              <div
                key={layer.category}
                className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <IconComponent className="w-5 h-5 text-[#D41514] shrink-0" aria-hidden="true" />
                  <p className="text-base font-bold text-white">{layer.category}</p>
                </div>
                <p className="text-sm leading-relaxed text-[#969696]">{layer.items}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
