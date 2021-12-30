import { expect } from "chai";
import { describe } from "mocha";
import createGraph from "./createGraph";
import minimal from "./minimal";
describe("minimal", () => {
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
    it(`should yield {${[...expected].sort().join(", ")}} for {${[...vertices]
      .sort()
      .join(", ")}}`, () => {
      const actual = minimal(graph, new Set(vertices));
      expect([...actual].sort()).to.deep.equal([...expected].sort());
    });
  };
  test([], []);
  test([0, 1, 2], [0]);
  test([3, 7, 8, 4, 5, 9], [3, 4, 5]);
  test([3, 7, 8, 4, 5, 9], [3, 4, 5]);
  test([...graph[0]], [0]);
});
