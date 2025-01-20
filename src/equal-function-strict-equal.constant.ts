import { type EqualFunction } from './equal-function.js';

export const EQUAL_FUNCTION_STRICT_EQUAL: EqualFunction<unknown> = (
  a: unknown,
  b: unknown,
): boolean => {
  return a === b;
};
