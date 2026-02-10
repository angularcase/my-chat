export interface ChatMessage {
  id: string;
  content: string;
  senderType: 'visitor' | 'agent' | 'system';
  createdAt: string;
}

export interface WidgetConfig {
  widgetKey: string;
  serverUrl: string;
}

export interface MyChatInitConfig {
  widgetKey: string;
  serverUrl?: string;
}

export type MyChatStub = ((cmd: string, ...args: unknown[]) => void) & {
  _q: unknown[];
};

export interface MyChatAPI {
  init(config: MyChatInitConfig): void;
  open(): void;
  close(): void;
  destroy(): void;
}
