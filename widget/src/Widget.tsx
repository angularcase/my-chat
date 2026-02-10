import { useState, useEffect } from 'preact/hooks';
import { useWebSocket } from './hooks/useWebSocket';
import { ChatBubble } from './components/ChatBubble';
import { ChatWindow } from './components/ChatWindow';
import type { WidgetConfig } from './types';

const HOST_ID = 'my-chat-widget';

export function Widget({ widgetKey, serverUrl }: WidgetConfig) {
  const [open, setOpen] = useState(false);
  const { messages, sendMessage, connected } = useWebSocket(widgetKey, serverUrl);

  useEffect(() => {
    const host = document.getElementById(HOST_ID);
    if (!host) return;
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    host.addEventListener('mychat-open', onOpen);
    host.addEventListener('mychat-close', onClose);
    return () => {
      host.removeEventListener('mychat-open', onOpen);
      host.removeEventListener('mychat-close', onClose);
    };
  }, []);

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
