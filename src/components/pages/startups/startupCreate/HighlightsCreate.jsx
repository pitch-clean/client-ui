// react
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField as MuiTextField,
} from '@material-ui/core';
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm,
} from '../../../../redux/actions/forms/CreateFundingPageActions';
// components
import TextField from '../../../forms/fields/TextField';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    color: `black`,
    marginBottom: 20,
  },
  highlight: {
    padding: `10px 30px`,
  },
  text: {
    paddingRight: 30,
    alignSelf: 'start',
  },
  space: {
    paddingLeft: 30,
    paddingRight: 10,
    alignSelf: 'start',
  },
  HighlightsCreate: {
    padding: `20px 0`,
  },
  input: {
    paddingLeft: 20,
  },
}));
// fxns
const updateHighlight = (arr, idx, highlightsSetter, dispatch, e) => {
  let newHighlights = [...arr];
  newHighlights[idx] = e.target.value;
  highlightsSetter(newHighlights);
};
const addHighlight = (arr, highlightsSetter, dispatch) => {
  const newHighlights = [...arr, ''];
  highlightsSetter(newHighlights);
};

/**
 * main
 */
const HighlightsCreate = ({ reducerName, formName }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [highlights, highlightsSet] = useState([]);
  // build
  const buildHightlights = highlights => {
    const highlightsElemArr = [];
    for (let idx = 0; idx < highlights.length; idx += 1) {
      const highlightStr = highlights[idx];
      console.log(idx, highlightStr)
      highlightsElemArr.push(
        <div className={`${classes.highlight} flexrow w100`}>
          <MuiTextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="Highlight"
            size="small"
            margin="dense"
            value={highlights[idx]}
            onChange={e => updateHighlight(highlights, idx, highlightsSet, dispatch, e)}
          />
        </div>
      );
    }
    highlightsElemArr.push(<Button fullWidth onClick={() => addHighlight(highlights, highlightsSet, dispatch)}>Add Highlight</Button>);
    return highlightsElemArr;
  };
  // effects
  useEffect(() => {
    dispatch(updateFormFieldValue(formName, 'highlights', highlights));
    dispatch(checkIfValidForm(formName, null));
  }, [highlights]);

  return (
    <div className={`${classes.HighlightsCreate} w100`}>
      {buildHightlights(highlights)}
    </div>
  );
};

// export
export default HighlightsCreate;
