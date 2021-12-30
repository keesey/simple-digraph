import { expect } from "chai";
import { describe, it } from "mocha";
import difference from "./difference";
import EMPTY_SET from "./EMPTY_SET";
describe("difference", () => {
  it("should return the empty set when subtracted from itself", () => {
    const actual = difference(EMPTY_SET, EMPTY_SET);
    expect(actual.size).to.equal(0);
  });
  it("should return the empty set when a populated set is subtracted from it", () => {
    const actual = difference(EMPTY_SET, new Set([1, 2, 3]));
    expect(actual.size).to.equal(0);
  });
  it("should return the populated set when the empty set is subtracted from it", () => {
    const actual = difference(new Set([1, 2, 3]), EMPTY_SET);
    expect([...actual].sort()).to.deep.equal([1, 2, 3]);
  });
  it("should return the empty set when a populated set is subtracted from itself", () => {
    const actual = difference(new Set([1, 2, 3]), new Set([1, 2, 3]));
    expect(actual.size).to.equal(0);
  });
  it("should return a partial set when a subset is subtracted", () => {
    const actual = difference(new Set([1, 2, 3]), new Set([2, 3]));
    expect([...actual]).to.deep.equal([1]);
  });
  it("should return the empty set when a superset is subtracted", () => {
    const actual = difference(new Set([1, 2, 3]), new Set([1, 2, 3, 4, 5]));
    expect(actual.size).to.equal(0);
  });
  it("should return a partial set when a subset is subtracted", () => {
    const actual = difference(new Set([1, 2, 3]), new Set([2, 3]));
    expect([...actual]).to.deep.equal([1]);
  });
  it("should return a partial set when an overlapping set is subtracted", () => {
    const actual = difference(new Set([1, 2, 3]), new Set([2, 3, 4, 5]));
    expect([...actual]).to.deep.equal([1]);
  });
});
