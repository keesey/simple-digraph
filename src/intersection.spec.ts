import { describe, expect, it } from "vitest";
import { intersection } from "./intersection";
describe("intersection", () => {
  const test = (
    expected: readonly number[],
    ...sets: ReadonlyArray<ReadonlyArray<number>>
  ) => {
    it(`should return {${[...expected].sort().join(", ")}} for ${
      sets.length
        ? sets.map((set) => `{${[...set].sort().join(", ")}}`).join(" ∩ ")
        : "no sets"
    }`, () => {
      const actual = intersection(...sets.map((set) => new Set(set)));
      expect([...actual].sort()).to.deep.equal([...expected].sort());
    });
  };
  test([]);
  test([], []);
  test([], [], []);
  test([], [1], [2]);
  test([], [1], [2], [3]);
  test([], [1, 2], [2, 3], [1, 3]);
  test([], [1, 2, 3], []);
  test([2, 3], [1, 2, 3], [2, 3, 4]);
  test([3], [1, 2, 3], [2, 3, 4], [3]);
});
