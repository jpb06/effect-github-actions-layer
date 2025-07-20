import { setOutput } from '@actions/core';
import { Effect, pipe } from 'effect';

import { GithubActionsLayerError } from '@errors';

export const setOutputEffect = (name: string, value: unknown) =>
  pipe(
    Effect.try({
      try: () => setOutput(name, value),
      catch: (e) =>
        new GithubActionsLayerError({
          cause: e,
        }),
    }),
    Effect.withSpan('github-actions-layer/set-output', {
      attributes: {
        name,
        value,
      },
    }),
  );
