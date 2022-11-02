/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { User } from '@/redux/services/auth';
import { api } from '@/redux/services/auth';
import type { RootState } from '@/redux/store';

type AuthState = {
  user: User | null;
  token: string | null;
};

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = user;
      state.token = token;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    });
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
