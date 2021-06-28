// react
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Link as MuiLink,
} from '@material-ui/core';
import {
  Business as BusinessIcon,
} from '@material-ui/icons';
// components
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    width: `100%`,
    minHeight: `200px`,
    maxHeight: `200px`,
    height: `200px`,
    objectFit: `cover`,
    borderRadius: 0,
    overflow: 'hidden',
    borderRadius: '5px 5px 0 0 ',
  },
}));
// fxns

/**
 * main
 */
const StartupImage = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  // state
  const startupId = useSelector(s => s.view.startup.startupsArr[idx]._id);
  const title = useSelector(s => s.view.startup.startupsArr[idx].title);
  const card = useSelector(s => s.view.startup.startupsArr[idx].images.card);

  return (
    <MuiLink
      className={`StartupImage ${classes.root} w100`}
      color="textPrimary"
      variant="subtitle1"
      component={Link}
      to={`/${window.env.client.startup}/${startupId}`}
    >
      <Avatar
        className={`${classes.avatar}`}
        alt={title}
        src={card}
        variant="square"
        children={<BusinessIcon />}
      />
    </MuiLink>
  );
};

// export
export default StartupImage;
