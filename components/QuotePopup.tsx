"use client";

import { useEffect, useState } from "react";

const POPUP_DELAY = 15000;

export default function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-y-auto bg-slate-900/60 px-4 py-5 backdrop-blur-sm">
      <div className="relative my-auto w-full max-w-md overflow-hidden rounded-[30px] bg-white px-6 py-6 shadow-2xl sm:px-7 sm:py-7">
        {/* Decorative Circle */}
        <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-100/70" />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-slate-400 shadow-sm transition-all duration-200 hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 3L10 14"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 3L14 21L10 14L3 10L21 3Z"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                Get In Touch
              </p>

              <h2 className="mt-0.5 text-2xl font-bold tracking-tight text-slate-900">
                Request a Quote
              </h2>
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Tell us about your requirement and our team will get back to you.
          </p>
        </div>

        {/* Form */}
        <form className="relative z-10 mt-5 space-y-3.5">
          {/* Name */}
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="#64748B"
                  strokeWidth="1.8"
                />
                <path
                  d="M4 21C4.8 16.9 7.4 15 12 15C16.6 15 19.2 16.9 20 21"
                  stroke="#64748B"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-full border border-blue-100 bg-blue-50/40 py-3 pl-12 pr-5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Mobile */}
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.5 3.5L9 3L11 8L8.5 10C9.6 12.4 11.6 14.4 14 15.5L16 13L21 15L20.5 17.5C20.2 19.2 18.7 20.2 17.1 19.8C9.9 18.1 5.9 14.1 4.2 6.9C3.8 5.3 4.8 3.8 6.5 3.5Z"
                  stroke="#64748B"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full rounded-full border border-blue-100 bg-blue-50/40 py-3 pl-12 pr-5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="#64748B"
                  strokeWidth="1.8"
                />
                <path
                  d="M4 7L12 13L20 7"
                  stroke="#64748B"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-full border border-blue-100 bg-blue-50/40 py-3 pl-12 pr-5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Requirement */}
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 11.5C20 15.1 16.4 18 12 18C10.9 18 9.8 17.8 8.9 17.5L4 20L5.4 16C4.5 14.8 4 13.2 4 11.5C4 7.9 7.6 5 12 5C16.4 5 20 7.9 20 11.5Z"
                  stroke="#64748B"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <textarea
              placeholder="Tell us about your requirement"
              rows={3}
              className="w-full resize-none rounded-[22px] border border-blue-100 bg-blue-50/40 py-3.5 pl-12 pr-5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl"
          >
            Submit Enquiry
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Privacy */}
          <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <rect
                x="5"
                y="10"
                width="14"
                height="10"
                rx="2"
                stroke="#64748B"
                strokeWidth="1.7"
              />
              <path
                d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10"
                stroke="#64748B"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>

            <span>
              We respect your privacy. Your information is safe with us.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
