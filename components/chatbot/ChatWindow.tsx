"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import { useChatbotSession } from "./useChatbotSession";

type ChatStep =
  | { kind: "welcome" }
  | { kind: "services" }
  | { kind: "serviceDetail"; serviceId: string }
  | { kind: "leadForm"; serviceId: string };

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

export default function ChatWindow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<ChatStep>({ kind: "welcome" });
  const [leadData, setLeadData] = useState<LeadData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: "",
  });
  const [submission, setSubmission] = useState<LeadSubmission>({
    loading: false,
    success: false,
    error: false,
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { sessionId } = useChatbotSession();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [step, submission, scrollToBottom]);

  const handleServiceSelect = useCallback((serviceId: string) => {
    setStep({ kind: "serviceDetail", serviceId });
  }, []);

  const handleBackToServices = useCallback(() => {
    setStep({ kind: "services" });
  }, []);

  const handleContactMe = useCallback((serviceId: string) => {
    setStep({ kind: "leadForm", serviceId });
    setValidationErrors({});
  }, []);

  const handleInputChange = useCallback(
    (field: keyof LeadData, value: string) => {
      setLeadData((prev) => ({ ...prev, [field]: value }));
      if (validationErrors[field]) {
        setValidationErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    },
    [validationErrors]
  );

  const validateForm = useCallback((): boolean => {
    const errors: Record<string, string> = {};

    if (!leadData.name.trim() || leadData.name.trim().length < 2) {
      errors.name = "Please enter your name.";
    }

    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$|^\d{10,15}$/;
    if (!leadData.phone.trim() || !phoneRegex.test(leadData.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!leadData.email.trim() || !emailRegex.test(leadData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!leadData.requirement.trim() || leadData.requirement.trim().length < 5) {
      errors.requirement = "Please tell us briefly about your requirement.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }, [leadData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) return;

      setSubmission({ loading: true, success: false, error: false });

      try {
        const service =
          step.kind === "leadForm"
            ? step.serviceId
            : "";

        const utmParams = new URLSearchParams(window.location.search);

        const payload = {
          leadId: `L-${Date.now()}`,
          name: leadData.name.trim(),
          company: leadData.company.trim(),
          phone: leadData.phone.trim(),
          email: leadData.email.trim(),
          service: service,
          requirement: leadData.requirement.trim(),
          pageUrl: window.location.href,
          utmSource: utmParams.get("utm_source") || "",
          utmMedium: utmParams.get("utm_medium") || "",
          utmCampaign: utmParams.get("utm_campaign") || "",
          referrer: document.referrer || "",
          sessionId,
        };

        const response = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (data.success) {
          setSubmission({ loading: false, success: true, error: false });
        } else {
          setSubmission({ loading: false, success: false, error: true });
        }
      } catch {
        setSubmission({ loading: false, success: false, error: true });
      }
    },
    [leadData, step, sessionId, validateForm]
  );

  const handleTryAgain = useCallback(() => {
    setSubmission({ loading: false, success: false, error: false });
    setValidationErrors({});
  }, []);

  const handleReset = useCallback(() => {
    setStep({ kind: "welcome" });
    setLeadData({ name: "", company: "", phone: "", email: "", requirement: "" });
    setSubmission({ loading: false, success: false, error: false });
    setValidationErrors({});
  }, []);

  
  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex h-[620px] w-[380px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-blue-900/20 ring-1 ring-blue-100/50 sm:bottom-26 sm:right-6 sm:h-[380px] sm:w-[400px]"
      role="dialog"
      aria-label="SLV PROTECH Chat Assistant"
      aria-modal="false"
    >
      <ChatHeader onClose={onClose} onClear={handleReset} />

      <ChatMessages
        step={step}
        leadData={leadData}
        submission={submission}
        validationErrors={validationErrors}
        onServiceSelect={handleServiceSelect}
        onBackToServices={handleBackToServices}
        onContactMe={handleContactMe}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onTryAgain={handleTryAgain}
        messagesEndRef={messagesEndRef}
      />
    </div>
  );
}
