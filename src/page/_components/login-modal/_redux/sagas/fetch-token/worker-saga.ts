import { call, put } from 'redux-saga/effects';
import { getTokenRequest, GetTokenRequestType } from '../../../../../../api';
import { setNoticeAction } from './../../../../notification/_redux';
import { setTokenAction } from './../../actions';

export function* fetchTokenWorkerSaga(values: GetTokenRequestType) {
  try {
    const {
      data: { token },
      error,
      errorText,
    } = yield call(getTokenRequest, values);

    if (error) {
      throw new Error(errorText);
    }

    localStorage.setItem('token', token);
    yield put(setTokenAction(token));
  } catch ({ errorText }) {
    console.error('error in fetchTokenWorkerSaga', errorText);
    yield put(
      setNoticeAction({
        status: 'error',
        text: errorText,
      }),
    );
  }
}
