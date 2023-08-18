import { AxiosResponse } from 'axios';
import { User } from '@store/types/userTypes';

export interface UserRepository {
  getCurrentUser(): Promise<AxiosResponse<User>>;
}

export class UserService {
  constructor(private _repo: UserRepository) {}

  getCurrentUser() {
    return this._repo.getCurrentUser();
  }
}
