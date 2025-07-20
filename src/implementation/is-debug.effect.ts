import { isDebug } from '@actions/core';
import { Effect, pipe } from 'effect';

import { GithubActionsLayerError } from '@errors';

export const isDebugEffect = () =>
  pipe(
    Effect.try({
      try: () => isDebug(),
      catch: (e) =>
        new GithubActionsLayerError({
          cause: e,
        }),
    }),
    Effect.withSpan('github-actions-layer/is-debug'),
  );
