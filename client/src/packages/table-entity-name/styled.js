import styled from 'styled-components';

import { icons } from '../icons';

export const TruncateWrapper = styled.div`
  cursor: pointer;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  width: calc(100% - 40px);
  vertical-align: top;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomIcon = styled.img.attrs({
  src: icons.customIcon,
})`
  margin-right: 5px;
  width: 20px;
`;
