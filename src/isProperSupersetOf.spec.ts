import { describe, expect, it } from "vitest";
import { isProperSupersetOf } from "./isProperSupersetOf";
describe("isProperSupersetOf", () => {
  const test = (
    a: readonly number[],
    b: readonly number[],
    expected: boolean,
  ) => {
    it(`should return ${expected} for {${[...a].sort().join(", ")}} ⊃ {${[...b]
      .sort()
      .join(", ")}}`, () => {
      const actual = isProperSupersetOf(new Set(a), new Set(b));
      expect(actual).to.equal(expected);
    });
  };
  test([], [], false);
  test([1, 2, 3], [], true);
  test([], [1, 2, 3], false);
  test([1, 2, 3], [1], true);
  test([1, 2, 3], [2], true);
  test([1, 2, 3], [3], true);
  test([1, 2, 3], [1, 2], true);
  test([1, 2, 3], [1, 3], true);
  test([1, 2, 3], [2, 3], true);
  test([1, 2, 3], [1, 2, 3], false);
  test([1, 2, 3], [1, 2, 3, 4], false);
  test([1, 2, 3, 4], [1, 2, 3], true);
});
