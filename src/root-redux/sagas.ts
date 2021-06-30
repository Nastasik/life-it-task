import { fork, all } from 'redux-saga/effects';
import {
  addUserWatcherSaga,
  fetchUsersDataWatcherSaga,
  editDataWatcherSaga,
  deleteUserWatcherSaga,
} from '../page/_components/users-page/_redux';
import { fetchTokenWatcherSaga } from '../page/_components/login-modal/_redux';

export default function* rootSaga() {
  yield all([
    fork(addUserWatcherSaga),
    fork(deleteUserWatcherSaga),
    fork(editDataWatcherSaga),
    fork(fetchTokenWatcherSaga),
    fork(fetchUsersDataWatcherSaga),
  ]);
}
