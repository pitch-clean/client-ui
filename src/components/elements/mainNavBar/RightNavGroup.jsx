// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import ProfileNavButton from './ProfileNavButton';
import ProfileLoginRegister from './ProfileLoginRegister';
import Sidebar from '../SideBar';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    '& *:hover': {
      textDecoration: 'none',
    },
    justifyContent: 'end',
    color: 'white',
    fontSize: '1rem',
  },
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
    <Sidebar isNav isLeft={false}>
      <div className={`RightNavGroup ${classes.root} flexrow w100`}>
        {isAuthenticated ? <ProfileNavButton /> : <ProfileLoginRegister />}
      </div>
    </Sidebar>
  );
};

// export
export default RightNavGroup;
