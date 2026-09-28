"use client";

import { chatbotServices } from "@/lib/chatbot/services";
import LeadForm from "./LeadForm";
import ServiceOptions from "./ServiceOptions";

interface ValidationErrors {
  name?: string;
  phone?: string;
  email?: string;
  requirement?: string;
}

interface LeadData {
  name: string;
  company: string;
  phone: string;
  email: string;
  requirement: string;
}

interface LeadSubmission {
  loading: boolean;
  success: boolean;
  error: boolean;
}

interface ChatStep {
  kind: "welcome" | "services" | "serviceDetail" | "leadForm";
  serviceId?: string;
}

interface ChatMessagesProps {
  step: ChatStep;
  leadData: LeadData;
  submission: LeadSubmission;
  validationErrors: ValidationErrors;
  onServiceSelect: (serviceId: string) => void;
  onBackToServices: () => void;
  onContactMe: (serviceId: string) => void;
  onInputChange: (field: keyof LeadData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onTryAgain: () => void;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export default function ChatMessages({
  step,
  leadData,
  submission,
  validationErrors,
  onServiceSelect,
  onBackToServices,
  onContactMe,
  onInputChange,
  onSubmit,
  onTryAgain,
  messagesEndRef,
}: ChatMessagesProps) {
  const service =
    step.kind === "serviceDetail" || step.kind === "leadForm"
      ? chatbotServices.find((s) => s.id === step.serviceId)
      : null;

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-slate-50/70">
      {step.kind === "welcome" && (
        <>
          <div className="flex items-start gap-2">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold shadow-sm">
              🤖
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                👋 Hello!
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Thank you for visiting us. We&apos;re happy to help you
                find the right solution for your business.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                How can we help you today?
              </p>
            </div>
          </div>

          <ServiceOptions onSelect={onServiceSelect} />
        </>
      )}

      {step.kind === "services" && (
        <>
          <div className="flex items-start gap-2">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold shadow-sm">
              🤖
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
              <p className="text-sm text-slate-600">
                How can we help you today?
              </p>
            </div>
          </div>

          <ServiceOptions onSelect={onServiceSelect} />
        </>
      )}

      {step.kind === "serviceDetail" && service && (
        <>
          <div className="flex items-start gap-2">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold shadow-sm">
              🤖
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                {service.icon} {service.name}
              </p>
              <p className="mt-1 text-sm text-slate-600">{service.description}</p>
              <p className="mt-2 text-sm text-slate-600">
                Would you like to discuss your{" "}
                {service.name.toLowerCase()} requirements with our team?
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onContactMe(service.id)}
              className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200/60 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Yes, Contact Me
            </button>
            <button
              onClick={onBackToServices}
              className="rounded-xl border border-slate-200 bg-white py-2.5 px-4 text-sm font-medium text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
            >
              ← Back
            </button>
          </div>
        </>
      )}

      {step.kind === "leadForm" && service && (
        <>
          <div className="flex items-start gap-2">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold shadow-sm">
              🤖
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                Great! We&apos;d be happy to help. 😊
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Please share a few details so our team can understand your
                requirement and get in touch with you.
              </p>
              <div className="mt-2 flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2">
                <span className="text-sm">{service.icon}</span>
                <span className="text-xs font-semibold text-blue-700">
                  Selected: {service.name}
                </span>
              </div>
            </div>
          </div>

          <LeadForm
            leadData={leadData}
            validationErrors={validationErrors}
            submission={submission}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
          />
        </>
      )}

      {submission.success && (
        <div className="flex items-start gap-2">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold shadow-sm">
            ✅
          </div>
          <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
            <p className="text-sm font-semibold text-slate-800">
              ✅ Thank you!
            </p>
            <p className="mt-1 text-sm text-slate-600">
              We have received your enquiry for{" "}
              <strong>{service?.name || ""}</strong>.
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Our team will contact you for further details.
            </p>
            <p className="mt-1 text-sm text-slate-600">
              We appreciate your interest! 😊
            </p>
          </div>
        </div>
      )}

      {submission.error && (
        <>
          <div className="flex items-start gap-2">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-sm font-bold shadow-sm">
              ⚠️
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                Sorry, we couldn&apos;t submit your enquiry right now.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Please try again in a moment.
              </p>
            </div>
          </div>
          <button
            onClick={onTryAgain}
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200/60 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Try Again
          </button>
        </>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
