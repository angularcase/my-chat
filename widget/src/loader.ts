/**
 * Lightweight async loader. Loaded by the inline snippet.
 * Fetches the main widget bundle without blocking the page.
 */
(function () {
  const script = document.currentScript as HTMLScriptElement | null;
  const loaderSrc = script?.src ?? '';
  const base = loaderSrc.replace(/\/loader\.js(\?.*)?$/i, '') || '.';
  const widgetUrl = base + '/widget.js?v=' + Date.now();

  const s = document.createElement('script');
  s.async = true;
  s.src = widgetUrl;
  if (script?.parentNode) {
    script.parentNode.insertBefore(s, script.nextSibling);
  } else {
    document.head.appendChild(s);
  }
})();
