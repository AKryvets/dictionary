import { styled as muiStyled } from '@mui/material/styles';
import { Button as DefaultButton } from '@mui/material';

export const Button = muiStyled(DefaultButton)(({ theme }) => ({
  background: theme.colors.activeBackground,
  color: theme.colors.secondaryBackground,
  fontFamily: 'Raleway, sans-serif',
  borderRadius: 8,
  textTransform: 'initial',
  fontWeight: 600,
  height: '40px',
  fontSize: '16px',
  lineHeight: 1,
  ':hover': {
    background: theme.colors.activeBackground,
    color: theme.colors.secondaryBackground,
  },
}));

export const SecondaryButton = muiStyled(DefaultButton)(({ theme }) => ({
  background: 'transparent',
  color: theme.colors.activeBackground,
  borderRadius: 8,
  display: 'flex',
  fontFamily: 'Raleway, sans-serif',
  alignItems: 'center',
  border: `1px solid ${theme.colors.activeBackground}`,
  textTransform: 'initial',
  fontWeight: 600,
  height: '40px',
  padding: '8px',
  fontSize: '16px',
  lineHeight: 1,
  ':hover': {
    background: 'transparent',
    color: theme.colors.activeBackground,
    border: `1px solid ${theme.colors.activeBackground}`,
  },
}));
