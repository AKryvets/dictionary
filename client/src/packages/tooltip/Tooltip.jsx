import { Tooltip as MuiTooltip } from '@mui/material';

import { TittleWrapper } from './styled';

export const Tooltip = ({ children, title, ...rest }) => (
  <MuiTooltip title={<TittleWrapper>{title}</TittleWrapper>} {...rest}>
    {children}
  </MuiTooltip>
);
