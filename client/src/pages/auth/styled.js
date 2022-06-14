import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';

import { xsm } from '../../theme';
import { TextField } from '../../packages/input';

export const AuthPageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const LoginField = styled(TextField)``;

export const InputField = muiStyled(TextField)(() => ({
  marginBottom: 12,
}));

export const PasswordField = muiStyled(TextField)(() => ({
  marginTop: 12,
  marginBottom: 12,
}));

export const AuthFormWrapper = styled.div`
  width: 400px;
  border-radius: 10px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${xsm}) {
    width: 100%;
  }
`;

export const ChangeModeLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
