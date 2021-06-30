import { SET_TOKEN } from './actions';
import { CreateTokenStorageType, ActionsTokenType } from './types';

export const initialState: CreateTokenStorageType = {
  token: '',
};

const reducer = (
  state: CreateTokenStorageType = initialState,
  { type, payload }: ActionsTokenType,
) => {
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
};

export default reducer;
