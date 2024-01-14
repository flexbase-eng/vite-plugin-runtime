import { RuntimeEnvConfig } from './runtime.env.config.js';

export const getName = (config: RuntimeEnvConfig): string => {
  if (!config.name) {
    return 'env';
  }
  if (typeof config.name === 'string') {
    return config.name;
  }
  return config.name();
};

export const getGeneratedTypesPath = (config: RuntimeEnvConfig): string | undefined => {
  if (!config.generatedTypesPath) {
    return undefined;
  }
  if (typeof config.generatedTypesPath === 'string') {
    return config.generatedTypesPath;
  }

  return config.generatedTypesPath();
};

export const isNumber = (value: unknown): value is number => {
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return true;
  }

  if (typeof value !== 'string') return false;

  return !Number.isNaN(Number(value)) && !Number.isNaN(Number.parseFloat(value));
};

export const isBoolean = (value: unknown): value is boolean => {
  if (typeof value === 'boolean') {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  if (['true', '1', 'yes', 'on', 'false', '0', 'no', 'off'].includes(value.trim().toLowerCase())) return true;

  return false;
};

export const getType = (value: unknown): string => {
  if (isNumber(value)) {
    return 'number';
  }
  if (isBoolean(value)) {
    return 'boolean';
  }

  return typeof value;
};

export const isViteEnv = (name: string, envPrefix: string[]): boolean => {
  const viteEnvs = ['MODE', 'BASE_URL', 'PROD', 'DEV', 'SSR'];
  if (viteEnvs.includes(name)) {
    return true;
  }

  return envPrefix.some(prefix => name.startsWith(prefix));
};
