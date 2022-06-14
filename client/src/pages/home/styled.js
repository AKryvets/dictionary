import styled from 'styled-components';
import PlayCircleIcon from 'mdi-react/PlayCircleIcon';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
`;

export const StartButton = styled(PlayCircleIcon)`
  fill: #6bbd00;
  margin-right: 20px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
