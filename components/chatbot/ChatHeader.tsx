"use client";

export default function ChatHeader({ onClose, onClear }: { onClose: () => void; onClear: () => void }) {
  return (
    <header className="flex items-center justify-between border-b border-blue-100 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-5 py-3">
      <div className="flex items-center gap-2.5">
        <span className="text-lg" aria-hidden="true">
          🤖
        </span>
        <div>
          <h2 className="text-sm font-bold text-white">SLV PROTECH Assistant</h2>
          <p className="flex items-center gap-1 text-[11px] text-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Online
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onClear}
          aria-label="Clear chat"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          title="Clear chat"
        >
          <span className="text-lg font-bold">🗑</span>
        </button>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <span className="text-lg font-bold">×</span>
        </button>
      </div>
    </header>
  );
}
