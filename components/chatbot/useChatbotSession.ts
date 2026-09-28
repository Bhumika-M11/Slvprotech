import { useState } from "react";

export function useChatbotSession() {
  const [sessionId] = useState<string>(() => {
    const stored = localStorage.getItem("chatbot_session_id");
    if (stored) return stored;
    const newId = `chat_${Math.random().toString(36).substring(2, 10)}`;
    localStorage.setItem("chatbot_session_id", newId);
    return newId;
  });

  return { sessionId };
}
