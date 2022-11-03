import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import type { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import type { FC } from 'react';

export const SignOutButtonNode: FC<{ session: Session | null }> = ({ session }) => {
  if (!session) {
    return null;
  }

  return (
    <Box>
      <Link href="/api/auth/signout">
        <Button
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign Out
        </Button>
      </Link>
    </Box>
  );
};
