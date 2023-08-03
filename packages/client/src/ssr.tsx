import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
// import { StaticRouter } from 'react-router-dom';
// import { StaticRouterContext } from 'react-router';
import { Provider as ReduxProvider } from 'react-redux';
// import { configureStore } from './store/rootStore';
// import { getInitialState } from './store/getInitialState';
import App from './App';

// В этой middleware мы формируем первичное состояние приложения на стороне сервера
// Попробуйте её подебажить, чтобы лучше разобраться, как она работает
export default (req: Request, res: Response) => {
  // const location = req.url;
  // const context: StaticRouterContext = {};
  // const { store } = configureStore(getInitialState(location), location);

  const tsx = (
    // <ReduxProvider store={store}>
    //     <StaticRouter context={context} location={location}>
    <App />
    //     </StaticRouter>
    // </ReduxProvider>
  );
  const reactHtml = renderToString(tsx);
  // const reduxState = store.getState();

  // if (context.url) {
  //     res.redirect(context.url);
  //     return;
  // }

  // res.status(context.statusCode || 200).send(getHtml(reactHtml, reduxState));
  res.status(200).send(getHtml(reactHtml));
};

function getHtml(reactHtml: string) {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="google-site-verification" content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="shortcut icon" type="image/png" href="/images/favicon.png">
            <title>Sneakers shop</title>
            <link href="/main.css" rel="stylesheet">
        </head>
        <body>
            <div id="root">${reactHtml}</div>
            <script src="/main.js"></script>
        </body>
        </html>
    `;
}
