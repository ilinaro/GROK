import httpService from './http.service';

const signin = async (loginData: any) => {
  try {
    const { data } = await httpService.post(`auth/signin`, loginData);
    return data;
  } catch (error) {
    throw new Error('userServiceGetError');
  }
};

const authService = {
  signin,
};

export default authService;
