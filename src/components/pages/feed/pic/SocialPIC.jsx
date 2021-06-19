// react
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
} from '@material-ui/core';
import {
  Reply as ReplyIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  Comment as CommentIcon,
} from '@material-ui/icons';
import { updatePostReposts, updatePostLikes } from '../../../../redux/actions/ViewActions';
import { Put } from '../../../../utils/requests';
// components
import CommentsSection from './CommentsSection';
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
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 2,
    '& > svg': {
      marginTop: '-0.32rem',
      marginRight: 5,
    },
    cursor: 'pointer',
  },
  commentIcon: {
    cursor: 'pointer',
  },
  red: { color: 'red' },
}));
const onClickLike = async (postId, postProfileId, dispatch) => {
  const endpoint = `${window.env.api.posts}/like`;
  const body = { postId, profile: postProfileId };
  const { post } = await Put(endpoint, body, {}, true);
  dispatch(updatePostLikes(post));
};
const onClickRepost = (postId, postProfileId, dispatch) => async () => {
  const endpoint = `${window.env.api.posts}/repost`;
  const body = { postId, profile: postProfileId };
  const { post } = await Put(endpoint, body, {}, true);
  dispatch(updatePostReposts(post));
};

const handleClick = (type, postId, activeProfileId, postProfileId, dispatch) => async () => {
  if (type === 'like') {
    await onClickLike(postId, postProfileId, dispatch);
    // endpoint = `${endpoint}/like`;
    // reduxFxn = updatePostLikes;
  }
  if (type === 'repost') {
    await onClickRepost(postId, postProfileId, dispatch);
  }
  // const body = { postId, profile: activeProfileId };
  // const payload = await Put(endpoint, body, {}, true);
  // console.log(payload)
  // dispatch(reduxFxn(payload));
};

const SocialPIC = ({ isProfile, postIdx }) => {
  // init hooks
  const dispatch = useDispatch();
  const classes = useStyles();
  // state
  const activeProfile = useSelector(s => s.auth.activeProfile);
  const postId = useSelector(s => s.view[isProfile ? 'profile' : 'feed'].posts[postIdx]._id);
  const postProfileId = useSelector(s => s.view[isProfile ? 'profile' : 'feed'].posts[postIdx].profile._id);
  const likesArr = useSelector(s => s.view[isProfile ? 'profile' : 'feed'].posts[postIdx].likes);
  // const repostsArr = useSelector(s => s.view[isProfile ? 'profile' : 'feed'].posts[postIdx].reposts);
  const commentsCt = useSelector(s => s.view[isProfile ? 'profile' : 'feed'].posts[postIdx].comments.length);
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);

  const repostsArr = ['asdf', 'sdfg', 'vcoiu', 'xcovui8'];
  const likesCt = likesArr.length;
  const repostsCt = repostsArr.length;
  // const postObj = useSelector(s => s.view[isProfile ? 'profile' : 'feed'].posts[postIdx]);
  // const { body, postType, _id: postId, profile: postProfileId } = postObj;
  // const profile = isProfile ? viewProfile : postObj.profile; // need to do this for posts on profile
  let isLiked;
  let isReposted;
  if (activeProfile) {
    for (let i = 0; i < likesArr.length; i++) {
      const likeProfileObj = likesArr[i];
      likeProfileObj._id
    }
    isLiked = likesArr.map(({ _id }) => { return _id }).includes(`${activeProfile._id}`);
    isReposted = repostsArr.map(({ _id }) => { return _id }).includes(`${activeProfile._id}`);
  }

  return (
    <div className={`flexcol w100 h100`}>
      <Toolbar className={`${classes.toolbar} flexrow w100`} variant="dense">
        <div className={`icon ${classes.icon} ${classes.button}`} onClick={handleClick('repost', postId, activeProfile._id, postProfileId, dispatch)}>
          <ReplyIcon className={isReposted && classes.red} />
          <div>{repostsCt}</div>
        </div>
        <div className={`icon ${classes.icon} ${classes.button}`} onClick={handleClick('like', postId, activeProfile._id, postProfileId, dispatch)}>
          {isLiked ? <FavoriteIcon className={classes.red} /> : <FavoriteBorderIcon />}
          <div>{likesCt}</div>
        </div>
        <div className={`icon ${classes.icon} ${classes.button}`} onClick={e => {e.preventDefault(); setIsCommentSectionOpen(!isCommentSectionOpen)}}>
          <CommentIcon className={classes.commentIcon} color="action" />
          <div>{commentsCt}</div>
        </div>
      </Toolbar>
      <CommentsSection postIdx={postIdx} postId={postId} isCommentSectionOpen={isCommentSectionOpen} />
    </div>
  );
};

// exoirt
export default SocialPIC;
