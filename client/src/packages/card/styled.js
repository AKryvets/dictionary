import styled from 'styled-components';
import PencilIcon from 'mdi-react/PencilIcon';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  margin-right: 20px;
  cursor: pointer;
  min-height: 68px;
  height: fit-content;
  margin-bottom: 20px;
  word-break: break-word;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding: 20px;
`;

export const EditIcon = styled(PencilIcon)`
  margin-right: 10px;
  fill: #dddddd;
`;
