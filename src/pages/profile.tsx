import { ObjectId } from 'mongodb';
import type { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import type { FC } from 'react';
import React from 'react';

import { getDatabaseInstance } from '@/lib/mongodb';
import { UserProfileComponent } from '@/page-components/Profile';
import MainTemplate from '@/templates/MainTemplate';
import type IUser from '@/types/user';
import { jsonParser } from '@/utils/common';

interface IProfilePageProps {
  user: IUser | null;
}

const ProfilePage: FC<IProfilePageProps> = ({ user }) => {
  if (!user) return null;
  return (
    <MainTemplate metaTitle="Profile">
      <UserProfileComponent user={user} />
    </MainTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const db = await getDatabaseInstance();
  let user = await db.collection('users').findOne<IProfilePageProps['user']>({ _id: new ObjectId(session?.id) });
  user = jsonParser(user);

  if (user) {
    user.id = user._id;
  }

  return {
    props: {
      user,
    },
  };
};

export default ProfilePage;
