// react
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { logout } from '../../../redux/actions/AuthActions';
// components
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 10px`,
    color: 'whitesmoke',
  },
  outerIcon: {
    position: 'absolute',
  },
  innerGroup: {
    top: 0,
    position: 'absolute',
    justifyContent: 'start',
    height: `100%`,
  },
  closed: {
    display: 'none'
  },
}));
// fxns
const handleClick = (isOpen, isOpenSet) => () => {
  isOpenSet(!isOpen);
};
const onClickLogout = (dispatch) => () => {
  dispatch(logout());
};

/**
 * main
 */
const Logout = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [isOpen, isOpenSet] = useState(false);
  
  return (
    <Button className={`Logout ${classes.root} flexcol`} onClick={handleClick(isOpen, isOpenSet)} disableRipple >
      
      <SettingsIcon className={`${classes.outerIcon}`} />
        
      <div className={`${classes.innerGroup} `} >
        <SettingsIcon className={`${classes.innerIcon}  h100`} />
        <Select
          open={isOpen}
          className={`${classes.select} ${!isOpen && classes.closed}`}
        >
          <MenuItem onClick={onClickLogout(dispatch)}>Logout</MenuItem>
        </Select>
      </div>
    </Button>
  );
};

// export
export default Logout;
