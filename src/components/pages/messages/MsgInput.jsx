// react
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { Post } from '../../../utils/requests';
import { addToMessagesArr } from '../../../redux/actions/views/MessagesActions';
// constants
const useStyles = makeStyles(theme => ({
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
    '& *': {
      color: 'white',
      fontWeight: 600,
    },
    '&:hover': {
      backgroundColor: '#aec2e8',
    },
  },
}));
const changeText = inputSet => e => {
  inputSet(e.target.value);
};
const submit = async (input, participants, submitParams) => {
  const {
    inputSet,
    conversationId,
    activeProfileId,
    dispatch,
  } = submitParams;

  try {
    const url = `${window.env.api.messages}/`;
    const body = {
      profile: activeProfileId,
      body: input,
      conversation: conversationId,
    };

    const { response, error } = await Post(url, body);
    if (error) throw error;
    console.log('messages from submitting message', response)
    inputSet('');
    dispatch(addToMessagesArr(response))
  } catch (err) {
    console.log(err);
  }
};
const handleSubmit = (input, participants, submitParams) => async e => {
  if (e.type === 'click') {
    await submit(input, participants, submitParams);
  } else if (e.key && e.key.toLowerCase() === 'enter' && !e.shiftKey) {
    e.preventDefault();
    await submit(input, participants, submitParams);
  }
};

/**
 * main
 *
 */
const MsgInput = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const conversationId = useSelector(s => s.view.messages.activeConversationObj._id);
  const participants = useSelector(s => s.view.messages.activeConversationObj.participants);
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const [input, inputSet] = useState('');
  // effects
  // when exiting mesages, save as draft to backend
  useEffect(() => {
    // console.log('conversationId', conversationId)
    // console.log('activeProfileId', activeProfileId)
    // console.log('participants', participants)
    return () => {
      // save as draft in conversation, need to make new data model
    };
  }, []);
  const submitParams = {
    inputSet,
    conversationId,
    activeProfileId,
    dispatch,
  };

  return (
    <Paper square className={`MsgInput ${classes.root} w100`}>
      <TextField
        className={`${classes.input} f1`}
        multiline
        value={input}
        variant="outlined"
        placeholder="Write message here"
        size="small"
        margin="dense"
        onChange={changeText(inputSet)}
        onKeyDown={handleSubmit(input, participants, submitParams)}
      />
      <Button
        variant="contained"
        className={classes.button}
        disabled={!input}
        onClick={handleSubmit(input, participants, submitParams)}
      >
        Send
      </Button>
    </Paper>
  );
};

// export
export default MsgInput;
