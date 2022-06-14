import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { colors } from '../../theme';

import { debounce } from '../utils';

import { ClearIcon, SearchIcon, SearchWrapper } from './styled';

export const Search = ({ onSearch, styles, wrapperStyles, searchValue }) => {
  const [value, setValue] = useState('');

  const onSearchHandlerWithDebounce = useMemo(
    () => debounce((newValue) => onSearch(newValue), 500),
    []
  );

  const clearValue = useCallback(() => {
    setValue('');
    onSearchHandlerWithDebounce('');
  }, [onSearch, setValue]);

  const onSearchValueChange = useCallback(
    (event) => {
      setValue(event.target.value);

      onSearchHandlerWithDebounce(event.target.value);
    },
    [onSearchHandlerWithDebounce, debounce]
  );

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  return (
    <SearchWrapper style={wrapperStyles}>
      <InputBase
        placeholder="Search"
        size="small"
        value={value}
        onChange={onSearchValueChange}
        sx={{
          color: colors.textColor,
          padding: '0 10px',
          ...styles,
        }}
      />
      <IconButton sx={{ padding: '3px' }}>
        {value ? (
          <ClearIcon
            color={styles?.color || colors.textColor}
            onClick={clearValue}
          />
        ) : (
          <SearchIcon color={styles?.color || colors.textColor} />
        )}
      </IconButton>
    </SearchWrapper>
  );
};
