import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';

interface IUsersGridComponentProps {
  children: ReactNode;
}

export const UsersGridComponent: FC<IUsersGridComponentProps> = ({ children }) => {
  return (
    <Stack spacing={4}>
      <Heading fontSize={'xl'} textAlign={{ base: 'center', md: 'left' }} pt={3}>
        <Box as="span" borderBottom="2px solid" borderColor="primary" borderRadius="sm">
          REQRES USERS LIST
        </Box>
      </Heading>
      <Text textAlign={{ base: 'center', md: 'left' }} color={useColorModeValue('gray.900', 'gray.300')}>
        Showing results with FirstName starting with <strong>“G”</strong> or LastName starting with <strong>“W”</strong>
        .
      </Text>
      {children}
    </Stack>
  );
};
