import { runtimeHtml } from '../src/runtime.html.js';

describe('runtime html', () => {
  test('create plugin successfully', () => {
    const plugin = runtimeHtml();
    expect(plugin).not.toBeUndefined();
    expect(plugin.name).toBe('vite-plugin-runtime-html');
  });
});
