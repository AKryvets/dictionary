import styled from 'styled-components';
import AlertIcon from 'mdi-react/CarBrakeAlertIcon';

export const ErrorWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WarningMessage = styled.div`
  font-size: 32px;
  padding: 20px;
  text-align: center;
  max-width: 700px;
`;

export const WarningIcon = styled(AlertIcon)``;
