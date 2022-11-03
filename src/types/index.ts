import type ISession from './session';
import type IUser from './user';

export interface IAuthState {
  user: IUser | null;
  session: ISession | null;
}
