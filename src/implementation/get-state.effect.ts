import { getState } from '@actions/core';
import { Effect, pipe } from 'effect';

import { GithubActionsLayerError } from '@errors';

export const getStateEffect = (name: string) =>
  pipe(
    Effect.try({
      try: () => getState(name),
      catch: (e) =>
        new GithubActionsLayerError({
          cause: e,
        }),
    }),
    Effect.withSpan('github-actions-layer/get-state', {
      attributes: {
        name,
      },
    }),
  );
