import { Digraph } from "./Digraph";
import { VertexSet } from "./VertexSet";
export const subgraph = (graph: Digraph, vertices: VertexSet): Digraph => {
  const newVertices = new Set<number>(vertices);
  for (const vertex of vertices) {
    if (!graph[0].has(vertex)) {
      newVertices.delete(vertex);
    }
  }
  const arcs = new Map<string, Readonly<[number, number]>>();
  for (const [key, arc] of graph[1]) {
    if (vertices.has(arc[0]) && vertices.has(arc[1])) {
      newVertices.add(arc[0]);
      newVertices.add(arc[1]);
      arcs.set(key, arc);
    }
  }
  return [newVertices, arcs];
};
export default subgraph;
