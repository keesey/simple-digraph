import { Digraph } from "./Digraph";
import { EMPTY_SET } from "./EMPTY_SET";
import { transitiveClosure } from "./transitiveClosure";
import { VertexSet } from "./VertexSet";
export const predecessorUnion = (
  graph: Digraph,
  vertices: VertexSet,
): VertexSet => {
  if (vertices.size === 0) {
    return EMPTY_SET;
  }
  const prcs = [...transitiveClosure(graph)[1].values()]
    .filter(([, tail]) => vertices.has(tail))
    .map(([head]) => head);
  return new Set<number>([...vertices, ...prcs]);
};
