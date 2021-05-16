// react
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { CardActions, Button, Link as MuiLink } from '@material-ui/core';
import { Put } from '../../../utils/requests';
import { updatePostLikes } from '../../../redux/actions/ViewActions';
// components
import ShowProfilesThatLikedPost from './ShowProfilesThatLikedPost';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: `0 2px`,
    flex: `0 1`,
    justifyContent: 'start',
  },
  isLiked: {
    backgroundColor: 'red',
  },
}));
// fxns
const onClick =  (postId, postProfileId, dispatch) => async () => {
  const endpoint = `${window.env.endpoints.posts}/like`;
  const body = { postId, profileId: postProfileId };
  const { post } = await Put(endpoint, body, {}, true);
  dispatch(updatePostLikes(post));
};

/**
 * main
 */
const LikesContainer = ({ postId, postIdx, postProfileId }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [isPopup, setIsPopup] = useState(false);
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const likesArr = useSelector(s => s.view.feed.posts[postIdx].likes);
  const likesCt = likesArr.length;
  const likesMsg = `${likesCt} like${likesCt !== 1 ? 's' : ''}`;
  let inArr = false;
  for (let i = 0; i < likesArr.length; i += 1) {
    const likeProfId = likesArr[i]._id;
    if (`${likeProfId}` === `${activeProfileId}`) {
      inArr = true;
      break;
    }
  }
  const msg = inArr ? 'Unlike' : 'Like';

  return (
    <div className={`LikesContainer ${classes.root} flexrow`}>
      <CardActions disableSpacing>
        <Button className={`${inArr ? classes.isLiked : ''}`} variant="contained" size="small" disableRipple onClick={onClick(postId, postProfileId, dispatch)}>
          {msg}
        </Button>
      </CardActions>
      <MuiLink
        component={Link}
        color="inherit"
        variant="subtitle2"
        onClick={e => {
          e.preventDefault();
          setIsPopup(!isPopup);
        }}
        noWrap
      >
        {likesMsg}
      </MuiLink>
      {isPopup && <ShowProfilesThatLikedPost setIsPopup={setIsPopup} likesArr={likesArr} />}
    </div>
  );
};

// export
export default LikesContainer;
