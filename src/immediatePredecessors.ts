import { VertexSet } from "./VertexSet";
import { Digraph } from "./Digraph";
export const immediatePredecessors = (
  graph: Digraph,
  vertices: VertexSet,
): VertexSet => {
  const result = new Set<number>();
  graph[1].forEach((arc) => {
    if (vertices.has(arc[1])) {
      result.add(arc[0]);
    }
  });
  return result;
};
