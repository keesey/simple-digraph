import { createGraph } from ".";
import { Arc } from "./Arc";
import { Digraph } from "./Digraph";
import isCyclic from "./isCyclic";
export const createAcyclicGraph = (
  arcs: Iterable<Arc>,
  extraVertices?: Iterable<number>
): Digraph => {
  const graph = createGraph(arcs, extraVertices);
  if (isCyclic(graph)) {
    throw new Error("Cycle detected.");
  }
  return graph;
};
export default createAcyclicGraph;
