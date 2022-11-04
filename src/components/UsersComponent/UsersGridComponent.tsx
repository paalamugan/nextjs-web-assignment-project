import { Box, Heading, Stack } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';

interface IUsersGridComponentProps {
  children: ReactNode;
}

export const UsersGridComponent: FC<IUsersGridComponentProps> = ({ children }) => {
  return (
    <Stack spacing={4}>
      <Heading fontSize={'xl'} textAlign={{ base: 'center', md: 'left' }} py={3}>
        <Box as="span" borderBottom="2px solid" borderColor="primary" borderRadius="sm">
          REQRES USERS LIST
        </Box>
      </Heading>
      {children}
    </Stack>
  );
};
