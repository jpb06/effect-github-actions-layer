import { saveState } from '@actions/core';
import { Effect, pipe } from 'effect';

import { GithubActionsLayerError } from '@errors';

export const saveStateEffect = (name: string, value: unknown) =>
  pipe(
    Effect.try({
      try: () => saveState(name, value),
      catch: (e) =>
        new GithubActionsLayerError({
          cause: e,
        }),
    }),
    Effect.withSpan('github-actions-layer/save-state', {
      attributes: {
        name,
        value,
      },
    }),
  );
