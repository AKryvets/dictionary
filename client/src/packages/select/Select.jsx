import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

function getStyles(value, selectedValue, theme) {
  return {
    fontWeight:
      selectedValue === value
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PureSelect = styled(MuiSelect)(({ theme }) => ({
  fontFamily: 'Raleway, sans-serif',

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.colors.activeTextColor,
    '&.Mui-focused fieldset': {
      borderColor: theme.colors.activeTextColor,
    },
    '& fieldset': {
      borderColor: `${theme.colors.activeTextColor} !important`,

      '&:hover': {
        borderColor: `${theme.colors.activeTextColor} !important`,
      },
    },
  },
}));

const PureInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.colors.activeTextColor,
  fontFamily: 'Raleway, sans-serif',
}));

const PureMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: 'Raleway, sans-serif',
}));

export const Select = ({
  options,
  name,
  label,
  value,
  error,
  styles = {},
  helperText,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <FormControl error={error} sx={styles}>
      <PureInputLabel size="small">{label}</PureInputLabel>
      <PureSelect
        name={name}
        label={label}
        value={value}
        {...rest}
        size="small"
      >
        {options?.map((option) => (
          <PureMenuItem
            key={option.value}
            value={option.value}
            style={getStyles(option.value, value, theme)}
          >
            {option.label}
          </PureMenuItem>
        ))}
      </PureSelect>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
