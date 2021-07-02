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
import CancelIcon from '@material-ui/icons/Cancel';
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm,
} from '../../../../redux/actions/forms/CreateFundingPageActions';
// constants
const useStyles = makeStyles(theme => ({
  MediaCreate: {
    padding: `20px`,
  },
  input: {
    margin: `5px 10px`,
    '& .Mui-focused.Mui-focused': {
      color: '#333',
    },
  },
  inputLabel: {
    display: 'flex',
    cursor: 'pointer',
    fontSize: '12px',
  },
  inputButton: {
    display: 'none',
  },
  previewList: {
    flexFlow: 'row wrap',
    justifyContent: 'start',
    minHeight: 20,
    border: '1px solid #00000024',
    borderRadius: 5,
  },
  previewContainer: {
    maxWidth: '22%',
    width: '22%',
    minWidth: '30px',
    boxSizing: 'border-box',
    resize: 'horizontal',
    margin: 5,
  },
  previewImg: {
    width: '100%',
    paddingBottom: '100%',
    '& > *': {
      top: 0,
      left: 0,
      position: 'absolute',
      width: '100%',
      height: '100%',
    }
  },
  cancelButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#f7f7f7b8',
    padding: 0,
    margin: 5,
    minWidth: 'unset',
  },
  button: {
    // width: '50%',
  },
}));

// fxns
const extractImages = (stagedImages, setter, e) => {
  const newArr = [...stagedImages];
  // default vars
  let mbLimit = 10;
  let byteLimit = mbLimit * 1000000;
  // destructure
  console.log('all files', e.target.files)
  for (const newFileObj of e.target.files) {
    console.log('newFilenewFile', newFileObj)
    const {
      name, size: fileSize, type,
    } = newFileObj;
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
          name: newFileObj.name,
          lastModified: newFileObj.lastModified,
          size: newFileObj.size,
          type: newFileObj.type,
        },
      };
      newArr.push(result);
      setter(() => {return [...newArr]});
    };
    // process the pdf, run the callback
    reader.readAsDataURL(newFileObj);
  }
};
const removeImg = (e, image, stagedImagesSetter, imgIdToRemoveSetter) => {
  console.log('REMOVEING', typeof imgIdToRemoveSetter)
  imgIdToRemoveSetter(image.blob)
};
const initList = [{}, {}, {}, {}];

/**
 * main
 */
const MediaCreate = ({ formName }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [stagedImages, stagedImagesSetter] = useState([]);
  const [imgIdToRemove, imgIdToRemoveSetter] = useState('');
  const [previewState, previewStateSetter] = useState([]);
  const [totalSizeMB, totalSizeMBSetter] = useState([]);
  // build
  const buildImgPreview = (image, stagedImagesSetter, imgIdToRemoveSetter) => {
    const { blob } = image;
    return (
      <div className={`${classes.previewContainer}`}>
        <Avatar
          className={`${classes.previewImg}`}
          alt="Preview"
          src={blob}
          variant="rounded"
        />
        <Button className={`${classes.cancelButton}`} disabled={!blob} onClick={e => removeImg(e, image, stagedImagesSetter, imgIdToRemoveSetter)} disableRipple children={<CancelIcon />}></Button>
        
      </div>
    );
  };
  const buildList = (images, stagedImagesSetter, imgIdToRemoveSetter) => {
    console.log('IMIMIM', images.length, imgIdToRemoveSetter)
    const initLen = initList.length;
    
    const itemElemArr = [];
    console.log(Math.max(initLen, images.length))
    for (let idx = 0; idx < Math.max(initLen, images.length); idx += 1) {
      const imageObj = images[idx] || {};
      itemElemArr.push(buildImgPreview(imageObj, stagedImagesSetter, imgIdToRemoveSetter));
    }
    return itemElemArr;
  };
  // effects
  useEffect(() => {
    const newThing = buildList(stagedImages, stagedImagesSetter, imgIdToRemoveSetter);
    previewStateSetter(newThing)
    dispatch(updateFormFieldValue(formName, 'images', stagedImages));
    // TODO add the ability to add videos from links from vimeo and youtube
    // TODO change order of all content
    // TODO limit size of files, size of group
    dispatch(checkIfValidForm(formName, null));
  }, [stagedImages]);
  useEffect(() => {
    if (imgIdToRemove) {
      console.log('\n\nREMOVING IMAGE', stagedImages, imgIdToRemove)
      // remove image
      const newArr = stagedImages.filter(img => img.blob !== imgIdToRemove);
      stagedImagesSetter(newArr)
      console.log(stagedImages.length, '> ', newArr.length)
      // set img Id To Remove to blank
      imgIdToRemoveSetter('');
    }
  }, [imgIdToRemove]);

  return (
    <div className={`${classes.MediaCreate} flexcol w100`}>
      <div className={`${classes.previewList} flexrow w100`}>{previewState}</div>
      <label className={`${classes.inputLabel} flexcol w100`}>
        <input
          className={`${classes.inputButton} flexcol w100`}
          type="file"
          accept="image/png, image/jpeg"
          multiple
          onChange={e => extractImages(stagedImages, stagedImagesSetter, e)}
        />
        <Button component="div" className={`${classes.button} w100 flexcol`} fullWidth variant="outlined">Add photos</Button>
      </label>
      
    </div>
  );
};

// export
export default MediaCreate;
