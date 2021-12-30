import { Digraph } from "./Digraph";
import getArcKey from "./getArcKey";
import transitiveClosure from "./transitiveClosure";
import { VertexSet } from "./VertexSet";
export const successorIntersection = (
  graph: Digraph,
  vertices: VertexSet
): VertexSet => {
  const verticesArray = [...vertices];
  const closure = transitiveClosure(graph);
  const arcKeys = new Set(closure[1].keys());
  const sucs = [...graph[0].values()].filter((suc) =>
    verticesArray.every((v) => v === suc || arcKeys.has(getArcKey([v, suc])))
  );
  return new Set<number>([...sucs]);
};
export default successorIntersection;
