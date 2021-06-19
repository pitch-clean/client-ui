// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// components
import PostInteractionContainer from './pic/PostInteractionContainer';
import PostHeader from './post/PostHeader';
import PostContent from './post/PostContent';
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
}));

/**
 * view component for a single post on the feed
 * @param {int} postIdx
 * @returns
 */
const FeedPost = ({ idx: postIdx }) => {
  // init hooks
  const classes = useStyles();
  // state
  const postObj = useSelector(s => s.view.feed.posts[postIdx]);
  // destructure
  const {
    postType,// str
    _id: postId,// str
    profile: {
      _id: postProfileId,// str
    },
  } = postObj;

  return postObj ? (
    <Paper elevation={0} className={`${classes.cardRoot} FeedPost w100`}>
      <PostHeader postObj={postObj} />
      <PostContent postObj={postObj} view="feed" />
      <PostInteractionContainer postObj={postObj} postId={postId} postIdx={postIdx} postProfileId={postProfileId} postType={postType} />
    </Paper>
  ) : (
    <div />
  );
};

// export
export default FeedPost;
