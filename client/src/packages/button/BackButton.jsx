import React, { memo } from 'react';

import { SecondaryButton } from './Button';
import { ArrowIcon, BackButtonContent } from './styled';

export const BackButton = memo(({ children, ...rest }) => (
  <SecondaryButton {...rest}>
    <ArrowIcon />
    <BackButtonContent>{children}</BackButtonContent>
  </SecondaryButton>
));
