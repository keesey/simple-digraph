import { describe, expect, it } from "vitest";
import { createGraph } from "./createGraph";
import { sinks } from "./sinks";
describe("sinks", () => {
  it("should return an empty set for an empty graph", () => {
    const actual = sinks(createGraph([]));
    expect(actual.size).to.equal(0);
  });
  it("should return the sink in a graph with one arc", () => {
    const actual = sinks(createGraph([[1, 2]]));
    expect(Array.from(actual)).to.deep.equal([2]);
  });
  it("should return all vertices in a graph with no arcs", () => {
    const actual = sinks(createGraph([], [1, 2, 3, 4]));
    expect(Array.from(actual)).to.deep.equal([1, 2, 3, 4]);
  });
  it("should return the sink in a graph with two arcs to the same vertex", () => {
    const actual = sinks(
      createGraph([
        [1, 3],
        [2, 3],
      ]),
    );
    expect(Array.from(actual)).to.deep.equal([3]);
  });
  it("should return the sinks in a graph with two arcs to two difference vertices", () => {
    const actual = sinks(
      createGraph([
        [1, 2],
        [1, 3],
      ]),
    );
    expect(Array.from(actual).sort()).to.deep.equal([2, 3]);
  });
  it("should return the sinks in a graph with two disjoint arcs to the difference vertices", () => {
    const actual = sinks(
      createGraph([
        [1, 3],
        [2, 4],
      ]),
    );
    expect(Array.from(actual).sort()).to.deep.equal([3, 4]);
  });
  it("should return the sink in a graph with a lineage", () => {
    const actual = sinks(
      createGraph([
        [1, 2],
        [2, 3],
        [3, 4],
      ]),
    );
    expect(Array.from(actual).sort()).to.deep.equal([4]);
  });
  it("should return the sink in a graph with a lineage and a disjoint vertex", () => {
    const actual = sinks(
      createGraph(
        [
          [1, 2],
          [2, 3],
          [3, 4],
        ],
        [5],
      ),
    );
    expect(Array.from(actual).sort()).to.deep.equal([4, 5]);
  });
});
