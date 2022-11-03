import type { NextPage } from 'next';

import { ErrorPageComponent } from '@/components/Pages';
import MainTemplate from '@/templates/Main';

const Custom404Page: NextPage & { requireAuth: boolean } = () => {
  return (
    <MainTemplate title="Error Page">
      <ErrorPageComponent statusCode={404} />
    </MainTemplate>
  );
};

Custom404Page.requireAuth = false;

export default Custom404Page;
