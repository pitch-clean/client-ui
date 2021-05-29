// react
import React, { useState } from 'react';
// utils
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    '& *': {
      color: `white`,
    },
    '& .MuiFilledInput-root': {
      backgroundColor: `rgba(248, 245, 245, 0.05)`,
    },
    '& .MuiFilledInput-root:hover': {
      backgroundColor: `rgba(248, 245, 245, 0.07)`,
    },
    '& .MuiFilledInput-root.Mui-focused': {
      backgroundColor: `rgba(248, 245, 245, 0.1)`,
    },
  },
  text: {
    '& *': {
      color: `white`,
    },
  },
  button: {
    position: 'absolute',
    right: 0,
    height: `100%`,
    minWidth: 50,
  },
}));
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'whitesmoke',
    },
    '& .MuiFilledInput-underline:hover::before': {
      borderBottomColor: '#818181d4',
    },
    '& .MuiFilledInput-underline:before': {
      borderBottomColor: '#514d4dd4',
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
    '& .MuiInputBase-input': {
      paddingRight: '50px',
      fontSize: 15,
    },
  },
})(TextField);

/**
 * main
 */
const MainNavSearch = () => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`MainNavSearch ${classes.root} w100`}>
      <CssTextField
        className={`Search ${classes.text} f1 w100`}
        margin="dense"
        label="Search"
        variant="filled"
      />
      <Button className={`searchButton ${classes.button}`} disableRipple>
        <SearchIcon />
      </Button>
    </div>
  );
};

// export
export default MainNavSearch;
