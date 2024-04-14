import { describe, expect, it } from "vitest";
import { createGraph } from "./createGraph";
import { subgraph } from "./subgraph";
describe("subgraph", () => {
  describe("with an empty graph", () => {
    const GRAPH = createGraph([]);
    it("should return an empty graph if no vertices are specified", () => {
      const actual = subgraph(GRAPH, new Set<number>());
      expect(actual).to.deep.equal(GRAPH);
    });
    it("should return an empty graph if vertices are specified", () => {
      const actual = subgraph(GRAPH, new Set<number>([1, 2, 3]));
      expect(actual).to.deep.equal(GRAPH);
    });
  });
  describe("with a populated graph", () => {
    const GRAPH = createGraph([
      [1, 2],
      [2, 3],
      [2, 4],
      [4, 5],
      [5, 6],
    ]);
    it("should return an empty graph if no vertices are specified", () => {
      const actual = subgraph(GRAPH, new Set<number>());
      expect(actual).to.deep.equal(createGraph([]));
    });
    it("should return a graph with no arcs if one vertex is specified", () => {
      const actual = subgraph(GRAPH, new Set<number>([1]));
      expect(actual).to.deep.equal(createGraph([], [1]));
    });
    it("should return an empty graph if none of the vertices are in the original graph", () => {
      const actual = subgraph(GRAPH, new Set<number>([7]));
      expect(actual).to.deep.equal(createGraph([]));
    });
    it("should return a graph with the appropriate arcs if multiple vertices are specified", () => {
      const actual = subgraph(GRAPH, new Set<number>([2, 4, 5]));
      expect(actual).to.deep.equal(
        createGraph([
          [2, 4],
          [4, 5],
        ]),
      );
    });
    it("should not include vertices not in the original graph", () => {
      const actual = subgraph(GRAPH, new Set<number>([1, 2, 3, 7]));
      expect(actual).to.deep.equal(
        createGraph([
          [1, 2],
          [2, 3],
        ]),
      );
    });
  });
});
