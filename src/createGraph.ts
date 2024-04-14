import { Arc } from "./Arc";
import { Digraph } from "./Digraph";
import { getArcKey } from "./getArcKey";
export const createGraph = (
  arcs: Iterable<Arc>,
  extraVertices?: Iterable<number>,
): Digraph => {
  const vertices = new Set(extraVertices);
  const arcSet = new Map<string, Arc>();
  for (const arc of arcs) {
    vertices.add(arc[0]);
    vertices.add(arc[1]);
    arcSet.set(getArcKey(arc), arc);
  }
  return [vertices, arcSet];
};
