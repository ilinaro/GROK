import { createProxyMiddleware } from 'http-proxy-middleware';
import type { RequestHandler } from 'http-proxy-middleware';
import { yandexEndpoint } from 'server/authMiddleware/constants';
import { filterCookies, yandexProxyResponseHandler } from 'server/authMiddleware/utils';

export const yandexProxyAll = (): RequestHandler => {
  return createProxyMiddleware({
    changeOrigin: true,
    cookieDomainRewrite: {
      '*': '',
    },
    target: yandexEndpoint,
    onProxyReq: (proxyReq, req) => {
      const filteredCookies = filterCookies(req);
      proxyReq.setHeader('cookie', filteredCookies);
    },
  });
};
export const yandexProxyUserInfoOnly = (): RequestHandler => {
  return createProxyMiddleware({
    changeOrigin: true,
    cookieDomainRewrite: {
      '*': '',
    },
    target: yandexEndpoint,
    onProxyReq: (proxyReq, req) => {
      const filteredCookies = filterCookies(req);
      proxyReq.setHeader('cookie', filteredCookies);
    },
    selfHandleResponse: true,
    onProxyRes: yandexProxyResponseHandler,
  });
};
