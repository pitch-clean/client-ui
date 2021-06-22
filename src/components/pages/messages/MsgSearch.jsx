// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, TextField, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
// components
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: 5,
  },
  text: {},
  button: {
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

/**
 * main
 * view component for message search
 */
const MsgSearch = () => {
  // init hooks
  const classes = useStyles();
  return (
    <Grid container className={`MsgSearch ${classes.root} w100`}>
      <CssTextField
        className={`textField ${classes.text} f1`}
        margin="dense"
        label="Filter messages"
        variant="outlined"
      />
      <IconButton className={`CreateConversation ${classes.button}`}>
        <AddCircleOutlineIcon />
      </IconButton>
    </Grid>
  );
};

// export
export default MsgSearch;
