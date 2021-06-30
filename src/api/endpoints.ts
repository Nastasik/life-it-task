const PATH = 'https://reqres.in';

export const ENDPOINT_GET_TOKEN_REQUEST = `${PATH}/api/login`;
export const ENDPOINT_GET_USERS_REQUEST = `${PATH}/api/users`;

export const getUserEndpoint = (id: number | string) =>
  `${PATH}/api/users/${id}`;
