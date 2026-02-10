import { render, h } from 'preact';
import { Widget } from './Widget';
import styles from './styles.css?inline';

function init() {
  // Find the script tag to read data-widget-key and data-server-url
  const scriptTag =
    document.currentScript ??
    document.querySelector('script[data-widget-key]');
  if (!scriptTag) {
    console.error('[my-chat] Script tag with data-widget-key not found.');
    return;
  }

  const widgetKey = (scriptTag as HTMLElement).getAttribute('data-widget-key');
  if (!widgetKey) {
    console.error('[my-chat] data-widget-key attribute is required.');
    return;
  }

  const serverUrl =
    (scriptTag as HTMLElement).getAttribute('data-server-url') ?? 'http://localhost:3300';

  // Create host element
  const host = document.createElement('div');
  host.id = 'my-chat-widget';
  document.body.appendChild(host);

  // Attach Shadow DOM
  const shadow = host.attachShadow({ mode: 'open' });

  // Inject styles
  const styleEl = document.createElement('style');
  styleEl.textContent = styles;
  shadow.appendChild(styleEl);

  // Mount container
  const mountPoint = document.createElement('div');
  shadow.appendChild(mountPoint);

  // Render Preact widget
  render(
    h(Widget, { widgetKey, serverUrl }),
    mountPoint,
  );
}

// Auto-init when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
