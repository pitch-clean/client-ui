// react
import React from 'react';
// utils
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  rootleft: {
    position: 'sticky',
    top: 0,
    paddingLeft: `10px`,
    justifyContent: 'flex-start',
    width: 0,
    maxWidth: 300,
    minWidth: `25%`,
    [theme.breakpoints.up('md')]: {
      maxWidth: 300,
      minWidth: 300,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  rootright: {
    paddingLeft: `2px`,
    paddingRight: `2px`,
    justifyContent: 'flex-start',
    // [theme.breakpoints.down('md')]: {},
    // [theme.breakpoints.down('sm')]: {},
  },
  nav: {
    background: 'inherit',
    paddingRight: 5,
  },
  widthWide: {
    width: 0,
    maxWidth: 300,
    minWidth: `25%`,
    [theme.breakpoints.up('md')]: {
      maxWidth: 300,
      minWidth: 300,
    },
  },
  widthThin: {
    width: 0,
    minWidth: `20%`,
    maxWidth: `250px`,
    [theme.breakpoints.down('md')]: {
      width: `15%`,
      minWidth: `20%`,
      maxWidth: `20%`,
      paddingLeft: `5px`,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
// fxns
const setWidth = (classes, width = null, isLeft = null) => {
  // default case
  let sidebarWidth = classes.widthWide;

  if (width) {
    if (width === 'wide') {
      sidebarWidth = classes.widthWide;
    } else if (width === 'thin') {
      sidebarWidth = classes.widthThin;
    }
  } else if (isLeft) {
    sidebarWidth = classes.widthWide;
  }
  return sidebarWidth;
};
const setNavStyle = (classes, isNav = null) => {
  let navStyle = classes.misc;
  if (isNav) {
    navStyle = classes.nav;
  }
  return navStyle;
};

// main
const Sidebar = ({ isLeft, isNav, width, h100, elevation = 0, children }) => {
  // init hooks
  const classes = useStyles();
  const lr = isLeft ? 'rootleft' : 'rootright';
  const navStyle = setNavStyle(classes, isNav);
  const widthStyle = setWidth(classes, width, isLeft);

  return (
    <Paper elevation={elevation} className={`Sidebar ${classes[lr]} ${navStyle} ${widthStyle} ${h100 && ' h100 '} f1`}>
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
