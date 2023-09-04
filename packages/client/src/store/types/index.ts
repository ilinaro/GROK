import { UserService } from '@services/user.service';
import { createStore } from '..';

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
