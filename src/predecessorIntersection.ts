import { Digraph } from "./Digraph";
import EMPTY_SET from "./EMPTY_SET";
import getArcKey from "./getArcKey";
import transitiveClosure from "./transitiveClosure";
import { VertexSet } from "./VertexSet";
export const predecessorIntersection = (
  graph: Digraph,
  vertices: VertexSet
): VertexSet => {
  if (vertices.size === 0) {
    return EMPTY_SET;
  }
  const verticesArray = [...vertices];
  const closure = transitiveClosure(graph);
  const arcKeys = new Set(closure[1].keys());
  const prcs = [...graph[0].values()].filter((prc) =>
    verticesArray.every((v) => v === prc || arcKeys.has(getArcKey([prc, v])))
  );
  return new Set<number>(prcs);
};
export default predecessorIntersection;
