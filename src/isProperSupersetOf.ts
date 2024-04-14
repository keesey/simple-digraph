import { VertexSet } from "./VertexSet";
import { isProperSubsetOf } from "./isProperSubsetOf";
export const isProperSupersetOf = (a: VertexSet, b: VertexSet) =>
  isProperSubsetOf(b, a);
