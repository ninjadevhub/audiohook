import { Colors } from '../styles/Colors';
import { Sizes } from '../styles/Sizes';
const breakpoints = {
  xxs: '320px',
  xs: '375px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  xxl: '1440px',
};
const containerMaxWidths = {
  xxs: '90%',
  xs: '90%',
  sm: '540px',
  md: '720px',
  lg: '900px',
  xl: '1200px',
  xxl: '1300px',
};
const defaultTheme = {
  colors: Colors,
  sizes: Sizes,
  fonts: {
    default: 'Inter',
    mono: 'OCRAExtended',
  },
  fontSizes: {
    micro: '8px',
    small: '12px',
    medium: '13px',
    large: '15px',
    xLarge: '17px',
    xxLarge: '18px',
    subHead: '20px',
    head1: '30px',
    head: '35px',
    title: '83px',
  },
  backgroundColors: {
    darkest: Colors.almostBlack,
    darker: Colors.almostBlackTwo,
    dark: Colors.dark,
    medium: Colors.darkTwo,
    light: Colors.darkGreyBlueTwo,
  },
  fontColors: {
    highlight: Colors.aqua,
    light: Colors.white,
    active: Colors.veryLightBlue,
    default: Colors.lightGreyBlue,
  },
  spacing: {
    xs: '4px',
    s: '8px',
    m: '12px',
  },
  menuColors: {},
  breakpoints: breakpoints,
  containerMaxWidths: containerMaxWidths,
  devices: {
    xxs: `(min-width: ${breakpoints.xxs})`,
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
    xxl: `(min-width: ${breakpoints.xxl})`,
  },
};

export default defaultTheme;
