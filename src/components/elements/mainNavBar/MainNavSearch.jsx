// react
import React, { useState } from 'react';
// utils
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { Get } from '../../../utils/requests';
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
// event handlers
const submit = async searchStr => {
  const url = `${window.env.api.search}/${searchStr}`;
  const resJson = await Get(url, {}, true);
  return resJson;
};
const clickSubmit = searchStr => async () => {
  const resJson = await submit(searchStr);
  return resJson;
};
const keyDownHandler = searchStr => async e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const resJson = await submit(searchStr);
    return resJson;
  }
};
const updateInput = setInput => e => {
  setInput(e.currentTarget.value);
};

/**
 * main
 */
const MainNavSearch = () => {
  // init hooks
  const classes = useStyles();
  // state
  const [input, setInput] = useState('');

  return (
    <div className={`MainNavSearch ${classes.root} w100`}>
      <CssTextField
        className={`Search ${classes.text} f1 w100`}
        margin="dense"
        label="Search"
        variant="filled"
        onKeyDown={keyDownHandler(input)}
        value={input}
        onChange={updateInput(setInput)}
      />
      <Button className={`searchButton ${classes.button}`} disableRipple onClick={clickSubmit(input)}>
        <SearchIcon />
      </Button>
    </div>
  );
};

// export
export default MainNavSearch;
