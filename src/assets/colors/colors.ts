export type ColorTheme = {
  primary: string;
  secondary: string;
  primaryText: string;
  secondaryText: string;
  errorText: string;
  subtitle: string;
  info: string;
  subtle: string;
  placeholder: string;
  bright: string;
  active: string;
  transparent: string;
  background: string;
  shadow: string;
  overlay: string;
  border: string;
};

export const sharedColors = {
  black: '#000000',
  white: '#FFFFFF',
};

type SharedColors = typeof sharedColors;

export type TColors = ColorTheme & SharedColors;

export type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

const Colors: ColorPalettes = {
  dark: {
    primary: '#0d1117',
    secondary: sharedColors.white,
    primaryText: sharedColors.white,
    secondaryText: '#333333',
    errorText: '#ff0000',
    subtitle: '#666666',
    info: '#444444',
    subtle: '#dddddd',
    placeholder: '#484f58',
    bright: '#efce4a',
    active: '#007BFF',
    transparent: 'transparent',
    background: '#f5f5f5',
    shadow: sharedColors.black,
    overlay: '#00000066',
    border: '#cccccc',
    ...sharedColors,
  },
  light: {
    primary: '#0d1117',
    secondary: sharedColors.white,
    primaryText: sharedColors.white,
    secondaryText: '#333333',
    errorText: '#ff0000',
    subtitle: '#666666',
    info: '#444444',
    subtle: '#dddddd',
    placeholder: '#484f58',
    bright: '#efce4a',
    active: '#007BFF',
    transparent: 'transparent',
    background: '#f5f5f5',
    shadow: sharedColors.black,
    overlay: '#00000066',
    border: '#cccccc',
    ...sharedColors,
  },
};

export default Colors;
