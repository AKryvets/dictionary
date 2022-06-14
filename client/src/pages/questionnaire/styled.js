import styled from 'styled-components';
import PlayCircleIcon from 'mdi-react/PlayCircleIcon';
import { styled as muiStyled } from '@mui/material/styles';

import {SecondaryTextField, TextField} from '../../packages/input';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 120px);
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Question = styled.div`
  font-size: 1.875rem;
  line-height: 1.5;
`;

export const HelpMessage = styled.div`
  font-size: 18px;
`;

export const Line = styled.div`
  height: 10px;
  width: 100%;
  border-bottom: 1px solid #d6dee6;
  margin-bottom: 50px;
`;

export const InputField = muiStyled(SecondaryTextField)(() => ({
  marginBottom: 12,
  width: '100%',
  maxWidth: 500
}));

export const BackToHome = styled.div`
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  font-size: 14px;
  text-decoration: underline;
`;

export const ContinueButton = styled.button`
  border-radius: 2.815rem;
  margin: 0 0.3125rem 0.3125rem;
  padding: 0.75rem 2.5rem;
  text-align: center;
  font-size: 1rem;
  border: 0.125rem solid #116eee;
  color: #fff;
  background-color: #116eee;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border: 0.125rem solid #3382ef;
    background-color: #3382ef;
  }
`;

export const StartButton = styled(PlayCircleIcon)`
  fill: #6bbd00;
  margin-right: 20px;
`;
