/* eslint-disable operator-linebreak */
import * as React from 'react';

export interface DisplayOnBrowserMountProps {
  /**
   * The content
   */
  children: React.ReactNode;

  /**
   * Array of dependencies.
   * It can be used to optimize behaviour to support both SSG/SSR universally with a different behaviour based on the rendering mode.
   * If any deps is provided, then it'll check if any is null-ish (undefined/null).
   *  If so, it will render "null" and trigger a re-render, because in such case we consider the deps aren't fulfilled.
   *  If all deps are defined, then we render the children directly because we consider we don't need to wait (optimisation, no unnecessary re-render)
   */
  deps?: React.DependencyList;
}

/**
 * The `DisplayOnBrowserMount` component is used to properly handle expected differences between server and browser rendering.
 * Helps to avoid "Text content did not match" errors, during React rehydration.
 *
 * Note: Use this helper to avoid rendering small UI (presentational) components that depend on browser-related data (e.g: localStorage, cookie, session-related data, etc.)
 *  Do not use this helper to avoid rendering big react Providers, or components who define big part of your UI layout
 *
 * @see https://joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
 * @see https://joshwcomeau.com/react/the-perils-of-rehydration/#two-pass-rendering
 */
export const DisplayOnBrowserMount = (props: DisplayOnBrowserMountProps): JSX.Element | null => {
  const { children, deps = [] } = props;
  // If any dep isn't defined, then it will render "null" first, and then trigger a re-render
  const isAnyDepsNullish = deps.length
    ? // If any deps was provided, check if any is null-ish
      deps.some((dependency: unknown): boolean => dependency === null || typeof dependency === 'undefined')
    : // If no dep is provided, then it should render "null" first anyway, and then trigger a re-render
      true;

  const [hasMounted, setHasMounted] = React.useState<boolean>(!isAnyDepsNullish);

  React.useEffect(() => {
    if (isAnyDepsNullish) {
      setHasMounted(true);
    }
  }, [isAnyDepsNullish]);

  if (!hasMounted) {
    return null;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
