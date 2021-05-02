// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { updatePosts } from '../../../redux/actions/ViewActions';
// components
import FeedPost from './FeedPost';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: `0 2px`,
    flex: 1,
  },
}));
// fxns
const updatePostsOnScroll = (dispatch, existingPosts) => {
  const morePosts = [];
  dispatch(updatePosts([...existingPosts, morePosts]));
};

// TODO refactor to have lower level components make redux calls to prevent rerendering list
// main
const FeedContent = () => {
  // init hooks
  const classes = useStyles();
  // const dispatch = useDispatch();
  // state
  const postsLen = useSelector(s => s.view.feed.posts.length);
  // build
  const postElemArr = [];
  for (let idx = 0; idx < postsLen; idx += 1) {
    postElemArr.push(<FeedPost idx={idx} />);
  }

  return (
    <Paper className={`${classes.root} FeedContainer flexcol`} elevation={0}>
      {postsLen > 0 && postElemArr}
      {postsLen > 0 && <div className="endScroll" />}
    </Paper>
  );
};

// export
export default FeedContent;
