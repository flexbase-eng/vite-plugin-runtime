import { runtimeEnv } from '../src/runtime.env.js';

describe('runtime env', () => {
  test('create plugin successfully', () => {
    const plugin = runtimeEnv();
    expect(plugin).not.toBeUndefined();
  });
});
