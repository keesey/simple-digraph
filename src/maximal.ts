import { Digraph } from "./Digraph";
import sinks from "./sinks";
import subgraph from "./subgraph";
export const maximal = (graph: Digraph, vertices: VertexSet): VertexSet =>
  sinks(subgraph(graph, vertices));
export default maximal;
