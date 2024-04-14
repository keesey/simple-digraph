import { describe, expect, it } from "vitest";
import { EMPTY_SET } from "./EMPTY_SET";
import { createGraph } from "./createGraph";
import { immediateSuccessors } from "./immediateSuccessors";
describe("immediateSuccessors", () => {
  it("should return an empty set for an empty graph and an empty set of IDs", () => {
    const actual = immediateSuccessors(createGraph([]), new Set<number>());
    expect(actual.size).to.equal(0);
  });
  it("should return an empty set for a populated graph and an empty set of IDs", () => {
    const actual = immediateSuccessors(createGraph([[1, 2]]), EMPTY_SET);
    expect(actual.size).to.equal(0);
  });
  it("should return an empty set for an empty graph and a populated set of IDs", () => {
    const actual = immediateSuccessors(createGraph([]), new Set<number>([1]));
    expect(actual.size).to.equal(0);
  });
  it("should return a single child", () => {
    const actual = immediateSuccessors(
      createGraph([[1, 2]]),
      new Set<number>([1]),
    );
    expect(Array.from(actual)).to.deep.equal([2]);
  });
  it("should return no children if there are none", () => {
    const actual = immediateSuccessors(
      createGraph([[1, 2]]),
      new Set<number>([2]),
    );
    expect(actual.size).to.equal(0);
  });
  it("should return multiple children", () => {
    const actual = immediateSuccessors(
      createGraph([
        [1, 2],
        [1, 3],
      ]),
      new Set<number>([1]),
    );
    expect(Array.from(actual).sort()).to.deep.equal([2, 3]);
  });
  it("should return children for multiple parents", () => {
    const actual = immediateSuccessors(
      createGraph([
        [1, 2],
        [2, 3],
      ]),
      new Set<number>([1, 2]),
    );
    expect(Array.from(actual).sort()).to.deep.equal([2, 3]);
  });
  it("should return children but not grandchildren", () => {
    const actual = immediateSuccessors(
      createGraph([
        [1, 2],
        [1, 3],
        [2, 4],
      ]),
      new Set<number>([1]),
    );
    expect(Array.from(actual).sort()).to.deep.equal([2, 3]);
  });
});
