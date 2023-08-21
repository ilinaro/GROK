import { LoginFormT } from '@fuature/login/components/LoginForm/LoginForm';
import { IAuthApi } from './types';
import { axiosInstance } from '@api/axiosInstance';
import { auth } from '@config/apiRoutes.config';
import { RegistrationFormT } from '@fuature/registration/components/RegistrationForm/RegistrationForm';
import { UserRepository } from '@services/user.service';
import { ApiRepository } from '@repository/ApiRepository';

class AuthApi implements IAuthApi {
  constructor(private _userRepository: UserRepository) {}

  getCurrentUser() {
    return this._userRepository.getCurrentUser();
  }

  async login(loginData: LoginFormT) {
    const { data } = await axiosInstance.post<string>(auth.signin, loginData);
    return data;
  }

  async signup(registerData: RegistrationFormT) {
    const { data } = await axiosInstance.post<string>(auth.signup, registerData);
    return data;
  }

  async logout() {
    const { data } = await axiosInstance.post<string>(auth.logout);
    return data;
  }
}

export const authApi = new AuthApi(new ApiRepository());
