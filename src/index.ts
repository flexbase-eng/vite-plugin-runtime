import type { RuntimeEnvConfig } from './runtime.env.config.js';
export { runtimeEnv } from './runtime.env.js';

declare module 'vite' {
  interface UserConfig {
    /**
     * Options for vite-plugin-runtime
     */
    runtimeEnv?: RuntimeEnvConfig;
  }
}
