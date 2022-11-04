import type { FC } from 'react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

interface IMainLayout {
  children: React.ReactNode;
}
export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
