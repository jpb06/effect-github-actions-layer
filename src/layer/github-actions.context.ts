import type { InputOptions } from '@actions/core';
import type { ExecOptions } from '@actions/exec';
import { type Effect, Context as EffectContext } from 'effect';

import type { GithubActionsLayerError } from '@errors';
import type { GithubContext } from '@types';

export interface GithubActionsInterface {
  readonly debug: (
    message: string,
  ) => Effect.Effect<void, GithubActionsLayerError>;
  readonly exec: (
    commandLine: string,
    args?: string[],
    options?: ExecOptions,
  ) => Effect.Effect<number, GithubActionsLayerError, never>;
  readonly exportVariable: (
    name: string,
    value: unknown,
  ) => Effect.Effect<void, GithubActionsLayerError>;
  readonly getBooleanInput: (
    name: string,
    options?: InputOptions,
  ) => Effect.Effect<boolean, GithubActionsLayerError>;
  readonly getContext: () => Effect.Effect<
    GithubContext,
    GithubActionsLayerError
  >;
  readonly getInput: (
    name: string,
    options?: InputOptions,
  ) => Effect.Effect<string, GithubActionsLayerError>;
  readonly getMultilineInput: (
    name: string,
    options?: InputOptions,
  ) => Effect.Effect<string[], GithubActionsLayerError>;
  readonly getState: (
    name: string,
  ) => Effect.Effect<string, GithubActionsLayerError>;
  readonly info: (
    message: string,
  ) => Effect.Effect<void, GithubActionsLayerError>;
  readonly isDebug: () => Effect.Effect<boolean, GithubActionsLayerError>;
  readonly saveState: (
    name: string,
    value: unknown,
  ) => Effect.Effect<void, GithubActionsLayerError>;
  readonly setFailed: (
    message: string,
  ) => Effect.Effect<void, GithubActionsLayerError>;
  readonly setOutput: (
    name: string,
    value: unknown,
  ) => Effect.Effect<void, GithubActionsLayerError>;
  readonly warning: (
    message: string,
  ) => Effect.Effect<void, GithubActionsLayerError>;
}

export const GithubActions =
  EffectContext.GenericTag<GithubActionsInterface>('github-actions');
export type GithubActionsLayer = (typeof GithubActions)['Service'];
