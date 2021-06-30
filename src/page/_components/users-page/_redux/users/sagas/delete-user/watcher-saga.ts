import { take, fork } from 'redux-saga/effects';
import { DELETE_USER_SAGA } from '../../actions';
import { deleteUserWorkerSaga } from './worker-saga';

export function* deleteUserWatcherSaga() {
  while (true) {
    const { payload } = yield take(DELETE_USER_SAGA);
    yield fork(deleteUserWorkerSaga, payload);
  }
}
