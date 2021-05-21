// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { updatePostsArr } from '../../../redux/actions/ViewActions';
import { Get } from '../../../utils/requests'
// components
import FeedPost from './posts/FeedPost';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: `0 2px`,
    flex: 1,
  },
  empty: {
    padding: 10,
  },
}));
// fxns
const updatePostsOnScroll = (dispatch, existingPosts) => {
  const morePosts = [];
  dispatch(updatePostsArr([...existingPosts, morePosts]));
};

// TODO refactor to have lower level components make redux calls to prevent rerendering list
/**
 * main
 */
const FeedContent = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const profile = useSelector(s => s.auth.activeProfile._id);
  const postsLen = useSelector(s => s.view.feed.posts.length);
  // build
  const postElemArr = [];
  for (let idx = 0; idx < postsLen; idx += 1) {
    postElemArr.push(<FeedPost idx={idx} />);
  }
  const noPostElem = () => {
    return (
      <div className={classes.empty}>
        Feed is empty. Please refresh to see more content.
      </div>
    );
  };
  // effects
  useEffect(async () => {
    // fetch seed posts
    const posts = await Get(`${window.env.api.posts}/feed/${profile}/0`, {}, true);
    console.log('posposp', posts, window.env.api.posts)
    dispatch(updatePostsArr(posts || []));
  }, []);

  return (
    <Paper className={`FeedContent ${classes.root} flexcol`} elevation={0}>
      {/* <CreatePost /> */}
      {postsLen > 0 ? postElemArr : noPostElem()}
      {postsLen > 0 && <div className="endScroll" />}
    </Paper>
  );
};

// export
export default FeedContent;
