import { useState } from 'preact/hooks';
import { useWebSocket } from './hooks/useWebSocket';
import { ChatBubble } from './components/ChatBubble';
import { ChatWindow } from './components/ChatWindow';
import type { WidgetConfig } from './types';

export function Widget({ widgetKey, serverUrl }: WidgetConfig) {
  const [open, setOpen] = useState(false);
  const { messages, sendMessage, connected } = useWebSocket(widgetKey, serverUrl);

  return (
    <div class="mychat-container">
      {open ? (
        <ChatWindow
          messages={messages}
          onSend={sendMessage}
          onClose={() => setOpen(false)}
          connected={connected}
        />
      ) : (
        <ChatBubble onClick={() => setOpen(true)} />
      )}
    </div>
  );
}
