import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserTypeProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};
