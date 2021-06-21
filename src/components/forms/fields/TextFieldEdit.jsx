// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
// constants
const useStyles = makeStyles({
  root: {
    paddingRight: 20,
  },
})

/**
 * 
 * @param {string} value
 * @param {function} updateFxn
 * @param {object} updateFxnInputs
 */
const TextFieldEdit = ({ value, updateFxn, updateFxnInputs }) => {
  // init hooks
  const classes = useStyles();

  return (
    <TextField
      className={`${classes.root} w100 f1`}
      variant="outlined"
      placeholder="Highlight"
      size="small"
      margin="dense"
      value={value}
      onChange={e => updateFxn(updateFxnInputs, e)}
    />
  );
};

// export
export default TextFieldEdit;
