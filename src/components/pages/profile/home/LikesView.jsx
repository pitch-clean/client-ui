// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { updateProfileTab, updateProfileLikes } from '../../../../redux/actions/ViewActions';
import { Get } from '../../../../utils/requests';
// components
import ProfilePost from '../../../elements/ProfilePost';
import ProfileStartup from '../../../elements/ProfileStartup';
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
  const postsLen = useSelector(s => s.view.profile.posts.length);
  const startupsLen = useSelector(s => s.view.profile.likes.startups.length);
  const activeProfileId = activeProfile._id;
  // build
  const postElemArr = [];
  for (let idx = 0; idx < postsLen; idx += 1) {
    postElemArr.push(<ProfilePost idx={idx} isProfile isLikes  />);
  }
  for (let idx = 0; idx < startupsLen; idx += 1) {
    postElemArr.push(<ProfileStartup idx={idx} isProfile />);
  }
  // effects
  useEffect(async () => {
    const newLikedItems = await Get(`${window.env.api.profiles}/likedContent/${pageProfileId}/0`);
    dispatch(updateProfileLikes(newLikedItems));
    dispatch(updateProfileTab('likes'));
  }, [activeProfileId]);

  return (
    <Paper className={`Posts ${classes.root} flexcol w100`}>
      {postElemArr}
    </Paper>
  );
};

// export
export default Posts;
