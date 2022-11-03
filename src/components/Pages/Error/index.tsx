import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import appConfig from '@/utils/appConfig';

interface IErrorPageComponentProps {
  statusCode: number;
}

const ErrorPageComponent: FC<IErrorPageComponentProps> = ({ statusCode }) => {
  const heightOfNavbar: string = '74px';
  const containerPadding: string = '1rem';

  return (
    <Stack>
      <Flex
        minH={`calc(100vh - ${heightOfNavbar} - ${containerPadding}*2)`}
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={4} maxW="xl" mx="auto">
          <Heading textAlign="center">{appConfig.title}</Heading>
          <Text fontSize="xl" lineHeight="tall" textAlign="center">
            {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
          </Text>
          <Box>
            <Stack isInline align="center" justifyContent="center">
              <Box>
                <Link href="/">
                  <Button>Return to the home page</Button>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default ErrorPageComponent;
