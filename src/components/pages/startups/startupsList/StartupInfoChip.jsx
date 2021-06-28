// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Chip,
} from '@material-ui/core';
import {
  MoreHoriz as MoreHorizIcon,
  MoreVert as MoreVertIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  AccountBalance as AccountBalanceIcon,
  Description as DescriptionIcon,
  Group as GroupIcon,
  AttachMoney as AttachMoneyIcon,
  Room as RoomIcon,
  Business as BusinessIcon,
} from '@material-ui/icons';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: `2px 5px`,
  },
}));

/**
 * main
 */
const StartupInfoChip = ({ keyName, val }) => {
  // init hooks
  const classes = useStyles();
  // state
  console.log('infoinfo', keyName, val)
  let outputKey;
  let iconElem;
  if (keyName === 'address') {
    outputKey = `${val.city}, ${val.provinceState}`;
    iconElem = <RoomIcon />;
  } else if (keyName === 'employeeCt') {
    outputKey = val;
    iconElem = <GroupIcon />;
  } else if (keyName === 'sector') {
    outputKey = val
    iconElem = <BusinessIcon />;
  }

  return (
    <Chip className={`StartupInfoChip ${classes.root}`} clickable={false} label={outputKey} icon={iconElem} />
  );
};

// export
export default StartupInfoChip;
