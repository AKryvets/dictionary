import styled from 'styled-components';
import PlusIcon from 'mdi-react/PlusIcon';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-right: 20px;
  border-width: 2px;
  border-color: #dddddd;
  border-style: dashed;
  padding: 20px;
  height: fit-content;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const AddIcon = styled(PlusIcon)`
  fill: #dddddd;
`;
