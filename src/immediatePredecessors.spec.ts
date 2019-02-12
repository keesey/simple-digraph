import { expect } from 'chai';
import { describe, it } from 'mocha';
import createGraph from './createGraph';
import immediatePredecessors from './immediatePredecessors';
describe('graphs/immediatePredecessors', () => {
    it('should return an empty set for an empty graph and an empty set of IDs', () => {
        const actual = immediatePredecessors(createGraph([]), new Set<number>());
        expect(actual.size).to.equal(0);
    });
    it('should return an empty set for a populated graph and an empty set of IDs', () => {
        const actual = immediatePredecessors(createGraph([[1, 2]]), new Set<number>());
        expect(actual.size).to.equal(0);
    });
    it('should return an empty set for an empty graph and a populated set of IDs', () => {
        const actual = immediatePredecessors(createGraph([]), new Set<number>([1]));
        expect(actual.size).to.equal(0);
    });
    it('should return a single parent', () => {
        const actual = immediatePredecessors(createGraph([[1, 2]]), new Set<number>([2]));
        expect(Array.from(actual)).to.deep.equal([1]);
    });
    it('should return no parents if there are none', () => {
        const actual = immediatePredecessors(createGraph([[1, 2]]), new Set<number>([1]));
        expect(actual.size).to.equal(0);
    });
    it('should return multiple parents', () => {
        const actual = immediatePredecessors(createGraph([[1, 3], [2, 3]]), new Set<number>([3]));
        expect(Array.from(actual).sort()).to.deep.equal([1, 2]);
    });
    it('should return parents but not grandparents', () => {
        const actual = immediatePredecessors(createGraph([[1, 2], [2, 4], [3, 4]]), new Set<number>([4]));
        expect(Array.from(actual).sort()).to.deep.equal([2, 3]);
    });
});
