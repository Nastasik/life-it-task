import { put, call } from 'redux-saga/effects';
import { closeActionModalAction } from '../../actions';
import { AddUserRequestType, addUserRequest } from '../../../../../../../api';
import { setNoticeAction } from './../../../../../notification/_redux/actions';

export function* addUserWorkerSaga(requestData: AddUserRequestType) {
  try {
    const { error, errorText } = yield call(addUserRequest, requestData);

    if (error) {
      throw new Error(errorText);
    }
    yield put(
      setNoticeAction({
        status: 'success',
        text: 'Добавлен пользователь',
      }),
    );
    yield put(closeActionModalAction());
  } catch ({ errorText }) {
    console.error('error in addUserWorkerSaga', errorText);
    yield put(
      setNoticeAction({
        status: 'error',
        text: errorText,
      }),
    );
  }
}
