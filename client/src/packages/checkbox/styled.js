import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxLabel = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.activeTextColor};
  margin-left: 18px;
`;
