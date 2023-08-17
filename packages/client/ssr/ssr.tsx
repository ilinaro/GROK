import React from 'react';
import App from '../src/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { TSsrRenderProps } from './typing';

export const render: TSsrRenderProps = (url) => {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
};
