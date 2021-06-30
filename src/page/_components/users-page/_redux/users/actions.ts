import { UsersRequestType, DeleteUserRequestType } from './../../../../../api';
import { ChangePageType, UserType } from './types';

type BaseAction = () => { type: string };
type Action<T> = (payload: T) => { type: string; payload: T };

export const FETCH_USERS_DATA_SAGA = 'FETCH_USERS_DATA_SAGA';
export const fetchUsersDataActionSaga: Action<UsersRequestType> = (payload) => {
  return {
    type: FETCH_USERS_DATA_SAGA,
    payload,
  };
};

export const DELETE_USER_SAGA = 'DELETE_USER_SAGA';
export const deleteUserActionSaga: Action<DeleteUserRequestType> = (
  payload,
) => {
  return {
    type: DELETE_USER_SAGA,
    payload,
  };
};

export const START_USERS_DATA_LOADING = 'START_USERS_DATA_LOADING';
export const startUsersDataLoadingAction: BaseAction = () => ({
  type: START_USERS_DATA_LOADING,
});

export const STOP_USERS_DATA_LOADING = 'STOP_USERS_DATA_LOADING';
export const stopUsersDataLoadingAction: BaseAction = () => ({
  type: STOP_USERS_DATA_LOADING,
});

export const SET_USERS_DATA = 'SET_USERS_DATA';
export const setUsersDataAction: Action<Array<UserType>> = (payload) => ({
  type: SET_USERS_DATA,
  payload,
});

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage: Action<ChangePageType> = (payload) => {
  return {
    type: CHANGE_PAGE,
    payload,
  };
};
