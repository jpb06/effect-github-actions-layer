import { debug } from '@actions/core';
import { Effect, pipe } from 'effect';

import { GithubActionsLayerError } from '@errors';

export const debugEffect = (message: string) =>
  pipe(
    Effect.try({
      try: () => debug(message),
      catch: (e) =>
        new GithubActionsLayerError({
          cause: e,
        }),
    }),
    Effect.withSpan('github-actions-layer/debug', {
      attributes: {
        message,
      },
    }),
  );
