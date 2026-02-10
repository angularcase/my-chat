import type { ChatMessage } from '../types';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

interface Props {
  messages: ChatMessage[];
  onSend: (content: string) => void;
  onClose: () => void;
  connected: boolean;
}

export function ChatWindow({ messages, onSend, onClose, connected }: Props) {
  return (
    <div class="mychat-window">
      <div class="mychat-header">
        <span class="mychat-title">Chat</span>
        <span class={`mychat-status ${connected ? 'mychat-status--online' : ''}`}>
          {connected ? 'Online' : 'Connecting...'}
        </span>
        <button class="mychat-close-btn" onClick={onClose} aria-label="Close chat">
          &#10005;
        </button>
      </div>
      <MessageList messages={messages} />
      <MessageInput onSend={onSend} />
    </div>
  );
}
