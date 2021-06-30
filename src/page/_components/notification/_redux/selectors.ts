import { createSelector } from 'reselect';
import {
  CreateNotificationStorageType,
  CreateNotificationStatePart,
} from './types';
import { initialState } from './reducer';

export const createNotificationStorage = (
  store: CreateNotificationStatePart,
) => {
  return store.notificationReducer ? store.notificationReducer : initialState;
};

export const getIsNotificationOpened = createSelector(
  [createNotificationStorage],
  ({ isOpened }: CreateNotificationStorageType) => isOpened,
);

export const getNotice = createSelector(
  [createNotificationStorage],
  ({ notice }: CreateNotificationStorageType) => notice,
);
