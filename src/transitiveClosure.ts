import { Arc } from "./Arc";
import { ArcSet } from "./ArcSet";
import { Digraph } from "./Digraph";
import { getArcKey } from "./getArcKey";
const adjacencyMatrix = (vertexList: number[], arcs: ArcSet) => {
  const n = vertexList.length;
  const matrix = new Array<boolean[]>(n);
  if (n > 0) {
    const basicRow = new Array<boolean>(n);
    for (let i = 0; i < n; ++i) {
      basicRow[i] = false;
    }
    const indices = new Map<number, number>();
    vertexList.forEach((vertex, i) => {
      matrix[i] = basicRow.concat();
      indices.set(vertex, i);
    });
    arcs.forEach((arc) => {
      const headIndex = indices.get(arc[0]) || 0;
      const tailIndex = indices.get(arc[1]) || 0;
      matrix[headIndex][tailIndex] = true;
    });
  }
  return matrix;
};
export const transitiveClosure = (graph: Digraph): Digraph => {
  const n = graph[0].size;
  const vertexList = Array.from(graph[0].values());
  const closureMatrix = adjacencyMatrix(vertexList, graph[1]);
  for (let k = 0; k < n; ++k) {
    for (let i = 0; i < n; ++i) {
      if (closureMatrix[i][k]) {
        for (let j = 0; j < n; ++j) {
          closureMatrix[i][j] =
            closureMatrix[i][j] || (closureMatrix[i][k] && closureMatrix[k][j]);
        }
      }
    }
  }
  const arcs = new Map<string, Arc>();
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (closureMatrix[i][j]) {
        const arc: Arc = [vertexList[i], vertexList[j]];
        arcs.set(getArcKey(arc), arc);
      }
    }
  }
  return [graph[0], arcs];
};
