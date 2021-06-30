import React, { memo } from 'react';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames/bind';
import { Button } from '@material-ui/core';
import { GetTokenRequestType } from '../../../../../api';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  onSubmit: (values: GetTokenRequestType) => void;
};

// const required = (value: string) => !Boolean(value);

export const LoginForm = memo(({ onSubmit }: PropsType) => (
  <div className={cn('Login-form')}>
    <h1 className={cn('Login-form__title')}>Вход</h1>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine, submitting, values }) => {
        // console.log(invalid, 'invalid');
        // // console.log(submitError, 'submitError');
        // console.log(valid, 'valid');

        return (
          <form onSubmit={handleSubmit}>
            <div className={cn('Login-form__field')}>
              <label className={cn('Login-form__label')}>Email</label>
              <Field
                className={cn('Login-form__input')}
                component="input"
                name="email"
                placeholder="eve.holt@reqres.in"
              />
            </div>
            <div className={cn('Login-form__field')}>
              <label className={cn('Login-form__label')}>Пароль</label>
              <Field
                className={cn('Login-form__input')}
                component="input"
                name="password"
                placeholder="your password"
              />
            </div>
            <Button
              children="Далее"
              color="secondary"
              disabled={pristine || submitting}
              fullWidth={true}
              type="submit"
              variant="contained"
            />
          </form>
        );
      }}
    />
  </div>
));
