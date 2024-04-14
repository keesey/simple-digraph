import { createGraph, findCyclicVertex } from ".";
import { Arc } from "./Arc";
import { Digraph } from "./Digraph";
export class CycleError extends Error {
  constructor(
    message: string,
    public readonly vertex: number,
  ) {
    super(message);
  }
}
export const createAcyclicGraph = (
  arcs: Iterable<Arc>,
  extraVertices?: Iterable<number>,
): Digraph => {
  const graph = createGraph(arcs, extraVertices);
  const cyclicVertex = findCyclicVertex(graph);
  if (typeof cyclicVertex === "number") {
    throw new CycleError("Cycle detected.", cyclicVertex);
  }
  return graph;
};
