import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import type { FC } from 'react';
import React from 'react';

import { ThemeToggleButtonNode } from '@/components/Header/ThemeToggleButtonNode';
import { GoogleIcon } from '@/icons/Google';

export const SignInPageComponent: FC = () => {
  const router = useRouter();
  const { callbackUrl } = router.query;
  return (
    <>
      <Box pos={'absolute'} top="3" right="6" zIndex="1">
        <ThemeToggleButtonNode />
      </Box>
      <Stack bg={useColorModeValue('gray.50', 'gray.900')} height="100vh" justify="center" pos={'relative'}>
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
          <Stack spacing="8">
            <Stack spacing="6" justify="center" align="center">
              <Image
                borderRadius="full"
                boxSize="80px"
                src={`${router.basePath}/android-chrome-512x512.png`}
                title="Web OAuth"
                alt="Web OAuth Logo"
              />
              <Stack spacing={{ base: '2', md: '6' }} textAlign="center">
                <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })}>Log in to your account</Heading>
                <Button
                  variant="outline"
                  width="full"
                  onClick={() => signIn('google', { callbackUrl: `${callbackUrl || router.basePath}/` })}
                >
                  <GoogleIcon mr={2} fontSize={20} />
                  Continue with Google
                </Button>
              </Stack>
              <Text textAlign="center" pt={3} fontSize="sm">
                By proceeding, you agree to our{' '}
                <Link as={NextLink} href="" color="primary">
                  Terms of Use
                </Link>{' '}
                and confirm you have read our{' '}
                <Link as={NextLink} href="" color="primary">
                  Privacy and Cookie Statement
                </Link>
                .
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};
