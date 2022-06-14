import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SelectLabel = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 8px;
  margin-top: 32px;
`;
