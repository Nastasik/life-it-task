import { fetchApi } from '../fetch-api';
import { getUserEndpoint } from './../endpoints';

export type DeleteUserRequestType = {
  id: number;
};

export const deleteUserRequest = ({ id }: DeleteUserRequestType) =>
  fetchApi(getUserEndpoint(id), {
    method: 'DELETE',
  });
