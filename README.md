# Simple Digraph

Library with utilities for directed graphs with numerical vertices.

### Prerequisites

This project requires `npm` or `yarn`.

## Usage

### Creating a directed graph

```javascript
import { createGraph } from "simple-digraph";
const graph = createGraph(
  [
    [1, 2],
    [2, 3],
  ],
  new Set([4])
);
console.log(JSON.stringify([[...graph[0]], [...graph[1].values()]]));
// [[1,2,3,4],[[1,2],[2,3]]]
```

A convenience method, `createAcyclicGraph`, will create a graph but throw an error if there are any cycles.

```javascript
import { createAcyclicGraph } from "simple-digraph";
const graph = createAcyclicGraph([
  [1, 2],
  [2, 1],
]); // Throws error!
```

### Immediate Predecessors/Successors

```javascript
import {
  createGraph,
  immediatePredecessors,
  immediateSuccessors,
} from "simple-digraph";
const graph = createGraph([
  [1, 3],
  [2, 3],
  [1, 4],
]);
const parents = immediatePredecessors(graph, new Set([3]));
console.log(parents);
// Set(2) {1, 2}
const children = immediateSuccessors(graph, new Set([1]));
console.log(children);
// Set(2) {3, 4}
```

### Sinks/Sources

```javascript
import { createGraph, sinks } from "simple-digraph";
const graph = createGraph([
  [1, 3],
  [2, 3],
]);
const terminals = sinks(graph);
console.log(terminals);
// Set(1) {3}
const initials = sources(graph);
console.log(initials);
// Set(2) {1, 2}
```

### Subgraph

```javascript
import { createGraph, subgraph } from "simple-digraph";
const graph = createGraph([
  [1, 3],
  [2, 3],
]);
const partial = subgraph(graph, new Set([1, 3]));
console.log(JSON.stringify([[...partial[0]], [...partial[1].values()]]));
// [[1,3],[[1,3]]]
```

### Transitive Closure

```javascript
import { createGraph, transitiveClosure } from "simple-digraph";
const graph = createGraph([
  [1, 2],
  [2, 3],
]);
const closure = transitiveClosure(graph, new Set([1, 3]));
console.log(JSON.stringify([[...closure[0]], [...closure[1].values()]]));
// [[1,2,3],[[1,2],[1,3],[2,3]]]
```

### Transitive Reduction

```javascript
import { createGraph, transitiveReduction } from "simple-digraph";
const graph = createGraph([
  [1, 2],
  [1, 3],
  [2, 3],
]);
const closure = transitiveReduction(graph, new Set([1, 3]));
console.log(JSON.stringify([[...closure[0]], [...closure[1].values()]]));
// [[1,2,3],[[1,2],[2,3]]]
```

## Running the tests

To run unit tests, use:

```shell
yarn test
```

## Linting

To check linting, use:

```shell
yarn lint
```

To fix some errors while linting, use:

```shell
yarn format && yarn lint --fix
```

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **T. Michael Keesey** - _Creator_ - [keesey](https://github.com/keesey)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
