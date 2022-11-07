import '../styles/global.scss';

import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';

import { AuthLayout } from '@/layouts/AuthLayout';
import { MainLayout } from '@/layouts/MainLayout';

interface MyAppProps<TAppProps> extends AppProps<TAppProps> {
  Component: AppProps['Component'] & { requireAuth?: boolean };
}

interface IMyAppPageProps {
  isLoginRedirect?: boolean;
  session: Session;
  cookies: string;
}

const MyApp = ({ Component, pageProps }: MyAppProps<IMyAppPageProps>) => {
  return (
    <MainLayout session={pageProps.session} cookies={pageProps.cookies}>
      {Component.requireAuth ? (
        <AuthLayout isLoginRedirect={pageProps.isLoginRedirect}>
          <Component {...pageProps} />
        </AuthLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </MainLayout>
  );
};

export default MyApp;

export { getServerSideProps } from '@/providers/AppChakraProvider';
