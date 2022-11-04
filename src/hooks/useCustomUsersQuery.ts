import { useEffect, useState } from 'react';

import { getAllUsers } from '@/api-helper';
import type { IUserApiResponse } from '@/types/ApiResponse';

export const useCustomUsersQuery = () => {
  const [users, setUsers] = useState<IUserApiResponse[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const data = await getAllUsers();
        if (mounted) {
          setUsers(data);
          setIsLoading(false);
        }
      } catch (err) {
        setUsers([]);
        setIsLoading(false);
      }
    };
    getUsers();
    return () => {
      mounted = false;
    };
  }, []);

  return { users, isLoading };
};
