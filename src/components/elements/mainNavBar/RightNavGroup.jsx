// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import Sidebar from '../SideBar';
import MainNavSearch from './MainNavSearch';
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

  return (
    <Sidebar isNav isLeft={false}>
      <div className={`RightNavGroup ${classes.root} flexrow w100`}>
        <MainNavSearch />
      </div>
    </Sidebar>
  );
};

// export
export default RightNavGroup;
