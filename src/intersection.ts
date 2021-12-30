import { VertexSet } from "./VertexSet";
import EMPTY_SET from "./EMPTY_SET";

export const intersection = (...sets: readonly VertexSet[]): VertexSet => {
  if (!sets.length) {
    return EMPTY_SET;
  }
  const otherSets = sets.slice(1);
  return new Set(
    [...sets[0].values()].filter((v) =>
      otherSets.every((otherSet) => otherSet.has(v))
    )
  );
};
export default intersection;
