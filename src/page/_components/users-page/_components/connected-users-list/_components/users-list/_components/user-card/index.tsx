import React, { memo, useState, useCallback } from 'react';
import classnames from 'classnames/bind';
import { InView } from 'react-intersection-observer';
import { IconButton } from '@material-ui/core';
import { Close, EditOutlined } from '@material-ui/icons';
import { DeleteUserRequestType } from '../../../../../../../../../api';
import { DataForEditType } from '../../../../../../_redux';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  id: number;
  name: string;
  lastName: string;
  avatar: string;
  email: string;
  onEditButtonClick: (values: DataForEditType) => void;
  onDeleteButtonClick: (values: DeleteUserRequestType) => void;
};

export const UserCard = memo(
  ({
    name,
    lastName,
    avatar,
    email,
    id,
    onEditButtonClick,
    onDeleteButtonClick,
  }: PropsType) => {
    const [imgInView, setImgInView] = useState(false);

    const handleEdit = useCallback(
      () => onEditButtonClick({ name, id }),
      [onEditButtonClick, name, id],
    );

    const handleDelete = useCallback(
      () => onDeleteButtonClick({ id }),
      [onDeleteButtonClick, id],
    );

    const handleScrollImg = useCallback(
      (inView: boolean, { isIntersecting }: IntersectionObserverEntry) => {
        if (isIntersecting) setImgInView(true);
      },
      [],
    );

    return (
      <InView as="div" onChange={handleScrollImg} threshold={0}>
        <div className={cn('User-card')}>
          <img
            alt={lastName}
            className={cn('User-card__avatar')}
            src={imgInView ? avatar : undefined}
          />
          <div className={cn('User-card__info')}>
            <p>
              <strong>{`${name}  ${lastName}`}</strong>
            </p>
            <p>{email}</p>
            <span className="buttons">
              <IconButton
                aria-label="edit-button"
                id={name}
                onClick={handleEdit}
                size="small"
              >
                <EditOutlined />
              </IconButton>
              <IconButton
                aria-label="delete-button"
                id={name}
                onClick={handleDelete}
                size="small"
              >
                <Close />
              </IconButton>
            </span>
          </div>
        </div>
      </InView>
    );
  },
);
