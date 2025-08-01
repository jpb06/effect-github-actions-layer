import { type AnnotationProperties, warning } from '@actions/core';
import { Effect, pipe } from 'effect';

import { GithubActionsLayerError } from '@errors';

export const warningEffect = (
  message: string,
  properties?: AnnotationProperties,
) =>
  pipe(
    Effect.try({
      try: () => warning(message, properties),
      catch: (e) =>
        new GithubActionsLayerError({
          cause: e,
        }),
    }),
    Effect.withSpan('github-actions-layer/warning', {
      attributes: {
        message,
        properties,
      },
    }),
  );
