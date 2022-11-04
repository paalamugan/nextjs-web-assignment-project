import type { NextPage } from 'next';

import { UsersComponent } from '@/page-components/Users';
import MainTemplate from '@/templates/MainTemplate';

const UsersPage: NextPage = () => {
  return (
    <MainTemplate metaTitle="Users">
      <UsersComponent />
    </MainTemplate>
  );
};

export default UsersPage;
