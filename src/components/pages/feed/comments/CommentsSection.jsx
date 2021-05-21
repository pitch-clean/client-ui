// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import CommentElem from './CommentElem';
import NewComment from './NewComment';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'start',
    backgroundColor: '#fcf9f9',
    padding: 5,
  },
}));

/**
 * main
 */
const CommentsSection = ({ postId, postIdx, isCommentSectionOpen }) => {
  // init hooks
  const classes = useStyles();
  // state
  const commentsLen = useSelector(s => s.view.feed.posts[postIdx].comments.length);
  const commentsElemArr = [];
  for (let i = 0; i < commentsLen; i += 1) {
    commentsElemArr.push(<CommentElem commentIdx={i} postIdx={postIdx} />)
  }

  return isCommentSectionOpen ? (
    <div className={`CommentsSection ${classes.root} w100`}>
      <NewComment postId={postId} />
      {commentsElemArr}
    </div>
  ) : (
    <div className={`CommentsSection closed w100`}>
    </div>
  );
};

// export
export default CommentsSection;
