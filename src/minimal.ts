import { Digraph } from "./Digraph";
import sources from "./sources";
import subgraph from "./subgraph";
export const minimal = (graph: Digraph, vertices: VertexSet): VertexSet =>
  sources(subgraph(graph, vertices));
export default minimal;
