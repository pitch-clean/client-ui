// react
import React from 'react';
// utils
import { withStyles } from '@material-ui/core/styles';
import { Tabs } from '@material-ui/core';

// main
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    width: 70,
    '& > span': {
      maxWidth: 70,
      width: 70,
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} variant="fullWidth" />);

// export
export default StyledTabs;
