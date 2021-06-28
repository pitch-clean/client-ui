// react
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  Paper,
  Avatar,
  AppBar,
  Toolbar,
  Link as MuiLink,
} from '@material-ui/core';
import {
  Business as BusinessIcon,
  Visibility as VisibilityIcon,
  Reply as ReplyIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from '@material-ui/icons';
import { updateStartupLikes, updateStartupReposts } from '../../../../redux/actions/ViewActions';
import { Put } from '../../../../utils/requests';
// components
import StartupInfoChip from './StartupInfoChip';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    top: 'auto',
    bottom: 0,
    flexFlow: 'row wrap',
  },
}));
// fxns

/**
 * main
 */
const StartupCardBottomBar = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  // state
  const employeeCt = useSelector(s => s.view.startup.startupsArr[idx].employeeCt);
  const address = useSelector(s => s.view.startup.startupsArr[idx].location.address);
  const sector = useSelector(s => s.view.startup.startupsArr[idx].sector);
  // destructuring
  // build
  const startObj = { employeeCt, address, sector };
  const chipList = [];
  for (const keyName of Object.keys(startObj)) {
    const val = startObj[keyName];
    if (val) {
      chipList.push(<StartupInfoChip keyName={keyName} val={val} />);
    }
  }

  return (
    <AppBar className={`StartupCardBottomBar ${classes.root} flexrow w100`} position="relative" color="primary" elevation={0} >
      {chipList}
    </AppBar>
  );
};

// export
export default StartupCardBottomBar;
