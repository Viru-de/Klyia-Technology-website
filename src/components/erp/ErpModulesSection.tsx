import React, {useState} from 'react';
import {Check, Database, Layers} from 'lucide-react';
import {ERP_MODULES} from '../../data/index.ts';
import type {ErpModuleArchitecture} from '../../data/types.ts';

type ModuleFilter = 'all' | ErpModuleArchitecture;

const FILTER_OPTIONS: {id: ModuleFilter; label: string}[] = [
  {id: 'all', label: 'All 16 Modules'},
  {id: 'Standalone or Integrated', label: 'Standalone Capable'},
  {id: 'Unified Core Module', label: 'Unified Core'},
  {id: 'Automation & Extension', label: 'Automation & Extensions'},
];

export function ErpModulesSection() {
  const [filter, setFilter] = useState<ModuleFilter>('all');

  const visibleModules =
    filter === 'all'
      ? ERP_MODULES
      : ERP_MODULES.filter((item) => item.architecture === filter);

  return (
    <section
      id="erp-modules"
      aria-labelledby="erp-modules-heading"
      className="bg-slate-50 py-14 sm:py-16 border-b border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span className="h-px w-5 bg-blue-700" aria-hidden="true" />
              <span>Modular Building Blocks</span>
            </p>
            <h2
              id="erp-modules-heading"
              className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-slate-900"
            >
              16 Powerful ERP Modules — Deploy Standalone or Unified
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Launch only the modules your operation needs today, or connect every department inside one unified relational ERP database without rewriting core screens later.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTER_OPTIONS.map((opt) => {
              const active = filter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFilter(opt.id)}
                  className={`rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'bg-blue-700 text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-700'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Standalone vs Integrated Architecture Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 space-y-2.5">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Layers className="w-5 h-5 text-blue-700 shrink-0" aria-hidden="true" />
              <h3>Option 1: Phased Standalone Rollout</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Modules marked <strong>Standalone Capable</strong>—such as CRM &amp; Lead Management, Inventory Management, Finance &amp; Accounting, HRM &amp; Payroll, POS Billing, Project Management, or Customer Support Ticketing—can run independently as focused Phase-1 business tools.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-5 sm:p-6 space-y-2.5">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Database className="w-5 h-5 text-blue-700 shrink-0" aria-hidden="true" />
              <h3>Option 2: Unified Single-Database ERP</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Combine core modules (Purchase, Sales, Reports, Multi-Branch, Role-Based Access) and extensions (Workflow Automation, WhatsApp Integration, E-commerce Sync, Document Storage) into one synchronized ledger where every invoice, dispatch, and stock movement updates company accounts automatically.
            </p>
          </div>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleModules.map((mod) => (
            <article
              key={mod.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 space-y-4 hover:border-blue-400 transition-colors shadow-2xs"
            >
              <div className="space-y-2.5">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-700">
                  {mod.architecture}
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{mod.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{mod.summary}</p>
              </div>

              <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                {mod.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
