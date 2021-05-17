// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { CardActions, Button, Typography } from '@material-ui/core';
// components
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: `0 5px`,
    flex: `0 1`,
    backgroundColor: '#fbfbfb',
  },
  button: {},
}));

/**
 * main
 * TODO: Create the component for comments
 */
const CommentsContainer = ({ postId, postIdx, postProfileId, isCommentSectionOpen, setIsCommentSectionOpen }) => {
  // init hooks
  const classes = useStyles();
  // state
  const commentsLen = useSelector(s => s.view.feed.posts[postIdx].comments.length);
  const commentsMsg = `${commentsLen} comment${commentsLen !== 1 ? 's' : ''}`;
  
  // const commentsCt = commentsArr.length;

  return (
    <div className={`CommentsContainer ${classes.root} flexfow`}>
      <CardActions disableSpacing onClick={e => {e.preventDefault(); setIsCommentSectionOpen(!isCommentSectionOpen)}}>
        <Button className={`button ${classes.button}`} variant="contained" size="small" disableRipple>
          <Typography noWrap variant="caption" color="black">
            {commentsMsg}
          </Typography>
        </Button>
      </CardActions>
      {/* comments */}
    </div>
  );
};

// export
export default CommentsContainer;

