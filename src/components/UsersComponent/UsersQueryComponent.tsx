import type { FC } from 'react';

import { useGetUsersQuery } from '@/redux/services/users';

import { UsersResultComponent } from './UsersResultComponent';

interface IUsersQueryComponentProps {}

export const UsersQueryComponent: FC<IUsersQueryComponentProps> = () => {
  const { data: users, isLoading } = useGetUsersQuery();

  return <UsersResultComponent isLoading={isLoading} users={users} />;
};
