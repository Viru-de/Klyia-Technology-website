import React, {useState} from 'react';
import {
  ArrowUpRight,
  Boxes,
  Building2,
  ClipboardCheck,
  Factory,
  FileSpreadsheet,
  SunMedium,
  Warehouse,
} from 'lucide-react';
import {Link} from '../../lib/router.tsx';

type ConsoleTabId = 'manufacturing' | 'solar' | 'mandi' | 'finance';

interface ConsoleTabSpec {
  id: ConsoleTabId;
  label: string;
  moduleTitle: string;
  erpHref: string;
  erpLabel: string;
  icon: React.ComponentType<{className?: string; 'aria-hidden'?: boolean}>;
  summaryCells: {label: string; value: string; note: string}[];
  columns: string[];
  rows: string[][];
}

const CONSOLE_TABS: ConsoleTabSpec[] = [
  {
    id: 'manufacturing',
    label: 'Manufacturing & BOM',
    moduleTitle: 'Shop-Floor Work Orders & Dual-Unit Material Control',
    erpHref: '/erp/manufacturing-industrial-erp/',
    erpLabel: 'Explore Manufacturing ERP',
    icon: Factory,
    summaryCells: [
      {label: 'Active Work Orders', value: '14 Batches', note: 'Tracked across Rolling & QC'},
      {label: 'Raw Material Stock', value: '142.80 MT', note: 'Dual Weight + Bundle Ledger'},
      {label: 'Dispatch Ready Lots', value: '06 Lots', note: 'Weighbridge & Challan Linked'},
    ],
    columns: ['Batch Code', 'Stage', 'Material Input', 'Output / Yield', 'Status'],
    rows: [
      ['WO-MIL-204', 'Finishing Mill', '12.50 MT Billet', '12.15 MT (97.2%)', 'QC Passed'],
      ['WO-FAB-189', 'Cut & Bend', '4.20 MT Plates', '380 Units', 'In Progress'],
      ['WO-MIL-207', 'Raw Allocation', '8.00 MT Coil', 'Scheduled Shift-2', 'BOM Reserved'],
    ],
  },
  {
    id: 'solar',
    label: 'Solar EPC Projects',
    moduleTitle: 'Site Survey → BOM Serials → DISCOM & AMC Pipeline',
    erpHref: '/erp/solar-erp-epc-software/',
    erpLabel: 'Explore Solar ERP & EPC',
    icon: SunMedium,
    summaryCells: [
      {label: 'Survey & Sizing Queue', value: '19 Sites', note: 'Rooftop & C&I Proposals'},
      {label: 'Serials Allocated', value: '412 Modules', note: 'Warranty-Linked Inventory'},
      {label: 'DISCOM Net Metering', value: '11 Files', note: 'Subsidy & Commissioning Logs'},
    ],
    columns: ['Project ID', 'Capacity', 'Site Stage', 'Serial Allocation', 'Next Action'],
    rows: [
      ['SOL-RES-412', '5 kW On-Grid', 'Installation Complete', '9 Panels + 1 Inv.', 'DISCOM Inspection'],
      ['SOL-IND-088', '120 kW C&I', 'Structure & DC Cabling', '216 Modules Issued', 'Earthing Sign-Off'],
      ['SOL-RES-419', '8 kW Hybrid', 'Site Survey Logged', 'Pending Approval', 'Generate BOM'],
    ],
  },
  {
    id: 'mandi',
    label: 'Mandi & Wholesale',
    moduleTitle: 'High-Speed Lot Auction, Farmer Patti & Crate Ledger',
    erpHref: '/erp/fruit-mandi-trading-erp/',
    erpLabel: 'Explore Fruit Mandi ERP',
    icon: Warehouse,
    summaryCells: [
      {label: 'Morning Lot Splits', value: '86 Entries', note: 'Keyboard-First Auction Grid'},
      {label: 'Crate Circulation', value: '1,240 Crates', note: 'Printed on Every Buyer Slip'},
      {label: 'Farmer Patti Sheets', value: '24 Settled', note: 'Commission & Hammali Auto'},
    ],
    columns: ['Party / Farmer', 'Lot Commodity', 'Net Weight', 'Crates Out/In', 'Settlement'],
    rows: [
      ['Lot #A-104 (Grower)', 'Nashik Pomegranate', '1,840 kg', '+92 Crates Inward', 'Patti Generated'],
      ['Buyer — City Mart', 'Apple + Citrus Split', '310 kg', '+16 / -12 Crates', 'Cash + Credit'],
      ['Warehouse — Bay 2', 'Cold Store Lot Transfer', '2,400 kg', '480 Boxes Sealed', 'Stock Verified'],
    ],
  },
  {
    id: 'finance',
    label: 'GST & Multi-Branch',
    moduleTitle: 'Unified Accounting, Branch Stock & Approval Governance',
    erpHref: '/erp/accounting-billing-erp/',
    erpLabel: 'Explore Accounting ERP',
    icon: FileSpreadsheet,
    summaryCells: [
      {label: 'Branch Warehouses', value: '04 Locations', note: 'Isolated Role Permissions'},
      {label: 'Credit Limit Alerts', value: '03 Held', note: 'Overdue Threshold Active'},
      {label: 'GST Register Status', value: 'Synchronized', note: 'Sales, Purchase & E-Way'},
    ],
    columns: ['Document Ref', 'Branch', 'Ledger Entry', 'Approval Rule', 'Accounting State'],
    rows: [
      ['INV-BHL-882', 'Bhilai Main', 'GST B2B Tax Invoice', 'Credit Limit Checked', 'Posted to Ledger'],
      ['TRN-RPR-114', 'Raipur Hub', 'Inter-Godown Transfer', 'Store Manager Approved', 'Stock Balanced'],
      ['PO-VND-309', 'Central Purchase', 'Vendor GRN Match', 'Director Sign-Off', 'Payable Scheduled'],
    ],
  },
];

export function ErpDashboardShowcase() {
  const [activeTabId, setActiveTabId] = useState<ConsoleTabId>('manufacturing');
  const activeTab = CONSOLE_TABS.find((t) => t.id === activeTabId) ?? CONSOLE_TABS[0];
  const ActiveIcon = activeTab.icon;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.16)] overflow-hidden">
      {/* Top Window Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Klyia Unified ERP Workspace — Interactive Workflow Preview
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700">
          <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Role-Based Multi-Department Architecture</span>
        </span>
      </div>

      {/* Tab Selector */}
      <div
        role="tablist"
        aria-label="ERP Workflow Modules Preview"
        className="flex flex-wrap gap-2 border-b border-slate-200 bg-white px-5 py-3"
      >
        {CONSOLE_TABS.map((tab) => {
          const Icon = tab.icon;
          const isSelected = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTabId(tab.id)}
              className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" aria-hidden={true} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Console Body */}
      <div className="p-5 sm:p-6 space-y-5 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
              <ActiveIcon className="w-5 h-5" aria-hidden={true} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                Sample Screen Architecture
              </p>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {activeTab.moduleTitle}
              </h3>
            </div>
          </div>

          <Link
            href={activeTab.erpHref}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-900 whitespace-nowrap shrink-0"
          >
            <span>{activeTab.erpLabel}</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {activeTab.summaryCells.map((cell) => (
            <div
              key={cell.label}
              className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 space-y-1"
            >
              <p className="text-xs font-medium text-slate-600">{cell.label}</p>
              <p className="text-lg font-bold text-slate-900 tabular-nums">{cell.value}</p>
              <p className="text-xs text-slate-500">{cell.note}</p>
            </div>
          ))}
        </div>

        {/* Clean Tabular Data Sample */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700">
              <tr>
                {activeTab.columns.map((col) => (
                  <th key={col} className="px-4 py-2.5 font-semibold whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {activeTab.rows.map((row) => (
                <tr key={row[0]} className="hover:bg-blue-50/40 transition-colors">
                  {row.map((val, idx) => (
                    <td
                      key={`${row[0]}-${idx}`}
                      className={`px-4 py-2.5 whitespace-nowrap ${
                        idx === 0
                          ? 'font-mono text-xs font-semibold text-blue-800'
                          : idx === row.length - 1
                            ? 'font-medium text-slate-900'
                            : 'text-slate-700'
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Boxes className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" />
            <span>Illustrative workflow screen — labels, approvals &amp; reports customized per client.</span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
            <ClipboardCheck className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" />
            <span>Web + Mobile Responsive</span>
          </span>
        </div>
      </div>
    </div>
  );
}
