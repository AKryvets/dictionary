import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 120px);
`;

export const Languages = styled.div`
  display: flex;
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: none;
  height: 200px;
  background: ${({ theme }) => theme.colors.background};
  outline: none;
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const TranslateLabel = styled.div`
  width: 100%;
  font-weight: bold;
  margin-top: 10px;
  color: #1976d2;
`;

export const TranslateResult = styled.div`
  width: 100%;
  font-weight: bold;
`;

export const Language = styled.div`
  display: flex;
  margin-right: 20px;
  width: 200px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  flex-direction: column;
`;