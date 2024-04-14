import { Digraph } from "./Digraph";
import findCyclicVertex from "./findCyclicVertex";
export const isCyclic = (graph: Digraph): boolean => {
  return findCyclicVertex(graph) !== null;
};
export default isCyclic;
