import { expect } from "chai";
import { describe, it } from "mocha";
import { Arc } from "./Arc";
import createGraph from "./createGraph";
import getArcKey from "./getArcKey";
describe("createGraph", () => {
  const test = (
    expectedVertices: readonly number[],
    expectedArcs: readonly Arc[],
    arcs: Iterable<Arc>,
    extraVertices?: Iterable<number>
  ) => {
    describe(`for arcs [${[...arcs]
      .map((arc) => `[${arc.join(", ")}]`)
      .sort()
      .join(", ")}${
      extraVertices
        ? ` and extra vertices {${[...extraVertices].sort().join(", ")}}`
        : ""
    }`, () => {
      const actual = createGraph(arcs, extraVertices);
      it(`should yield these vertices: {${[...expectedVertices]
        .sort()
        .join(", ")}}`, () => {
        expect([...actual[0]].sort()).to.deep.equal(
          [...expectedVertices].sort()
        );
      });
      it(`should yield these arcs: {${expectedArcs
        .map((arc) => `[${arc.join(", ")}]`)
        .sort()
        .join(", ")}}`, () => {
        expect([...actual[1].keys()].sort()).to.deep.equal(
          expectedArcs.map(getArcKey).sort()
        );
      });
    });
  };
  test([], [], [], []);
  test(
    [1, 2, 3],
    [
      [1, 2],
      [2, 3],
    ],
    [
      [1, 2],
      [2, 3],
    ]
  );
  test(
    [1, 2, 3, 4, 5],
    [
      [1, 2],
      [2, 3],
    ],
    [
      [1, 2],
      [2, 3],
    ],
    [4, 5]
  );
  test(
    [1, 2, 3],
    [
      [1, 2],
      [2, 3],
    ],
    [
      [1, 2],
      [2, 3],
      [1, 2],
    ]
  );
  test(
    [1, 2, 3],
    [
      [1, 2],
      [2, 3],
      [1, 3],
    ],
    [
      [1, 2],
      [2, 3],
      [1, 3],
    ]
  );
});
