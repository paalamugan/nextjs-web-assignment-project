// import { FetchUserDocument } from 'generated-graphql';
// import { initializeApollo } from 'lib/apolloClient';
// import type { GetServerSideProps } from 'next';
import type { Session } from 'next-auth';
// import { getSession } from 'next-auth/react';
import type { FC } from 'react';
import React from 'react';

import AccessDeniedIndicator from '@/components/AccessDeniedIndicator';
import { AccountPageComponent } from '@/components/Pages';
import MainTemplate from '@/templates/Main';
import type IUser from '@/types/user';

interface IAccountPageProps {
  session: Session;
  user: IUser;
}

const AccountPage: FC<IAccountPageProps> = ({ session, user }) => {
  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <MainTemplate title="Account">
      <AccountPageComponent user={user} />
    </MainTemplate>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const session = await getSession({ req });
//   const apolloClient = initializeApollo({}, session?.token);

//   const { data } = await apolloClient.query({
//     query: FetchUserDocument,
//     variables: {
//       userId: session?.id,
//     },
//   });

//   return {
//     props: {
//       session,
//       user: data.users_by_pk,
//     },
//   };
// };

export default AccountPage;
