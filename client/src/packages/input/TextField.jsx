import React, { memo } from 'react';

import DefaultTextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const PureTextField = styled(DefaultTextField)(({ theme }) => ({
  '& .MuiTextField-root': {
    boxSizing: 'border-box',
  },
  '& .MuiInputBase-input': {
    padding: 10,
    fontFamily: 'Raleway, sans-serif',
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Raleway, sans-serif',
    color: theme.colors.activeTextColor,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.colors.activeTextColor,
  },
  '& .MuiInputLabel-root.Mui-active': {
    color: theme.colors.activeTextColor,
  },
  '& .MuiInputLabel-root.Mui-selected': {
    color: theme.colors.activeTextColor,
  },
  '& .MuiOutlinedInput-input': {
    color: theme.colors.textColor,
    fontFamily: 'Raleway, sans-serif',
  },
  '& .MuiOutlinedInput-root': {
    borderColor: theme.colors.activeTextColor,

    '&.Mui-focused fieldset': {
      borderColor: theme.colors.activeTextColor,
    },
    '& fieldset': {
      borderColor: theme.colors.activeTextColor,
    },
    '&:hover fieldset': {
      borderColor: theme.colors.activeTextColor,
    },
    '&:focus fieldset': {
      borderColor: theme.colors.activeTextColor,
    },
  },
}));

export const TextField = memo((props) => (
  <PureTextField size="small" {...props} />
));
