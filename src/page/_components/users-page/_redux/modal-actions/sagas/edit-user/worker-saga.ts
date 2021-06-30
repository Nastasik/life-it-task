import { call, put, select } from 'redux-saga/effects';
import { closeActionModalAction } from '../../actions';
import { editUserRequest } from '../../../../../../../api';
import { getEditData } from '../../selectors';
import { DataForEditType } from '../../types';
import { setNoticeAction } from './../../../../../notification/_redux/actions';

export type EditDataPropsType = {
  name: string;
  job: string;
};

export function* editDataWorkerSaga(params: EditDataPropsType) {
  try {
    const { id }: DataForEditType = yield select(getEditData);
    const { error, errorText } = yield call(editUserRequest, {
      params,
      id,
    });

    if (error) {
      throw new Error(errorText);
    }

    yield put(
      setNoticeAction({
        status: 'success',
        text: 'Пользователь отредактирован успешно',
      }),
    );
    yield put(closeActionModalAction());
  } catch ({ errorText }) {
    console.error('error in editDataWorkerSaga', errorText);
    yield put(
      setNoticeAction({
        status: 'error',
        text: errorText,
      }),
    );
  }
}
