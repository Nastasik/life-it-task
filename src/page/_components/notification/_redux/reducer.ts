import { OPEN_NOTIFICATION, SET_NOTICE, CLOSE_NOTIFICATION } from './actions';
import {
  CreateNotificationStorageType,
  ActionsNotificationType,
} from './types';

export const initialState: CreateNotificationStorageType = {
  isOpened: false,
  notice: {},
};

const reducer = (
  state: CreateNotificationStorageType = initialState,
  { type, payload }: ActionsNotificationType,
) => {
  switch (type) {
    case OPEN_NOTIFICATION:
      return { ...state, isOpened: true };
    case CLOSE_NOTIFICATION:
      return { ...state, isOpened: false, notice: {} };
    case SET_NOTICE:
      return { ...state, notice: payload, isOpened: true };
    default:
      return state;
  }
};

export default reducer;
