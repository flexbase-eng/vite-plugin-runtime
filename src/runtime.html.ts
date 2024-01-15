import type { Plugin, ResolvedConfig } from 'vite';
import { RuntimeHtmlConfig } from './runtime.html.config.js';

export const runtimeHtml = (options?: RuntimeHtmlConfig): Plugin => {
  let vite_config: ResolvedConfig;
  let runtimeHtmlConfig: RuntimeHtmlConfig;

  return {
    name: 'vite-plugin-runtime-html',
    configResolved(config) {
      vite_config = config;
      runtimeHtmlConfig = { ...options, ...vite_config.runtimeHtml };
    },
    transformIndexHtml() {
      const snippets = runtimeHtmlConfig[vite_config.mode] ?? [];

      return snippets.map(s => (typeof s === 'function' ? s() : s));
    },
  };
};
