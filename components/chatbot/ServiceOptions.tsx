"use client";

import { chatbotServices } from "@/lib/chatbot/services";

interface ServiceOptionsProps {
  onSelect: (serviceId: string) => void;
}

export default function ServiceOptions({ onSelect }: ServiceOptionsProps) {
  return (
    <div className="space-y-2">
      {chatbotServices.map((service) => (
        <button
          key={service.id}
          onClick={() => onSelect(service.id)}
          className="flex w-full items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3 text-left transition hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={`Select ${service.name}`}
        >
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 text-base">
            {service.icon}
          </span>
          <span className="text-sm font-semibold text-slate-500">
            {service.name}
          </span>
        </button>
      ))}
    </div>
  );
}
