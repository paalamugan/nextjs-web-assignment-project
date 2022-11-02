export interface ISession {
  provider: string | null;
  token: string | null;
  expiresAt: number | null;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: string;
}

export interface IAuthState {
  user: IUser | null;
  session: ISession | null;
}
