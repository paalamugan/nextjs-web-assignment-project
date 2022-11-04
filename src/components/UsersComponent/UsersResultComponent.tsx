import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import type { FC } from 'react';

import type { IUserApiResponse } from '@/types/ApiResponse';

import { UserCardBox, UserCardBoxSkeleton } from './UserCardBox';

interface IUsersResultComponentProps {
  isLoading: boolean;
  users: IUserApiResponse[] | undefined;
}

const SkeletonLoaderContainer = () => {
  return (
    <SimpleGrid minChildWidth="280px" spacing={8}>
      {Array.from({ length: 6 }, (_, i) => (
        <UserCardBoxSkeleton key={i} />
      ))}
    </SimpleGrid>
  );
};

const NoDataFound = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading size="xl">No data found.</Heading>
    </Box>
  );
};

export const UsersResultComponent: FC<IUsersResultComponentProps> = ({ users, isLoading }) => {
  if (isLoading) return <SkeletonLoaderContainer />;
  if (!users?.length) return <NoDataFound />;

  return (
    <SimpleGrid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" spacing={8}>
      {users.map((user) => (
        <UserCardBox key={user.id} {...user} />
      ))}
    </SimpleGrid>
  );
};
