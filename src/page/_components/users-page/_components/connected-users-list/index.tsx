import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  getUsers,
  getIsLoadingUsers,
  getPage,
  fetchUsersDataActionSaga,
  CreateUsersStatePart,
  DataForEditType,
  UserType,
  deleteUserActionSaga,
  openEditModalAction,
} from '../../_redux';
import { UsersRequestType, DeleteUserRequestType } from '../../../../../api';
import { UsersList } from './_components/users-list';

type PropsType = {
  users: Array<UserType>;
  page: number;
  isLoading: boolean;
  openEditModal: (values: DataForEditType) => void;
  deleteUser: (values: DeleteUserRequestType) => void;
  fetchUsersData: (values: UsersRequestType) => void;
};

export class WrappedUsersList extends PureComponent<PropsType> {
  componentDidMount() {
    this.props.fetchUsersData({ page: 1 });
  }

  handleDeleteUser = (values: DeleteUserRequestType) =>
    this.props.deleteUser(values);

  handleEditButtonClick = (values: DataForEditType) =>
    this.props.openEditModal(values);

  handleScrollBottom = (
    inView: boolean,
    { isIntersecting }: IntersectionObserverEntry,
  ) => {
    const { fetchUsersData, page } = this.props;
    if (isIntersecting) fetchUsersData({ page: page + 1 });
  };

  render() {
    const { users, isLoading } = this.props;

    return Boolean(users.length) ? (
      <UsersList
        isLoading={isLoading}
        onBottomScroll={this.handleScrollBottom}
        onDelete={this.handleDeleteUser}
        onEditButtonClick={this.handleEditButtonClick}
        users={users}
      />
    ) : null;
  }
}

const mapStateToProps = (state: CreateUsersStatePart) => ({
  users: getUsers(state),
  page: getPage(state),
  isLoading: getIsLoadingUsers(state),
});

export const ConnectedUsersList = connect(mapStateToProps, {
  fetchUsersData: fetchUsersDataActionSaga,
  deleteUser: deleteUserActionSaga,
  openEditModal: openEditModalAction,
})(WrappedUsersList);
