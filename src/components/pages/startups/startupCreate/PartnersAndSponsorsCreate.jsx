// react
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Avatar,
  TextField as MuiTextField,
} from '@material-ui/core';
import {
  updateFormFieldValue,
  updateFormFieldError,
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
  PartnersAndSponsorsCreate: {
    padding: `20px 0`,
  },
  input: {
    paddingLeft: 20,
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
}));
// fxns
const updatePartnersSponsors = (arr, idx, field, setter, e) => {
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
const PartnersAndSponsorsCreate = ({ formName }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [partners, partnersSet] = useState([]);
  const [sponsors, sponsorsSet] = useState([]);
  // build
  const buildPSElem = (stateArr, stateArrSetter, idx, value = {name: '', homepage: '', image: { blob: '' }}, partnerOrSponsorStr) => {
    return (
      <div className={`${classes.cardContent} h100 flexrow f1`}>
        <div>{partnerOrSponsorStr}</div>
        <MuiTextField
          className={`${classes.input} w100 f1`}
          variant="outlined"
          placeholder="name"
          size="small"
          margin="dense"
          value={value.name}
          onChange={e => updatePartnersSponsors(stateArr, idx, 'name', stateArrSetter, e)}
        />
        <MuiTextField
          className={`${classes.input} w100 f1`}
          variant="outlined"
          placeholder="homepage"
          size="small"
          margin="dense"
          value={value.homepage}
          onChange={e => updatePartnersSponsors(stateArr, idx, 'homepage', stateArrSetter, e)}
        />
        <div className={`${classes.avatarContainer}`}>
          <label className={`${classes.inputLabel}`}>
            <input
              className={`${classes.inputButton}`}
              type="file"
              accept="image/png, image/jpeg"
              onChange={e => updatePartnersSponsors(stateArr, idx, 'image', stateArrSetter, e)}
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
  const addPartnerSponsor = (arr, setter, partnerOrSponsorStr) => {
    const newPartnerSponsor = [...arr, {name: '', homepage: '', image: { blob: '' }}];
    setter(newPartnerSponsor);
  };
  const buildList = (partners, partnersSet, sponsors, sponsorsSet) => {
    const itemElemArr = [];
    for (let idx = 0; idx < partners.length; idx += 1) {
      itemElemArr.push(buildPSElem(partners, partnersSet, idx, partners[idx], 'Partner'));
    }
    for (let idx = 0; idx < sponsors.length; idx += 1) {
      itemElemArr.push(buildPSElem(sponsors, sponsorsSet, idx, sponsors[idx], 'Sponsor'));
    }
    itemElemArr.push(
      <div className="flexrow">
        <Button fullWidth onClick={() => addPartnerSponsor(partners, partnersSet, 'Partner')}>Add Partner</Button>
        <Button fullWidth onClick={() => addPartnerSponsor(sponsors, sponsorsSet, 'Sponsor')}>Add Sponsor</Button>
      </div>
    );
    return itemElemArr;
  };
  // effects
  useEffect(() => {
    dispatch(updateFormFieldValue(formName, 'partners', partners));
    dispatch(checkIfValidForm(formName, null));
  }, [partners]);
  useEffect(() => {
    dispatch(updateFormFieldValue(formName, 'sponsors', sponsors));
    dispatch(checkIfValidForm(formName, null));
  }, [sponsors]);

  return (
    <div className={`PartnersAndSponsorsCreate ${classes.content} flexcol`}>
      {buildList(partners, partnersSet, sponsors, sponsorsSet)}
    </div>
  );
};

// export
export default PartnersAndSponsorsCreate;
