// react
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { updateProfileTab, updateProfilePosts } from '../../../../redux/actions/ViewActions';
import { Get } from '../../../../utils/requests';
// components
import ProfilePost from '../../../elements/ProfilePost';
// constants
const useStyles = makeStyles(() => ({
  root: {},
}));

/**
 * main
 */
const Posts = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeProfile = useSelector(s => s.auth.activeProfile) || {};
  const pageProfileId = useSelector(s => s.view.profile.viewProfile._id);
  const posts = useSelector(s => s.view.profile.posts);
  const activeProfileId = activeProfile._id;
  // build
  const postElemArr = [];
  for (let idx = 0; idx < posts.length; idx += 1) {
    postElemArr.push(<ProfilePost idx={idx} isProfile />);
  }
  // effects
  useEffect(async () => {
    const newPosts = await Get(`${window.env.api.posts}/profile/${pageProfileId}/0`);
    dispatch(updateProfilePosts(newPosts));
    dispatch(updateProfileTab('posts'));
  }, [activeProfileId]);

  return (
    <Paper className={`Posts ${classes.root} flexcol w100`}>
      {postElemArr}
    </Paper>
  );
};

// export
export default Posts;
