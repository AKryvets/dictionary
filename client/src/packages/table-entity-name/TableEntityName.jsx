import React, { memo } from 'react';

import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { colors } from '../../theme';

import { Tooltip } from '../tooltip';

import { CustomIcon, TruncateWrapper, Wrapper } from './styled';

export const TableEntityName = memo(({ value, to, isCustom }) => (
  <Wrapper>
    {isCustom && <CustomIcon />}
    <TruncateWrapper>
      <Tooltip title={value} arrow>
        <Link
          component={NavLink}
          to={to}
          underline="hover"
          sx={{
            color: colors.activeColor,
          }}
        >
          {value}
        </Link>
      </Tooltip>
    </TruncateWrapper>
  </Wrapper>
));
