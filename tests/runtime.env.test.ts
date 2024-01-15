import { runtimeEnv } from '../src/runtime.env.js';

describe('runtime env', () => {
  test('create plugin successfully', () => {
    const plugin = runtimeEnv();
    expect(plugin).not.toBeUndefined();
    expect(plugin.name).toBe('vite-plugin-runtime-env');
  });
});
