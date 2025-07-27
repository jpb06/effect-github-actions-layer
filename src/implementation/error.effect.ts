import { type AnnotationProperties, error } from '@actions/core';
import { Effect, pipe } from 'effect';

import { GithubActionsLayerError } from '@errors';

export const errorEffect = (
  message: string,
  properties?: AnnotationProperties,
) =>
  pipe(
    Effect.try({
      try: () => error(message, properties),
      catch: (e) =>
        new GithubActionsLayerError({
          cause: e,
        }),
    }),
    Effect.withSpan('github-actions-layer/error', {
      attributes: {
        message,
        properties,
      },
    }),
  );
