import { VertexSet } from "./VertexSet";
import isSubsetOf from "./isSubsetOf";
export const isSupersetOf = (a: VertexSet, b: VertexSet) => isSubsetOf(b, a);
export default isSupersetOf;
