import React, {useEffect, useId, useState} from 'react';
import {AlertCircle, CheckCircle2, Send} from 'lucide-react';
import {
  ERP_CONSULTATION_INDUSTRY_OPTIONS,
  ERP_CONSULTATION_SOLUTION_OPTIONS,
  ERP_MODULES,
} from '../../data/index.ts';

interface ErpConsultationFormProps {
  sourcePage: string;
  preselectedSolution?: string;
  preselectedIndustry?: string;
  heading?: string;
  subheading?: string;
}

const USER_RANGE_OPTIONS = [
  '1 – 5 Users',
  '6 – 15 Users',
  '16 – 40 Users',
  '41 – 100 Users',
  '100+ Users',
];

const DEPLOYMENT_OPTIONS = ['Cloud', 'On-Premise', 'Not Sure'] as const;

export function ErpConsultationForm({
  sourcePage,
  preselectedSolution = 'Manufacturing & Industrial ERP',
  preselectedIndustry = 'Manufacturing & Steel',
  heading = 'Request Free ERP Consultation & Custom Architecture Demo',
  subheading = 'Share your operational workflow, preferred deployment, and modules required. Your enquiry saves directly to our engineering desk for tailored scoping.',
}: ErpConsultationFormProps) {
  const formId = useId();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState(preselectedIndustry);
  const [erpSolution, setErpSolution] = useState(preselectedSolution);
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'Inventory Management',
    'Finance & Accounting',
  ]);
  const [userCount, setUserCount] = useState('6 – 15 Users');
  const [deployment, setDeployment] = useState<(typeof DEPLOYMENT_OPTIONS)[number]>('Cloud');
  const [description, setDescription] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    emailDelivered: boolean;
    statusMessage: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedSolution) {
      setErpSolution(preselectedSolution);
    }
  }, [preselectedSolution]);

  useEffect(() => {
    if (preselectedIndustry) {
      setIndustry(preselectedIndustry);
    }
  }, [preselectedIndustry]);

  const toggleModule = (modName: string) => {
    setSelectedModules((prev) =>
      prev.includes(modName) ? prev.filter((item) => item !== modName) : [...prev, modName],
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMsg(null);

    if (name.trim().length < 2) {
      setErrorMsg('Please enter your full name (at least 2 characters).');
      return;
    }
    if (company.trim().length < 2) {
      setErrorMsg('Please enter your company or business name.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }
    if (description.trim().length < 10) {
      setErrorMsg('Please describe your workflow or project requirement (at least 10 characters).');
      return;
    }
    if (!consent) {
      setErrorMsg('Please confirm your privacy consent before submitting.');
      return;
    }

    const formattedMessage = [
      `ERP Solution Required: ${erpSolution}`,
      `Industry: ${industry}`,
      `Number of Users: ${userCount}`,
      `Preferred Deployment: ${deployment}`,
      `Modules Required (${selectedModules.length}): ${
        selectedModules.length > 0 ? selectedModules.join(', ') : 'To be scoped during consultation'
      }`,
      '',
      'Project / Workflow Description:',
      description.trim(),
    ].join('\n');

    setSubmitting(true);
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          type: 'quote',
          name: name.trim(),
          company: company.trim(),
          phone: phone.trim(),
          email: email.trim(),
          industry,
          service: erpSolution,
          subject: `ERP Consultation Request — ${erpSolution}`,
          message: formattedMessage,
          sourcePage,
          sourceSection: 'ERP Consultation Form',
          consent,
          website_url: honeypot,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        referenceId?: string;
        emailDelivered?: boolean;
        statusMessage?: string;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setErrorMsg(data.error || 'Unable to submit your ERP consultation request. Please check your details.');
        return;
      }

      setSuccessData({
        referenceId: data.referenceId || 'KLY-ERP',
        emailDelivered: data.emailDelivered !== false,
        statusMessage:
          data.statusMessage ||
          'Your ERP consultation enquiry has been received successfully. Our team will contact you shortly.',
      });
      setDescription('');
      setConsent(false);
    } catch {
      setErrorMsg('Network error submitting your enquiry. Please try again or reach us via WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8 space-y-4 shadow-sm"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-slate-900">
              ERP Consultation Request Saved
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">{successData.statusMessage}</p>
            <p className="text-xs font-mono font-semibold text-emerald-800 pt-1">
              Reference ID: {successData.referenceId}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setSuccessData(null)}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          Submit Another ERP Requirement
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_16px_44px_-18px_rgba(15,23,42,0.12)] space-y-6"
    >
      <div className="space-y-2 border-b border-slate-200 pb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
          Direct Engineering Consultation
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-slate-900">
          {heading}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">{subheading}</p>
      </div>

      {errorMsg && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-900"
        >
          <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Spam Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Contact & Company Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor={`${formId}-name`} className="block text-xs font-semibold text-slate-800">
            Full Name <span className="text-[#D41514]">*</span>
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor={`${formId}-company`} className="block text-xs font-semibold text-slate-800">
            Company Name <span className="text-[#D41514]">*</span>
          </label>
          <input
            id={`${formId}-company`}
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Organization or firm name"
            className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor={`${formId}-phone`} className="block text-xs font-semibold text-slate-800">
            Phone Number <span className="text-[#D41514]">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98XXXXXXXX"
            className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor={`${formId}-email`} className="block text-xs font-semibold text-slate-800">
            Business Email <span className="text-[#D41514]">*</span>
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      {/* Industry, ERP Solution, Users & Deployment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label htmlFor={`${formId}-industry`} className="block text-xs font-semibold text-slate-800">
            Industry
          </label>
          <select
            id={`${formId}-industry`}
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none"
          >
            {ERP_CONSULTATION_INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor={`${formId}-solution`} className="block text-xs font-semibold text-slate-800">
            ERP Solution Required
          </label>
          <select
            id={`${formId}-solution`}
            value={erpSolution}
            onChange={(e) => setErpSolution(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none"
          >
            {ERP_CONSULTATION_SOLUTION_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
          <label htmlFor={`${formId}-users`} className="block text-xs font-semibold text-slate-800">
            Number of Users
          </label>
          <select
            id={`${formId}-users`}
            value={userCount}
            onChange={(e) => setUserCount(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none"
          >
            {USER_RANGE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Preferred Deployment */}
      <div className="space-y-2">
        <span className="block text-xs font-semibold text-slate-800">
          Preferred Deployment
        </span>
        <div className="grid grid-cols-3 gap-3 max-w-md">
          {DEPLOYMENT_OPTIONS.map((option) => {
            const active = deployment === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setDeployment(option)}
                aria-pressed={active}
                className={`rounded-lg border px-3 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  active
                    ? 'border-blue-700 bg-blue-700 text-white'
                    : 'border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Multi-Select Modules Required */}
      <div className="space-y-2.5">
        <span className="block text-xs font-semibold text-slate-800">
          Modules Required (Select all applicable)
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {ERP_MODULES.map((mod) => {
            const checked = selectedModules.includes(mod.name);
            return (
              <label
                key={mod.id}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium cursor-pointer transition-colors ${
                  checked
                    ? 'border-blue-600 bg-blue-50 text-blue-950'
                    : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:border-slate-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleModule(mod.name)}
                  className="h-3.5 w-3.5 rounded accent-blue-700 shrink-0"
                />
                <span className="leading-snug">{mod.name}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-1.5">
        <label htmlFor={`${formId}-description`} className="block text-xs font-semibold text-slate-800">
          Project &amp; Workflow Description <span className="text-[#D41514]">*</span>
        </label>
        <textarea
          id={`${formId}-description`}
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your current workflow (branches, stock units, billing volume, approvals, or existing data you want migrated)..."
          className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none"
        />
      </div>

      {/* Privacy Consent */}
      <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded accent-blue-700 shrink-0"
        />
        <span className="leading-relaxed">
          I agree that Klyia Technology may store and review these details solely to prepare a relevant ERP consultation and reply by phone, WhatsApp, or email.
        </span>
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#D41514] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#E31E1D] disabled:opacity-60 transition-colors cursor-pointer"
        >
          <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>{submitting ? 'Submitting ERP Request...' : 'Request Free ERP Consultation'}</span>
        </button>
        <span className="text-xs text-slate-500">
          Saved in system ledger &amp; dispatched directly to klyiatechnology@gmail.com
        </span>
      </div>
    </form>
  );
}
