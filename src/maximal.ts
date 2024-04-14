import { Digraph } from "./Digraph";
import { sinks } from "./sinks";
import { subgraph } from "./subgraph";
import { VertexSet } from "./VertexSet";
export const maximal = (graph: Digraph, vertices: VertexSet): VertexSet =>
  sinks(subgraph(graph, vertices));
