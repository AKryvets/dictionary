import React, { memo } from 'react';
import { Chart } from 'react-charts';

import { ChartWrapper } from './styled';

export const PureChart = memo(({ chartData, styles = {} }) => {
  const primaryAxis = React.useMemo(
    () => ({
      scaleType: 'linear',
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        scaleType: 'linear',
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  if (!chartData) return null;

  return (
    <ChartWrapper style={{ width: 500 }}>
      <Chart
        options={{
          data: chartData,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </ChartWrapper>
  );
});
