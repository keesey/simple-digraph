import { Digraph } from "./Digraph";
import { VertexSet } from "./VertexSet";
export const sources = (graph: Digraph): VertexSet => {
  const result = new Set(graph[0]);
  for (const arc of graph[1].values()) {
    result.delete(arc[1]);
  }
  return result;
};
