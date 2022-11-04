import { Stack } from '@chakra-ui/react';
import type { FC } from 'react';

import { UsersGridComponent, UsersResultComponent } from '@/components/UsersComponent';
import { useCustomUsersQuery } from '@/hooks';

interface IUsersComponentProps {}

export const UsersComponent: FC<IUsersComponentProps> = () => {
  const { users, isLoading } = useCustomUsersQuery();

  return (
    <Stack my={6}>
      <UsersGridComponent>
        <UsersResultComponent isLoading={isLoading} users={users} />
      </UsersGridComponent>
    </Stack>
  );
};
