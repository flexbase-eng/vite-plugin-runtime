import { getGeneratedTypesPath, getName, getType, isBoolean, isNumber, isViteEnv } from '../src/helpers.js';

describe('getName', () => {
  test('returns name when string', () => {
    expect(getName({ name: 'test' })).toBe('test');
  });

  test('returns name when function', () => {
    expect(getName({ name: () => 'test' })).toBe('test');
  });

  test('returns env by default', () => {
    expect(getName({})).toBe('env');
  });
});

describe('getGeneratedTypesPath', () => {
  test('returns path when string', () => {
    expect(getGeneratedTypesPath({ generatedTypesPath: 'test' })).toBe('test');
  });

  test('returns path when function', () => {
    expect(getGeneratedTypesPath({ generatedTypesPath: () => 'test' })).toBe('test');
  });

  test('returns undefined by default', () => {
    expect(getGeneratedTypesPath({})).toBeUndefined();
  });
});

describe('isNumber', () => {
  test('returns true when number', () => {
    expect(isNumber(1)).toBe(true);
  });

  test('returns true when string is a number', () => {
    expect(isNumber('1.0')).toBe(true);
    expect(isNumber('100')).toBe(true);
  });

  test('returns false when not string', () => {
    expect(isNumber(true)).toBe(false);
    expect(isNumber({})).toBe(false);
  });

  test('returns false for NaN', () => {
    expect(isNumber('y')).toBe(false);
    expect(isNumber('')).toBe(false);
    expect(isNumber(Number.NaN)).toBe(false);
  });
});

describe('isBoolean', () => {
  test('returns true when boolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  test.each(['true', '1', 'yes', 'on', 'false', '0', 'no', 'off'])('returns true when string is a boolean', value => {
    expect(isBoolean(value)).toBe(true);
  });

  test('returns false when not string', () => {
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean({})).toBe(false);
  });
});

describe('getType', () => {
  test.each([1, 1.0, '1', '1.0', '100'])('returns true for a number', value => {
    expect(getType(value)).toBe('number');
  });

  test.each(['true', 'yes', 'on', 'false', 'no', 'off', true, false])('returns true for a boolean', value => {
    expect(getType(value)).toBe('boolean');
  });

  test.each(['', {}])('returns type when not number or boolean', value => {
    expect(getType(value)).toBe(typeof value);
  });
});

describe('isViteEnv', () => {
  test.each(['MODE', 'BASE_URL', 'PROD', 'DEV', 'SSR'])('returns true for a vite envs', value => {
    expect(isViteEnv(value, [])).toBe(true);
  });

  test('returns true for a configured envs', () => {
    expect(isViteEnv('test', ['test'])).toBe(true);
  });

  test('returns false when not an env', () => {
    expect(isViteEnv('test', [])).toBe(false);
  });
});
