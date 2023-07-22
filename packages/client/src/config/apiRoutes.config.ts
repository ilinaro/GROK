export const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export const auth = {
  signup: `${BASE_URL}/auth/signup`,
  signin: `${BASE_URL}/auth/signin`,
  user: `${BASE_URL}/auth/user`,
  logout: `${BASE_URL}/auth/logout`,
};

export const user = {
  setAvatar: `${BASE_URL}/user/profile/avatar`,
  changePassword: `${BASE_URL}/user/password`,
  profile: `${BASE_URL}/user/profile`,
};
