import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Router } from 'react-router';

import { appSelectors, appService } from '../entities/app';
import { history } from '../packages/utils';

import { ErrorBoundary } from '../packages/error-boundary';
import { Loader } from '../packages/loader';

import { AppWrapper, GlobalLoaderWrapper } from './styled';

export const App = ({ children }) => {
  const dispatch = useDispatch();
  const { isReady } = useSelector(appSelectors.getAppData);

  useEffect(() => {
    dispatch(appService.init());
  }, []);

  if (!isReady) {
    return (
      <GlobalLoaderWrapper>
        <Loader />
      </GlobalLoaderWrapper>
    );
  }

  return (
    <AppWrapper>
      <Router history={history}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </Router>
    </AppWrapper>
  );
};
