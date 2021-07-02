// react
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// utils
import Joi from 'joi';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Avatar,
  FormHelperText,
  TextField as MuiTextField,
} from '@material-ui/core';
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm,
} from '../../../../redux/actions/forms/CreateFundingPageActions';
// constants
const useStyles = makeStyles(theme => ({
  AdvisorsAndInvestorsCreate: {
    padding: `20px 0`,
  },
  input: {
    margin: 20,
    '& .Mui-focused.Mui-focused': {
      color: '#333',
    },
  },
  avatarContainer: {
    alignSelf: 'start',
  },
  avatar: {
    margin: `1px 0.5rem`,
    height: `8rem`,
    width: `8rem`,
  },
  inputLabel: {
    display: 'inline-block',
    cursor: 'pointer',
    fontSize: '12px',
  },
  inputButton: {
    display: 'none',
  },
  helperText: {
    lineHeight: 0,
    marginBottom: `8px`,
  },
}));
const validatorUrl = Joi.string().uri().allow('').max(256);
const validatorName = Joi.string().allow('').max(128);
// fxns
const updateAdvisorsInvestors = (arr, idx, field, setter, e) => {
  let newArr = [...arr];
  if (field === 'name') {
    newArr[idx].name = e.target.value;
    setter(newArr);
  } else if (field === 'image') {
    newArr[idx].image = extractImage(arr, idx, setter, e);
  } else if (field === 'homepage') {
    newArr[idx].homepage = e.target.value;
    setter(newArr);
  }
};
const extractImage = async (arr, idx, setter, e) => {
  const newArr = [...arr];
  // default vars
  let mbLimit = 10;
  let byteLimit = mbLimit * 1000000;
  // destructure
  const fileObj = e.target.files[0];
  const {
    name, size: fileSize, type,
  } = fileObj;
  if (fileSize > byteLimit) {
    alert("Please select files under 10MB");
    return;
  }
  // load the bytecode for uploading
  let reader = new FileReader();
  reader.onloadend = e => {
    const result = {
      blob: e.target.result,
      file: {
        name: fileObj.name,
        lastModified: fileObj.lastModified,
        size: fileObj.size,
        type: fileObj.type,
      },
    };
    newArr[idx].image = result;
    setter(newArr);
  };
  // process the pdf, run the callback
  reader.readAsDataURL(fileObj);
};

/**
 * main
 */
const AdvisorsAndInvestorsCreate = ({ formName }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [advisors, advisorsSet] = useState([]);
  const [investors, investorsSet] = useState([]);
  // build validatorName
  const buildPSElem = (stateArr, stateArrSetter, idx, value = {name: '', homepage: '', image: { blob: '' }}, advisorOrInvestorStr, errorName, errorHomepage) => {
    
    return (
      <div className={`${classes.cardContent} h100 flexrow f1`}>
        <div>{advisorOrInvestorStr}</div>
        <div className="flexcol">
          <MuiTextField
            className={`${classes.input} nowrap`}
            variant="outlined"
            label={'name'}
            size="small"
            margin="dense"
            value={value.name}
            onChange={e => updateAdvisorsInvestors(stateArr, idx, 'name', stateArrSetter, e)}
          />
          <FormHelperText
            error={errorName && errorName.message}
            style={{ color: errorName && errorName.message ? 'red' : 'transparent' }}
            className={classes.helperText}
          >
            {errorName && errorName.message || 'error text error text error text error text'}
          </FormHelperText>
        </div>
        <div className={`${classes.tf} flexcol`}>
          <MuiTextField
            className={`${classes.input} nowrap`}
            variant="outlined"
            label={'homepage'}
            size="small"
            margin="dense"
            value={value.homepage}
            onChange={e => updateAdvisorsInvestors(stateArr, idx, 'homepage', stateArrSetter, e)}
          />
          <FormHelperText
            error={errorHomepage && errorHomepage.message}
            style={{ color: errorHomepage && errorHomepage.message ? 'red' : 'transparent' }}
            className={classes.helperText}
          >
            {errorHomepage && errorHomepage.message || 'error text error text error text error text'}
          </FormHelperText>
        </div>
        <div className={`${classes.avatarContainer}`}>
          <label className={`${classes.inputLabel}`}>
            <input
              className={`${classes.inputButton}`}
              type="file"
              accept="image/png, image/jpeg"
              onChange={e => updateAdvisorsInvestors(stateArr, idx, 'image', stateArrSetter, e)}
            />
            <Avatar
              className={`${classes.avatar}`}
              alt="Add Image"
              src={value.image.blob}
              children={<div className="flexcol" style={{ textAlign: 'center' }}>Add image here</div>}
            />
          </label>
        </div>
      </div>
    );
  };
  const addAdvisorInvestor = (arr, setter) => {
    const newAdvisorInvestor = [...arr, {name: '', homepage: '', image: { blob: '' }}];
    setter(newAdvisorInvestor);
  };
  const buildList = (advisors, advisorsSet, investors, investorsSet) => {
    const itemElemArr = [];
    let isErrInner = false;
    for (let idx = 0; idx < advisors.length; idx += 1) {
      const { error: errorHomepage } = validatorUrl.validate(advisors[idx].homepage);
      const { error: errorName } = validatorName.validate(advisors[idx].name);
      if (errorHomepage) isErrInner = true;
      itemElemArr.push(buildPSElem(advisors, advisorsSet, idx, advisors[idx], 'Advisor', errorName, errorHomepage));
    }
    for (let idx = 0; idx < investors.length; idx += 1) {
      const { error: errorHomepage } = validatorUrl.validate(investors[idx].homepage);
      const { error: errorName } = validatorName.validate(investors[idx].name);
      if (errorHomepage) isErrInner = true;
      itemElemArr.push(buildPSElem(investors, investorsSet, idx, investors[idx], 'Investor', errorName, errorHomepage));
    }
    if (isErrInner) {
      dispatch(updateFormFieldError(formName, 'advisors', [true]));
    } else {
      dispatch(updateFormFieldError(formName, 'advisors', null));
    }
    let isEmpty = false;
    if (advisors.length > 0) {
      const last = advisors.length - 1;
      if (!advisors[last].name || !advisors[last].homepage) isEmpty = true;
    }
    if (investors.length > 0) {
      const last = investors.length - 1;
      if (!investors[last].name || !investors[last].homepage) isEmpty = true;
    }
    itemElemArr.push(
      <div className="flexrow">
        <Button className={`nowrap`} variant="outlined" disabled={isEmpty} fullWidth onClick={() => addAdvisorInvestor(advisors, advisorsSet, 'Advisor')}>Add Advisor</Button>
        <Button className={`nowrap`} variant="outlined" disabled={isEmpty} fullWidth onClick={() => addAdvisorInvestor(investors, investorsSet, 'Investor')}>Add Investor</Button>
      </div>
    );
    return itemElemArr;
  };
  // effects
  useEffect(() => {
    dispatch(updateFormFieldValue(formName, 'advisors', advisors));
    dispatch(checkIfValidForm(formName, null));
  }, [advisors]);
  useEffect(() => {
    dispatch(updateFormFieldValue(formName, 'investors', investors));
    dispatch(checkIfValidForm(formName, null));
  }, [investors]);

  return (
    <div className={`AdvisorsAndInvestorsCreate ${classes.content} flexcol`}>
      {buildList(advisors, advisorsSet, investors, investorsSet)}
    </div>
  );
};

// export
export default AdvisorsAndInvestorsCreate;
