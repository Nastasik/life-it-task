import { take, fork } from 'redux-saga/effects';
import { ADD_USER_SAGA } from '../../actions';
import { addUserWorkerSaga } from './worker-saga';

export function* addUserWatcherSaga() {
  while (true) {
    const { payload } = yield take(ADD_USER_SAGA);
    yield fork(addUserWorkerSaga, payload);
  }
}
