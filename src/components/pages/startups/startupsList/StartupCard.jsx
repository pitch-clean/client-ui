// react
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  ListSubheader,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Paper,
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Fab,
  Link as MuiLink,
} from '@material-ui/core';
import {
  Business as BusinessIcon,
  Menu as MenuIcon,
  Add as AddIcon,
  Search as SearchIcon,
  MoreVert as MoreIcon,
  Visibility as VisibilityIcon,
  Reply as ReplyIcon,
  Repeat as RepeatIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from '@material-ui/icons';
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
  views: {
    cursor: 'default',
  },
  red: {
    color: 'red',
  },
}));

/**
 * main
 */
const StartupCard = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  // state
  const activeProfile = useSelector(s => s.auth.activeProfile);
  const address = useSelector(s => s.view.startup.startupsArr[idx].location.address);
  const startupId = useSelector(s => s.view.startup.startupsArr[idx]._id);
  const alias = useSelector(s => s.view.startup.startupsArr[idx].alias);
  const title = useSelector(s => s.view.startup.startupsArr[idx].title);
  const viewsCt = useSelector(s => s.view.startup.startupsArr[idx].views.length);
  const likes = useSelector(s => s.view.startup.startupsArr[idx].likes);
  const reposts = useSelector(s => s.view.startup.startupsArr[idx].reposts);
  const cardBody = useSelector(s => s.view.startup.startupsArr[idx].content.cardBody);
  const fundingRounds = useSelector(s => s.view.startup.startupsArr[idx].fundingRounds);
  const card = useSelector(s => s.view.startup.startupsArr[idx].images.card);
  const profile = useSelector(s => s.view.startup.startupsArr[idx].profile);
  const likesCt = likes.length;
  const repostsCt = reposts.length;
  const {
    alias: profileAlias,
    pii: { name: profileName },
  } = profile;
  const addressStr = `${address.city}, ${address.provinceState}`;
  let isLiked;
  let isReposted;
  if (activeProfile) {
    const { _id: profileId } = activeProfile;
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
          <div className={`icon ${classes.icon}`}>
            <ReplyIcon className={isReposted && classes.red} />
            {repostsCt}
          </div>
          <div className={`icon ${classes.icon} `}>
            {isLiked ? <FavoriteIcon className={classes.red} /> : <FavoriteBorderIcon />}
            {likesCt}
          </div>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

// export
export default StartupCard;
