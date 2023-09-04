import { User } from '@store/types/userTypes';

export interface UserRepository {
  getCurrentUser(): Promise<User>;
}

export class UserService {
  constructor(private _repo: UserRepository) {}

  async getCurrentUser() {
    return this._repo.getCurrentUser();
  }
}
