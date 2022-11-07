import { Heading, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';

import { UsersGridComponent, UsersResultComponent } from '@/components/UsersComponent';
import { useGetUsersQuery } from '@/redux/services/users';
import appConfig from '@/utils/appConfig';

interface IHomeComponentProps {}

export const HomeComponent: FC<IHomeComponentProps> = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <Stack my={6}>
      <Heading
        as={'h1'}
        textAlign="center"
        fontWeight={600}
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
        lineHeight={'110%'}
        mb={6}
      >
        Welcome to{' '}
        <Text as={'span'} color={'primary'}>
          {appConfig.siteName}
        </Text>
      </Heading>
      <UsersGridComponent totalCount={data?.totalCount || 0} isLoading={isLoading}>
        <UsersResultComponent isLoading={isLoading} users={data?.users} />;
      </UsersGridComponent>
    </Stack>
  );
};
