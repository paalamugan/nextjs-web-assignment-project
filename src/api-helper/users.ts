import { CustomError } from '@/error-handlers';
import type { IUserApiResponse } from '@/types/ApiResponse';
import appConfig from '@/utils/appConfig';

export const getAllUsersPerPage = async (page = 1) => {
  const res = await fetch(`${appConfig.reqresApiBaseUrl}/users?page=${page}`);
  const result = await res.json();
  return result;
};

const getFilteredUsers = (users: IUserApiResponse['users']) => {
  const filteredFirstNameUsers: IUserApiResponse['users'] = [];
  const filteredLastNameUsers: IUserApiResponse['users'] = [];

  users.forEach((user) => {
    if (/^G(.+)/i.test(user.first_name)) {
      filteredFirstNameUsers.push(user);
    }
    if (/^W(.+)/i.test(user.last_name)) {
      filteredLastNameUsers.push(user);
    }
  });

  const sortedFirstNameUsers = filteredFirstNameUsers.sort((a, b) => a.first_name.localeCompare(b.first_name));
  const sortedLastNameUsers = filteredLastNameUsers.sort((a, b) => a.last_name.localeCompare(b.last_name));

  return [...sortedFirstNameUsers, ...sortedLastNameUsers];
};

export const getAllUsers = async (): Promise<IUserApiResponse> => {
  try {
    const result = await getAllUsersPerPage();
    const promises = Array.from({ length: result.total_pages - 1 }, (_, i) => getAllUsersPerPage(i + 2));
    const results = await Promise.all(promises);
    const users: IUserApiResponse['users'] = results.reduce((acc, cur) => [...acc, ...cur.data], result.data);
    const filteredUsers = getFilteredUsers(users);
    return {
      users: filteredUsers,
      count: filteredUsers.length,
      totalCount: result.total,
    };
  } catch (err) {
    throw new CustomError('Unable to fetch users.');
  }
};
