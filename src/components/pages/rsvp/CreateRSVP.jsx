// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import CreateRSVPForm from '../../forms/CreateRSVPForm';
// constants
const useStyles = makeStyles(theme => ({
  root: {}
}));

/**
 * main
 */
const CreateRSVP = () => {
  // init hooks
  const classes = useStyles();
  // state
  const isAuthenticated = useSelector(s => s.auth.activeProfile._id);
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className={`CreateRSVP f1 ${classes.root} flexrow`}>
      <CreateRSVPForm />
    </div>
  );
}

// export
export default CreateRSVP;