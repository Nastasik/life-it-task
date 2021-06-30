import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal } from '@material-ui/core';
import { GetTokenRequestType } from '../api';
import {
  LoginForm,
  CreateTokenStatePart,
  fetchTokenActionSaga,
  setTokenAction,
  getToken,
} from './_components/login-modal';
import { UsersPage, Notification } from './_components';

type PropsType = {
  token: string;
  setToken: (token: string) => void;
  fetchToken: (values: GetTokenRequestType) => void;
};

const storageToken = localStorage.getItem('token');

export class WrappedPage extends PureComponent<PropsType> {
  componentDidMount() {
    if (storageToken) {
      this.props.setToken(storageToken);
    }
  }

  handleSubmit = (values: GetTokenRequestType) => this.props.fetchToken(values);

  render() {
    const { token } = this.props;

    return (
      <>
        <Notification />
        {token ? (
          <UsersPage />
        ) : (
          <Modal
            aria-describedby="login-modal-description"
            aria-labelledby="login-modal-title"
            open={true}
          >
            <LoginForm onSubmit={this.handleSubmit} />
          </Modal>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: CreateTokenStatePart) => ({
  token: getToken(state),
});

export const ConnectedPage = connect(mapStateToProps, {
  fetchToken: fetchTokenActionSaga,
  setToken: setTokenAction,
})(WrappedPage);
