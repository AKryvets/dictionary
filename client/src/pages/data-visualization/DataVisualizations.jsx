import React, { memo, useEffect, useState } from 'react';

import { Tab } from '@mui/material';

import { TabContext, TabList, TabPanel } from '@mui/lab';

import { useDispatch, useSelector } from 'react-redux';

import { BaseLayout } from '../../packages/layout';

import {
  dictionarySelectors,
  dictionaryService,
} from '../../entities/dictionary';

import { Wrapper } from './styled';
import { Translate } from './Translate';
import { ChartTab } from './ChartTab';
import { AllWords } from './AllWords';

export const DataVisualizations = memo(() => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('1');
  const allWords = useSelector(dictionarySelectors.getAllWords);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(dictionaryService.getAllWords());
  }, []);

  return (
    <BaseLayout isLoading={!allWords.length}>
      <Wrapper>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All words" value="1" />
            <Tab label="Chart" value="2" />
            <Tab label="Translate" value="3" />
          </TabList>
          <TabPanel value="1">
            <AllWords />
          </TabPanel>
          <TabPanel value="2">
            <ChartTab />
          </TabPanel>
          <TabPanel value="3">
            <Translate />
          </TabPanel>
        </TabContext>
      </Wrapper>
    </BaseLayout>
  );
});
