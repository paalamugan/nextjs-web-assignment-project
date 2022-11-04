import { Heading, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';

import { UsersGridComponent, UsersQueryComponent } from '@/components/UsersComponent';
import appConfig from '@/utils/appConfig';

interface IHomeComponentProps {}

export const HomeComponent: FC<IHomeComponentProps> = () => {
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
      <UsersGridComponent>
        <UsersQueryComponent />
      </UsersGridComponent>
    </Stack>
  );
};
