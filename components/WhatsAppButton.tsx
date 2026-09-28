"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SLV PROTECH on WhatsApp"
      className="group fixed bottom-[648px] right-5 z-[55] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      {/* WhatsApp Logo */}
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 sm:h-10 sm:w-10"
        aria-hidden="true"
      >
        {/* WhatsApp speech bubble */}
        <path
          fill="white"
          d="M16.02 3.2C8.95 3.2 3.22 8.94 3.22 16c0 2.25.59 4.45 1.7 6.38L3.1 28.8l6.58-1.72a12.73 12.73 0 0 0 6.34 1.67h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.04a12.73 12.73 0 0 0-9.05-3.71Zm0 23.42h-.01a10.62 10.62 0 0 1-5.4-1.47l-.39-.23-3.9 1.02 1.04-3.79-.25-.4a10.62 10.62 0 0 1-1.63-5.68c0-5.88 4.79-10.67 10.68-10.67 2.85 0 5.53 1.11 7.54 3.12a10.59 10.59 0 0 1 3.13 7.56c0 5.89-4.8 10.68-10.68 10.68Z"
        />

        {/* WhatsApp phone */}
        <path
          fill="white"
          d="M19.11 17.2c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.19.29-.75.97-.92 1.16-.17.19-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.57-.9-2.15-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.3-1 1-1 2.43s1.03 2.82 1.17 3.01c.15.2 2.02 3.08 4.89 4.32.68.3 1.21.48 1.62.61.68.22 1.3.19 1.79.12.55-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.56-.35Z"
        />
      </svg>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
