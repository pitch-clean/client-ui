// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import Sidebar from '../SideBar';
import MainNavSearch from './MainNavSearch';
import Logout from './Logout';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    '& *': {
      textDecoration: 'none',
    },
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
  const activeProfile = useSelector(s => s.auth.activeProfile);
  
  return (
    <Sidebar isNav isLeft={false}>
      <div className={`RightNavGroup ${classes.root} flexrow w100`}>
        <MainNavSearch />
        {activeProfile && <Logout />}
      </div>
    </Sidebar>
  );
};

// export
export default RightNavGroup;
