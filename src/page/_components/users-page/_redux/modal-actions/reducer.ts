import {
  OPEN_ACTION_MODAL,
  CLOSE_ACTION_MODAL,
  OPEN_EDIT_MODAL,
} from './actions';
import { CreateActionModalStorageType, ActionsType } from './types';

export const initialState: CreateActionModalStorageType = {
  isModalOpened: false,
  editData: null,
};

const reducer = (
  state: CreateActionModalStorageType = initialState,
  { type, payload }: ActionsType,
) => {
  switch (type) {
    case OPEN_ACTION_MODAL:
      return { ...state, isModalOpened: true };
    case CLOSE_ACTION_MODAL:
      return { ...state, isModalOpened: false, editData: null };
    case OPEN_EDIT_MODAL:
      return { ...state, editData: payload, isModalOpened: true };
    default:
      return state;
  }
};

export default reducer;
