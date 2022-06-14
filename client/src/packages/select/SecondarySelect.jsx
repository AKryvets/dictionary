import React, { memo } from 'react';

import Select from 'react-select';

import { colors } from '../../theme';

import { SelectLabel, Wrapper } from './styled';

export const selectStyles = {
  control: (styles) => ({
    ...styles,
    background: colors.background,
    borderRadius: 8,
    boxShadow: 0,
    fontSize: '16px',
    lineHeight: 1,
    color: colors.textColor,

    cursor: 'pointer',
    border: `1px solid ${colors.background}`,
    ':hover': {
      border: `1px solid ${colors.background}`,
    },
    ':focus': {
      border: `1px solid ${colors.background}`,
    },
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    background: isSelected ? colors.background : colors.secondaryBackground,
    color: colors.textColor,
    cursor: 'pointer',
    ':active': {
      ...styles[':active'],
      background: colors.background,
      color: colors.textColor,
    },
    ':hover': {
      ...styles[':active'],
      background: colors.background,
      color: colors.textColor,
    },
  }),
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles }),
  menuList: (base) => ({
    ...base,
    '-ms-overflow-style': '-ms-autohiding-scrollbar',
    'scrollbar-color': `${colors.scrollColor} transparent`,
    'scrollbar-width': '0.4rem',
    '&:hover': {
      'scrollbar-color': `${colors.scrollColor} transparent`,
    },

    '&::-webkit-scrollbar': {
      width: '0.4rem',
      height: '0.4rem',
      display: 'block',
    },

    '&::-webkit-scrollbar-track': {
      display: 'block',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: colors.scrollColor,
      borderRadius: 0,
      display: '',

      '&:hover': {
        backgroundColor: colors.scrollColor,
      },
    },
  }),
};

export const SecondarySelect = memo(({ label, ...rest }) => (
  <Wrapper>
    {!!label && <SelectLabel>{label}</SelectLabel>}
    <Select
      styles={selectStyles}
      components={{ IndicatorSeparator: null }}
      {...rest}
    />
  </Wrapper>
));
