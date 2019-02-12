import { ArcSet } from './ArcSet';
import { VertexSet } from './VertexSet';
export type Digraph = Readonly<[VertexSet, ArcSet]>;
