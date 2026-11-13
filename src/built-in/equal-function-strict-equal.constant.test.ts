import { describe, expect, it } from 'vitest';
import { EQUAL_FUNCTION_STRICT_EQUAL } from './equal-function-strict-equal.constant.js';

describe('EQUAL_FUNCTION_STRICT_EQUAL', () => {
  it('should return true for strictly equal primitives', () => {
    expect(EQUAL_FUNCTION_STRICT_EQUAL(undefined, undefined)).toBe(true);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(null, null)).toBe(true);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(true, true)).toBe(true);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(false, false)).toBe(true);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(42, 42)).toBe(true);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(0, -0)).toBe(true);
    expect(EQUAL_FUNCTION_STRICT_EQUAL('foo', 'foo')).toBe(true);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(10n, 10n)).toBe(true);

    const symbol = Symbol('foo');
    expect(EQUAL_FUNCTION_STRICT_EQUAL(symbol, symbol)).toBe(true);
  });

  it('should return false for different primitives', () => {
    expect(EQUAL_FUNCTION_STRICT_EQUAL(42, 43)).toBe(false);
    expect(EQUAL_FUNCTION_STRICT_EQUAL('foo', 'bar')).toBe(false);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(true, false)).toBe(false);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(1, '1')).toBe(false);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(5, 5n)).toBe(false);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(null, undefined)).toBe(false);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(0, false)).toBe(false);
  });

  it('should return false for NaN, even when compared with itself', () => {
    expect(EQUAL_FUNCTION_STRICT_EQUAL(NaN, NaN)).toBe(false);
  });

  it('should return true only for the same object reference', () => {
    const object = {};
    expect(EQUAL_FUNCTION_STRICT_EQUAL(object, object)).toBe(true);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(object, {})).toBe(false);
    expect(EQUAL_FUNCTION_STRICT_EQUAL([], [])).toBe(false);
  });

  it('should return true only for the same function reference', () => {
    const fnc = (): void => undefined;
    expect(EQUAL_FUNCTION_STRICT_EQUAL(fnc, fnc)).toBe(true);
    expect(EQUAL_FUNCTION_STRICT_EQUAL(fnc, (): void => undefined)).toBe(false);
  });
});
