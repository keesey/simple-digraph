import { expect } from "chai";
import { describe, it } from "mocha";
import union from "./union";
describe("union", () => {
  const test = (
    expected: readonly number[],
    ...sets: ReadonlyArray<ReadonlyArray<number>>
  ) => {
    it(`should return {${[...expected].sort().join(", ")}} for ${
      sets.length
        ? sets.map((set) => `{${[...set].sort().join(", ")}}`).join(" \u222a ")
        : "no sets"
    }`, () => {
      const actual = union(...sets.map((set) => new Set(set)));
      expect([...actual].sort()).to.deep.equal([...expected].sort());
    });
  };
  test([]);
  test([], []);
  test([], [], []);
  test([1, 2], [1], [2]);
  test([1, 2, 3], [1], [2], [3]);
  test([1, 2, 3], [1, 2], [2, 3], [1, 3]);
  test([1, 2, 3], [1, 2, 3], []);
});
