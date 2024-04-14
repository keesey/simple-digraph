import { describe, expect, it } from "vitest";
import { createGraph } from "./createGraph";
import { transitiveClosure } from "./transitiveClosure";
describe("transitiveClosure", () => {
  it("should return an empty graph for an empty graph", () => {
    const actual = transitiveClosure(createGraph([]));
    expect(actual).to.deep.equal(createGraph([]));
  });
  it("should return the same graph if it has no arcs", () => {
    const graph = createGraph([], [1, 2]);
    const actual = transitiveClosure(graph);
    expect(actual).to.deep.equal(graph);
  });
  it("should return the same graph if it's shallow", () => {
    const graph = createGraph([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    const actual = transitiveClosure(graph);
    expect(actual).to.deep.equal(graph);
  });
  it("should return a closure for deep graphs", () => {
    const graph = createGraph([
      [1, 2],
      [2, 3],
      [2, 4],
    ]);
    const actual = transitiveClosure(graph);
    const expected = createGraph([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
    ]);
    expect(actual).to.deep.equal(expected);
  });
});
