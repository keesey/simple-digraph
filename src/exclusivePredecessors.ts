import difference from "./difference";
import { Digraph } from "./Digraph";
import predecessorIntersection from "./predecessorIntersection";
import predecessorUnion from "./predecessorUnion";
import { VertexSet } from "./VertexSet";
export const exclusivePredecessors = (
  graph: Digraph,
  internal: VertexSet,
  external: VertexSet
): VertexSet =>
  difference(
    predecessorIntersection(graph, internal),
    predecessorUnion(graph, external)
  );
export default exclusivePredecessors;
