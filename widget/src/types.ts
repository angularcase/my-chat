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
