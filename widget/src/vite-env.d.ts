/// <reference types="vite/client" />

declare module '*.css?inline' {
  const css: string;
  export default css;
}

import type { MyChatStub, MyChatAPI } from './types';

declare global {
  interface Window {
    MyChat?: MyChatStub | MyChatAPI;
  }
}

export {};
