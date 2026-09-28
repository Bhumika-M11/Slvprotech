"use client";

import { useState, useCallback } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button
        onClick={toggle}
        aria-label="Open chatbot"
        className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 shadow-lg shadow-blue-200/60 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-indigo-200/40 sm:bottom-25 sm:right-6 sm:h-16 sm:w-16"
      >
        <span className="text-white text-xl" aria-hidden="true">
          🤖
        </span>
        <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 ring-2 ring-white" />
        <style jsx global>{`
          @keyframes pulse-ring {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            100% {
              transform: scale(1.8);
              opacity: 0;
            }
          }
        `}</style>
      </button>

      {isOpen && <ChatWindow onClose={close} />}
    </>
  );
}
