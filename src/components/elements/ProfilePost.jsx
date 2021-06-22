// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
 * view component for a single post on the Profile feed
 * @param {int} postIdx
 * @returns
 */
const ProfilePost = ({ idx: postIdx, isProfile, isLikes }) => {
  // init hooks
  const classes = useStyles();
  // state
  const postObj = useSelector(s => s.view.profile.posts[postIdx]);
  const postId = useSelector(s => s.view.profile.posts[postIdx]._id);
  const postType = useSelector(s => s.view.profile.posts[postIdx].postType);
  const postProfile = useSelector(s => s.view.profile.posts[postIdx].profile);
  // destructure
  const postProfileId = postProfile._id;

  return postObj ? (
    <Paper elevation={0} className={`ProfilePost ${classes.cardRoot} w100`}>
      <PostHeader postObj={postObj} />
      <PostContent postObj={postObj} />
      <PostInteractionContainer postObj={postObj} postId={postId} postIdx={postIdx} postProfileId={postProfileId} postType={postType} isProfile={isProfile} />
    </Paper>
  ) : (
    <div />
  );
};

// export
export default ProfilePost;
