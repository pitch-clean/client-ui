// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import Sidebar from '../../elements/SideBar';
import LSProfile from './LSProfile';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    // width: `80%`,
    paddingRight: '0px',
    [theme.breakpoints.up('sm')]: {
      // paddingRight: '20%',
    },
  },
}));

/**
 * main
 */
const LeftSidebar = () => {
  // init hooks
  // const classes = useStyles();
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);

  return <Sidebar isLeft>{isAuthenticated && <LSProfile />}</Sidebar>;
};

// export
export default LeftSidebar;
