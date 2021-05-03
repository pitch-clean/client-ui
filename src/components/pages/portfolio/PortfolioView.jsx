// react
import React, { useRef, useState, useEffect } from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// components
import BarChart from './BarChart';
import InvestmentTable from './table/InvestmentTable';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px 10px',
    width: `100%`,
    maxWidth: 1300,
    justify: 'flex-start',
    alignItems: 'center',
  },
}));

/**
 * main
 */
const PortfolioView = () => {
  // init hooks
  const classes = useStyles();
  const ref = useRef();
  // state
  const [x, setX] = useState(false);
  useEffect(() => {
    // need this to update ref current
    setX(true);
  }, []);

  return (
    <Paper
      className={`PortfolioView ${classes.root} flexcol`}
      ref={ref}
    >
      {ref.current && <BarChart widthProp={ref.current.getBoundingClientRect().width} />}
      <InvestmentTable />
    </Paper>
  );
};

// export
export default PortfolioView;
