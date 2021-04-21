// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// components
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `30px 10%`,
    margin: 0,
    width: '100%',
    minHeight: '200px',
    backgroundColor: 'whitesmoke',
    borderRadius: '0',
  },
  header: {
    marginBottom: 10,
    fontWeight: 600,
  },
  body: {

  },
}));

// main
const Summary = ({ offeringObj }) => {
  // init hooks
  const classes = useStyles();
  const {
    content: { about, investment },
  } = offeringObj;
  console.log(offeringObj);

  return (
    <div className={`${classes.root} "Summary"`} >
      <Typography className={classes.header} variant="h5" align="left">
        Project Summary
      </Typography>
      <Typography className={classes.body} variant="body1" align="left" >
        {`${about} \n ${about} \n ${about}`}
      </Typography>
    </div>
  );
};

// export
export default Summary;
