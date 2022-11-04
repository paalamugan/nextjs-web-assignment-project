import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, Link, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import type { NextComponentType } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import { ProfileMenu } from './ProfileMenu';
import { ThemeToggleButtonNode } from './ThemeToggleButtonNode';

const links = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'users',
    label: 'Users',
    href: '/users',
  },
  {
    id: 'profile',
    label: 'Profile',
    href: '/profile',
  },
];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <Link
      as={NextLink}
      px={2}
      py={1}
      rounded={'md'}
      fontWeight={'500'}
      color={useColorModeValue(active ? 'white' : 'gray.600', active ? 'white' : 'gray.200')}
      bg={active ? 'primary' : ''}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue(active ? 'primary' : 'gray.200', active ? 'primary' : 'gray.700'),
      }}
      href={href}
    >
      {children}
    </Link>
  );
};

const Header: NextComponentType = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Text fontSize={'xl'} fontWeight="bold">
            Web OAuth Logo
          </Text>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              <NavLink key={link.id} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={4} justify="center" align="center">
            <ThemeToggleButtonNode />
            <ProfileMenu />
          </Stack>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {links.map((link) => (
              <NavLink key={link.id} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
