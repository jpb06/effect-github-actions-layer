# effect-github-actions-layer

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://github.dev/jpb06/effect-github-actions-layer)
![Last commit](https://img.shields.io/github/last-commit/jpb06/effect-github-actions-layer?logo=git)
![npm downloads](https://img.shields.io/npm/dw/effect-github-actions-layer?logo=npm&logoColor=red&label=npm%20downloads)
![npm bundle size](https://img.shields.io/bundlephobia/min/effect-github-actions-layer)

An effect layer to interact with [github actions toolkit](https://github.com/actions/toolkit).

<!-- readme-package-icons start -->

<p align="left"><a href="https://www.typescriptlang.org/docs/" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TypeScript.svg" /></a>&nbsp;<a href="https://nodejs.org/en/docs/" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/NodeJS-Dark.svg" /></a>&nbsp;<a href="https://bun.sh/docs" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Bun-Dark.svg" /></a>&nbsp;<a href="https://biomejs.dev/guides/getting-started/" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Biome-Dark.svg" /></a>&nbsp;<a href="https://www.effect.website/docs/quickstart" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Effect-Dark.svg" /></a></p>

<!-- readme-package-icons end -->

## ⚡ Quick start

### 🔶 Install

```bash
npm i effect-github-actions-layer
# or
pnpm i effect-github-actions-layer
# or
bun i effect-github-actions-layer
```

### 🔶 Use the layer

```typescript
import { Effect, Layer, pipe } from 'effect';

import {
  GithubActionsLayer,
  GithubActionsLayerLive,
} from 'effect-github-actions-layer';

const task = pipe(
  GithubActionsLayer.exec('ls -la'),
  Effect.provide(GithubActionsLayerLive)
);
```

## ⚡ API

### 🔶 [@actions/core - inputs/outputs](https://github.com/actions/toolkit/tree/main/packages/core#inputsoutputs)

| function                                   | description                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------- |
| [`exportVariable`](#-exportVariable)       | Export a variable for next steps environement                             |
| [`setOutput`](#-setOutput)                 | Make the action return a specific output, available for use in next steps |
| [`getBooleanInput`](#-getBooleanInput)     | Get a boolean input as per yaml spec                                      |
| [`getInput`](#-getInput)                   | Create a string input                                                     |
| [`getMultilineInput`](#-getMultilineInput) | Create a multiline string input                                           |

#### 🧿 `exportVariable`

```typescript
type exportVariable = (
  name: string,
  value: unknown
) => Effect.Effect<void, GithubActionsLayerError, GithubActionsOps>;
```

#### 🧿 `setOutput`

```typescript
type setOutput = (
  name: string,
  value: unknown
) => Effect<void, GithubActionsLayerError, GithubActionsOps>;
```

#### 🧿 `getBooleanInput`

```typescript
type getBooleanInput = (
  name: string,
  options?: InputOptions
) => Effect<boolean, GithubActionsLayerError, GithubActionsOps>;
```

#### 🧿 `getInput`

```typescript
type getInput = (
  name: string,
  options?: InputOptions
) => Effect<string, GithubActionsLayerError, GithubActionsOps>;
```

#### 🧿 `getMultilineInput`

```typescript
type getMultilineInput = (
  name: string,
  options?: InputOptions
) => Effect<string[], GithubActionsLayerError, GithubActionsOps>;
```

### 🔶 [@actions/core - exit codes](https://github.com/actions/toolkit/tree/main/packages/core#exit-codes)

| function                   | description                                   |
| -------------------------- | --------------------------------------------- |
| [`setFailed`](#-setFailed) | Report an action failure and end the workflow |

#### 🧿 `setFailed`

```typescript
type setFailed = (
  message: string
) => Effect<void, GithubActionsLayerError, GithubActionsOps>;
```

### 🔶 [@actions/core - action state](https://github.com/actions/toolkit/tree/main/packages/core#action-state)

| function                   | description                                    |
| -------------------------- | ---------------------------------------------- |
| [`saveState`](#-saveState) | Save state to be used within an action wrapper |
| [`getState`](#-getState)   | Get wrapper state                              |

#### 🧿 `saveState`

```typescript
type saveState = (
  name: string,
  value: unknown
) => Effect<void, GithubActionsLayerError, GithubActionsOps>;
```

#### 🧿 `getState`

```typescript
type getState = (
  name: string
) => Effect<string, GithubActionsLayerError, GithubActionsOps>;
```

### 🔶 [@actions/core - logging](https://github.com/actions/toolkit/tree/main/packages/core#logging)

| function               | description                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`isDebug`](#-isDebug) | Check whether run is in debug mode                                                                                                                       |
| [`debug`](#-debug)     | Create a debug level log ([not visible by default](https://github.com/actions/toolkit/blob/main/docs/action-debugging.md#how-to-access-step-debug-logs)) |
| [`info`](#-info)       | Create an info level log                                                                                                                                 |
| [`warning`](#-warning) | Create a warning level log                                                                                                                               |

#### 🧿 `isDebug`

```typescript
type isDebug = () => Effect<boolean, GithubActionsLayerError, GithubActionsOps>;
```

#### 🧿 `debug`

```typescript
type debug = (
  message: string
) => Effect<void, GithubActionsLayerError, GithubActionsOps>;
```

#### 🧿 `info`

```typescript
type info = (
  message: string
) => Effect<void, GithubActionsLayerError, GithubActionsOps>;
```

#### 🧿 `warning`

```typescript
type warning = (
  message: string
) => Effect<void, GithubActionsLayerError, GithubActionsOps>;
```

### 🔶 [@actions/exec](https://github.com/actions/toolkit/tree/main/packages/exec)

| function         | description                          |
| ---------------- | ------------------------------------ |
| [`exec`](#-exec) | cross-platform execution of commands |

#### 🧿 `exec`

```typescript
type exec = (
  commandLine: string,
  args?: string[],
  options?: ExecOptions
) => Effect<number, GithubActionsLayerError, GithubActionsOps>;
```

### 🔶 [@actions/github](https://github.com/actions/toolkit/tree/main/packages/github)

| function                     | description                    |
| ---------------------------- | ------------------------------ |
| [`getContext`](#-getContext) | Get the current action context |

#### 🧿 `getContext`

```typescript
type getContext = () => Effect<
  Context,
  GithubActionsLayerError,
  GithubActionsOps
>;
```
