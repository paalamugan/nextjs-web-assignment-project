import {
  Avatar,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import type { FC } from 'react';

import type IUser from '@/types/user';

interface IUserProfileComponentProps {
  user: IUser;
}

export const UserProfileComponent: FC<IUserProfileComponentProps> = ({ user }) => {
  return (
    <Flex
      minH={'calc(100vh - 128px)'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }} textAlign="center">
          User Profile
        </Heading>
        <FormControl id="avatar" pb="30">
          <Stack direction={['column', 'row']} spacing={6} align="center" justify="center">
            <Center>
              <Avatar size="2xl" src={`${user.image}`} />
            </Center>
          </Stack>
        </FormControl>
        <Stack direction="column">
          <FormControl id="userName" pb={3}>
            <FormLabel fontWeight="bold">User name</FormLabel>
            <Text>{user.name}</Text>
          </FormControl>
          <FormControl id="email" pb={3}>
            <FormLabel fontWeight="bold">Email address</FormLabel>
            <Text>{user.email}</Text>
          </FormControl>
          <FormControl id="email" pb={3}>
            <FormLabel fontWeight="bold">Address</FormLabel>
            <Text>-</Text>
          </FormControl>
        </Stack>
      </Stack>
    </Flex>
  );
};
