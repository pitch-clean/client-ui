// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// components
import CreateOfferingForm from '../../forms/CreateOfferingForm';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
}));

/**
 * main
 * the container for the form groups
 */
const CreateOffering = () => {
  // init hooks
  const classes = useStyles();

  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Grid container direction="row" className={`CreateOffering ${classes.root} w100 h100`}>
      <CreateOfferingForm />
    </Grid>
  );
};

// export
export default CreateOffering;
