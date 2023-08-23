import {yandexProxy, yandexCheckAuthorization} from 'server/api/auth';
import type {ViteDevServer} from 'vite';
import {createServer as createViteServer} from 'vite';
import cors from 'cors';
import express from 'express';
import path from 'path';

import {forumApi} from 'server/api/forum';

import {getSsrPath, ssrContent} from './ssr';

import cookieParser from 'cookie-parser';

export async function startServer(isDev: boolean, port: number) {
  const app = express();
  app.use(cors());

    app.use('/assets', express.static(path.resolve(distPath, 'assets')));
  }

  app.use('/api/v2', yandexProxy());

  app.use('/api/forum', async (req, res) => {
    try {
      const authUserData = await yandexCheckAuthorization(req);
      if (!authUserData.isAuth) {
        res.sendStatus(403);
        return;
      }
      app.use(express.json());
      await forumApi(req, res);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  app.use('*', cookieParser() as any, async (req, res, next) => {
    const requestType = req.method;
    if (requestType !== 'GET') {
      res.sendStatus(500);
    }
    try {
      const url = req.originalUrl;
      const html = await ssrContent(vite, url, isDev);
    }
