# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [4.2.3] - 2022-09-05
### Fixed
- readme.

## [4.2.2] - 2022-07-30
### Fixed
- added types to packge.json
- readme.

## [4.2.1] - 2022-05-30
### Fixed
- added push & pop to ts types.

## [4.2.0] - 2022-05-30
### Added
- push & pop as synonyms for enqueue & dequeue

## [4.1.4] - 2022-05-15
### Fixed
- README

## [4.1.3] - 2021-06-20
### Fixed
- index.d.ts

## [4.1.2] - 2021-06-20
### Fixed
- export.

## [4.1.1] - 2021-06-14
### Fixed
- README.

## [4.1.0] - 2021-06-13
### Added
- typescript.

## [4.0.0] - 2021-01-02
### Changed
- `.enqueue` can now chain other queue methods.
- named export for queue class.

### Fixed
- readme

## [3.1.4] - 2020-12-27
### Fixed
- jsdoc
- readme

## [3.1.3] - 2020-04-03
### Fixed
- .npmignore

## [3.1.2] - 2020-04-02
### Fixed
- README

## [3.1.1] - 2020-04-02
### Fixed
- README & jsdoc

## [3.1.0] - 2019-12-28
### Added
- `.clone()` to create a shallow copy of the queue.
- Enable creating the queue from an existing list
  - `new Queue(list)` enable passing a list in the constructor.
  - `Queue.fromArray(list)` static function.
