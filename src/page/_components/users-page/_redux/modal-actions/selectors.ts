import { createSelector } from 'reselect';
import {
  CreateActionModalStorageType,
  CreateActionModalStatePart,
} from './types';
import { initialState } from './reducer';

export const createActionModalStorage = (store: CreateActionModalStatePart) => {
  return store.actionModalReducer ? store.actionModalReducer : initialState;
};

export const getIsActionModalOpened = createSelector(
  [createActionModalStorage],
  ({ isModalOpened }: CreateActionModalStorageType) => isModalOpened,
);

export const getEditData = createSelector(
  [createActionModalStorage],
  ({ editData }: CreateActionModalStorageType) => editData,
);
