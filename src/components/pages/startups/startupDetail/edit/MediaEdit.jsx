// react
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Avatar,
} from '@material-ui/core';
import _ from 'lodash';
import CancelIcon from '@material-ui/icons/Cancel';
import { Put } from '../../../../../utils/requests';
// constants
const useStyles = makeStyles(theme => ({
  MediaEdit: {
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
  updateButton: {
    backgroundColor: 'lightblue',
  },
}));

// fxns
const extractImages = (stagedImages, setter, e) => {
  const newArr = [...stagedImages];
  // default vars
  let mbLimit = 10;
  let byteLimit = mbLimit * 1000000;
  // destructure
  for (const newFileObj of e.target.files) {
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
const removeImg = (image, imgIdToRemoveSetter) => {
  imgIdToRemoveSetter(image.blob)
};
const initList = [{}, {}, {}];
// fxns
const submitUpdate = async (window, payload, activeStartupId) => {
  const url = `${window.env.api.startups}/update/${activeStartupId}`;
  const body = payload;
  try {
    const res = await Put(url, body);
    console.log('reres', res)
  } catch (err) {
    console.log('error updating media', err)
  }
};
// from https://stackoverflow.com/questions/37065663/array-of-object-deep-comparison-with-lodash
const isArrayEqual = function(x, y) {
  return _(x).xorWith(y, _.isEqual).isEmpty();
};

/**
 * main
 */
const MediaEdit = ({ isEditingSet }) => {
  // init hooks
  const classes = useStyles();
  // state
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const activeStartupId = useSelector(s => s.view.startup.activeStartup._id);
  const content = useSelector(s => s.view.startup.activeStartup.content);
  const media = useSelector(s => s.view.startup.activeStartup.content.media);
  const images = useSelector(s => s.view.startup.activeStartup.content.media.images);
  const [payload, payloadSetter] = useState(content);
  const [stagedImages, stagedImagesSetter] = useState(images);
  const [imgIdToRemove, imgIdToRemoveSetter] = useState('');
  const [previewState, previewStateSetter] = useState([]);
  const [totalSizeMB, totalSizeMBSetter] = useState([]);
  const [isDisabled, isDisabledSetter] = useState(!isArrayEqual(stagedImages, images));
  // build
  const buildImgPreview = (image, imgIdToRemoveSetter) => {
    const { blob } = image;
    return (
      <div className={`${classes.previewContainer}`}>
        <Avatar
          className={`${classes.previewImg}`}
          alt="Preview"
          src={blob}
          variant="rounded"
        />
        <Button className={`${classes.cancelButton}`} disabled={!blob} onClick={e => removeImg(image, imgIdToRemoveSetter)} disableRipple children={<CancelIcon />}></Button>
        
      </div>
    );
  };
  const buildList = (images, imgIdToRemoveSetter) => {
    const initLen = initList.length;

    const itemElemArr = [];
    for (let idx = 0; idx < Math.max(initLen, images.length); idx += 1) {
      const imageObj = images[idx] || {};
      itemElemArr.push(buildImgPreview(imageObj, imgIdToRemoveSetter));
    }
    return itemElemArr;
  };
  // build
  const buildSubmit = (isDisabled, payload) => {
    return (
      <Button className={`${classes.updateButton} w100 flexcol`} onClick={() => submitUpdate(window, payload, activeStartupId)} disabled={!isDisabled} component="div" fullWidth variant="outlined">Update</Button>
    );
  };
  // effects
  useEffect(() => {
    const newImagesArr = buildList(stagedImages, imgIdToRemoveSetter);
    previewStateSetter(newImagesArr);
    const updatedContent = { content };
    updatedContent.content.media.images = stagedImages;
    payloadSetter(updatedContent);
    isDisabledSetter(!isArrayEqual(stagedImages, images));
  }, [stagedImages]);
  useEffect(() => {
    if (imgIdToRemove) {
      // remove image
      const newArr = stagedImages.filter(img => img.blob !== imgIdToRemove);
      stagedImagesSetter(newArr)
      // set img Id To Remove to blank
      imgIdToRemoveSetter('');
    }
  }, [imgIdToRemove]);

  return (
    <div className={`${classes.MediaEdit} flexcol w100`}>
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
      {buildSubmit(isDisabled, payload)}
    </div>
  );
};

// export
export default MediaEdit;
