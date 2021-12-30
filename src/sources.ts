import { VertexSet } from "./VertexSet";
import { Digraph } from "./Digraph";
export const sources = (graph: Digraph): VertexSet => {
  const result = new Set<number>(graph[0].values());
  graph[1].forEach((arc) => result.delete(arc[1]));
  return result;
};
export default sources;
