export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface ChatSpace {
  id: string;
  name: string;
  widgetKey: string;
  createdAt: string;
}

export type ThreadStatus = 'unassigned' | 'active' | 'closed' | 'expired';

export interface Thread {
  id: string;
  chatSpaceId: string;
  visitorId: string;
  assignedAgentId: string | null;
  status: ThreadStatus;
  lastActivityAt: string;
  createdAt: string;
  updatedAt: string;
  visitor?: { displayName?: string; email?: string };
}

export type MessageSenderType = 'visitor' | 'agent' | 'system';

export interface Message {
  id: string;
  threadId: string;
  senderType: MessageSenderType;
  senderId: string | null;
  content: string;
  createdAt: string;
}

export interface MessagesResponse {
  items: Message[];
  nextCursor: string | null;
}
