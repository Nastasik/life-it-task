import { ENDPOINT_GET_USERS_REQUEST } from '../endpoints';
import { fetchApi } from '../fetch-api';
import { UserType } from './../../page/_components/users-page/_redux/users/types';

export type UsersRequestType = {
  page: number;
};

type DataType = {
  data: Array<UserType>;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  [keys: string]: any;
};

export const getUsersRequest = ({ page }: UsersRequestType) =>
  fetchApi<DataType>(`${ENDPOINT_GET_USERS_REQUEST}?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
