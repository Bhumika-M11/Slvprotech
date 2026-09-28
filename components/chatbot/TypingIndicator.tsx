export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:0ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:150ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:300ms]" />
      </div>
      <span className="text-xs text-slate-400">typing...</span>
    </div>
  );
}
