// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { updatePostsArr } from '../../../redux/actions/ViewActions';
import { Get } from '../../../utils/requests'
// components
import FeedPost from '../../elements/FeedPost';
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
  dispatch(updatePostsArr([...existingPosts, morePosts]));
};

// TODO refactor to have lower level components make redux calls to prevent rerendering list
// main
const FeedContent = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const postsLen = useSelector(s => s.view.feed.posts.length);
  // build
  const postElemArr = [];
  for (let idx = 0; idx < postsLen; idx += 1) {
    postElemArr.push(<FeedPost idx={idx} />);
  }
  // effects
  useEffect(async () => {
    // fetch seed posts
    const posts = await Get(`${window.env.api.posts}/feed/${activeProfileId}/0`);
    dispatch(updatePostsArr(posts || []));
  }, []);

  return activeProfileId ? (
    <Paper className={`FeedContent ${classes.root} flexcol`} elevation={0}>
      {/* <CreatePost /> */}
      {postsLen > 0 && postElemArr}
      {postsLen > 0 && <div className="endScroll" />}
    </Paper>
  ) : <div />;
};

// export
export default FeedContent;
