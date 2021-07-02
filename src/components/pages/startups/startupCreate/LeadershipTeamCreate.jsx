// react
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  LeadershipTeamCreate: {
    padding: `20px 0`,
  },
  cardContent: {
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    margin: `5px 10px`,
    '& .Mui-focused.Mui-focused': {
      color: '#333',
    },
  },
  textContainer: {
    margin: 5,
  },
  tf: {
    marginLeft: 20,
  },
  avatarContainer: {
    alignSelf: 'start',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 8,
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
const initTeammate = {name: '', linkedin: '', role: '', bio: '', image: { blob: '' }};
const validatorUrl = Joi.string().uri().allow('').max(256);
const validatorName = Joi.string().allow('').max(128);
const validatorBio = Joi.string().allow('').max(256);

// fxns
const updateTeam = (arr, idx, field, setter, e) => {
  let newArr = [...arr];
  if (field === 'name') {
    newArr[idx].name = e.target.value;
    setter(newArr);
  } else if (field === 'image') {
    newArr[idx].image = extractImage(arr, idx, setter, e);
  } else if (field === 'linkedin') {
    newArr[idx].linkedin = e.target.value;
    setter(newArr);
  } else if (field === 'bio') {
    newArr[idx].bio = e.target.value;
    setter(newArr);
  } else if (field === 'role') {
    newArr[idx].role = e.target.value;
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
const LeadershipTeamCreate = ({ formName }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [team, teamSet] = useState([]);
  // build
  const buildTextField = (label, value, key, stateArr, idx, stateArrSetter, errorType) => {

    return (
      <div className={`${classes.tf} flexcol`}>
        <MuiTextField
          className={`${classes.input} w100`}
          variant="outlined"
          label={label}
          size="small"
          margin="dense"
          value={value}
          onChange={e => updateTeam(stateArr, idx, key, stateArrSetter, e)}
        />
        <FormHelperText
          error={errorType && errorType.message}
          style={{ color: errorType && errorType.message ? 'red' : 'transparent' }}
          className={classes.helperText}
        >
          {errorType && errorType.message || 'error text error text error text error text'}
        </FormHelperText>
      </div>
    );
  };
  const buildPSElem = (stateArr, stateArrSetter, idx, value = initTeammate, errorName, errorRole, errorBio, errorLinkedin) => {
    return (
      <div className={`${classes.cardContent} flexrow`}>
        <div className={`${classes.number}`}>{`#${idx + 1}`}</div>
        <div className={`${classes.textContainer} flexcol`}>
          <div className={`${classes.tfContainer} flexrow `}>
            {buildTextField('Name', value.name, 'name', stateArr, idx, stateArrSetter, errorName.error)}
            {buildTextField('Role', value.role, 'role', stateArr, idx, stateArrSetter, errorRole.error)}
          </div>
          <div className={`${classes.tfContainer} flexrow f1`}>
            {buildTextField('Bio', value.bio, 'bio', stateArr, idx, stateArrSetter, errorBio.error)}
            {buildTextField('LinkedIn', value.linkedin, 'linkedin', stateArr, idx, stateArrSetter, errorLinkedin.error)}
          </div>
        </div>
        <div className={`${classes.avatarContainer}`}>
          <label className={`${classes.inputLabel}`}>
            <input
              className={`${classes.inputButton}`}
              type="file"
              accept="image/png, image/jpeg"
              onChange={e => updateTeam(stateArr, idx, 'image', stateArrSetter, e)}
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
  const addTeammate = (arr, setter) => {
    const newTeammate = [...arr, initTeammate];
    setter(newTeammate);
  };
  const buildList = (team, teamSet) => {
    const itemElemArr = [];
    for (let idx = 0; idx < team.length; idx += 1) {
      const value = team[idx];
      const validatedName = validatorName.validate(value.name);
      const validatedRole = validatorName.validate(value.role);
      const validatedBio = validatorBio.validate(value.bio);
      const validatedLinkedin = validatorUrl.validate(value.linkedin);
      itemElemArr.push(buildPSElem(team, teamSet, idx, value, validatedName, validatedRole, validatedBio, validatedLinkedin));
    }
    let isEmpty = false;
    if (team.length > 0) {
      const lastItem = team[team.length - 1];
      if (!lastItem.name || !lastItem.role || !lastItem.bio) isEmpty = true;
    }
    itemElemArr.push(
      <div className="flexrow w100">
        <Button fullWidth disabled={isEmpty} variant="outlined" className={`nowrap`} onClick={() => addTeammate(team, teamSet, 'Teammate')}>Add Teammate</Button>
      </div>
    );
    return itemElemArr;
  };
  // effects
  useEffect(() => {
    dispatch(updateFormFieldValue(formName, 'team', team));
    dispatch(checkIfValidForm(formName, null));
  }, [team]);

  return (
    <div className={`${classes.LeadershipTeamCreate} flexcol`}>
      {buildList(team, teamSet)}
    </div>
  );
};

// export
export default LeadershipTeamCreate;
