// react
import React, { useRef, useState, useEffect } from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// components
import BarChart from './BarChart';
import InvestmentTable from './InvestmentTable';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px 0',
  },
}));

/**
 * main
 *    table - specify columns
 *      header row
 *      data rows
 */
const PortfolioView = () => {
  // init hooks
  const classes = useStyles();
  const ref = useRef();
  const [x, setX] = useState(false);
  useEffect(() => {
    setX(true);
  }, []);

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      className={`PortfolioView ${classes.root}`}
      ref={ref}
    >
      {ref.current && <BarChart widthProp={ref.current.getBoundingClientRect().width} />}
      <InvestmentTable />
    </Grid>
  );
};

// export
export default PortfolioView;
