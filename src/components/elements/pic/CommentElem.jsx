// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import CardHeaderProfile from '../CardHeaderProfile';
import { Typography } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'start',
    backgroundColor: 'whitesmoke',
  },
  commentBody: {
    paddingLeft: 65,
    marginTop: `-22px`,
    fontSize: `13px`,
  },
}));

/**
 * main
 */
const CommentElem = ({ postIdx, commentIdx }) => {
  // init hooks
  const classes = useStyles();
  // state
  const body = useSelector(s => s.view.feed.posts[postIdx].comments[commentIdx].body);
  const alias = useSelector(s => s.view.feed.posts[postIdx].comments[commentIdx].profile.alias);
  const pii = useSelector(s => s.view.feed.posts[postIdx].comments[commentIdx].profile.pii);
  const thumbnail = useSelector(s => s.view.feed.posts[postIdx].comments[commentIdx].profile.images.profile.thumbnail);
  // build
  const buildBody = body => {
    return (
      <Typography className={`${classes.commentBody}`} variant="subtitle2">{body}</Typography>
    );
  };
  const title = `${pii.firstName} ${pii.lastName}`;

  return (
    <div className={`CommentElem ${classes.root} w100`}>
      <CardHeaderProfile type="comments" thumbnail={thumbnail} alias={alias} title={title} />
      {buildBody(body)}
    </div>
  );
};

// export
export default CommentElem;
