// react
import React from 'react';
// utils
import { withStyles } from '@material-ui/core/styles';
import { Tab } from '@material-ui/core';

// main
const StyledTab = withStyles(theme => ({
  root: {
    padding: `0px 40px`,
    minWidth: `100%`,
    maxWidth: `100%`,
    width: `100%`,
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    color: `whitesmoke`,
    fontSize: theme.typography.pxToRem(15),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

// export
export default StyledTab;
