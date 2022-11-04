/* eslint-disable import/no-extraneous-dependencies */
import type { RenderOptions } from '@testing-library/react';
import { render as customRender, screen } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import * as React from 'react';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@/providers/ChakraProvider';
import { store } from '@/redux/store';

interface StoreRenderOptions extends RenderOptions {
  store: typeof store;
}

function ComponentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ChakraProvider cookies="">{children}</ChakraProvider>
    </SessionProvider>
  );
}

function renderWithProvider(ui: React.ReactElement, renderOptions?: StoreRenderOptions) {
  const storeValue = renderOptions?.store ?? store;
  function StoreWrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={storeValue}>
        <ComponentWrapper>{children}</ComponentWrapper>
      </Provider>
    );
  }
  return customRender(ui, {
    wrapper: StoreWrapper,
    ...renderOptions,
  });
}

function render(ui: React.ReactElement, renderOptions?: RenderOptions) {
  return customRender(ui, {
    wrapper: ComponentWrapper,
    ...renderOptions,
  });
}

export * from '@testing-library/react';

export { render };
export { renderWithProvider };

export type TestCaseMethod = 'get' | 'find' | 'query';

function methodByText(method: TestCaseMethod) {
  if (method === 'find') return 'findByText';
  if (method === 'query') return 'queryByText';
  return 'getByText';
}

function methodAllByText(method: TestCaseMethod) {
  if (method === 'find') return 'findAllByText';
  if (method === 'query') return 'queryAllByText';
  return 'getAllByText';
}

export const getElementByText = (text: string, method: TestCaseMethod = 'get') => {
  return screen[methodByText(method)](text);
};
export const getAllElementByText = (text: string, method: TestCaseMethod = 'get') => {
  return screen[methodAllByText(method)](text);
};
