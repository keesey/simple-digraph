import { Digraph } from "./Digraph";
import { VertexSet } from "./VertexSet";
export const sinks = (graph: Digraph): VertexSet => {
  const result = new Set<number>(graph[0].values());
  graph[1].forEach((arc) => result.delete(arc[0]));
  return result;
};
export default sinks;
