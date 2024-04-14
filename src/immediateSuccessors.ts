import { VertexSet } from "./VertexSet";
import { Digraph } from "./Digraph";
export const immediateSuccessors = (
  graph: Digraph,
  vertices: VertexSet,
): VertexSet => {
  const result = new Set<number>();
  graph[1].forEach((arc) => {
    if (vertices.has(arc[0])) {
      result.add(arc[1]);
    }
  });
  return result;
};
