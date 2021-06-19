// react
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import { updatePostComments } from '../../../../redux/actions/ViewActions';
import { Post } from '../../../../utils/requests';
// components
// constants
const useStyles = makeStyles(theme => ({
  // root: {
  //   justifyContent: 'start',
  //   backgroundColor: 'whitesmoke',
  // },
  root: {
    display: `flex`,
    flexFlow: 'row',
    alignItems: 'end',
    padding: `5px 10px`,
  },
  inputContainer: {
    display: 'flex',
    flexFlow: 'row',
    flex: 1,
    padding: `10px`,
  },
  input: {
    flex: 1,
  },
  send: {
    justifyContent: 'flex-end',
    flexFlow: 'column',
    display: 'flex',
  },
  button: {
    height: 40,
    margin: 5,
    backgroundColor: '#87a1d2',
    '&:hover': {
      backgroundColor: '#aec2e8',
    },
    '& *': {
      color: 'white',
    },
  },
}));
// fxns
const submitComment = async (input, postId, activeProfileId, dispatch) => {
  const url = `${window.env.api.comments}`;
  const body = { profile: activeProfileId, post: postId, body: input };
  try {
    const resCommentsArr = await Post(url, body, {}, true);
    console.log('\nstart\n', url, body)
    console.log(resCommentsArr, '\nend\n\n')
    dispatch(updatePostComments(resCommentsArr));
  } catch (err) {
    console.log(err)
  }
};

/**
 * main
 */
const NewComment = ({ postId }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [input, setInput] = useState('');
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);

  return (
    <Paper square className={`NewComment ${classes.root} w100`}>
      <TextField
        className={classes.input}
        multiline
        variant="outlined"
        placeholder="Write comment here"
        size="small"
        margin="dense"
        onKeyDown={async e => {
          if (e.key.toLowerCase() === 'enter' && !e.shiftKey) {
            e.preventDefault();
            await submitComment(input, postId, activeProfileId, dispatch);
          }
        }}
        value={input}
        onChange={e => setInput(e.currentTarget.value)}
      />
      <Button variant="contained" disabled={!input} className={classes.button} onClick={async () => await submitComment(input, postId, activeProfileId, dispatch)} >
        Submit
      </Button>
    </Paper>
  );
};

// export
export default NewComment;
