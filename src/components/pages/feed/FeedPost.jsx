// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
  Paper,
  Link as MuiLink,
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// components
import PostActionButton from './PostActionButton';
// constants
const useStyles = makeStyles(theme => ({
  cardRoot: {
    margin: `5px 0`,
    padding: `10px`,
    boxShadow: `
      0px 2px 1px -1px rgba(0,0,0,0.03),
      0px 1px 1px 0px rgba(0,0,0,0.02),
      0px 1px 3px 0px rgba(0,0,0,0.01)
    `,
  },
  cardHeader: {
    padding: `10px`,
    justifyContent: 'start',
    textAlign: `start`,
  },
  avatar: {
    backgroundColor: 'lightblue',
    width: theme.spacing(9),
    height: theme.spacing(9),
    margin: 0,
    marginRight: `-7px`,
  },
  cardHeaderContent: {
    marginTop: `22px`,
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardBody: {
    textAlign: 'start',
  },
  subtitle: {
    display: 'block',
    marginTop: `-3px`,
  },
}));
const buildName = (fName, lName) => {
  return `${fName} ${lName}`;
};
const buildLocation = (city, stateProv) => {
  return `${city}, ${stateProv}`;
};
const envProfilePath = 'profile';

// main
const FeedPost = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  // state
  const postObj = useSelector(s => s.view.feed.posts[idx]);
  // destructure
  const { body, profile, postType } = postObj;
  const {
    // profileClass,
    profileType,
    alias,
    pii: {
      firstName, // if a user
      lastName, // if a user
      name, // if an org
      address, // if an org
    },
    active, // if a user
    images: {
      profile: { thumbnail },
    },
  } = profile;
  let title = '';
  let subtitle = '';
  if (profileType === 'organization') {
    title = name;
    subtitle = buildLocation(address.city, address.stateProvince);
  } else {
    title = buildName(firstName, lastName);
    subtitle = active.organization;
  }

  return postObj ? (
    <Paper elevation={0} className={`${classes.cardRoot} FeedPost w100`}>
      <CardHeader
        className={classes.cardHeader}
        classes={{
          content: classes.cardHeaderContent,
        }}
        avatar={
          <Link to={`/${envProfilePath}/alias`}>
            <Avatar aria-label="profile pic" src={thumbnail} className={classes.avatar} />
          </Link>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={
          <MuiLink
            component={Link}
            to={`/${envProfilePath}/${alias}`}
            color="inherit"
            variant="subtitle2"
          >
            {title}
          </MuiLink>
        }
        subheader={
          <Typography className={classes.subtitle} variant="caption" component="h" color="textSecondary">
            {subtitle}
          </Typography>
        }
      />
      <CardContent>
        <Typography className={classes.cardBody} variant="body2" color="textPrimary" component="p">
          {body}
        </Typography>
      </CardContent>
      <PostActionButton postType={postType} />
    </Paper>
  ) : (
    <div />
  );
};

// export
export default FeedPost;
