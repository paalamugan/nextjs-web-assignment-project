import { cacher } from '@/lib/rtkQueryCacheUtils';

import { baseApi } from './base';

const apiWithTags = baseApi.enhanceEndpoints({
  addTagTypes: [...cacher.defaultTags, 'Auth'],
});

export const authApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
    user: builder.query<any, void>({
      query: () => '/auth/user',
      providesTags: cacher.providesList('Auth'),
    }),
  }),
});

export const { useProtectedMutation, useUserQuery } = authApi;
