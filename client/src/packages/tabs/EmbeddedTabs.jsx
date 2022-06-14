import React, { memo } from 'react';

import { EmbeddedTab, TabsWrapper } from './styled';

export const EmbeddedTabs = memo(({ tabs, activeTabName, onClick }) => (
  <TabsWrapper>
    {tabs.map(({ name, title }) => (
      <EmbeddedTab
        key={name}
        isActiveTab={activeTabName === name}
        onClick={() => onClick(name)}
      >
        {title}
      </EmbeddedTab>
    ))}
  </TabsWrapper>
));
