// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { updateProfileTab } from '../../../../redux/actions/ViewActions';
// components
import ProfilePost from '../../../elements/ProfilePost';
// constants
const useStyles = makeStyles(() => ({
  root: {},
}));

// main
const Posts = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const postsLen = useSelector(s => s.view.profile.posts.length);
  // build
  const postElemArr = [];
  for (let idx = 0; idx < postsLen; idx += 1) {
    postElemArr.push(<ProfilePost idx={idx} isProfile />);
  }
  // effects
  useEffect(() => {
    dispatch(updateProfileTab('posts'));
  }, []);

  return (
    <Paper className={`Posts ${classes.root} flexcol w100`}>
      {postElemArr}
    </Paper>
  );
};

// export
export default Posts;
