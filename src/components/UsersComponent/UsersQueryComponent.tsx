import type { FC } from 'react';
import { useEffect } from 'react';

import { useGetUsersQuery } from '@/redux/services/users';

import { UsersResultComponent } from './UsersResultComponent';

interface IUsersQueryComponentProps {
  setTotalCount: (totalCount: number) => void;
}

export const UsersQueryComponent: FC<IUsersQueryComponentProps> = ({ setTotalCount }) => {
  const { data, isLoading } = useGetUsersQuery();

  useEffect(() => {
    if (isLoading) return;
    setTotalCount(data?.totalCount || 0);
  }, [isLoading]);

  return <UsersResultComponent isLoading={isLoading} users={data?.users} />;
};
