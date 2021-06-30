import { put, select, call } from 'redux-saga/effects';
import {
  startUsersDataLoadingAction,
  stopUsersDataLoadingAction,
  setUsersDataAction,
} from '../../actions';
import { UserType } from '../../types';
import { changePage } from '../../actions';
import { getUsers } from '../../selectors';
import { setNoticeAction } from './../../../../../notification/_redux/actions';
import {
  UsersRequestType,
  getUsersRequest,
} from './../../../../../../../api/requests/get-users-request';

export function* fetchUsersDataWorkerSaga(params: UsersRequestType) {
  yield put(startUsersDataLoadingAction());
  try {
    const {
      data: { page, data },
      error,
      errorText,
    } = yield call(getUsersRequest, params);

    if (error) {
      throw new Error(errorText);
    } else {
      const prevData: Array<UserType> = yield select(getUsers);
      yield put(setUsersDataAction(prevData.concat(data)));
    }

    yield put(changePage(page));
  } catch ({ errorText }) {
    console.error('error in fetchUsersDataWorkerSaga', errorText);
    yield put(
      setNoticeAction({
        status: 'error',
        text: errorText,
      }),
    );
  } finally {
    yield put(stopUsersDataLoadingAction());
  }
}
