import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import type { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import type { FC } from 'react';

export const SignInButtonNode: FC<{ session: Session | null }> = ({ session }) => {
  if (session) {
    return null;
  }

  return (
    <Box>
      <Link href="/api/auth/signin">
        <Button
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign In
        </Button>
      </Link>
    </Box>
  );
};
