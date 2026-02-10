import { useEffect, useRef } from 'preact/hooks';
import type { ChatMessage } from '../types';

interface Props {
  messages: ChatMessage[];
}

export function MessageList({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  return (
    <div class="mychat-messages">
      {messages.length === 0 && (
        <div class="mychat-empty">Send a message to start the conversation.</div>
      )}
      {messages.map((msg) => (
        <div
          key={msg.id}
          class={`mychat-msg mychat-msg--${msg.senderType}`}
        >
          <span class="mychat-msg-content">{msg.content}</span>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
