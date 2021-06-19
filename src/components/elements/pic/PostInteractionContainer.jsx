// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
} from '@material-ui/core';
// components
import SocialPIC from './SocialPIC';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'start'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

/**
 * main
 */
const PostInteractionContainer = ({ postId, postIdx, postProfileId, postType, isProfile }) => {
  // init hooks
  const classes = useStyles();

  return (
    <AppBar position="relative" color="primary" className={classes.appBar} elevation={0} >
      {postType === 'social' && <SocialPIC isProfile={isProfile} postIdx={postIdx} />}
    </AppBar>
  );
};

// export
export default PostInteractionContainer;
