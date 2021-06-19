// react
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import CommentElem from './CommentElem';
import NewComment from './NewComment';
import { Get } from '../../../utils/requests';
import { createComment } from '../../../redux/actions/ViewActions';
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
  const [filledCommentsArr, filledCommentsArrSet] = useState([]);
  const commentsElemArr = [];
  for (let i = 0; i < filledCommentsArr.length; i += 1) {
    const commentObj = filledCommentsArr[i];
    commentsElemArr.push(<CommentElem commentIdx={i} postIdx={postIdx} commentObj={commentObj} />)
  }
  // effects
  useEffect(async () => {
    const url = `${window.env.api.comments}/post/${postId}`;
    const resJSON = await Get(url, {}, true);
    filledCommentsArrSet(resJSON);
  }, [isCommentSectionOpen, filledCommentsArr.length]);

  return isCommentSectionOpen ? (
    <div className={`CommentsSection ${classes.root} w100`}>
      {commentsElemArr}
      <NewComment postId={postId} />
    </div>
  ) : (
    <div className={`CommentsSection closed w100`}>
    </div>
  );
};

// export
export default CommentsSection;
