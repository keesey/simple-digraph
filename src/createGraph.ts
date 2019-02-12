import { Arc } from './Arc';
import { Digraph } from './Digraph';
import getArcKey from './getArcKey';
export const createGraph = (
    arcs: ReadonlyArray<Readonly<[number, number]>>,
    extraVertices: ReadonlyArray<number> = [],
) => {
    const vertices = new Set<number>(extraVertices);
    const arcSet = new Map<string, Arc>();
    arcs.forEach((arc) => {
        vertices.add(arc[0]);
        vertices.add(arc[1]);
        arcSet.set(getArcKey(arc), arc);
    });
    return [vertices, arcSet] as Digraph;
};
export default createGraph;
