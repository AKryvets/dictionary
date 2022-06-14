import React, { memo, useState } from 'react';

import { Chart } from '../../packages/chart';

import { SecondaryTextField } from '../../packages/input';

import { FieldWrapper, Wrapper } from './styled';
import { formatChartModel } from './utils';

export const ChartTab = memo(() => {
  const [kValue, setKValue] = useState('1');

  const cardData = formatChartModel(kValue);

  return (
    <Wrapper>
      <FieldWrapper>
        <SecondaryTextField
          label="K=(K!=0)"
          value={kValue}
          onChange={(e) => setKValue(e.target.value)}
        />
      </FieldWrapper>
      <Chart chartData={cardData} />
    </Wrapper>
  );
});
