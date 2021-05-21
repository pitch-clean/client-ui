// react
import React, { useState } from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import LikesContainer from './LikesContainer';
import PostActionButton from './PostActionButton';
import CommentsContainer from './../comments/CommentsContainer';
import CommentsSection from './../comments/CommentsSection';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'start'
  },
  typography: {
    padding: theme.spacing(2),
  },
  subPostContainer: {
    justifyContent: 'start',
  },
}));

/**
 * main
 */
const PostInteractionContainer = ({ postId, postIdx, postProfileId, postType, isProfile }) => {
  // init hooks
  const classes = useStyles();
  // build
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);

  return isProfile ? (
    <div className={`PostInteractionContainer ${classes.root} w100`}></div>
  ) : postType === 'social' ? (
    <div className={`subPostContainer ${classes.subPostContainer} flexcol w100`}>
      <div className={`PostInteractionContainer ${classes.root} flexrow w100`}>
        <LikesContainer postId={postId} postIdx={postIdx} postProfileId={postProfileId} />
        <CommentsContainer postId={postId} postIdx={postIdx} isCommentSectionOpen={isCommentSectionOpen} setIsCommentSectionOpen={setIsCommentSectionOpen} />
      </div>
      <CommentsSection postIdx={postIdx} postId={postId} isCommentSectionOpen={isCommentSectionOpen} />
    </div>
  ) :
  (
    <div className={`PostInteractionContainer ${classes.root} flexrow w100`}>
      <PostActionButton postId={postId} postIdx={postIdx} postType={postType} postProfileId={postProfileId} />
    </div>
  )
  ;
};

// export
export default PostInteractionContainer;
