// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { CardActions, Button } from '@material-ui/core';
// import { Put } from '../../../utils/requests';
// constants
const postTypeMapping = {
  offering: 'View Offering',
  interest: 'Submit Interest',
  rsvp: 'RSVP',
  social: 'Like',
};
// fxns
const onClick =  (postType, postId, postProfileId, dispatch) => async () => {
  console.log('handling click')
};

// main
const PostActionButton = ({ postType, postId, postIdx, postProfileId }) => {
  // init hooks
  const dispatch = useDispatch();
  // state
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const likesArr = useSelector(s => s.view.feed.posts[postIdx].likes);
  let msg = postTypeMapping[postType];

  return (
    <CardActions disableSpacing>
      <Button variant="contained" size="small" disableRipple onClick={onClick(postType, postId, postProfileId, dispatch)}>
        {msg}
      </Button>
    </CardActions>
  );
};

// export
export default PostActionButton;
