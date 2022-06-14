export const palette = {
  black: '#000000',
  white: '#ffffff',
  lightBlue: '#EBF2FE',
  mediumBlue: '#CFD9FA',
  lightGrey: '#F4F4F4',
  thirdGrey: '#e6e6e6',
  grey: '#BFBFBF',
  mediumGrey: '#535353',
  blue: '#2F6CF6',
  dimBlue: '#3679CD',
  lightOrange: '#F19140',
  orange: '#FF8C22',
  lightRed: '#E73D3D',
  lightGreen: '#7DDC6E',
  yellow: '#EFE700',
  red: '#D32F2F',
  green: '#57D257',
  milky: '#FCF7F2',
  mediumGreen: '#00a900',
};

export const shadows = {
  cardShadow: '0px 4px 18px rgba(0, 0, 0, 0.15)',
  secondaryShadow: '0px 4px 18px rgba(6, 23, 74, 0.15)',
};

export const colors = {
  background: palette.lightBlue,
  secondaryBackground: palette.white,

  scrollColor: palette.grey,

  borderColor: palette.lightGrey,
  secondaryBorderColor: palette.grey,
  thirdBorderColor: palette.thirdGrey,
  mediumBorderColor: palette.mediumBlue,
  darkBorderColor: palette.mediumGrey,

  sidebarBackground: palette.white,
  sidebarInfoBoxBackground: palette.lightBlue,

  breadcrumbsText: palette.grey,
  activeBreadcrumbsText: palette.blue,

  activeColor: palette.blue,

  greyText: palette.grey,
  textColor: palette.black,
  activeTextColor: palette.blue,
  secondaryActiveTextColor: palette.dimBlue,
  activeBackground: palette.blue,
  secondaryTextColor: palette.mediumGrey,

  customLabelColor: palette.lightOrange,

  inProgress: palette.orange,
  warning: palette.orange,
  lowWarning: palette.yellow,
  success: palette.green,
  unset: palette.blue,
  danger: palette.red,

  warningIcon: palette.lightRed,
  successIcon: palette.lightGreen,
  activeIcon: palette.blue,

  customBackground: palette.milky,
  customTextColor: palette.mediumGreen,
  helpMessageColor: palette.mediumGrey,
};

export const severityChartPalette = {
  Medium: palette.orange,
  Low: palette.yellow,
  Total: palette.green,
  Unset: palette.blue,
  High: palette.red,
};
