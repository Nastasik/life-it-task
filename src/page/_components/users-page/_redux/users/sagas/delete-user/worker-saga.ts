import { put, call, select } from 'redux-saga/effects';
import { getUsers } from '../../selectors';
import { UserType } from '../../types';
import {
  DeleteUserRequestType,
  deleteUserRequest,
} from '../../../../../../../api';
import { setUsersDataAction } from '../../actions';
import { setNoticeAction } from './../../../../../notification/_redux/actions';

const removeUserFromArray = ({ id, users }: any) =>
  users.filter((user: UserType) => user.id !== id);

export function* deleteUserWorkerSaga({ id }: DeleteUserRequestType) {
  try {
    const { error, errorText } = yield call(deleteUserRequest, { id });
    const users: Array<UserType> = yield select(getUsers);

    if (error) {
      throw new Error(errorText);
    }

    yield put(setUsersDataAction(removeUserFromArray({ id, users })));
    yield put(
      setNoticeAction({
        status: 'success',
        text: 'Пользователь удален',
      }),
    );
  } catch ({ errorText }) {
    console.error('error in deleteUserWorkerSaga', errorText);
    yield put(
      setNoticeAction({
        status: 'error',
        text: errorText,
      }),
    );
  }
}
