import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import actionModalReducer from '../page/_components/users-page/_redux/modal-actions';
import usersReducer from '../page/_components/users-page/_redux/users';
import tokenReducer from '../page/_components/login-modal/_redux';
import notificationReducer from '../page/_components/notification/_redux';
import rootSaga from './sagas';

type AppStore = any; // TODO дописать тип

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
type State = any; // TODO дописать тип

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers<State>({
      usersReducer,
      tokenReducer,
      actionModalReducer,
      notificationReducer,
    }),
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  ) as AppStore;

  sagaMiddleware.run(rootSaga);

  return { store };
}
