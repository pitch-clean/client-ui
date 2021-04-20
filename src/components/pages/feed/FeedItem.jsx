// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
  Divider,
  Link as MuiLink,
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// components
import PostActionButton from './PostActionButton';
// constants
const useStyles = makeStyles(theme => ({
  cardRoot: {},
  cardHeader: {
    padding: `10px`,
    justifyContent: 'start',
    textAlign: `start`,
  },
  avatar: {
    backgroundColor: 'lightblue',
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: 0,
    marginRight: `-7px`,
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
const FeedItem = ({ postObj, idx }) => {
  // init hooks
  const classes = useStyles();
  // destructure
  const { _id, body, profile, postType } = postObj;
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
    <Card className={`${classes.cardRoot} w100`}>
      <CardHeader
        className={classes.cardHeader}
        classes={{
          content: classes.cardHeaderContent,
        }}
        avatar={
          <Link to={`/${envProfilePath}/alias`}>
            <Avatar aria-label="recipe" className={classes.avatar}>
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
    </Card>
  );
};

// export
export default FeedItem;
