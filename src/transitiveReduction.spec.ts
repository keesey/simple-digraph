import { expect } from 'chai';
import { describe, it } from 'mocha';
import createGraph from './createGraph';
import transitiveReduction from './transitiveReduction';
describe('graphs/transitiveReduction', () => {
    it('should return an empty graph for an empty graph', () => {
        const actual = transitiveReduction(createGraph([]));
        expect(actual).to.deep.equal(createGraph([]));
    });
    it('should return the same graph if it has no arcs', () => {
        const graph = createGraph([], [1, 2]);
        const actual = transitiveReduction(graph);
        expect(actual).to.deep.equal(graph);
    });
    it('should return the same graph if it\'s shallow', () => {
        const graph = createGraph([[1, 2], [3, 4], [5, 6]]);
        const actual = transitiveReduction(graph);
        expect(actual).to.deep.equal(graph);
    });
    it('should return the same graph if it\'s deep but has no redundant arcs', () => {
        const graph = createGraph([[1, 2], [2, 3], [2, 4]]);
        const actual = transitiveReduction(graph);
        expect(actual).to.deep.equal(graph);
    });
    it('should reduce a transitive closure', () => {
        const graph = createGraph([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4]]);
        const actual = transitiveReduction(graph);
        const expected = createGraph([[1, 2], [2, 3], [2, 4]]);
        expect(actual).to.deep.equal(expected);
    });
    it('should reduce a graph with a redundant arc', () => {
        const graph = createGraph([[1, 2], [1, 3], [2, 3], [2, 4]]);
        const actual = transitiveReduction(graph);
        const expected = createGraph([[1, 2], [2, 3], [2, 4]]);
        expect(actual).to.deep.equal(expected);
    });
});
