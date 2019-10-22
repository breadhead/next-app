import { colors } from './colors';

const transparent = {
  backgroundColor: 'inherit',
  color: 'inherit',
  border: 'none',
};

export const buttonColors = {
  primary: {
    backgroundColor: colors.black,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.darkGray,
      color: colors.white,
    },
    '&:disabled': {
      color: colors.battleshipGrey,
      backgroundColor: colors.veryLightPink,
    },
  },
  secondary: {
    backgroundColor: colors.veryLightPink,
    color: colors.battleshipGrey,
    border: `1px solid ${colors.battleshipGrey}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.brownGrey,
      border: 'none',
    },
  },
  gray: {
    backgroundColor: colors.veryLightPink,
    color: colors.battleshipGrey,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.brownGrey,
    },
  },
  description: {
    backgroundColor: colors.white,
    border: '1px solid #CCCCCC',
    color: colors.black,
    letterSpacing: '0.02em',
    fontWeight: 'bold',
    lineHeight: '16px',
    height: '32px',
  },
  transparent: transparent,
  stepCounterDark: {
    ...transparent,
    padding: '0',
    height: '100%',
    width: '36px',
    borderRadius: '0',
  },
  stepCounterLight: {
    ...transparent,
    padding: '0',
    background: '#EEEEEE',
    borderRadius: '4px',
    width: '28px',
    height: '28px',
    '&:disabled': {
      color: '#cccccc',
    },
  },
};
