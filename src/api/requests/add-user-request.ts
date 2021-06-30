import { fetchApi } from '../fetch-api';
import { ENDPOINT_GET_USERS_REQUEST } from './../endpoints';

export type AddUserRequestType = {
  name: string;
  job: string;
};

export const addUserRequest = (params: AddUserRequestType) =>
  fetchApi(ENDPOINT_GET_USERS_REQUEST, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(params),
  });
