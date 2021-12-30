import { Digraph } from "./Digraph";
const getChildren = (graph: Digraph, vertex: number) => {
  const result = new Set<number>();
  for (const arc of graph[1].values()) {
    if (arc[0] === vertex) {
      result.add(arc[1]);
    }
  }
  return result;
};
const isCyclicVertex = (
  graph: Digraph,
  vertex: number,
  visited: Record<number, true | undefined>,
  stack: Record<number, true | undefined>
): boolean => {
  if (!visited[vertex]) {
    visited[vertex] = true;
    stack[vertex] = true;
    for (const child of getChildren(graph, vertex)) {
      if (
        child === vertex ||
        (!visited[child] && isCyclicVertex(graph, child, visited, stack)) ||
        stack[child]
      ) {
        return true;
      }
    }
  }
  delete stack[vertex];
  return false;
};
export const isCyclic = (graph: Digraph): boolean => {
  const visited: Record<number, true | undefined> = {};
  const stack: Record<number, true | undefined> = {};
  for (const vertex of graph[0]) {
    if (isCyclicVertex(graph, vertex, visited, stack)) {
      return true;
    }
  }
  return false;
};
export default isCyclic;
