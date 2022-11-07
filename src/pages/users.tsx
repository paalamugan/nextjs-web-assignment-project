import type { NextPage } from 'next';

import { UsersComponent } from '@/page-components/Users';
import MainTemplate from '@/templates/MainTemplate';

const UsersPage: NextPage & { requireAuth: boolean } = () => {
  return (
    <MainTemplate metaTitle="Users">
      <UsersComponent />
    </MainTemplate>
  );
};

UsersPage.requireAuth = true;

export default UsersPage;
