// react
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// utils
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm,
  updateFormValid,
} from '../../../redux/actions/CreateOfferingActions';
// components
import TextField from '../fields/TextField';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `10px`,
  },
}));
// existingProjects
const allFields = [
  { fieldName: 'text0' },
  { fieldName: 'text1' },
  { fieldName: 'text2' },
  { fieldName: 'text3' },
  { fieldName: 'text4' },
  { fieldName: 'text5' },
  { fieldName: 'text6' },
  { fieldName: 'text7' },
  { fieldName: 'text8' },
  { fieldName: 'text9' },
  { fieldName: 'text10' },
  { fieldName: 'text11' },
];

/**
 * main
 */
const ExistingProjectsForm = ({ formName, reducerName }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // build
  const buildFieldRow = fieldElems => {
    return fieldElems.map((field, idx) => {
      const { fieldName } = field;
      return (
        <Grid item xs={4}>
          <TextField
            fieldName={fieldName}
            reducerName={reducerName}
            formName={formName}
            updateFxn={updateFormFieldValue}
            updateErrorFxn={updateFormFieldError}
            validCheckFxn={checkIfValidForm}
            variant="outlined"
            id="outlined-basic"
            optional
            isUpdateOnChange
          />
        </Grid>
      );
    });
  };
  const buildFields = arr => {
    const allRows = [];
    const arrLen = Math.ceil(arr.length / 3);
    for (let idx = 0; idx < arrLen; idx += 1) {
      allRows.push(buildFieldRow(arr.slice(idx * 3, (idx + 1) * 3)));
    }
    return allRows;
  };
  // effects
  useEffect(() => {
    dispatch(updateFormValid(formName, true));
  }, []);

  return (
    <Grid container spacing={1} className={`ExistingProjectsForm ${classes.root} `}>
      {buildFields(allFields)}
    </Grid>
  );
};

// export
export default ExistingProjectsForm;
