import { GetTokenRequestType } from '../../../../api/requests/get-token-request';

type Action<T> = (payload: T) => { type: string; payload: T };

export const FETCH_TOKEN_SAGA = 'FETCH_TOKEN_SAGA';
export const fetchTokenActionSaga: Action<GetTokenRequestType> = (payload) => {
  return {
    type: FETCH_TOKEN_SAGA,
    payload,
  };
};

export const SET_TOKEN = 'SET_TOKEN';
export const setTokenAction: Action<string> = (payload) => {
  return {
    type: SET_TOKEN,
    payload,
  };
};
