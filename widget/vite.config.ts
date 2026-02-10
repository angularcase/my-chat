import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

const entry = process.env.VITE_BUILD_ENTRY || 'widget';
const isLoader = entry === 'loader';

export default defineConfig({
  plugins: [preact()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    emptyOutDir: !isLoader,
    lib: {
      entry: isLoader ? 'src/loader.ts' : 'src/index.tsx',
      name: isLoader ? 'MyChatLoader' : 'MyChatWidget',
      formats: ['iife'],
      fileName: () => (isLoader ? 'loader.js' : 'widget.js'),
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
