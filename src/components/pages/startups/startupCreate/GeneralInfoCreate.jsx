// react
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Avatar,
  Button,
  TextField as MuiTextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  AccountBalance as AccountBalanceIcon,
  Description as DescriptionIcon,
  Group as GroupIcon,
  AttachMoney as AttachMoneyIcon,
  Room as RoomIcon,
  Business as BusinessIcon,
} from '@material-ui/icons';
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm,
} from '../../../../redux/actions/forms/CreateFundingPageActions';
// components
import TextField from '../../../forms/fields/TextField';
import SelectField from '../../../forms/fields/SelectField';
import LargeTextField from '../../../forms/fields/LargeTextField';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    color: `black`,
    marginBottom: 20,
  },
  avatarContainer: {
    alignSelf: 'start',
  },
  avatar: {
    margin: `1px 0.5rem`,
    height: `8rem`,
    width: `8rem`,
  },
  row1: {
    justifyContent: 'start',
  },
  socials: {
    paddingLeft: `5px`,
    justifyContent: 'start',
    // width
  },
  socialButton: {
    marginLeft: 5,
    padding: 0,
    minWidth: 30,
  },
  row: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: `center`,
    padding: `5px 0`,
    '& .linkButton': {
      margin: 10,
    },
  },
  rowItem: {
    '& > div': {
      padding: `1px 8px`,
    },
  },
  col: {
    padding: `5px 0`,
  },
  infoContainer: {
    display: 'flex',
    paddingRight: 40,
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: 0,
    '& > svg': {
      marginRight: 10,
      top: `-3px`,
    },
  },
  address: {
    flexFlow: 'row wrap',
  },
  country: {
    // width: '40px',
  },
  about: {
    paddingRight: 40,
    lineHeight: 1.5,
  },
  slogan: {
    paddingRight: 10,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputLabel: {
    display: 'inline-block',
    cursor: 'pointer',
    fontSize: '12px',
  },
  inputButton: {
    display: 'none',
  },
}));
const employeeCtArr = [
  {value: '1-10 employees', label: '1-10 employees'},
  {value: '10-50 employees', label: '10-50 employees'},
  {value: '50-200 employees', label: '50-200 employees'},
  {value: '200-1000 employees', label: '200-1000 employees'},
];
const countryArr = [
  {value: 'USA', label: 'United States of America'},
];
const fundRoundStageArr = [
  {value: 'seed', label: 'Seed'},
  {value: 'seriesa', label: 'Series A'},
  {value: 'seriesb', label: 'Series B'},
  {value: 'seriesc', label: 'Series C'},
  {value: 'seriesd', label: 'Series D'},
  {value: 'seriese', label: 'Series E'},
  {value: 'seriesf', label: 'Series F'},
];
// fxns
const updateFormField = (field, stateObj, stateObjSet) => e => {
  const newStateObj = { ...stateObj };
  if (field === 'city') {
    newStateObj.location.address.city = e.currentTarget.value;
  } else if (field === 'provinceState') {
    newStateObj.location.address.provinceState = e.currentTarget.value;
  } else if (field === 'about') {
    newStateObj.content.about = e.currentTarget.value;
  } else if (field === 'latestFundingRound.type') {
    newStateObj.fundingRounds[newStateObj.fundingRounds.length - 1].type = e.target.value;
  } else if (field === 'latestFundingRound.amount') {
    newStateObj.fundingRounds[newStateObj.fundingRounds.length - 1].amount = e.target.value;
  } else if (field === 'linkedin') {
    newStateObj.social.linkedin = e.target.value;
  } else if (field === 'twitter') {
    newStateObj.social.twitter = e.target.value;
  } else {
    newStateObj[field] = e.target.value;
  }
  stateObjSet(newStateObj);
};
const extractImage = async (e, formName, fieldName, updateFormFieldValue, dispatch) => {
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
    console.log('fileObjfileObj', fileObj)
    console.log('\n\nresult', e.target.result, '\n\nresultdun')
    const result = {
      blob: e.target.result,
      file: {
        name: fileObj.name,
        lastModified: fileObj.lastModified,
        size: fileObj.size,
        type: fileObj.type,
      },
    };
    dispatch(updateFormFieldValue(formName, fieldName, result));
  };
  // process the pdf, run the callback
  reader.readAsDataURL(fileObj);
};

/**
 * main
 */
const GeneralInfoCreate = ({ reducerName, formName }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const image = useSelector(s => s.forms[reducerName][formName].fields.image);
  return (
    <div className={`flexrow w100`}>
      <div className={`${classes.avatarContainer}`}>
        <label className={`${classes.inputLabel}`}>
          <input
            className={`${classes.inputButton}`}
            type="file"
            accept="image/png, image/jpeg"
            onChange={e => {extractImage(e, formName, 'image', updateFormFieldValue, dispatch)}}
          />
          {/* Browse Files... */}
          <Avatar
            className={`${classes.avatar}`}
            alt="Add Image"
            src={image.value.blob}
            children={<div className="flexcol" style={{textAlign: 'center'}}>Add image here</div>}
          />
        </label>
      </div>
      <div className={`f1`}>
        <div className={`${classes.row1} ${classes.row} flexrow`}>
          <TextField
            fieldName="title"
            label="Title"
            reducerName={reducerName}
            formName={formName}
            updateFxn={updateFormFieldValue}
            updateErrorFxn={updateFormFieldError}
            validCheckFxn={checkIfValidForm}
            customClassName={'f1'}
            autoFocus
          />
          <div className={`${classes.socials} flexcol f1`}>
            <div className="flexrow w100">
              <LinkedInIcon />
              <TextField
                fieldName="linkedin"
                label="Linkedin"
                reducerName={reducerName}
                formName={formName}
                updateFxn={updateFormFieldValue}
                updateErrorFxn={updateFormFieldError}
                validCheckFxn={checkIfValidForm}
                customClassName={'f1'}
              />
            </div>
            <div className="flexrow w100">
              <TwitterIcon />
              <TextField
                fieldName="twitter"
                label="Twitter"
                reducerName={reducerName}
                formName={formName}
                updateFxn={updateFormFieldValue}
                updateErrorFxn={updateFormFieldError}
                validCheckFxn={checkIfValidForm}
                customClassName={'f1'}
              />
            </div>
            <div className="flexrow w100">
              <FacebookIcon />
              <TextField
                fieldName="facebook"
                label="Facebook"
                reducerName={reducerName}
                formName={formName}
                updateFxn={updateFormFieldValue}
                updateErrorFxn={updateFormFieldError}
                validCheckFxn={checkIfValidForm}
                customClassName={'f1'}
              />
            </div>
          </div>
        </div>
        <TextField
          fieldName="slogan"
          label="Slogan"
          reducerName={reducerName}
          formName={formName}
          updateFxn={updateFormFieldValue}
          updateErrorFxn={updateFormFieldError}
          validCheckFxn={checkIfValidForm}
        />
        <div className={`${classes.address} flexrow`}>
          <FormControl className={classes.formControl}>
            <SelectField
              fieldName="country"
              label="Country"
              valuesArr={countryArr}
              formName={formName}
              reducerName={reducerName}
              updateFxn={updateFormFieldValue}
              updateErrorFxn={updateFormFieldError}
              validCheckFxn={checkIfValidForm}
              customClassName={classes.country}
            />
          </FormControl>
          <TextField
            fieldName="provinceState"
            label="State/Province"
            reducerName={reducerName}
            formName={formName}
            updateFxn={updateFormFieldValue}
            updateErrorFxn={updateFormFieldError}
            validCheckFxn={checkIfValidForm}
          />
          <TextField
            fieldName="city"
            label="City"
            reducerName={reducerName}
            formName={formName}
            updateFxn={updateFormFieldValue}
            updateErrorFxn={updateFormFieldError}
            validCheckFxn={checkIfValidForm}
          />
          <TextField
            fieldName="street"
            label="Road / Street / Avenue / etc."
            reducerName={reducerName}
            formName={formName}
            updateFxn={updateFormFieldValue}
            updateErrorFxn={updateFormFieldError}
            validCheckFxn={checkIfValidForm}
          />
          <TextField
            fieldName="buildingNumber"
            label="Building Number"
            reducerName={reducerName}
            formName={formName}
            updateFxn={updateFormFieldValue}
            updateErrorFxn={updateFormFieldError}
            validCheckFxn={checkIfValidForm}
          />
          <TextField
            fieldName="apartment"
            label="Apartment"
            reducerName={reducerName}
            formName={formName}
            updateFxn={updateFormFieldValue}
            updateErrorFxn={updateFormFieldError}
            validCheckFxn={checkIfValidForm}
          />
        </div>
        <div className={`${classes.row}`}>
          <div className={`${classes.infoContainer} flexrow`}>
            <BusinessIcon />
            <TextField
              fieldName="sector"
              label="Sector"
              reducerName={reducerName}
              formName={formName}
              updateFxn={updateFormFieldValue}
              updateErrorFxn={updateFormFieldError}
              validCheckFxn={checkIfValidForm}
            />
          </div>
        </div>
        <LargeTextField
          fieldName="about"
          label="About"
          reducerName={reducerName}
          formName={formName}
          updateFxn={updateFormFieldValue}
          updateErrorFxn={updateFormFieldError}
          validCheckFxn={checkIfValidForm}
        />
        <div className={`${classes.row} w100`}>
          <div className={`${classes.infoContainer} flexrow`}>
            <AccountBalanceIcon />
            <FormControl className={classes.formControl}>
              <SelectField
                fieldName="latestFundingRoundStage"
                label="Funding Round (stage)"
                valuesArr={fundRoundStageArr}
                formName={formName}
                reducerName={reducerName}
                updateFxn={updateFormFieldValue}
                updateErrorFxn={updateFormFieldError}
                validCheckFxn={checkIfValidForm}
              />
            </FormControl>
          </div>
          <div className={`${classes.infoContainer} flexrow`}>
            <DescriptionIcon />
            <TextField
              fieldName="latestFundingRoundMethod"
              label="Funding Type"
              reducerName={reducerName}
              formName={formName}
              updateFxn={updateFormFieldValue}
              updateErrorFxn={updateFormFieldError}
              validCheckFxn={checkIfValidForm}
            />
          </div>
        </div>
        <div className={`${classes.row} ${classes.row6}`}>
          <div className={`${classes.infoContainer}`}>
            <GroupIcon />
            <FormControl className={classes.formControl}>
              <SelectField
                fieldName="employeeCt"
                label="Employee Count"
                valuesArr={employeeCtArr}
                formName={formName}
                reducerName={reducerName}
                updateFxn={updateFormFieldValue}
                updateErrorFxn={updateFormFieldError}
                validCheckFxn={checkIfValidForm}
              />
            </FormControl>
          </div>
          <div className={`${classes.infoContainer}`}>
            <AttachMoneyIcon />
            <TextField
              fieldName="amountRaised"
              label="Amount Raised"
              reducerName={reducerName}
              formName={formName}
              updateFxn={updateFormFieldValue}
              updateErrorFxn={updateFormFieldError}
              validCheckFxn={checkIfValidForm}
            />
          </div>
        </div>
        <div className={`${classes.col} flexcol w100`}>
          <div className={`linksContainer ${classes.row} ${classes.rowItem} w100`}>
            <TextField
              fieldName="email"
              label="Email"
              reducerName={reducerName}
              formName={formName}
              updateFxn={updateFormFieldValue}
              updateErrorFxn={updateFormFieldError}
              validCheckFxn={checkIfValidForm}
              customClassName={'f1'}
            />
            <TextField
              fieldName="phone"
              label="Phone"
              reducerName={reducerName}
              formName={formName}
              updateFxn={updateFormFieldValue}
              updateErrorFxn={updateFormFieldError}
              validCheckFxn={checkIfValidForm}
              customClassName={'f1'}
            />
          </div>
          <div className={`linksContainer ${classes.row} ${classes.rowItem} w100`}>
            <TextField
              fieldName="website"
              label="Website"
              reducerName={reducerName}
              formName={formName}
              updateFxn={updateFormFieldValue}
              updateErrorFxn={updateFormFieldError}
              validCheckFxn={checkIfValidForm}
              customClassName={'w100'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// export
export default GeneralInfoCreate;
