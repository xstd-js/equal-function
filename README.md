[![npm (scoped)](https://img.shields.io/npm/v/@xstd/equal-function.svg)](https://www.npmjs.com/package/@xstd/equal-function)
![npm](https://img.shields.io/npm/dm/@xstd/equal-function.svg)
![NPM](https://img.shields.io/npm/l/@xstd/equal-function.svg)
![npm type definitions](https://img.shields.io/npm/types/@xstd/equal-function.svg)
![coverage](https://img.shields.io/badge/coverage-100%25-green)
![AI generation](https://img.shields.io/badge/AI_generation-medium-yellow)

<picture>
  <source height="64" media="(prefers-color-scheme: dark)" srcset="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-dark.png?raw=true">
  <source height="64" media="(prefers-color-scheme: light)" srcset="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-light.png?raw=true">
  <img height="64" alt="Shows a black logo in light color mode and a white one in dark color mode." src="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-light.png?raw=true">
</picture>

## @xstd/equal-function

Equality-check utilities.

## 📦 Installation

```shell
yarn add @xstd/equal-function
# or
npm install @xstd/equal-function --save
```

## 📜 Documentation

This library provides utilities to define and share value equality checks:

- [`EqualFunction`](#equalfunction) - the type of a function checking the equality of two values
- [`EQUAL_FUNCTION_STRICT_EQUAL`](#equal_function_strict_equal) - strict equality (`===`)

### EqualFunction

A function that returns `true` when the two given values are considered equal, `false` otherwise.

Unlike `Object.is`, an `EqualFunction` is free to define its own equality rules
(e.g. strict equality, comparison by length, deep equality, ...).

```ts
import type { EqualFunction } from '@xstd/equal-function';

const equalByLength: EqualFunction<string> = (a, b) => a.length === b.length;

equalByLength('foo', 'bar'); // true
equalByLength('foo', 'quux'); // false
```

### Built-in

Ready-to-use `EqualFunction`s for the most common equality rules.

#### `EQUAL_FUNCTION_STRICT_EQUAL`

An `EqualFunction` based on the strict equality operator (`===`):
values are equal when they share the same primitive value,
or when they reference the same object or function.

```ts
import { EQUAL_FUNCTION_STRICT_EQUAL } from '@xstd/equal-function';

EQUAL_FUNCTION_STRICT_EQUAL('foo', 'foo'); // true
EQUAL_FUNCTION_STRICT_EQUAL(1, '1'); // false
EQUAL_FUNCTION_STRICT_EQUAL(NaN, NaN); // false

const object = {};
EQUAL_FUNCTION_STRICT_EQUAL(object, object); // true
EQUAL_FUNCTION_STRICT_EQUAL(object, {}); // false
```
