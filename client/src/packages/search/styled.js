import styled from 'styled-components';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import CloseThickIcon from 'mdi-react/CloseThickIcon';

export const SearchWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  borderBottom: `1px solid ${theme.colors.textColor}`,
  input: {
    '&::placeholder': {
      fontFamily: 'Raleway, sans-serif',
    },
  },
}));

export const SearchIcon = styled(MagnifyIcon)``;
export const ClearIcon = styled(CloseThickIcon)``;
