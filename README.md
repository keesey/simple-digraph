# Simple Digraph

Library with utilities for directed graphs with numerical vertices.

Initially created for [PhyloPic](http://phylopic.org). Functionality may be extended at a later date.

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
// [[1,2,3],[[1,2],[2,3]]]
```

### Immediate Predecessors

```javascript
import { createGraph, immediatePredecessors } from "simple-digraph";
const graph = createGraph([
  [1, 3],
  [2, 3],
]);
const parents = immediatePredecessors(graph, new Set([3]));
console.log(parents);
// Set(2) {1, 2}
```

### Sinks

```javascript
import { createGraph, sinks } from "simple-digraph";
const graph = createGraph([
  [1, 3],
  [2, 3],
]);
const terminals = sinks(graph);
console.log(terminals);
// Set(1) {3}
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
  [1, 3],
  [2, 3],
]);
const closure = transitiveClosure(graph, new Set([1, 3]));
console.log(JSON.stringify([[...closure[0]], [...closure[1].values()]]));
```

### Transitive Reduction

```javascript
import { createGraph, transitiveReduction } from "simple-digraph";
const graph = createGraph([
  [1, 3],
  [2, 3],
]);
const closure = transitiveReduction(graph, new Set([1, 3]));
console.log(JSON.stringify([[...closure[0]], [...closure[1].values()]]));
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
