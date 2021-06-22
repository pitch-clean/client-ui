// react
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// utils
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { updateSearch } from '../../../redux/actions/ViewActions';
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
    position: 'relative',
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
/**
 * submit query to search several collections
 * on completion, need to clear form
 * @param {*} searchStr 
 * @returns 
 */
const submit = async (searchStr, setInput, push, dispatch) => {
  // reroute
  push(`/search/${searchStr}`)
  // make call
  const url = `${window.env.api.search}/${searchStr}`;
  try {
    const resJson = await Get(url, {}, true);
    dispatch(updateSearch(resJson));
  } catch (err) {
    console.log(err)
  }
  // update redux
  // clear the form
  setInput('');
};
/**
 * handles the click for submitting
 * @param {*} searchStr 
 * @param {*} dispatch 
 * @returns 
 */
const clickSubmit = (searchStr, setInput, push, dispatch) => async () => {
  submit(searchStr, setInput, push, dispatch);
};
const keyDownHandler = (searchStr, setInput, push, dispatch) => async e => {
  if (e.key === 'Enter' && searchStr) {
    e.preventDefault();
    submit(searchStr, setInput, push, dispatch);
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
  const dispatch = useDispatch();
  const { push } = useHistory();
  // state
  const [input, setInput] = useState('');

  return (
    <div className={`MainNavSearch ${classes.root}`}>
      <CssTextField
        className={`Search ${classes.text} f1`}
        margin="dense"
        label="Search"
        variant="filled"
        onKeyDown={keyDownHandler(input, setInput, push, dispatch)}
        value={input}
        onChange={updateInput(setInput)}
      />
      <Button className={`searchButton ${classes.button} f1`} disableRipple onClick={clickSubmit(input, setInput, push, dispatch)}>
        <SearchIcon />
      </Button>
    </div>
  );
};

// export
export default MainNavSearch;
