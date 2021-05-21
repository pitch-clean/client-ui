// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import ProfileLoginRegister from './ProfileLoginRegister';
import InfoGroup from './InfoGroup';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
}));

/**
 * main
 */
const RightNavGroup = () => {
  // init hooks
  const classes = useStyles();
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);

  return (
    <div className={`RightNavGroup ${classes.root} flexrow`}>
      {!isAuthenticated && <InfoGroup />}
      <ProfileLoginRegister />
    </div>
  );
};

// export
export default RightNavGroup;
