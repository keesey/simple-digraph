# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Deprecated

### Fixed

### Removed

### Security

## [1.1.1] - 2023-04-14

### Changed

- Upgraded dependencies.
- Using `vitest` instead of `mocha`.

### Fixed

- Build issues.

## [1.1.0] - 2023-04-14 [YANKED]

### Added

- New function: `findCyclicVertex()`.
- New `Error` subclass: `CycleError`.

### Changed

- The `createAcyclicGraph()` function now throws a `CycleError` if a cycle is detected.

## [1.0.1] - 2021-12-30

### Changed

- Updated year in `LICENSE.md`.

### Fixed

- Export issues for `index.ts`.

## [1.0.0] - 2021-12-30

### Added

- New functions: `createAcyclicGraph`, `difference`, `exclusivePredecessors`, `immediateSuccessors`, `intersection`, `isCyclic`, `isProperSubsetOf`, `isProperSupersetOf`, `isSubsetOf`, `isSupersetOf`, `maximal`, `minimal`, `predecessorIntersection`, `predecessorUnion`, `sources`, `successorIntersection`, `union`.
- New constant: `EMPTY_SET`.

## [0.1.7] - 2019-02-12

### Fixed

- Build issues.

## [0.1.6] - 2019-02-12

### Fixed

- Build issues.

## [0.1.5] - 2019-02-12

### Fixed

- Build issue.

## [0.1.4] - 2019-02-12

### Fixed

- Build issues.

## [0.1.3] - 2019-02-11

### Fixed

- Added `getArcKey` to exports.

## [0.1.2] - 2019-02-11

### Fixed

- More configuration and documentation issues.

## [0.1.1] - 2019-02-11

### Fixed

- Configuration issues.

## [0.1.0] - 2019-02-11

### Added

- Initial code (ported from `phylopic-api`) and documentation.
