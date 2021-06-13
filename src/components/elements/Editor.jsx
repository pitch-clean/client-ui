// react
import React, { useState } from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: '150px',
    overflow: 'scroll',
  },
}));
const modules = {
  toolbar: [
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    ['link'],
  ],
};
const formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

/**
 * main
 * @param {Function} onChange 
 * @returns 
 */
const TextEditor = ({ onChange }) => {
  // init hooks
  const classes = useStyles();
  // state
  const [convertedText, setConvertedText] = useState('');

  return (
    <ReactQuill
      className={`${classes.root} w100`}
      modules={modules}
      formats={formats}
      theme='snow'
      value={convertedText}
      placeholder="Write message here"
      onChange={text => {
        setConvertedText(text);
        onChange(text);
      }}
    />
  )
}

export default TextEditor;