import { getBooleanInput, type InputOptions } from '@actions/core';
import { Effect, pipe } from 'effect';

import { GithubActionsLayerError } from '@errors';

export const getBooleanInputEffect = (name: string, options?: InputOptions) =>
  pipe(
    Effect.try({
      try: () => getBooleanInput(name, options),
      catch: (e) =>
        new GithubActionsLayerError({
          cause: e,
        }),
    }),
    Effect.withSpan('github-actions-layer/get-boolean-input', {
      attributes: {
        name,
        options,
      },
    }),
  );
