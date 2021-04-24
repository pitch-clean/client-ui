// react
import React from 'react';
// utils
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// css
import './Sidebar.css';
// constants
const useStyles = makeStyles(theme => ({
  rootleft: {
    width: 0,
    [theme.breakpoints.up('md')]: {
      width: `33%`,
      minWidth: 450,
      paddingLeft: `85px`,
      paddingRight: `15px`,
    },
    [theme.breakpoints.up('xs')]: {
      width: `25%`,
      minWidth: 250,
      // paddingLeft: `30px`,
      // paddingRight: `7px`,
      paddingRight: `5px`,
      paddingLeft: `10px`,
      // fontSize: ,
    },
    justifyContent: 'flex-start',
  },
  rootright: {
    width: 0,
    [theme.breakpoints.up('md')]: {
      width: `15%`,
      // paddingLeft: `50px`,
      paddingRight: `10px`,
    },
    [theme.breakpoints.up('xs')]: {
      width: `20%`,
      minWidth: 250,
      fontSize: 12,
      paddingRight: `10px`,
      paddingLeft: `5px`,
    },
    justifyContent: 'flex-start',
  },
}));

// main
const Sidebar = ({ isLeft, children }) => {
  // init hooks
  const classes = useStyles();
  const lr = isLeft ? 'rootleft' : 'rootright';
  return <div className={`Sidebar h100 ${classes[lr]}`}>{children}</div>;
};

// proptypes
Sidebar.propTypes = {
  isLeft: Proptypes.shape({}).isRequired,
  children: Proptypes.shape({}).isRequired,
};

// export
export default Sidebar;
