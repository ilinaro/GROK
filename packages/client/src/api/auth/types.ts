import { AxiosResponse } from 'axios';
import { LoginFormT } from '@fuature/login/components/LoginForm/LoginForm';
import { RegistrationFormT } from '@fuature/registration/components/RegistrationForm/RegistrationForm';
import { User } from '@store/types/userTypes';

export interface IAuthApi {
  login(data: LoginFormT): Promise<AxiosResponse<string, any>>;
  signup(data: RegistrationFormT): Promise<AxiosResponse<string, any>>;
  logout(): Promise<AxiosResponse<string, any>>;
}
