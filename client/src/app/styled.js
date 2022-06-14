import styled, { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.secondaryBackground};
    color: ${({ theme }) => theme.colors.textColor};
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
      overflow: hidden;
    line-height: 1.8;
  }
  * {
    font-family: Raleway, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  #root {
    flex: 1;
    height: 100vh;
  }
`;

export const AppWrapper = styled.div`
  flex: 1;
  height: 100%;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const GlobalLoaderWrapper = styled(LoaderWrapper)`
  background: ${({ theme }) => theme.colors.secondaryBackground};
`;
