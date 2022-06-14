import { styled as muiStyled } from '@mui/material/styles';
import React, { memo, useCallback, useEffect, useState } from 'react';

import { Checkbox as DefaultCheckbox } from '@mui/material';

import { CheckboxLabel, CheckboxWrapper } from './styled';

export const PrimaryCheckboxStyled = muiStyled(DefaultCheckbox)(
  ({ theme }) => ({
    color: theme.colors.secondaryBackground,
    padding: 0,
    '& .MuiTouchRipple-root': {
      color: theme.colors.secondaryBackground,
    },
    '& .MuiSvgIcon-root': {
      fill: theme.colors.secondaryBackground,
    },
    '& .MuiCheckbox-indeterminate': {
      color: theme.colors.secondaryBackground,
    },
  })
);

export const CheckboxStyled = muiStyled(DefaultCheckbox)(({ theme }) => ({
  color: theme.colors.activeTextColor,
  padding: 0,
  '& .MuiTouchRipple-root': {
    color: theme.colors.activeTextColor,
  },
  '& .MuiSvgIcon-root': {
    fill: theme.colors.activeTextColor,
  },
  '& .MuiCheckbox-indeterminate': {
    color: theme.colors.activeTextColor,
  },
}));

export const Checkbox = memo(
  ({ appearance, onChange, label, defaultValue = false, ...rest }) => {
    const [isAgree, setIsAgree] = useState(defaultValue);

    const Component =
      appearance === 'primary' ? PrimaryCheckboxStyled : CheckboxStyled;

    const toggleAgree = useCallback(
      (e) => {
        e.stopPropagation();

        setIsAgree(!isAgree);
        if (onChange) onChange(!isAgree);
      },
      [isAgree]
    );

    useEffect(() => {
      setIsAgree(defaultValue);
    }, [defaultValue]);

    return (
      <CheckboxWrapper onClick={toggleAgree}>
        <Component color="primary" checked={isAgree} {...rest} />
        {!!label && <CheckboxLabel>{label}</CheckboxLabel>}
      </CheckboxWrapper>
    );
  }
);

export const DumbCheckbox = memo(
  ({ appearance, label, value = false, onClick, ...rest }) => {
    const [isAgree, setIsAgree] = useState(value);

    const Component =
      appearance === 'primary' ? PrimaryCheckboxStyled : CheckboxStyled;

    useEffect(() => {
      setIsAgree(value);
    }, [value]);

    return (
      <CheckboxWrapper onClick={onClick}>
        <Component color="primary" checked={isAgree} {...rest} />
        {!!label && <CheckboxLabel>{label}</CheckboxLabel>}
      </CheckboxWrapper>
    );
  }
);
