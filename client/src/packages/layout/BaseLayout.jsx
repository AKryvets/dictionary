import React, { memo, useCallback } from 'react';

import { useSelector } from 'react-redux';

import { Loader } from '../loader';

import { authSelectors } from '../../entities/auth';

import { history, setAccessToken } from '../utils';
import { PathNames } from '../../consts';

import { DataVisualizations } from '../../pages/data-visualization';

import {
  Content,
  ExitIcon,
  Header,
  MenuItem,
  MenuWrapper,
  UserIcon,
  UserWrapper,
  Wrapper,
} from './styled';

export const BaseLayout = memo(({ children, isLoading }) => {
  const user = useSelector(authSelectors.getUser);

  const goToHome = useCallback(() => {
    history.push({
      pathname: PathNames.home,
    });
  }, []);

  const goToInfo = useCallback(() => {
    history.push({
      pathname: PathNames.info,
    });
  }, []);

  const goToDataVisualizations = useCallback(() => {
    history.push({
      pathname: PathNames.dataVisualizations,
    });
  }, []);

  const logout = useCallback(() => {
    setAccessToken('');
    history.push({
      pathname: PathNames.auth,
    });
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header>
        <MenuWrapper>
          <MenuItem onClick={goToHome}>Home</MenuItem>
          <MenuItem onClick={goToInfo}>Info</MenuItem>
          <MenuItem onClick={goToDataVisualizations}>
            Data Visualizations
          </MenuItem>
        </MenuWrapper>

        <UserWrapper>
          <UserIcon />
          {`${user.firstName} ${user.lastName}`}
          <ExitIcon onClick={logout} />
        </UserWrapper>
      </Header>
      <Content>{children}</Content>
    </Wrapper>
  );
});
