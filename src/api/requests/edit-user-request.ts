import { fetchApi } from '../fetch-api';
import { getUserEndpoint } from './../endpoints';

export type EditUserParamsType = {
  name: string;
  job: string;
};

export type EditUserRequestType = {
  params: EditUserParamsType;
  id: number;
};

export const editUserRequest = ({ params, id }: EditUserRequestType) =>
  fetchApi(getUserEndpoint(id), {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(params),
  });
