import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';
import {
  closeNotificationAction,
  getNotice,
  getIsNotificationOpened,
  CreateNotificationStatePart,
  NoticeType,
} from './_redux';

type PropsType = {
  notice: NoticeType;
  isOpened: boolean;
  closeNotification: () => void;
};

export class WrappedNotification extends PureComponent<PropsType> {
  handleClose = () => this.props.closeNotification();

  render() {
    const {
      isOpened,
      notice: { text, status },
    } = this.props;

    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        onClose={this.handleClose}
        open={isOpened}
      >
        <Alert severity={status}>{text}</Alert>
      </Snackbar>
    );
  }
}

const mapStateToProps = (state: CreateNotificationStatePart) => ({
  isOpened: getIsNotificationOpened(state),
  notice: getNotice(state),
});

export const Notification = connect(mapStateToProps, {
  closeNotification: closeNotificationAction,
})(WrappedNotification);
