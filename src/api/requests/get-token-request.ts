import { ENDPOINT_GET_TOKEN_REQUEST } from '../endpoints';
import { fetchApi } from '../fetch-api';

export type GetTokenRequestType = {
  email: string;
  password: string;
};

export const getTokenRequest = (data: GetTokenRequestType) =>
  fetchApi(ENDPOINT_GET_TOKEN_REQUEST, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
