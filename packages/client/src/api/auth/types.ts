import { LoginFormT } from '@fuature/login/components/LoginForm/LoginForm';
import { RegistrationFormT } from '@fuature/registration/components/RegistrationForm/RegistrationForm';

export interface IAuthApi {
  login(data: LoginFormT): Promise<string>;
  signup(data: RegistrationFormT): Promise<string>;
  logout(): Promise<string>;
}
