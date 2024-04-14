import { describe, expect, it } from "vitest";
import { isProperSubsetOf } from "./isProperSubsetOf";
describe("isProperSubsetOf", () => {
  const test = (
    a: readonly number[],
    b: readonly number[],
    expected: boolean,
  ) => {
    it(`should return ${expected} for {${[...a].sort().join(", ")}} ⊂ {${[...b]
      .sort()
      .join(", ")}}`, () => {
      const actual = isProperSubsetOf(new Set(a), new Set(b));
      expect(actual).to.equal(expected);
    });
  };
  test([], [], false);
  test([], [1, 2, 3], true);
  test([1, 2, 3], [], false);
  test([1], [1, 2, 3], true);
  test([2], [1, 2, 3], true);
  test([3], [1, 2, 3], true);
  test([1, 2], [1, 2, 3], true);
  test([1, 3], [1, 2, 3], true);
  test([2, 3], [1, 2, 3], true);
  test([1, 2, 3], [1, 2, 3], false);
  test([1, 2, 3, 4], [1, 2, 3], false);
  test([1, 2, 3], [1, 2, 3, 4], true);
});
