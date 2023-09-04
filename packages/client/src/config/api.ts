const getLocationHost = () => {
  return typeof location !== 'undefined' ? `${location.protocol}//${location.host}` : '';
};

export const API_CONFIG = {
  endpoint: `${getLocationHost()}/api/v2`,
  resources: `${getLocationHost()}/api/v2/resources`,
};

export const OAUTH_BASE_URL = 'https://oauth.yandex.ru/authorize';
