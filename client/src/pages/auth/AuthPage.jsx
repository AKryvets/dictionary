import React, { memo, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../packages/button';
import { Form } from '../../packages/form';
import { authSelectors, authService } from '../../entities/auth';

import { authValidationSchema, registerValidationSchema } from './validate';
import {
  AuthFormWrapper,
  AuthPageWrapper,
  ChangeModeLabel,
  InputField,
  LoginField,
  PasswordField,
} from './styled';

const loginInitialValues = {
  email: '',
  password: '',
};

const registerInitialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const authModes = {
  login: 'login',
  registration: 'registration',
};

export const AuthPage = memo(() => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(authModes.login);
  const { isLoading } = useSelector(authSelectors.getAuthData);

  const onSignInSubmit = useCallback(
    (values) => {
      dispatch(authService.signIn(values));
    },
    [dispatch]
  );

  const onSignUpSubmit = useCallback(
    (values) => {
      dispatch(authService.register(values));
    },
    [dispatch]
  );

  const toggleMode = useCallback(() => {
    if (mode === authModes.login) {
      setMode(authModes.registration);
    } else {
      setMode(authModes.login);
    }
  }, [dispatch, mode]);

  return (
    <AuthPageWrapper>
      <AuthFormWrapper>
        {mode === authModes.login ? (
          <Form
            validationSchema={authValidationSchema}
            initialValues={loginInitialValues}
            onSubmit={onSignInSubmit}
            isLoading={isLoading}
          >
            <LoginField name="email" label="Email" />
            <PasswordField name="password" label="Password" type="password" />
            <Button variant="contained" size="medium" type="submit">
              Sign in
            </Button>
          </Form>
        ) : (
          <Form
            validationSchema={registerValidationSchema}
            initialValues={registerInitialValues}
            onSubmit={onSignUpSubmit}
            isLoading={isLoading}
          >
            <LoginField name="email" label="Email" />
            <PasswordField name="password" label="Password" type="password" />
            <InputField name="firstName" label="First name" />
            <InputField name="lastName" label="Last name" />
            <Button variant="contained" size="medium" type="submit">
              Sign Up
            </Button>
          </Form>
        )}
        <ChangeModeLabel onClick={toggleMode}>
          {mode === authModes.login ? 'Registration' : 'Login'}
        </ChangeModeLabel>
      </AuthFormWrapper>
    </AuthPageWrapper>
  );
});
