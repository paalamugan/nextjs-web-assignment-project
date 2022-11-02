/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { authApi } from '@/redux/services/auth';
import type { AppState } from '@/redux/store';
import type { IAuthState } from '@/types';
import { isTokenExpired } from '@/utils/common';

function isAuthenticated({ user = null, session = null }: IAuthState) {
  return !!user && !!session && !!session.token && !isTokenExpired(session.expiresAt);
}

const setAuthReducer = (state: IAuthState, action: PayloadAction<IAuthState>) => {
  state.user = action.payload.user || null;
  state.session = action.payload.session || null;
};

const setSessionReducer = (state: IAuthState, action: PayloadAction<IAuthState['session']>) => {
  state.session = action.payload;
};

const setUserReducer = (state: IAuthState, action: PayloadAction<IAuthState['user']>) => {
  state.user = action.payload;
};

const initialState: IAuthState = {
  user: null,
  session: {
    provider: null,
    token: null,
    expiresAt: null,
  },
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: setSessionReducer,
    setUser: setUserReducer,
    setAuth: setAuthReducer,
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.user.matchPending, (_state, _action) => {
        // console.log("me pending", action);
      })
      .addMatcher(authApi.endpoints.user.matchFulfilled, setUserReducer)
      .addMatcher(authApi.endpoints.user.matchRejected, (_state, _action) => {
        // console.log("me rejected", action);
      });
  },
});

export const { setSession, setUser, setAuth, logout } = slice.actions;

export default slice.reducer;

export const selectAuth = (state: AppState) => state.auth;
export const selectCurrentUser = (state: AppState) => state.auth.user;
export const selectSession = (state: AppState) => state.auth.session;
export const selectIsAuthenticated = (state: AppState) => isAuthenticated(state.auth);
