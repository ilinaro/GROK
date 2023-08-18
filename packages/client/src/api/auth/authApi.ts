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

  login(data: LoginFormT) {
    return axiosInstance.post<string>(auth.signin, data);
  }

  signup(data: RegistrationFormT) {
    return axiosInstance.post<string>(auth.signup, data);
  }

  logout() {
    return axiosInstance.post<string>(auth.logout);
  }
}

export const authApi = new AuthApi(new ApiRepository());
