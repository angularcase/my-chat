import { render, h } from 'preact';
import { Widget } from './Widget';
import styles from './styles.css?inline';
import type { WidgetConfig } from './types';
import type { MyChatStub, MyChatAPI, MyChatInitConfig } from './types';

const HOST_ID = 'my-chat-widget';

function getConfigFromStub(): WidgetConfig | null {
  const stub = window.MyChat as MyChatStub | undefined;
  const q = stub?._q;
  if (!q || !Array.isArray(q) || q.length === 0) return null;

  let config: MyChatInitConfig | null = null;
  while (q.length > 0) {
    const raw = q.shift();
    const args = raw != null && typeof raw === 'object' && 'length' in raw
      ? Array.from(raw as ArrayLike<unknown>)
      : [raw];
    const cmd = args[0];
    if (cmd === 'init' && args[1] && typeof args[1] === 'object') {
      const c = args[1] as MyChatInitConfig;
      if (c.widgetKey) config = c;
    }
  }
  if (!config) return null;
  return {
    widgetKey: config.widgetKey,
    serverUrl: config.serverUrl ?? 'http://localhost:3300',
  };
}

function run() {
  const config = getConfigFromStub();
  if (!config) {
    console.error('[my-chat] No config. Call MyChat("init", { widgetKey: "...", serverUrl: "..." }) before the script loads, or ensure the snippet runs first.');
    return;
  }

  const host = document.createElement('div');
  host.id = HOST_ID;
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: 'open' });
  const styleEl = document.createElement('style');
  styleEl.textContent = styles;
  shadow.appendChild(styleEl);
  const mountPoint = document.createElement('div');
  shadow.appendChild(mountPoint);

  render(
    h(Widget, { widgetKey: config.widgetKey, serverUrl: config.serverUrl }),
    mountPoint,
  );

  const api: MyChatAPI = {
    init(_c: MyChatInitConfig) {
      console.warn('[my-chat] Already initialised.');
    },
    open() {
      const el = document.getElementById(HOST_ID);
      el?.dispatchEvent(new CustomEvent('mychat-open'));
    },
    close() {
      const el = document.getElementById(HOST_ID);
      el?.dispatchEvent(new CustomEvent('mychat-close'));
    },
    destroy() {
      const el = document.getElementById(HOST_ID);
      if (el?.shadowRoot) {
        const root = el.shadowRoot;
        const mount = root.querySelector('div');
        if (mount) render(null, mount);
      }
      el?.remove();
      delete window.MyChat;
    },
  };

  window.MyChat = api;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', run);
} else {
  run();
}
