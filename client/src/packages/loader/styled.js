import styled from 'styled-components';

import loaderUrl from './loader.gif';

export const LoaderGif = styled.img.attrs({
  src: loaderUrl,
})`
  width: 300px;
  height: 300px;
`;

export const LoaderWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
