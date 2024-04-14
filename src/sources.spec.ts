import { describe, expect, it } from "vitest";
import { createGraph } from "./createGraph";
import { sources } from "./sources";
describe("sources", () => {
  it("should return an empty set for an empty graph", () => {
    const actual = sources(createGraph([]));
    expect(actual.size).to.equal(0);
  });
  it("should return the sink in a graph with one arc", () => {
    const actual = sources(createGraph([[1, 2]]));
    expect(Array.from(actual)).to.deep.equal([1]);
  });
  it("should return all vertices in a graph with no arcs", () => {
    const actual = sources(createGraph([], [1, 2, 3, 4]));
    expect(Array.from(actual)).to.deep.equal([1, 2, 3, 4]);
  });
  it("should return the sources in a graph with two arcs to the same vertex", () => {
    const actual = sources(
      createGraph([
        [1, 3],
        [2, 3],
      ]),
    );
    expect(Array.from(actual)).to.deep.equal([1, 2]);
  });
  it("should return the source in a graph with two arcs to two difference vertices", () => {
    const actual = sources(
      createGraph([
        [1, 2],
        [1, 3],
      ]),
    );
    expect(Array.from(actual).sort()).to.deep.equal([1]);
  });
  it("should return the sources in a graph with two disjoint arcs to the difference vertices", () => {
    const actual = sources(
      createGraph([
        [1, 3],
        [2, 4],
      ]),
    );
    expect(Array.from(actual).sort()).to.deep.equal([1, 2]);
  });
  it("should return the source in a graph with a lineage", () => {
    const actual = sources(
      createGraph([
        [1, 2],
        [2, 3],
        [3, 4],
      ]),
    );
    expect(Array.from(actual).sort()).to.deep.equal([1]);
  });
  it("should return the source in a graph with a lineage and a disjoint vertex", () => {
    const actual = sources(
      createGraph(
        [
          [1, 2],
          [2, 3],
          [3, 4],
        ],
        [5],
      ),
    );
    expect(Array.from(actual).sort()).to.deep.equal([1, 5]);
  });
});
