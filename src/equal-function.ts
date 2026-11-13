/**
 * A function that returns `true` when the two given values are considered equal, `false` otherwise.
 */
export interface EqualFunction<GValue> {
  (a: GValue, b: GValue): boolean;
}
