import { VertexSet } from "./VertexSet";
import { transitiveClosure } from ".";
import { Digraph } from "./Digraph";
export const predecessorUnion = (
  graph: Digraph,
  vertices: VertexSet
): VertexSet => {
  const prcs = [...transitiveClosure(graph)[1].values()]
    .filter(([, tail]) => vertices.has(tail))
    .map(([head]) => head);
  return new Set<number>([...vertices, ...prcs]);
};
export default predecessorUnion;
