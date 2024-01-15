import type { RuntimeEnvConfig } from './runtime.env.config.js';
import type { RuntimeHtmlConfig } from './runtime.html.config.js';
export { runtimeEnv } from './runtime.env.js';
export { runtimeHtml } from './runtime.html.js';

declare module 'vite' {
  interface UserConfig {
    /**
     * Options for vite-plugin-runtime-env
     */
    runtimeEnv?: RuntimeEnvConfig;
    /**
     * Options for vite-plugin-runtime-html
     */
    runtimeHtml?: RuntimeHtmlConfig;
  }
}
