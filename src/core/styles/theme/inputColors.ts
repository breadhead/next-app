import { colors } from './colors';

export const inputColors = {
  defaults: {
    transition: 'all 0.2s ease-in-out',
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid #ccc',
    borderTop: '1px solid transparent',
    letterSpacing: '0.02em',
    color: colors.black,
    fontSize: '15px',
    lineHeight: '16px',
    paddingTop: '5px',
    paddingBottom: '5px',
    '&:hover': {
      borderBottom: `1px solid ${colors.darkGray}`,
    },

    '&:focus': {
      borderBottom: `1px solid ${colors.brownGrey}`,
    },

    '&:placeholder': {
      color: colors.battleshipGrey,
    },
  },

  error: {
    borderBottom: `1px solid ${colors.red} !important`,
    '&:hover': {
      borderBottom: `1px solid ${colors.red} !important`,
    },
  },
};
