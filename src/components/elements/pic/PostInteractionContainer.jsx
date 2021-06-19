// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
} from '@material-ui/core';
// components
import SocialPIC from './SocialPIC';
import InterestPIC from './InterestPIC';
// constants
const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    minHeight: `1rem`,
  },
}));

/**
 * main
 */
const PostInteractionContainer = ({ postObj, postIdx, postType }) => {
  // init hooks
  const classes = useStyles();

  return (
    <AppBar
      className={`PIC ${classes.appBar} flexrow`}
      position="relative"
      color="primary"
      elevation={0}
    >
      {postType === 'social' && <SocialPIC postObj={postObj} postIdx={postIdx} />}
      {postType === 'interest' && <InterestPIC postObj={postObj} postIdx={postIdx} />}
    </AppBar>
  );
};

// export
export default PostInteractionContainer;
