import React, { memo } from 'react';

import { BaseLayout } from '../../packages/layout';

import { Item, ItemLabel, ItemValue, Wrapper } from './styled';

export const Info = memo(() => (
  <BaseLayout isLoading={false}>
    <Wrapper>
      <Item>
        <ItemLabel>Author:</ItemLabel>
        <ItemValue>Kryvets Oleksandr</ItemValue>
      </Item>
      <Item>
        <ItemLabel>About:</ItemLabel>
        <ItemValue>
          This project is dictionary system that was created as practice work
        </ItemValue>
      </Item>
    </Wrapper>
  </BaseLayout>
));
