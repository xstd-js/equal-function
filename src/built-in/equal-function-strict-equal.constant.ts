import { type EqualFunction } from '../equal-function.js';

/**
 * An `EqualFunction` based on the strict equality operator (`===`).
 *
 * Values are equal when they share the same primitive value,
 * or when they reference the same object or function.
 *
 * Note that `NaN` is never equal to `NaN` (strict equality semantics).
 */
export const EQUAL_FUNCTION_STRICT_EQUAL: EqualFunction<unknown> = (
  a: unknown,
  b: unknown,
): boolean => {
  return a === b;
};
