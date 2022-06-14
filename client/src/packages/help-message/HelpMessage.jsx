import React, { memo } from 'react';

import { IconButton } from '@mui/material';

import { colors } from '../../theme';

import { Tooltip } from '../tooltip';

import { HelpIcon } from './styled';

export const HelpMessage = memo(
  ({ onClick, title = 'Help message', color = colors.secondaryBackground }) => (
    <Tooltip title={title} arrow>
      <IconButton onClick={onClick} sx={{ padding: 0 }}>
        <HelpIcon color={color} />
      </IconButton>
    </Tooltip>
  )
);
