import { context } from '@actions/github';
import { Effect, pipe } from 'effect';

import { GithubActionsLayerError } from '@errors';
import type { GithubContext } from '@types';

export const getContextEffect: () => Effect.Effect<
  GithubContext,
  GithubActionsLayerError
> = () =>
  pipe(
    Effect.try({
      try: () => context,
      catch: (e) =>
        new GithubActionsLayerError({
          cause: e,
        }),
    }),
    Effect.withSpan('github-actions-layer/get-context'),
  );
