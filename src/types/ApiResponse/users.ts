export interface IReqresUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface IUserApiResponse {
  users: IReqresUser[];
  totalCount: number;
  count: number;
}
