import { expect } from "chai";
import { describe, it } from "mocha";
import createGraph from "./createGraph";
import { Digraph } from "./Digraph";
import findCyclicVertex from "./findCyclicVertex";
describe("findCyclicVertex", () => {
  const test = (typeExpected: "number" | "null", graph: Digraph) => {
    it(`should detect [{${[...graph[0]].sort().join(", ")}}, {${[
      ...graph[1].values(),
    ]
      .map((arc) => `[${arc.join(", ")}]`)
      .sort()
      .join(", ")}}] as ${typeExpected === "null" ? "" : "a"}cyclic`, () => {
      const actual = findCyclicVertex(graph);
      if (typeExpected === "number") {
        expect(typeof actual).to.equal("number");
      } else {
        expect(actual).to.be.null;
      }
    });
  };
  test("null", createGraph([]));
  test(
    "null",
    createGraph([
      [1, 2],
      [2, 3],
    ])
  );
  test("number", createGraph([[1, 1]]));
  test(
    "number",
    createGraph([
      [1, 2],
      [2, 1],
    ])
  );
  test(
    "number",
    createGraph([
      [1, 2],
      [2, 3],
      [3, 1],
    ])
  );
  test(
    "number",
    createGraph([
      [1, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [3, 6],
      [6, 1],
    ])
  );
});
