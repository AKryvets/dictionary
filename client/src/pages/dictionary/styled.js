import styled from 'styled-components';

import { styled as muiStyled } from '@mui/material/styles';
import DeleteCircleIcon from 'mdi-react/DeleteCircleIcon';

import { SecondaryTextField } from '../../packages/input';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
`;

export const ControlWrapper = styled.div`
  display: flex;
`;

export const DeleteButton = styled(DeleteCircleIcon)`
  margin-left: auto;
  margin-right: 20px;
  fill: #ed4040;
`;

export const DeleteDictionaryButton = styled(DeleteButton)`
  margin-right: 5px;
`;

export const DeleteDictionaryButtonWrapper = styled.div`
  color: #ed4040;
  display: flex;
  align-items: center;
  margin-left: auto;
  height: fit-content;
  cursor: pointer;
  font-weight: 600;
`;

export const WordsSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin-top: 20px;
  width: 100%;
`;

export const WordsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 20px;
`;

export const InputField = muiStyled(SecondaryTextField)(() => ({
  marginBottom: 12,
}));
