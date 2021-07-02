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
  checkIfValidForm,
} from '../../../../redux/actions/forms/CreateFundingPageActions';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    color: `black`,
    marginBottom: 20,
  },
  lineItem: {
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
  RecentNewsCreate: {
    padding: `20px 0`,
  },
  input: {
    paddingLeft: 20,
  },
}));
// fxns
const updateRecentNews = (arr, idx, stateArrSetter, dispatch, e) => {
  let newStateArr = [...arr];
  newStateArr[idx] = e.target.value;
  stateArrSetter(newStateArr);
};
const addRecentNews = (arr, stateArrSetter, dispatch) => {
  const newStateArr = [...arr, ''];
  stateArrSetter(newStateArr);
};

/**
 * main
 */
const RecentNewsCreate = ({ reducerName, formName }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [stateArr, stateArrSet] = useState([]);
  // build
  const buildHightlights = stateArr => {
    const elemArr = [];
    for (let idx = 0; idx < stateArr.length; idx += 1) {
      const str = stateArr[idx];
      elemArr.push(
        <div className={`${classes.lineItem} flexrow w100`}>
          <MuiTextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="Article"
            size="small"
            margin="dense"
            value={stateArr[idx]}
            onChange={e => updateRecentNews(stateArr, idx, stateArrSet, dispatch, e)}
          />
        </div>
      );
    }
    elemArr.push(<Button fullWidth onClick={() => addRecentNews(stateArr, stateArrSet, dispatch)}>Add Article</Button>);
    return elemArr;
  };
  // effects
  useEffect(() => {
    dispatch(updateFormFieldValue(formName, 'recentNews', stateArr));
    dispatch(checkIfValidForm(formName, null));
  }, [stateArr]);
  // useEffect(() => {
  //   updateFormFieldValue;
  // }, [stateArr.length]);

  return (
    <div className={`${classes.RecentNewsCreate} w100`}>
      {buildHightlights(stateArr)}
    </div>
  );
};

// export
export default RecentNewsCreate;
