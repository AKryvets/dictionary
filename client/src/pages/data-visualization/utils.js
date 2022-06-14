export const formatChartModel = (k) => {
  const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const ys = xs.map((x) => x / k);

  return [
    {
      label: 'y=x/k',
      data: ys.map((y, index) => ({
        primary: y,
        secondary: xs[index],
      })),
    },
  ];
};
