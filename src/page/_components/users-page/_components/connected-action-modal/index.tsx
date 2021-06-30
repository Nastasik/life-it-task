import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal } from '@material-ui/core';
import {
  DataForEditType,
  closeActionModalAction,
  editUserActionSaga,
  addUserActionSaga,
  CreateActionModalStatePart,
  getIsActionModalOpened,
  getEditData,
  EditDataPropsType,
} from '../../_redux/modal-actions';
import { AddUserRequestType } from '../../../../../api';
import { ActionForm } from './_components/action-form';

type PropsType = {
  editData: DataForEditType | null;
  isModalOpened: boolean;
  closeModal: () => void;
  addUser: (values: AddUserRequestType) => void;
  editUser: (values: EditDataPropsType) => void;
};

export class WrappedActionModal extends PureComponent<PropsType> {
  handleEditUser = (values: EditDataPropsType) => this.props.editUser(values);

  handleAddUser = (values: AddUserRequestType) => this.props.addUser(values);

  handleClose = () => this.props.closeModal();

  render() {
    const { isModalOpened, editData } = this.props;
    const editModal = Boolean(editData);
    const submitAction = editModal ? this.handleEditUser : this.handleAddUser;
    const title = editModal ? 'Редактирование' : 'Добавление пользователя';

    return (
      <Modal
        aria-describedby="action-modal-description"
        aria-labelledby="action-modal-title"
        open={isModalOpened}
      >
        <ActionForm
          onCancel={this.handleClose}
          onSubmit={submitAction}
          title={title}
        />
      </Modal>
    );
  }
}

const mapStateToProps = (state: CreateActionModalStatePart) => ({
  editData: getEditData(state),
  isModalOpened: getIsActionModalOpened(state),
});

export const ConnectedActionModal = connect(mapStateToProps, {
  addUser: addUserActionSaga,
  editUser: editUserActionSaga,
  closeModal: closeActionModalAction,
})(WrappedActionModal);
