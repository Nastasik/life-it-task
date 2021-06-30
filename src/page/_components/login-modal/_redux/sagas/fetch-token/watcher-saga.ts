import { take, fork } from 'redux-saga/effects';
import { FETCH_TOKEN_SAGA } from '../../actions';
import { fetchTokenWorkerSaga } from './worker-saga';

export function* fetchTokenWatcherSaga() {
  while (true) {
    const { payload } = yield take(FETCH_TOKEN_SAGA);
    yield fork(fetchTokenWorkerSaga, payload);
  }
}
