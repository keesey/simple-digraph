import { VertexSet } from "./VertexSet";
export const isProperSubsetOf = (a: VertexSet, b: VertexSet): boolean => {
  if (a.size >= b.size) {
    return false;
  }
  return [...a].every((v) => b.has(v));
};
