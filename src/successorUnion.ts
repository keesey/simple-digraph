import { transitiveClosure } from ".";
import { Digraph } from "./Digraph";
export const successorUnion = (
  graph: Digraph,
  vertices: VertexSet
): VertexSet => {
  const sucs = [...transitiveClosure(graph)[1].values()]
    .filter(([head]) => vertices.has(head))
    .map(([, tail]) => tail);
  return new Set<number>([...vertices, ...sucs]);
};
export default successorUnion;
