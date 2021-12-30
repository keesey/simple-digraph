import { expect } from "chai";
import { describe, it } from "mocha";
import createGraph from "./createGraph";
import successorUnion from "./successorUnion";
describe("successorUnion", () => {
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
  const test = (vertices: readonly number[], expected: readonly number[]) => {
    it(`should return {${[...expected].sort().join(", ")}} for {${[...vertices]
      .sort()
      .join(", ")}}`, () => {
      const actual = successorUnion(graph, new Set(vertices));
      expect([...actual].sort()).to.deep.equal([...expected].sort());
    });
  };
  test([], []);
  test([7], [7]);
  test([3], [3, 7, 8]);
  test([3, 4], [3, 4, 7, 8, 9]);
  test([4, 5], [4, 5, 9]);
  test([...graph[0]], [...graph[0]]);
});
