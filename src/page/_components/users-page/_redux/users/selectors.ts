import { createSelector } from 'reselect';
import { CreateUsersStorageType, CreateUsersStatePart } from './types';
import { initialState } from './reducer';

export const createUsersStorage = (store: CreateUsersStatePart) => {
  return store.usersReducer ? store.usersReducer : initialState;
};

export const getIsLoadingUsers = createSelector(
  [createUsersStorage],
  ({ isLoading }: CreateUsersStorageType) => isLoading,
);

export const getUsers = createSelector(
  [createUsersStorage],
  ({ users }: CreateUsersStorageType) => users,
);

export const getPage = createSelector(
  [createUsersStorage],
  ({ page }: CreateUsersStorageType) => page,
);
