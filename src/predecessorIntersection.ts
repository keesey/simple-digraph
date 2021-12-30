import { VertexSet } from "./VertexSet";
import { getArcKey, transitiveClosure } from ".";
import { Digraph } from "./Digraph";
export const predecessorIntersection = (
  graph: Digraph,
  vertices: VertexSet
): VertexSet => {
  const verticesArray = [...vertices];
  const closure = transitiveClosure(graph);
  const arcKeys = new Set(closure[1].keys());
  const prcs = [...graph[0].values()].filter((prc) =>
    verticesArray.every((v) => v === prc || arcKeys.has(getArcKey([prc, v])))
  );
  return new Set<number>(prcs);
};
export default predecessorIntersection;
