// react
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, TextField, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { Post } from '../../../utils/requests';
// components
import AddConversationModal from './msgLS/AddConversationModal';
// constants
const useStyles = makeStyles(theme => ({
  MsgSearch: {
    margin: 5,
  },
  text: {},
  CreateConversation: {
    // borderRadius: `50%`,
  },
}));
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'lightgrey',
      },
      '&:hover fieldset': {
        borderColor: 'grey',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },
})(TextField);
// fxns
const clickAddConversation = async (window, body) => {
  const url = `${window.env.api.conversations}`;
  try {
    const { response, error } = await Post(url, body);
  } catch (err) {
    console.log('error adding conversation', err);
  }
};

// the circle button
const CreateConversation = ({ isOpenSet }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const conversationsArr = useSelector(s => s.view.messages.conversationsArr)

  return (
    <IconButton className={`CreateConversation ${classes.CreateConversation}`} onClick={() => isOpenSet(true)}>
      <AddCircleOutlineIcon />
    </IconButton>
  );
};

/**
 * main
 * view component for message search
 */
const MsgSearch = () => {
  // init hooks
  const classes = useStyles();
  // state
  const activeConversationId = useSelector(s => s.view.messages.activeConversationObj._id);
  const [isOpen, isOpenSet] = useState(false);

  return (
    <Grid container className={`${classes.MsgSearch} w100`}>
      <CssTextField
        className={`textField ${classes.text} f1`}
        margin="dense"
        label="Filter messages"
        variant="outlined"
      />
      <CreateConversation isOpen={isOpen} isOpenSet={isOpenSet} />
      {activeConversationId && <AddConversationModal isOpen={isOpen} isOpenSet={isOpenSet} />}
    </Grid>
  );
};

// export
export default MsgSearch;
