import { Box, Link, Stack } from '@chakra-ui/react';
import type { NextComponentType } from 'next';
import NextLink from 'next/link';
import { useSession } from 'next-auth/react';

import { SignInButtonNode } from './SignInButtonNode';
import { SignOutButtonNode } from './SignOutButtonNode';
import { ThemeToggleButtonNode } from './ThemeToggleButtonNode';

const linksForAllUsers = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },
];

const linksForAuthenticatedUsers = [
  {
    id: 'myAccount',
    label: 'My Account',
    href: '/my-account',
  },
];

const Navbar: NextComponentType = () => {
  const { data: session } = useSession();

  return (
    <Box>
      <Box p={4} shadow="lg" pos="relative">
        <Box maxW="xl" mx="auto" w="full">
          <Stack isInline spacing={4} align="center" justifyContent="space-between" w="full">
            <Box>
              <Stack isInline spacing={4} align="center" fontWeight="semibold">
                {linksForAllUsers.map((link) => {
                  return (
                    <Box key={link.id}>
                      <Link href={link.href} as={NextLink}>
                        {link.label}
                      </Link>
                    </Box>
                  );
                })}
                {session &&
                  linksForAuthenticatedUsers.map((link) => {
                    return (
                      <Box key={link.id}>
                        <Link href={link.href} as={NextLink}>
                          {link.label}
                        </Link>
                      </Box>
                    );
                  })}
              </Stack>
            </Box>
            <Box>
              <Stack isInline spacing={4} align="center">
                <ThemeToggleButtonNode />
                <SignInButtonNode session={session} />
                <SignOutButtonNode session={session} />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
