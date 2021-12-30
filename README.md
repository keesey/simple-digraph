# Simple Digraph

Library with utilities for directed graphs with numerical vertices.

### Prerequisites

This project requires `npm` or `yarn`.

## Usage

### Sets

### Empty Set

As a convenience, an empty set is available as a constant:

```javascript
import { EMPTY_SET } from "simple-digraph";
console.log(EMPTY_SET);
// Set(0) {size: 0}
```

#### Subset/Superset

```javascript
import {
  isProperSubsetOf,
  isProperSupersetOf,
  isSubsetOf,
  isSupersetOf,
} from "simple-digraph";
console.log(isSubsetOf(new Set([1]), new Set([1, 2, 3])));
// true
console.log(isSubsetOf(new Set([1, 2, 3]), new Set([1, 2, 3])));
// true
console.log(isProperSubsetOf(new Set([1]), new Set([1, 2, 3])));
// true
console.log(isProperSubsetOf(new Set([1, 2, 3]), new Set([1, 2, 3])));
// false
console.log(isSupersetOf(new Set([1, 2, 3]), new Set([1])));
// true
console.log(isSupersetOf(new Set([1, 2, 3]), new Set([1, 2, 3])));
// true
console.log(isProperSupersetOf(new Set([1, 2, 3]), new Set([1])));
// true
console.log(isProperSupersetOf(new Set([1, 2, 3]), new Set([1, 2, 3])));
// false
```

#### Union

```javascript
import { union } from "simple-digraph";
console.log(union(new Set([1, 2]), new Set([2, 3]), new Set([4, 5])));
// Set(5) {1, 2, 3, 4, 5}
```

#### Intersection

```javascript
import { intersection } from "simple-digraph";
console.log(intersection(new Set([1, 2]), new Set([1, 3]), new Set([1, 4])));
// Set(1) {1}
```

#### Difference

```javascript
import { difference } from "simple-digraph";
console.log(difference(new Set([1, 2, 3]), new Set([3, 4, 5])));
// Set(2) {1, 2}
```

### Graphs

#### Creating a Directed Graph

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

##### Creating a Directed, Acyclic Graph

A convenience method, `createAcyclicGraph`, will create a graph but throw an error if there are any cycles.

```javascript
import { createAcyclicGraph } from "simple-digraph";
const graph = createAcyclicGraph([
  [1, 2],
  [2, 1],
]); // Throws error!
```

#### Detecting Cyclicity

```javascript
import { isCyclic } from "simple-digraph";
const graph = createGraph([
  [1, 2],
  [2, 1],
]);
console.log(isCyclic(graph));
// true
```

#### Sinks/Sources

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

#### Subgraph

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

#### Transitive Closure

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

#### Transitive Reduction

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

#### Immediate Predecessors/Successors

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

#### Maximal/Minimal

Defined [here](http://namesonnodes.org/ns/math/2009/index.html#def-Maximal) and [here](http://namesonnodes.org/ns/math/2009/index.html#def-Minimal).

```javascript
import { maximal, minimal } from "simple-digraph";
const graph = createGraph([
  [1, 2],
  [1, 3],
]);
console.log(maximal(graph, graph[0]));
// Set(2) {2, 3}
console.log(minimal(graph, graph[0]));
// Set(1) {1}
```

#### Predecessor/Successor Union

Defined [here](http://namesonnodes.org/ns/math/2009/index.html#def-PredecessorUnion) and [here](http://namesonnodes.org/ns/math/2009/index.html#def-SuccessorUnion).

```javascript
import { predecessorUnion, successorUnion } from "simple-digraph";
const graph = createGraph([
  [1, 2],
  [1, 3],
]);
console.log(predecessorUnion(graph, new Set([2, 3])));
// Set(3) {1, 2, 3}
console.log(successorUnion(graph, new Set([2, 3])));
// Set(3) {2, 3}
```

#### Predecessor/Successor Intersection

Defined [here](http://namesonnodes.org/ns/math/2009/index.html#def-PredecessorIntersection) and [here](http://namesonnodes.org/ns/math/2009/index.html#def-SuccessorIntersection).

```javascript
import { predecessorIntersection, successorIntersection } from "simple-digraph";
const graph = createGraph([
  [1, 2],
  [1, 3],
]);
console.log(predecessorIntersection(graph, new Set([2, 3])));
// Set(1) {1}
console.log(successorIntersection(graph, new Set([2, 3])));
// Set(0) {size: 0}
```

#### Exclusive Predecessors

Defined [here](http://namesonnodes.org/ns/math/2009/index.html#def-ExclusivePredecessors).

```javascript
import { createGraph, exclusivePredecessors } from "simple-digraph";
const graph = createGraph([
  [1, 2],
  [1, 3],
]);
const parents = exclusivePredecessors(graph, new Set([2]), new Set([3]));
console.log(parents);
// Set(1) {2}
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
