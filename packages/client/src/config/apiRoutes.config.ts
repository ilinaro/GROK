const getLocationHost = () => {
  return typeof location !== 'undefined' ? `${location.protocol}//${location.host}` : '';
};

const getLocationOrigin = () => {
  return typeof location !== 'undefined' ? location.origin : '';
};

export const BASE_URL = 'https://ya-praktikum.tech/api/v2';
export const RESOURCE_URL = 'https://ya-praktikum.tech/api/v2/resources';
export const FORUM_API_URL = `${getLocationHost()}/api`;
export const REDIRECT_URI = getLocationOrigin();

export const auth = {
  signup: `${BASE_URL}/auth/signup`,
  signin: `${BASE_URL}/auth/signin`,
  user: `${BASE_URL}/auth/user`,
  logout: `${BASE_URL}/auth/logout`,
  oauthServiceId: `${BASE_URL}/oauth/yandex/service-id`,
  oauth: `${BASE_URL}/oauth/yandex`,
};

export const user = {
  setAvatar: `${BASE_URL}/user/profile/avatar`,
  changePassword: `${BASE_URL}/user/password`,
  profile: `${BASE_URL}/user/profile`,
};

export const game = {
  sendStatistics: `${BASE_URL}/leaderboard`,
  getStatistict: `${BASE_URL}/leaderboard/all`,
};

export const forum = {
  path: `${FORUM_API_URL}/forum`,
};

export const theme = {
  path: `${FORUM_API_URL}/theme`,
};
