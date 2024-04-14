import { VertexSet } from "./VertexSet";
export const union = (...sets: readonly VertexSet[]): VertexSet => {
  const result = new Set<number>();
  sets.forEach((set) => [...set].forEach((v) => result.add(v)));
  return result;
};
