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
import StartupCardHeader from './StartupCardHeader';
import StartupImage from './StartupImage';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 2,
    '& > svg': {
      marginTop: '-0.32rem',
      marginRight: 5,
    },
    cursor: 'pointer',
  },
  button: {
    transition: `box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 50ms cubic-bezier(0.4, 0, 0.2, 1)`,
    '& *': {
      transition: `font-size 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    },
    borderRadius: 7,
    '&:hover': {
      boxShadow: `0px 1px 4px -7px rgba(0,0,0,0.2),
        0px 2px 5px -5px rgba(0,0,0,0.14),
        0px 1px 9px -3px rgba(0,0,0,0.12)`,
    },
    '&:hover div': {
      fontSize: `1.05rem`,
    },
    '&:hover .MuiSvgIcon-root': {
      fontSize: `1.55rem`,
    },
    '&:active': {
      backgroundColor: '#dbecde85',
      boxShadow: `0px 3px 2px -4px rgba(0,0,0,0.2),
        0px 3px 4px -3px rgba(0,0,0,0.14),
        0px 1px 6px -1px rgba(0,0,0,0.12)`,
    },
    '&:active div': {
      fontSize: `1.1rem`,
    },
    '&:active .MuiSvgIcon-root': {
      fontSize: `1.6rem`,
    },
  },
  views: {
    cursor: 'default',
  },
  red: {
    color: 'red',
  },
}));
// fxns
const handleClick = (type, startupId, profileId, dispatch) => async () => {
  let endpoint = `${window.env.api.startups}`;
  let reduxFxn;
  if (type === 'like') {
    endpoint = `${endpoint}/like`;
    reduxFxn = updateStartupLikes;
  }
  if (type === 'repost') {
    endpoint = `${endpoint}/repost`;
    reduxFxn = updateStartupReposts;
  }
  const body = { startupId, profile: profileId };
  const payload = await Put(endpoint, body, {}, true);
  dispatch(reduxFxn(payload));
};

/**
 * main
 */
const StartupCardPIC = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeProfile = useSelector(s => s.auth.activeProfile);
  const startupId = useSelector(s => s.view.startup.startupsArr[idx]._id);
  const viewsCt = useSelector(s => s.view.startup.startupsArr[idx].views.length);
  const likes = useSelector(s => s.view.startup.startupsArr[idx].likes);
  const reposts = useSelector(s => s.view.startup.startupsArr[idx].reposts);
  // destructuring
  const likesCt = likes.length;
  const repostsCt = reposts.length;
  const { _id: profileId } = activeProfile;
  let isLiked;
  let isReposted;
  if (activeProfile) {
    isLiked = likes.includes(profileId);
    isReposted = reposts.includes(profileId);
  }

  return (
    <AppBar position="relative" color="primary" className={`StartupCardPIC ${classes.root} w100`} elevation={0} >
      <Toolbar className={`${classes.toolbar} flexrow`} variant="dense">
        <div className={`icon ${classes.icon} ${classes.views}`}>
          <VisibilityIcon />
          {viewsCt}
        </div>
        <div className={`icon ${classes.icon} ${classes.button}`} onClick={handleClick('repost', startupId, profileId, dispatch)}>
          <ReplyIcon className={isReposted && classes.red} />
          <div>{repostsCt}</div>
        </div>
        <div className={`icon ${classes.icon} ${classes.button}`} onClick={handleClick('like', startupId, profileId, dispatch)}>
          {isLiked ? <FavoriteIcon className={classes.red} /> : <FavoriteBorderIcon />}
          <div>{likesCt}</div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

// export
export default StartupCardPIC;
