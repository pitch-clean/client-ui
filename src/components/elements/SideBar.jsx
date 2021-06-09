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
    paddingRight: `10px`,
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

// main
const Sidebar = ({ isLeft, isNav, width, children }) => {
  // init hooks
  const classes = useStyles();
  const lr = isLeft ? 'rootleft' : 'rootright';
  const nav = isNav ? 'nav': '';
  let cwidth = classes.widthThin;
  
  // default case
  if (isLeft) {cwidth = classes.widthWide;}
  if (width === 'wide') {
    cwidth = classes.widthWide;
  } else if (width === 'thin') {
    cwidth = classes.widthThin;
  }

  return (
    <Paper elevation={0} className={`Sidebar ${classes[lr]} ${classes[nav]} ${cwidth} f1`}>
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
