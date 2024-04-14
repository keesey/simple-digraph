import { describe, expect, it } from "vitest";
import { createGraph } from "./createGraph";
import { predecessorIntersection } from "./predecessorIntersection";
describe("predecessorIntersection", () => {
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
      const actual = predecessorIntersection(graph, new Set(vertices));
      expect([...actual].sort()).to.deep.equal([...expected].sort());
    });
  };
  test([], []);
  test([7], [0, 1, 3, 7]);
  test([7, 8], [0, 1, 3]);
  test([7, 9], [0, 1]);
  test([7, 8, 9], [0, 1]);
  test([9], [0, 1, 2, 4, 5, 9]);
  test([6, 7], [0]);
  test([3, 7], [0, 1, 3]);
  test([...graph[0]], [0]);
});
