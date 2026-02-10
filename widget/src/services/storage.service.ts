/**
 * Centralised localStorage wrapper.
 * Every key written by the widget is automatically prefixed
 * so it never collides with the host page's storage.
 */
const DEFAULT_PREFIX = 'myChat';

let _prefix = DEFAULT_PREFIX;

export const StorageService = {
  /** Change the prefix (call before any other method). */
  setPrefix(prefix: string) {
    _prefix = prefix;
  },

  /** Current prefix value. */
  getPrefix(): string {
    return _prefix;
  },

  /** Build the full key used in localStorage. */
  key(name: string): string {
    return `${_prefix}:${name}`;
  },

  get(name: string): string | null {
    try {
      return localStorage.getItem(this.key(name));
    } catch {
      return null;
    }
  },

  set(name: string, value: string): void {
    try {
      localStorage.setItem(this.key(name), value);
    } catch {
      // Storage full or blocked – silently ignore.
    }
  },

  remove(name: string): void {
    try {
      localStorage.removeItem(this.key(name));
    } catch {
      // ignore
    }
  },

  /** Get a value or create it with the factory, then persist. */
  getOrCreate(name: string, factory: () => string): string {
    let value = this.get(name);
    if (!value) {
      value = factory();
      this.set(name, value);
    }
    return value;
  },
};
