import React, { memo } from 'react';
import { NotificationManager } from 'react-notifications';

import { LinearProgress } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';

import { ProgressWrapper } from './styled';

import './styles.css';
import { colors } from '../../theme';

class PureProgressManager {
  constructor() {
    this.customIds = [];
  }

  progress(_message, title, timeOut, onClick, priority) {
    NotificationManager.info(
      _message || <Progress />,
      title,
      timeOut,
      () => {},
      priority
    );

    const id = NotificationManager.listNotify.find(
      (n) => n.type === 'info' && !this.customIds.includes(n.id)
    );

    this.customIds.push(id);

    return id;
  }

  remove(notification) {
    NotificationManager.remove(notification);
  }
}

export const ProgressManager = new PureProgressManager();

const LinearProgressStyled = muiStyled(LinearProgress)(() => ({
  height: '5px',
  '&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)': {
    backgroundColor: colors.secondaryBackground,
  },
  '& .MuiLinearProgress-colorPrimary': {
    backgroundColor: colors.secondaryBackground,
  },
  '& .MuiLinearProgress-barColorPrimary': {
    backgroundColor: colors.darkBorderColor,
  },
}));

export const Progress = memo(() => (
  <ProgressWrapper>
    <LinearProgressStyled />
  </ProgressWrapper>
));
