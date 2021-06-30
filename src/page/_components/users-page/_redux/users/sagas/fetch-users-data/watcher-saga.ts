import { take, cancel, fork } from 'redux-saga/effects';
import { FETCH_USERS_DATA_SAGA } from '../../actions';
import { fetchUsersDataWorkerSaga } from './worker-saga';

export function* fetchUsersDataWatcherSaga() {
  let lastTask;
  while (true) {
    if (lastTask) {
      yield cancel(lastTask);
    }
    const { payload } = yield take(FETCH_USERS_DATA_SAGA);
    yield fork(fetchUsersDataWorkerSaga, payload);
  }
}
