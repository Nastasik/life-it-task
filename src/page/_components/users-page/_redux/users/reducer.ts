import {
  START_USERS_DATA_LOADING,
  STOP_USERS_DATA_LOADING,
  SET_USERS_DATA,
  CHANGE_PAGE,
} from './actions';
import { CreateUsersStorageType, UsersActionsType } from './types';

export const initialState: CreateUsersStorageType = {
  isLoading: false,
  users: [],
  page: 0,
};

const reducer = (
  state: CreateUsersStorageType = initialState,
  { type, payload }: UsersActionsType,
) => {
  switch (type) {
    case SET_USERS_DATA:
      return { ...state, users: payload };
    case CHANGE_PAGE:
      return { ...state, page: payload };
    case START_USERS_DATA_LOADING:
      return { ...state, isLoading: true };
    case STOP_USERS_DATA_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
