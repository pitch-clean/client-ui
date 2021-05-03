// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// components
import ITCol from './ITCol';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    // padding: '20px 0',
    justifyContent: 'center',
    alignItems: 'start',
  },
}));
const columnsArr = [
  { label: 'date', title: 'Date' },
  { label: 'sponsor', title: 'Sponsor' },
  { label: 'instrument', title: 'Instrument' },
  { label: 'interest', title: 'Interest' },
  { label: 'principal', title: 'Principal' },
];

/**
 * main
 */
const InvestmentTable = () => {
  // init hooks
  const classes = useStyles();
  // state
  // i know i know, not efficient. its cause theres not a lot of rows and css will be a pain. and i dont understand html/css tables
  const investments = useSelector(s => s.auth.activeProfile.portfolio.investments);
  // build
  const listOfCols = columnsArr.map(col => {
    return <ITCol label={col.label} title={col.title} investments={investments}  />;
  });

  return (
    <Paper elevation={1} className={`InvestmentTable ${classes.root} flexrow w100`}>
      {listOfCols}
    </Paper>
  );
};

// export
export default InvestmentTable;
