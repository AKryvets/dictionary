import styled from 'styled-components';
import {
  TableContainer as MuiTableContainer,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from '@mui/material';

import { scrollable } from '../../theme';

export const TableHead = styled(MuiTableHead)(({ theme }) => ({
  background: theme.colors.background,
  height: '48px',
  fontFamily: 'Raleway, sans-serif',
  color: theme.colors.textColor,
  '& .MuiTableCell-root': {
    color: theme.colors.textColor,
    fontWeight: 'bold',
    fontSize: '12px',
    fontFamily: 'Raleway, sans-serif',
    lineHeight: 1,
    border: 'none',
    padding: '0 5px',

    '&:first-child': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },

    '&:last-child': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
    },

    '& .MuiButtonBase-root': {
      color: theme.colors.textColor,
      '& .MuiSvgIcon-root': {
        color: theme.colors.textColor,
      },
    },
  },
}));

export const StyledTableRow = styled(MuiTableRow)(({ isCustom, theme }) => ({
  marginBottom: '4px',
  height: '48px',
  fontFamily: 'Raleway, sans-serif',
  background: isCustom ? theme.colors.customBackground : 'transparent',

  '& .MuiTableCell-root': {
    color: theme.colors.textColor,
    fontFamily: 'Raleway, sans-serif',
    fontSize: '12px',
    lineHeight: 1,
    padding: '0 5px',

    '&:first-child': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },

    '&:last-child': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
    },
  },
}));

export const TableContainer = styled(MuiTableContainer)`
  overflow-y: hidden;
  ${scrollable}
`;

export const TableLoaderWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 20px 0;
`;
