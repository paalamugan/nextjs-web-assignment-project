import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
import { api } from './services/auth';

export const createStore = () => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
