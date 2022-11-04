import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllUsers } from '@/api-helper';
import { checkDatabaseHandler, getDatabaseHandler, nextConnectHandler } from '@/lib/next-connect';

const handler = nextConnectHandler();

handler.use(getDatabaseHandler());
handler.use(checkDatabaseHandler());

handler.get(async (_req: NextApiRequest, res: NextApiResponse) => {
  const users = await getAllUsers();
  res.status(200).json(users);
});

export default handler;
