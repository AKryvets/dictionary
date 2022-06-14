import React, { memo } from 'react';

import { useParams } from 'react-router';

import { Tab, TabsWrapper } from './styled';

export const Tabs = memo(({ tabs }) => {
  const { id, accountId, scanId } = useParams();

  return (
    <TabsWrapper>
      {tabs.map(({ name, title, to }) => {
        const formattedUrl = to
          .replace(':id', id)
          .replace(':accountId', accountId)
          .replace(':scanId', scanId ?? 'current');

        return (
          <Tab
            key={name}
            isActiveTab={
              window.location.pathname === formattedUrl ||
              window.location.pathname.includes(formattedUrl)
            }
            to={formattedUrl}
          >
            {title}
          </Tab>
        );
      })}
    </TabsWrapper>
  );
});
