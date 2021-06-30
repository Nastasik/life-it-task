import { take, fork } from 'redux-saga/effects';
import { EDIT_USER_SAGA } from '../../actions';
import { editDataWorkerSaga } from './worker-saga';

export function* editDataWatcherSaga() {
  while (true) {
    const { payload } = yield take(EDIT_USER_SAGA);
    yield fork(editDataWorkerSaga, payload);
  }
}
