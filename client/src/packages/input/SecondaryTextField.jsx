import React, { memo } from 'react';

import DefaultTextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const PureTextField = styled(DefaultTextField)(({ theme }) => ({
  marginBottom: 32,
  fontFamily: 'Raleway, sans-serif',

  '&:last-child': {
    marginBottom: 0,
  },
  '& .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused': {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: 1,
    fontFamily: 'Raleway, sans-serif',
    color: theme.colors.textColor,
  },
  '& .MuiInput-input': {
    padding: 10,
    background: theme.colors.secondaryBackground,
    border: `1px solid ${theme.colors.secondaryBorderColor}`,
    boxSizing: 'border-box',
    borderRadius: '8px',
    height: '40px',
    fontFamily: 'Raleway, sans-serif',
    color: theme.colors.textColor,
  },
  '& .MuiInput-root:after': {
    border: 'none',
  },
  '& .MuiInput-root:before': {
    border: 'none',
  },
  '& .MuiInput-root.Mui-disabled:before': {
    border: 'none',
  },
  '& .MuiInput-root:hover:not(.Mui-disabled):before': {
    border: 'none',
  },
  '& .MuiInput-root:hover:before': {
    border: 'none',
  },
  '& .MuiInput-root:hover:after': {
    border: 'none',
  },
  '& .MuiInput-input.Mui-disabled': {
    background: theme.colors.background,
  },
}));

export const SecondaryTextField = memo((props) => (
  <PureTextField
    size="small"
    variant="standard"
    InputLabelProps={{
      shrink: true,
    }}
    {...props}
  />
));
