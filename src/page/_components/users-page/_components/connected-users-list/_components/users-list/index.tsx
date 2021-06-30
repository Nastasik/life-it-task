import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { InView } from 'react-intersection-observer';
import { DeleteUserRequestType } from '../../../../../../../api';
import { UserType, DataForEditType } from '../../../../_redux';
import styles from './index.module.scss';
import { UserCard } from './_components/user-card';

const cn = classnames.bind(styles);

type PropsType = {
  users: Array<UserType>;
  isLoading: boolean;
  onEditButtonClick: (values: DataForEditType) => void;
  onDelete: (values: DeleteUserRequestType) => void;
  onBottomScroll: (inView: boolean, entry: IntersectionObserverEntry) => void;
};

export const UsersList = memo(
  ({ users, onDelete, onEditButtonClick, onBottomScroll }: PropsType) => (
    <div className={cn('Users__list')}>
      {users.map(({ id, avatar, email, first_name, last_name }) => (
        <UserCard
          avatar={avatar}
          email={email}
          id={id}
          key={id}
          lastName={last_name}
          name={first_name}
          onDeleteButtonClick={onDelete}
          onEditButtonClick={onEditButtonClick}
        />
      ))}
      {
        <InView as="div" onChange={onBottomScroll} threshold={0}>
          <p>Конец</p>
        </InView>
      }
    </div>
  ),
);
