import React, { memo } from 'react';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames/bind';
import { Button } from '@material-ui/core';
import { EditDataPropsType } from '../../../../_redux';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  title?: string;
  onCancel: () => void;
  onSubmit: (values: EditDataPropsType) => void;
};

const isValue = (value: string) => !Boolean(value);

export const ActionForm = memo(
  ({ onSubmit, onCancel, title = '' }: PropsType) => (
    <div className={cn('Action-form')}>
      <h1 className={cn('Action-form__title')}>{title}</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, invalid, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div className={cn('Action-form__field')}>
              <label className={cn('Action-form__label')}>Имя</label>
              <Field
                className={cn('Action-form__input')}
                component="input"
                name="name"
                placeholder="Введите имя"
                validate={isValue}
              />
            </div>
            <div className={cn('Action-form__field')}>
              <label className={cn('Action-form__label')}>Работа</label>
              <Field
                className={cn('Action-form__input')}
                component="input"
                name="job"
                placeholder="Место работы"
                validate={isValue}
              />
            </div>
            <Button
              children="Отправить"
              color="primary"
              disabled={invalid || submitting || pristine}
              fullWidth={true}
              type="submit"
              variant="contained"
            />
            <div className={cn('Action-form__cancel-button')}>
              <Button
                children="Отмена"
                color="primary"
                fullWidth={true}
                onClick={onCancel}
                variant="outlined"
              />
            </div>
          </form>
        )}
      />
    </div>
  ),
);
