// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CardHeader, Typography, Divider } from '@material-ui/core';
// constants
const useStyles = makeStyles({
  root: {
    color: `black`,
    marginBottom: 20,
  },
})

/**
 * main
 */
const Factory = ({componentName, title, children}) => {
  // init hooks
  const classes = useStyles();

  return (
    <Paper className={`${componentName} ${classes.root} w100 flexcol`} elevation={0} >
      <CardHeader
        className={`${classes.header} w100`}
        title={title}
      />
      <Divider className="w100" variant="fullWidth"/>
      {children}
    </Paper>
  );
};

// export
export default Factory;
