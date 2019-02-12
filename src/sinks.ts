import { Digraph } from './Digraph';
export const sinks = (graph: Digraph) => {
    const vertices = new Set<number>(graph[0].values());
    graph[1].forEach((arc) => vertices.delete(arc[0]));
    return vertices as ReadonlySet<number>;
};
export default sinks;
