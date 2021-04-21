// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import CreateProfileForm from '../../forms/CreateProfileForm';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: `end`,
  },
}));

/**
 * MAIN
 * TODOs: Need to toggle dark/light theme
 */
const CreateProfile = () => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`${classes.root} CreateProfile w100 h100 flexrow`}>
      <CreateProfileForm />
    </div>
  )
};

// export
export default CreateProfile;
