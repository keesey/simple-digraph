import { expect } from "chai";
import { describe, it } from "mocha";
import createGraph from "./createGraph";
import exclusivePredecessors from "./exclusivePredecessors";
describe("exclusivePredecessors", () => {
  const graph = createGraph([
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [3, 7],
    [3, 8],
    [4, 9],
    [2, 5],
    [2, 6],
    [5, 9],
  ]);
  const test = (
    internal: readonly number[],
    external: readonly number[],
    expected: readonly number[]
  ) => {
    it(`should return {${[...expected].sort().join(", ")}} for {${[...internal]
      .sort()
      .join(", ")}} ← {${[...external].sort().join(", ")}}`, () => {
      const actual = exclusivePredecessors(
        graph,
        new Set(internal),
        new Set(external)
      );
      expect([...actual].sort()).to.deep.equal([...expected].sort());
    });
  };
  test([], [], []);
  test([], [9], []);
  test([7], [], [0, 1, 3, 7]);
  test([7], [9], [3, 7]);
  test([9], [6], [1, 4, 5, 9]);
  test([7, 8], [6], [1, 3]);
  test([7, 9], [6], [1]);
});
