// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    // padding: '20px 0',
  },
}));

/**
 * main
 */
const InvestmentTable = () => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      className={`InvestmentTable ${classes.root}`}
    >
    </Grid>
  );
};

// export
export default InvestmentTable;
