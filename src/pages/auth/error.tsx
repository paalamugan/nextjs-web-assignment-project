import type { NextPage } from 'next';
import React from 'react';

import { ErrorPageComponent } from '@/components/Pages';
import MainTemplate from '@/templates/Main';

interface IErrorPageProps {
  statusCode: number;
}

const ErrorPage: NextPage<IErrorPageProps> & { requireAuth: boolean } = ({ statusCode }) => {
  return (
    <MainTemplate title="Error Page">
      <ErrorPageComponent statusCode={statusCode} />
    </MainTemplate>
  );
};

export const getInitialProps = async ({ res, err }: any) => {
  const errorStatusCode = err ? err.statusCode : 404;
  const statusCode = res ? res.statusCode : errorStatusCode;

  return { statusCode };
};

ErrorPage.requireAuth = false;

export default ErrorPage;
