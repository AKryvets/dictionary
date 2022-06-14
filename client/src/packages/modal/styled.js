import styled from 'styled-components';

import CloseIcon from 'mdi-react/CloseIcon';

export const CloseIconButton = styled(CloseIcon)`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.darkBorderColor};
`;

export const ModalHeader = styled.div`
  padding: 40px 26px 0 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 26px;
`;
