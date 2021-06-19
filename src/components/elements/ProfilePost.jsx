// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  CardContent,
  Typography,
  Paper,
} from '@material-ui/core';
// components
import PostInteractionContainer from './pic/PostInteractionContainer';
import PostHeader from './post/PostHeader';
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

/**
 * view component for a single post on the feed
 * @param {int} postIdx
 * @returns
 */
const FeedPost = ({ idx: postIdx, isProfile }) => {
  // init hooks
  const classes = useStyles();
  // state
  const postObj = useSelector(s => s.view.profile.posts[postIdx]);
  const viewProfile = useSelector(s => s.view.profile.viewProfile);
  // destructure
  const { body, postType, _id: postId, profile: postProfileId } = postObj;
  const {
    profileType,
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
  } = viewProfile;
  let title = '';
  let subtitle = '';
  if (profileType === 'organization') {
    title = name;
    subtitle = buildLocation(address.city, address.stateProvince);
  } else {
    title = buildName(firstName, lastName);
    // console.log(profile)
    subtitle = active.organization ? active.organization.pii.name : 'not set up';
  }

  return postObj ? (
    <Paper elevation={0} className={`${classes.cardRoot} FeedPost w100`}>
      <PostHeader postObj={postObj} />
      <CardContent>
        <Typography className={`${classes.cardBody}`} variant="body2" color="textPrimary" component="p">
          {body}
        </Typography>
      </CardContent>
      <PostInteractionContainer postObj={postObj} postId={postId} postIdx={postIdx} postProfileId={postProfileId} postType={postType} isProfile={isProfile} />
    </Paper>
  ) : (
    <div />
  );
};

// export
export default FeedPost;
