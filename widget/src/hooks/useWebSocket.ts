import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { io, Socket } from 'socket.io-client';
import type { ChatMessage } from '../types';

const SESSION_TOKEN_KEY = 'mychat_session_token';

function getOrCreateSessionToken(): string {
  let token = localStorage.getItem(SESSION_TOKEN_KEY);
  if (!token) {
    token = crypto.randomUUID();
    localStorage.setItem(SESSION_TOKEN_KEY, token);
  }
  return token;
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
  const [threadId, setThreadId] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const sessionToken = getOrCreateSessionToken();
    const socket = io(`${serverUrl}/widget`, {
      auth: { widgetKey, sessionToken },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socketRef.current = socket;

    socket.on('connected', (data: { threadId?: string }) => {
      setConnected(true);
      if (data.threadId) {
        setThreadId(data.threadId);
      }
    });

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
