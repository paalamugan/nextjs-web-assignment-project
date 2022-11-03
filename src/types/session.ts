import type IUser from '@/types/user';

export default interface ISession {
  user?: IUser;
  id?: number;
  expiresAt: number | null;
  provider: string | null;
  token: string | null;
}
