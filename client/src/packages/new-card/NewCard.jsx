import React, { memo } from 'react';

import { AddIcon, CardWrapper } from './styled';

export const NewCard = memo(({ style, onClick }) => (
  <CardWrapper style={style} onClick={onClick}>
    <AddIcon />
  </CardWrapper>
));
