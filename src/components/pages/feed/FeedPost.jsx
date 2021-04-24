// react
import React from 'react';
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
    padding: `7px `,
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
    // width: 70,
    // height: 70,
  },
  cardHeaderContent: {
    alignSelf: 'end',
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardBody: {
    textAlign: 'start',
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
const FeedPost = ({ postObj, idx }) => {
  // init hooks
  const classes = useStyles();
  // destructure
  const { body, profile, postType } = postObj;
  const {
    profileType,
    firstName,
    lastName,
    alias,
    currentEmployer,
    name,
    city,
    stateProvince,
    image,
  } = profile;
  const title = profileType === 'organization' ? name : buildName(firstName, lastName);
  const subtitle =
    profileType === 'organization' ? buildLocation(city, stateProvince) : currentEmployer;

  return (
    <Paper elevation={3} className={`${classes.cardRoot} FeedPost w100`}>
      <CardHeader
        className={classes.cardHeader}
        classes={{
          content: classes.cardHeaderContent,
        }}
        avatar={
          <Link to={`/${envProfilePath}/alias`}>
            <Avatar aria-label="recipe" className={classes.avatar} variant="square">
              {image}
            </Avatar>
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
          <Typography variant="caption" component="h" color="textSecondary">
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
  );
};

// export
export default FeedPost;
