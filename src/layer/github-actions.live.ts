import { Layer } from 'effect';

import {
  debugEffect,
  execEffect,
  exportVariableEffect,
  getBooleanInputEffect,
  getContextEffect,
  getInputEffect,
  getMultilineInputEffect,
  getStateEffect,
  infoEffect,
  isDebugEffect,
  saveStateEffect,
  setFailedEffect,
  setOutputEffect,
  warningEffect,
} from '@implementation';

import { GithubActions } from './github-actions.context.js';

export const GithubActionsLayerLive = Layer.succeed(GithubActions, {
  debug: debugEffect,
  exec: execEffect,
  exportVariable: exportVariableEffect,
  getContext: getContextEffect,
  getBooleanInput: getBooleanInputEffect,
  getInput: getInputEffect,
  getMultilineInput: getMultilineInputEffect,
  getState: getStateEffect,
  info: infoEffect,
  isDebug: isDebugEffect,
  saveState: saveStateEffect,
  setFailed: setFailedEffect,
  setOutput: setOutputEffect,
  warning: warningEffect,
});
