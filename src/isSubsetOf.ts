import { VertexSet } from "./VertexSet";
export const isSubsetOf = (a: VertexSet, b: VertexSet): boolean => {
  if (a.size > b.size) {
    return false;
  }
  return [...a].every((v) => b.has(v));
};
export default isSubsetOf;
