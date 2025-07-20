import type { InputOptions } from '@actions/core';
import type { ExecOptions } from '@actions/exec';

import { tapLayer } from '@effects';

import { GithubActions } from './github-actions.context.js';

export const GithubActionsLayer = {
  debug: (message: string) =>
    tapLayer(GithubActions, ({ debug }) => debug(message)),
  exec: (commandLine: string, args?: string[], options?: ExecOptions) =>
    tapLayer(GithubActions, ({ exec }) => exec(commandLine, args, options)),
  exportVariable: (name: string, value: unknown) =>
    tapLayer(GithubActions, ({ exportVariable }) =>
      exportVariable(name, value),
    ),
  getBooleanInput: (name: string, options?: InputOptions) =>
    tapLayer(GithubActions, ({ getBooleanInput }) =>
      getBooleanInput(name, options),
    ),
  getContext: () => tapLayer(GithubActions, ({ getContext }) => getContext()),
  getInput: (name: string, options?: InputOptions) =>
    tapLayer(GithubActions, ({ getInput }) => getInput(name, options)),
  getMultilineInput: (name: string, options?: InputOptions) =>
    tapLayer(GithubActions, ({ getMultilineInput }) =>
      getMultilineInput(name, options),
    ),
  getState: (name: string) =>
    tapLayer(GithubActions, ({ getState }) => getState(name)),
  info: (message: string) =>
    tapLayer(GithubActions, ({ info }) => info(message)),
  isDebug: () => tapLayer(GithubActions, ({ isDebug }) => isDebug()),
  saveState: (name: string, value: unknown) =>
    tapLayer(GithubActions, ({ saveState }) => saveState(name, value)),
  setFailed: (message: string) =>
    tapLayer(GithubActions, ({ setFailed }) => setFailed(message)),
  setOutput: (name: string, value: unknown) =>
    tapLayer(GithubActions, ({ setOutput }) => setOutput(name, value)),
  warning: (message: string) =>
    tapLayer(GithubActions, ({ warning }) => warning(message)),
};
