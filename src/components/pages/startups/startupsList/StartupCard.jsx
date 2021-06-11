// react
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemText,
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
// constants
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: `#eee`,
    minWidth: `200px`,
    width: `350px`,
    maxWidth: `29%`,
    margin: `15px 10px`,
    alignSelf: 'flex-start',
    backgroundColor: 'whitesmoke',
    boxShadow: `
      0px 2px 1px -1px rgba(0,0,0,0.03),
      0px 1px 1px 0px rgba(0,0,0,0.02),
      0px 1px 3px 0px rgba(0,0,0,0.01)
    `,
    borderRadius: '5px',
  },
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
  cardHeader: {
    fontSize: '1.2rem',
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    maxWidth: `100%`,
    '& *': {
      whiteSpace: `nowrap`,
      overflowX: `hidden`,
      textOverflow: `ellipsis`,
    },
  },
  lowerListItem: {
    maxWidth: `100%`,
    display: 'flex',
    flexFlow: 'column',
  },
  appBar: {
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
  console.log(payload)
  dispatch(reduxFxn(payload));
};

/**
 * main
 */
const StartupCard = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeProfile = useSelector(s => s.auth.activeProfile);
  const address = useSelector(s => s.view.startup.startupsArr[idx].location.address);
  const startupId = useSelector(s => s.view.startup.startupsArr[idx]._id);
  const title = useSelector(s => s.view.startup.startupsArr[idx].title);
  const viewsCt = useSelector(s => s.view.startup.startupsArr[idx].views.length);
  const likes = useSelector(s => s.view.startup.startupsArr[idx].likes);
  const reposts = useSelector(s => s.view.startup.startupsArr[idx].reposts);
  const cardBody = useSelector(s => s.view.startup.startupsArr[idx].content.cardBody);
  const fundingRounds = useSelector(s => s.view.startup.startupsArr[idx].fundingRounds);
  const card = useSelector(s => s.view.startup.startupsArr[idx].images.card);
  const likesCt = likes.length;
  const repostsCt = reposts.length;
  const { _id: profileId } = activeProfile;
  const addressStr = `${address.city}, ${address.provinceState}`;
  let isLiked;
  let isReposted;
  if (activeProfile) {
    isLiked = likes.includes(profileId);
    isReposted = reposts.includes(profileId);
  }

  return (
    <Paper className={`StartupCard ${classes.root}`} key={`startupcard--${idx}`} elevation={0}>
      <MuiLink
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
      <ListItem className={`listitem ${classes.listItem}`}>
        <ListItemText
          primary={
            <MuiLink
              color="textPrimary"
              variant="subtitle1"
              className={`${classes.cardHeader} nowrap`}
              component={Link}
              to={`/${window.env.client.startup}/${startupId}`}
            >
              {title}
            </MuiLink>
          }
          secondary={addressStr}
        />
      </ListItem>
      <ListItem className={classes.lowerListItem}>
        {cardBody}
      </ListItem>
      <AppBar position="relative" color="primary" className={classes.appBar} elevation={0} >
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
    </Paper>
  );
};

// export
export default StartupCard;
