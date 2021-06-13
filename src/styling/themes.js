// utils
import { createMuiTheme } from '@material-ui/core/styles';

export const baseTheme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: 'lightgreen',
        },
        '&$active': {
          color: 'lightblue',
        },
      },
      active: {},
      completed: {},
    },
    MuiTab: {
      root: {
        minWidth: 100,
      },
      wrapper: {
        fontWeight: 600,
        textTransform: 'none',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: '#f4f4f4',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: 600,
    },
    h4: {
      fontWeight: 700,
      fontSize: 25,
      letterSpacing: 0.9,
    },
    body1: {
      fontWeight: 500,
    },
  },
  darkBg: {
    '& *': {
      color: 'whitesmoke',
    },
  },
});
