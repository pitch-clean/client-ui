// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import ProfileDropDown from './ProfileDropDown';
import LoginRegister from './LoginRegister';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: `rgb(79, 76, 76) 0px 0px 4px -1px`,
    margin: `0 50px`,
    border: `none`,
    color: `white`,
  },
}));

// main
const ProfileLoginRegister = () => {
  // init hooks
  const classes = useStyles();
  const activeProfile = useSelector(s => s.auth.activeProfile);

  return (
    <div className={`h100 ctnr flexrow ${classes.root}`}>
      {activeProfile ? <ProfileDropDown /> : <LoginRegister />}
    </div>
  );
};

// export
export default ProfileLoginRegister;
