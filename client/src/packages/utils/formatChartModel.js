import { severityChartPalette } from '../../theme';

export const formatChartModel = (chartModel) => {
  const sortedByDate = [...chartModel];
  sortedByDate.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return [
    {
      label: 'Medium',
      color: severityChartPalette.Medium,
      data: sortedByDate.map((data) => ({
        primary: data.timestamp,
        secondary: data.details?.medium ?? 0,
      })),
    },
    {
      label: 'Not defined',
      color: severityChartPalette.Unset,
      data: sortedByDate.map((data) => ({
        primary: data.timestamp,
        secondary: data.details?.unset ?? 0,
      })),
    },
    {
      label: 'High',
      color: severityChartPalette.High,
      data: sortedByDate.map((data) => ({
        primary: data.timestamp,
        secondary: data.details?.high ?? 0,
      })),
    },
    {
      label: 'Low',
      color: severityChartPalette.Low,
      data: sortedByDate.map((data) => ({
        primary: data.timestamp,
        secondary: data.details?.low ?? 0,
      })),
    },
    {
      label: 'Total',
      color: severityChartPalette.Total,
      data: sortedByDate.map((data) => ({
        primary: data.timestamp,
        secondary: data.total ?? 0,
      })),
    },
  ];
};
