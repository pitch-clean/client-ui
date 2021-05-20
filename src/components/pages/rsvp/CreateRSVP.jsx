// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// components
import CreateRSVPForm from '../../forms/CreateRSVPForm';
// constants
const useStyles = makeStyles(theme => ({
  root: {}
}));

function CreateRSVP() {
  // init hooks
  const classes = useStyles();
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Grid container direction="row" className={`CreateRSVP f1 ${classes.root}`}>
      <CreateRSVPForm />
    </Grid>
  );
}

// export
export default CreateRSVP;
