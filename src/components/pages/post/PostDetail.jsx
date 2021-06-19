// react
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
} from '@material-ui/core';
import { clearPostDetail, overwritePostDetail } from '../../../redux/actions/ViewActions';
import { Get } from '../../../utils/requests';
// components
import SideBar from '../../elements/SideBar';
import PostInteractionContainer from '../../elements/pic/PostInteractionContainer';
import PostHeader from '../../elements/post/PostHeader';
import PostContent from '../../elements/post/PostContent';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    color: 'black',
    justifyContent: 'space-bewteen',
    alignItems: 'start',
  },
}));

/**
 * view component
 */
const PostDetailView = ({ postObj }) => {
  // init hooks
  const classes = useStyles();
  const {
    _id: postId,
    comments,
    likes,
    reposts,
    postType,
    profile: {
      _id: postProfileId,
    },
  } = postObj;

  return (
    <Paper elevation={0} className={`PostDetail ${classes.root} page flexcol`}>
      <PostHeader postObj={postObj} />
      <PostContent postObj={postObj} />
      <PostInteractionContainer
        postObj={postObj}
        postId={postId}
        postProfileId={postProfileId}
        postType={postType}
        social={{ comments, likes, reposts }}
      />
    </Paper>
  );
}

/**
 * main
 */
const PostDetail = () => {
  // init hooks
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const {
    params: { postId },
  } = match;
  // state
  const postObj = useSelector(s => s.view.post);
  
  // effects
  useEffect(async () => {
    try {
      const url = `${window.env.api.posts}/detail/${postId}`;
      const postObj = await Get(url);
      dispatch(overwritePostDetail(postObj));
    } catch (err) {
      console.log('fetch post err:', err)
    }
    return () => {
      dispatch(clearPostDetail());
    };
  }, [postId]);

  return postObj.body ? (
    <div className={`flexrow`}>
      <SideBar isLeft={true}></SideBar>
      <PostDetailView postObj={postObj} />
      <SideBar></SideBar>
    </div>
  ) : (
    <div />
  );
};

// export
export default PostDetail;