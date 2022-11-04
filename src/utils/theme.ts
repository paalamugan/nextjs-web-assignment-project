import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: '"Inter", "Roboto", sans-serif',
    heading: '"Inter", "Roboto", sans-serif',
  },
  colors: {
    primary: '#209cee',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
});

export default theme;
