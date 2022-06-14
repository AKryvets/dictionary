import React, { memo, useCallback } from 'react';

import { CardWrapper, Header } from './styled';

export const Card = memo(({ title, id, style, onClick, postfix }) => {
  const onClickHandler = useCallback(() => {
    onClick(id);
  }, [id]);

  return (
    <CardWrapper style={style} onClick={onClickHandler}>
      <Header>{title}</Header>
      {!!postfix && postfix}
    </CardWrapper>
  );
});
