import { AddUserRequestType } from '../../../../../api';
import { EditDataPropsType } from './sagas/edit-user/worker-saga';
import { DataForEditType } from './types';

type BaseAction = () => { type: string };
type Action<T> = (payload: T) => { type: string; payload: T };

export const ADD_USER_SAGA = 'ADD_USER_SAGA';
export const addUserActionSaga: Action<AddUserRequestType> = (payload) => {
  return {
    type: ADD_USER_SAGA,
    payload,
  };
};

export const EDIT_USER_SAGA = 'EDIT_USER_SAGA';
export const editUserActionSaga: Action<EditDataPropsType> = (payload) => {
  return {
    type: EDIT_USER_SAGA,
    payload,
  };
};

export const OPEN_ACTION_MODAL = 'OPEN_ACTION_MODAL';
export const openActionModalAction: BaseAction = () => ({
  type: OPEN_ACTION_MODAL,
});

export const CLOSE_ACTION_MODAL = 'CLOSE_ACTION_MODAL';
export const closeActionModalAction: BaseAction = () => ({
  type: CLOSE_ACTION_MODAL,
});

export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const openEditModalAction: Action<DataForEditType> = (payload) => ({
  type: OPEN_EDIT_MODAL,
  payload,
});
