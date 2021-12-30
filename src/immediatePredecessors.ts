import { Digraph } from "./Digraph";
export const immediatePredecessors = (
  graph: Digraph,
  vertices: ReadonlySet<number>
) => {
  const prcs = new Set<number>();
  graph[1].forEach((arc) => {
    if (vertices.has(arc[1])) {
      prcs.add(arc[0]);
    }
  });
  return prcs as ReadonlySet<number>;
};
export default immediatePredecessors;
