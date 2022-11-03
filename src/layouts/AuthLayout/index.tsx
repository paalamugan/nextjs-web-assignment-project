import { useSession } from 'next-auth/react';
import type { FC } from 'react';

interface IAuthLayout {
  children: React.ReactNode;
}
export const AuthLayout: FC<IAuthLayout> = ({ children }) => {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <h1>Authenticating...</h1>;
  }

  return <>{children}</>;
};
