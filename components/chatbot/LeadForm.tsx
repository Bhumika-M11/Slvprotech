"use client";

import { useChatbotSession } from "./useChatbotSession";

interface LeadFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  requirement: string;
}

interface ValidationErrors {
  name?: string;
  phone?: string;
  email?: string;
  requirement?: string;
}

interface LeadSubmission {
  loading: boolean;
  success: boolean;
  error: boolean;
}

interface LeadFormProps {
  leadData: LeadFormData;
  validationErrors: ValidationErrors;
  submission: LeadSubmission;
  onInputChange: (field: keyof LeadFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function LeadForm({
  leadData,
  validationErrors,
  submission,
  onInputChange,
  onSubmit,
}: LeadFormProps) {
  const { sessionId } = useChatbotSession();

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label
          htmlFor="lead-name"
          className="mb-1 block text-xs font-semibold text-slate-700"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-name"
          type="text"
          value={leadData.name}
          onChange={(e) => onInputChange("name", e.target.value)}
          placeholder="Your full name"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          disabled={submission.loading}
          aria-required="true"
          aria-invalid={!!validationErrors.name}
          aria-describedby={validationErrors.name ? "name-error" : undefined}
        />
        {validationErrors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-500">
            {validationErrors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="lead-company"
          className="mb-1 block text-xs font-semibold text-slate-700"
        >
          Company / Business Name{" "}
          <span className="text-slate-400">(optional)</span>
        </label>
        <input
          id="lead-company"
          type="text"
          value={leadData.company}
          onChange={(e) => onInputChange("company", e.target.value)}
          placeholder="Your company name"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          disabled={submission.loading}
        />
      </div>

      <div>
        <label
          htmlFor="lead-phone"
          className="mb-1 block text-xs font-semibold text-slate-700"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-phone"
          type="tel"
          value={leadData.phone}
          onChange={(e) => onInputChange("phone", e.target.value)}
          placeholder="+91 XXXXXXXXXX"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          disabled={submission.loading}
          aria-required="true"
          aria-invalid={!!validationErrors.phone}
          aria-describedby={validationErrors.phone ? "phone-error" : undefined}
        />
        {validationErrors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-500">
            {validationErrors.phone}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="lead-email"
          className="mb-1 block text-xs font-semibold text-slate-700"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-email"
          type="email"
          value={leadData.email}
          onChange={(e) => onInputChange("email", e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          disabled={submission.loading}
          aria-required="true"
          aria-invalid={!!validationErrors.email}
          aria-describedby={validationErrors.email ? "email-error" : undefined}
        />
        {validationErrors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-500">
            {validationErrors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="lead-requirement"
          className="mb-1 block text-xs font-semibold text-slate-700"
        >
          Your Requirement <span className="text-red-500">*</span>
        </label>
        <textarea
          id="lead-requirement"
          value={leadData.requirement}
          onChange={(e) => onInputChange("requirement", e.target.value)}
          placeholder="Briefly describe what you need..."
          rows={3}
          className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          disabled={submission.loading}
          aria-required="true"
          aria-invalid={!!validationErrors.requirement}
          aria-describedby={
            validationErrors.requirement ? "requirement-error" : undefined
          }
        />
        {validationErrors.requirement && (
          <p id="requirement-error" className="mt-1 text-xs text-red-500">
            {validationErrors.requirement}
          </p>
        )}
      </div>

      <input type="hidden" name="sessionId" value={sessionId} />

      <button
        type="submit"
        disabled={submission.loading}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200/60 transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {submission.loading ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
