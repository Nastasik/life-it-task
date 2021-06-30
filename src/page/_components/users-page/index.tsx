import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import {
  ConnectedActionModal,
  ConnectedCreateButton,
  ConnectedUsersList,
} from './_components';

const cn = classnames.bind(styles);

export const UsersPage = memo(() => (
  <section className={cn('Users')}>
    <ConnectedActionModal />
    <div className={cn('Users__title')}>Welcome!!!</div>
    <div className={cn('Users__button')}>
      <ConnectedCreateButton />
    </div>
    <div className={cn('Users__list')}>
      <ConnectedUsersList />
    </div>
  </section>
));
