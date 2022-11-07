import { Stack } from '@chakra-ui/react';
import type { FC } from 'react';

import { UsersGridComponent, UsersResultComponent } from '@/components/UsersComponent';
import { useCustomUsersQuery } from '@/hooks';

interface IUsersComponentProps {}

export const UsersComponent: FC<IUsersComponentProps> = () => {
  const { data, isLoading } = useCustomUsersQuery();

  return (
    <Stack my={6}>
      <UsersGridComponent totalCount={data.totalCount} isLoading={isLoading}>
        <UsersResultComponent isLoading={isLoading} users={data.users} />
      </UsersGridComponent>
    </Stack>
  );
};
