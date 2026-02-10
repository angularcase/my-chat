import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { io, Socket } from 'socket.io-client';
import type { ChatMessage } from '../types';
import { StorageService } from '../services/storage.service';

const KEY_SESSION_TOKEN = 'sessionToken';
const KEY_THREAD_ID = 'threadId';

function getOrCreateSessionToken(): string {
  return StorageService.getOrCreate(KEY_SESSION_TOKEN, () => crypto.randomUUID());
}

export interface UseWebSocketReturn {
  messages: ChatMessage[];
  sendMessage: (content: string) => void;
  connected: boolean;
  threadId: string | null;
}

export function useWebSocket(
  widgetKey: string,
  serverUrl: string,
): UseWebSocketReturn {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [connected, setConnected] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(
    () => StorageService.get(KEY_THREAD_ID),
  );
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const sessionToken = getOrCreateSessionToken();
    const socket = io(`${serverUrl}/widget`, {
      auth: { widgetKey, sessionToken },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 10000,
    });

    socketRef.current = socket;

    socket.on(
      'connected',
      (data: { threadId?: string; messages?: ChatMessage[] }) => {
        setConnected(true);

        if (data.threadId) {
          setThreadId(data.threadId);
          StorageService.set(KEY_THREAD_ID, data.threadId);
        }

        // Backend sends recent history when reconnecting to an existing thread.
        if (data.messages && data.messages.length > 0) {
          setMessages(data.messages);
        }
      },
    );

    socket.on('disconnect', () => {
      setConnected(false);
    });

    socket.on('message:confirmed', (msg: ChatMessage) => {
      setMessages((prev) => [
        ...prev,
        { ...msg, senderType: 'visitor' },
      ]);
    });

    socket.on('agent:message', (msg: ChatMessage) => {
      setMessages((prev) => [
        ...prev,
        { ...msg, senderType: 'agent' },
      ]);
    });

    socket.on('thread:new', (data: { threadId: string }) => {
      setThreadId(data.threadId);
      StorageService.set(KEY_THREAD_ID, data.threadId);
    });

    socket.on('thread:closed', () => {
      // Thread was closed – clear stored threadId so next message starts fresh.
      setThreadId(null);
      StorageService.remove(KEY_THREAD_ID);
    });

    socket.on('thread:assigned', () => {
      // could update UI to indicate agent joined
    });

    socket.on('error', (err: { message: string }) => {
      console.error('[my-chat widget]', err.message);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [widgetKey, serverUrl]);

  const sendMessage = useCallback((content: string) => {
    const trimmed = content.trim();
    if (!trimmed || !socketRef.current) return;
    socketRef.current.emit('visitor:send_message', { content: trimmed });
  }, []);

  return { messages, sendMessage, connected, threadId };
}
