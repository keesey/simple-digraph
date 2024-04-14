import { describe, expect, it } from "vitest";
import { Digraph } from "./Digraph";
import { createGraph } from "./createGraph";
import { isCyclic } from "./isCyclic";
describe("isCyclic", () => {
  const test = (expected: boolean, graph: Digraph) => {
    it(`should detect [{${[...graph[0]].sort().join(", ")}}, {${[
      ...graph[1].values(),
    ]
      .map((arc) => `[${arc.join(", ")}]`)
      .sort()
      .join(", ")}}] as ${expected ? "" : "a"}cyclic`, () => {
      const actual = isCyclic(graph);
      expect(actual).to.equal(expected);
    });
  };
  test(false, createGraph([]));
  test(
    false,
    createGraph([
      [1, 2],
      [2, 3],
    ]),
  );
  test(true, createGraph([[1, 1]]));
  test(
    true,
    createGraph([
      [1, 2],
      [2, 1],
    ]),
  );
  test(
    true,
    createGraph([
      [1, 2],
      [2, 3],
      [3, 1],
    ]),
  );
  test(
    true,
    createGraph([
      [1, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [3, 6],
      [6, 1],
    ]),
  );
});
