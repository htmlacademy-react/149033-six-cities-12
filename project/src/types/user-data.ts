import { User } from './user';

export type UserData = User & {
  email: string;
  token: string;
};
