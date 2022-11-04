import '../styles/global.scss';

import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { AuthLayout } from '@/layouts/AuthLayout';
import { MainLayout } from '@/layouts/MainLayout';
import { ChakraProvider } from '@/providers/ChakraProvider';

interface MyAppProps<TAppProps> extends AppProps<TAppProps> {
  Component: AppProps['Component'] & { requireAuth?: boolean };
}

interface IPageProps {
  isLoginRedirect?: boolean;
  session: Session;
  cookies: string;
}

const MyApp = ({ Component, pageProps }: MyAppProps<IPageProps>) => {
  const requireAuth = Component.requireAuth != null ? Component.requireAuth : true;
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider cookies={pageProps.cookies}>
        <MainLayout>
          {requireAuth ? (
            <AuthLayout isLoginRedirect={pageProps.isLoginRedirect}>
              <Component {...pageProps} />
            </AuthLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </MainLayout>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default MyApp;
