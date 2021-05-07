// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Link as MuiLink } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: `0 2px`,
    flex: 1,
    minHeight: 15,
  },
}));

/**
 * main
 * TODO: Create the card that shows up when you click on the link
 *      Build card element
 *      Create get request to pull list of profiles
 */
const LikesAndComments = ({ postId, likesArr }) => {
  // init hooks
  const classes = useStyles();
  const likesCt = likesArr.length;
  const likesMsg = `${likesCt} like${likesCt !== 1 ? 's' : ''}`;

  return (
    <div className={`LikesAndComments ${classes}`}>
      <MuiLink
        component={Link}
        color="inherit"
        variant="subtitle2"
        onClick={() => console.log('asdfsdf, post arr', postId)}
      >
        {likesMsg}
      </MuiLink>
    </div>
  );
};

// export
export default LikesAndComments;
