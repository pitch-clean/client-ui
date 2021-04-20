// react
import React from 'react';
// utils
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// css
import './Sidebar.css';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    [theme.breakpoints.down('md')]: {
      width: 250,
    },
    justifyContent: 'flex-start',
  },
}));

// main
const Sidebar = ({ isLeft, children }) => {
  // init hooks
  const classes = useStyles();

  return <div className={`Sidebar h100 ${classes.root}`}>{children}</div>;
};

// proptypes
Sidebar.propTypes = {
  isLeft: Proptypes.shape({}).isRequired,
  children: Proptypes.shape({}).isRequired,
};

// export
export default Sidebar;
