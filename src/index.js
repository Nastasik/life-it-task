import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from './root-redux';
import './index.css';
import { ConnectedPage } from './page';

const { store } = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ConnectedPage />
    </ReduxProvider>
  </React.StrictMode>,
  rootElement,
);
