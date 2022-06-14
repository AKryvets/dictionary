import { css } from 'styled-components';

export const scrollable = css`
  overflow: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  scrollbar-color: ${({ theme }) => theme.colors.scrollColor} transparent;
  scrollbar-width: 0.4rem;

  &:hover {
    scrollbar-color: ${({ theme }) => theme.colors.scrollColor} transparent;
  }

  &::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    display: block;
  }

  &::-webkit-scrollbar-track {
    display: block;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollColor};
    border-radius: 0;
    display: block;

    &:hover {
      background-color: ${({ theme }) => theme.colors.scrollColor};
    }
  }
`;
