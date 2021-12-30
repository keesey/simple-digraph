import { Arc } from "./Arc";
import { Digraph } from "./Digraph";
import getArcKey from "./getArcKey";
import transitiveClosure from "./transitiveClosure";
export const transitiveReduction = (graph: Digraph) => {
  const closure = transitiveClosure(graph);
  const arcs = new Map<string, Arc>(closure[1]);
  closure[0].forEach((x) => {
    closure[0].forEach((y) => {
      if (x !== y) {
        closure[0].forEach((z) => {
          if (x !== z) {
            const arcKey = getArcKey([x, z]);
            if (
              arcs.has(arcKey) &&
              arcs.has(getArcKey([x, y])) &&
              arcs.has(getArcKey([y, z]))
            ) {
              arcs.delete(arcKey);
            }
          }
        });
      }
    });
  });
  return [graph[0], arcs] as Digraph;
};
export default transitiveReduction;
