// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Divider, TextField, Button } from '@material-ui/core';
// constants
const useStyles = makeStyles({
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
  content: {
    padding: `20px 0`,
  },
  input: {
    paddingLeft: 20,
  },
})
const updateHighlight = (arr, idx, highlightsSet, e) => {
  let newHighlights = [...arr];
  newHighlights[idx] = e.target.value;
  highlightsSet(newHighlights);
};
const addHighlight = (arr, highlightsSet) => {
  const newHighlights = [...arr, ''];
  highlightsSet(newHighlights);
}

/**
 * main
 */
const HighlightsEdit = ({ highlights, highlightsSet }) => {
  // init hooks
  const classes = useStyles();
  // build
  const buildHightlights = highlights => {
    const highlightsElemArr = [];
    for (let idx = 0; idx < highlights.length; idx += 1) {
      const highlightStr = highlights[idx];
      console.log(idx, highlightStr)
      highlightsElemArr.push(
        <div className={`${classes.highlight} flexrow w100`}>
          <TextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="Highlight"
            size="small"
            margin="dense"
            value={highlights[idx]}
            onChange={e => updateHighlight(highlights, idx, highlightsSet, e)}
          />
        </div>
      );
    }
    highlightsElemArr.push(<Button fullWidth onClick={() => addHighlight(highlights, highlightsSet)}>+</Button>);
    return highlightsElemArr;
  };

  return (
    <div className={`HighlightsEdit ${classes.content} w100`}>
      {buildHightlights(highlights)}
    </div>
  );
};

// export
export default HighlightsEdit;
