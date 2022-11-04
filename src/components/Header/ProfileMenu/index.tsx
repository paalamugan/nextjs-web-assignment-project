import { Avatar, Button, Center, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import type { FC } from 'react';

export const ProfileMenu: FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const image = session?.user?.image || undefined;

  if (!session) return null;

  return (
    <Menu>
      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        <Avatar size={'sm'} boxSize="3.2em" src={image} bg="gray.500" />
      </MenuButton>
      <MenuList alignItems={'center'}>
        <br />
        <Center>
          <Avatar size={'2xl'} src={image} />
        </Center>
        <br />
        <Center>
          <Text textTransform="capitalize" fontWeight="medium">
            {session?.user?.name}
          </Text>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem
          onClick={() => {
            router.push('/profile');
          }}
        >
          Your Profile
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            signOut({ callbackUrl: `${router.basePath}/auth/signIn` });
          }}
        >
          Sign Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
