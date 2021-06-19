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
import { updatePostReposts, updatePostLikes } from '../../../redux/actions/ViewActions';
import { Put } from '../../../utils/requests';
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
const onClickLike = async (postId, activeProfileId, dispatch) => {
  const endpoint = `${window.env.api.posts}/like`;
  const body = { postId, profile: activeProfileId };
  const { post } = await Put(endpoint, body, {}, true);
  dispatch(updatePostLikes(post));
};
const onClickRepost = (postId, activeProfileId, dispatch) => async () => {
  const endpoint = `${window.env.api.posts}/repost`;
  const body = { postId, profile: activeProfileId };
  const { post } = await Put(endpoint, body, {}, true);
  dispatch(updatePostReposts(post));
};

const handleClick = (type, postId, activeProfileId, postProfileId, dispatch) => async () => {
  if (type === 'like') {
    await onClickLike(postId, activeProfileId, dispatch);
  }
  if (type === 'repost') {
    await onClickRepost(postId, activeProfileId, dispatch);
  }
};

const SocialPIC = ({ postObj, postIdx }) => {
  // init hooks
  const dispatch = useDispatch();
  const classes = useStyles();
  // state
  const {
    _id: postId,
    profile: { _id: postProfileId },
    likes: likesArr,
    reposts: repostsArr,
    comments,
  } = postObj;
  const commentsCt = comments.length;
  const activeProfile = useSelector(s => s.auth.activeProfile);
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);

  // const repostsArr = ['asdf', 'sdfg', 'vcoiu', 'xcovui8'];
  const likesCt = likesArr.length;
  const repostsCt = repostsArr.length;
  // const postObj = useSelector(s => s.view[isProfile ? 'profile' : 'feed'].posts[postIdx]);
  // const { body, postType, _id: postId, profile: postProfileId } = postObj;
  // const profile = isProfile ? viewProfile : postObj.profile; // need to do this for posts on profile
  let isLiked;
  let isReposted;
  let activeProfileId = null;
  if (activeProfile) {
    for (let i = 0; i < likesArr.length; i += 1) {
      const likeProfileObj = likesArr[i];
      likeProfileObj._id;
    }
    isLiked = likesArr.map(({ _id }) => { return _id }).includes(`${activeProfile._id}`);
    isReposted = repostsArr.map(({ _id }) => { return _id }).includes(`${activeProfile._id}`);
    activeProfileId = activeProfile._id;
  }

  return (
    <div className={`SocalPIC flexcol w100 h100`}>
      <Toolbar className={`${classes.toolbar} flexrow w100`} variant="dense">
        <div className={`icon ${classes.icon} ${classes.button}`} onClick={e => {
            e.preventDefault();
            setIsCommentSectionOpen(!isCommentSectionOpen);
          }}
        >
          <CommentIcon className={classes.commentIcon} color="action" />
          <div>{commentsCt}</div>
        </div>
        <div className={`icon ${classes.icon} ${classes.button}`} onClick={handleClick('repost', postId, activeProfileId, postProfileId, dispatch)}>
          <ReplyIcon className={isReposted && classes.red} />
          <div>{repostsCt}</div>
        </div>
        <div className={`icon ${classes.icon} ${classes.button}`} onClick={handleClick('like', postId, activeProfileId, postProfileId, dispatch)}>
          {isLiked ? <FavoriteIcon className={classes.red} /> : <FavoriteBorderIcon />}
          <div>{likesCt}</div>
        </div>
      </Toolbar>
      <CommentsSection commentsArr={postObj.comments} postIdx={postIdx} postId={postId} isCommentSectionOpen={isCommentSectionOpen} />
    </div>
  );
};

// export
export default SocialPIC;
