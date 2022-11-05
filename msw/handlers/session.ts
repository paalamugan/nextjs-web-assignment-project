import { createEntityAdapter } from '@reduxjs/toolkit';
import { rest } from 'msw';

const adapter = createEntityAdapter<any>();

const initialState = adapter.getInitialState({});
const state = adapter.setOne(initialState, {
  user: {
    name: 'paala mugan',
    email: 'paalamugan26@gmail.com',
    image: 'https://lh3.googleusercontent.com/a/ALm5wu123vgSILzJg9h9HTiT_DKl1rEL3xUUKWIHMZeWvA=s96-c',
  },
  expires: '2022-12-05T19:37:47.690Z',
  id: '6363d5efd968db42c9fce562',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjNkNWVmZDk2OGRiNDJjOWZjZTU2MiIsImlhdCI6MTY2NzY3ODUzMSwiZXhwIjoxNjY3NzY0OTMxfQ.Nl2IiCndNSkrZx46Mobnz64rYOE8bHBAfUA2aygJuuA',
});

export { state };

export const handlers = [
  rest.get('/api/auth/session', (_req, res, ctx) => {
    return res(ctx.json(state.entities));
  }),
];
