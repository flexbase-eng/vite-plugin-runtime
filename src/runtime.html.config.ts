import { HtmlTagDescriptor } from 'vite';

type htmlSnippet = HtmlTagDescriptor | (() => HtmlTagDescriptor);

/**
 * Represents the configuration object for `vite-plugin-runtime-html`
 */
export type RuntimeHtmlConfig = {
  /**
   * Specifices which snippets to inject when vite mode is production
   */
  production?: htmlSnippet[];
  /**
   * Specifices which snippets to inject when vite mode is development
   */
  development?: htmlSnippet[];
} & Record<string, htmlSnippet[]>;
