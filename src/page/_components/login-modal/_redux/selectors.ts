import { createSelector } from 'reselect';
import { CreateTokenStorageType, CreateTokenStatePart } from './types';
import { initialState } from './reducer';

export const createTokenStorage = (store: CreateTokenStatePart) => {
  return store.tokenReducer ? store.tokenReducer : initialState;
};

export const getToken = createSelector(
  [createTokenStorage],
  ({ token }: CreateTokenStorageType) => token,
);
