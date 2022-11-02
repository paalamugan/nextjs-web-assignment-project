import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

interface BaseLayoutProps {
  children?: React.ReactNode;
}
export function BaseLayout({ children }: BaseLayoutProps) {
  return <Provider store={store}>{children}</Provider>;
}
