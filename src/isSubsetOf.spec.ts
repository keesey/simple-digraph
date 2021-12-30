import { expect } from "chai";
import { describe, it } from "mocha";
import isSubsetOf from "./isSubsetOf";
describe("isSubsetOf", () => {
  const test = (
    a: readonly number[],
    b: readonly number[],
    expected: boolean
  ) => {
    it(`should return ${expected} for {${[...a].sort().join(", ")}} ⊆ {${[...b]
      .sort()
      .join(", ")}}`, () => {
      const actual = isSubsetOf(new Set(a), new Set(b));
      expect(actual).to.equal(expected);
    });
  };
  test([], [], true);
  test([], [1, 2, 3], true);
  test([1, 2, 3], [], false);
  test([1], [1, 2, 3], true);
  test([2], [1, 2, 3], true);
  test([3], [1, 2, 3], true);
  test([1, 2], [1, 2, 3], true);
  test([1, 3], [1, 2, 3], true);
  test([2, 3], [1, 2, 3], true);
  test([1, 2, 3], [1, 2, 3], true);
  test([1, 2, 3, 4], [1, 2, 3], false);
  test([1, 2, 3], [1, 2, 3, 4], true);
});
