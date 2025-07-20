import { exportVariable } from '@actions/core';
import { Effect, pipe } from 'effect';

import { GithubActionsLayerError } from '@errors';

export const exportVariableEffect = (name: string, value: unknown) =>
  pipe(
    Effect.try({
      try: () => exportVariable(name, value),
      catch: (e) =>
        new GithubActionsLayerError({
          cause: e,
        }),
    }),
    Effect.withSpan('github-actions-layer/export-variable', {
      attributes: {
        name,
        value,
      },
    }),
  );
