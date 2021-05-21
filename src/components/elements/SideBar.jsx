// react
import React from 'react';
// utils
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// css
import './Sidebar.css';
// constants
const useStyles = makeStyles(theme => ({
  rootleft: {
    position: 'sticky',
    top: 0,
    width: 0,
    paddingLeft: `10px`,
    maxWidth: 325,
    minWidth: `30%`,
    justifyContent: 'flex-start',
    [theme.breakpoints.up('md')]: {
      maxWidth: 325,
      minWidth: 325,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  rootright: {
    width: 0,
    minWidth: `20%`,
    maxWidth: `250px`,
    paddingRight: `10px`,
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      width: `15%`,
      minWidth: `20%`,
      maxWidth: `20%`,
      fontSize: 12,
      paddingLeft: `5px`,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  nav: {
    backgroundColor: 'transparent',
  },
}));

// main
const Sidebar = ({ isNav, isLeft, children }) => {
  // init hooks
  const classes = useStyles();
  const lr = isLeft ? 'rootleft' : 'rootright';
  const nav = isNav ? 'nav' : 'body';

  return (
    <Paper elevation={0} className={`Sidebar ${classes[lr]} ${classes[nav]} f1`}>
      {children}
    </Paper>
  );
};

// proptypes
Sidebar.propTypes = {
  isLeft: Proptypes.shape({}).isRequired,
  children: Proptypes.shape({}).isRequired,
};

// export
export default Sidebar;
