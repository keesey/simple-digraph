import { VertexSet } from "./VertexSet";

export const difference = (a: VertexSet, b: VertexSet): VertexSet => {
  const result = new Set<number>();
  a.forEach((v) => {
    if (!b.has(v)) {
      result.add(v);
    }
  });
  return result;
};
