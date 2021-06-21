// react
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CardHeader, Typography, Divider } from '@material-ui/core';
import HighlightsEdit from './HighlightsEdit';
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
})

/**
 * main
 */
const Highlights = ({ isEditing }) => {
  // init hooks
  const classes = useStyles();
  // state
  const highlights_ = useSelector(s => s.view.startup.activeStartup.content.highlights);
  const [highlights, highlightsSet] = useState(highlights_);
  // build
  const buildHightlights = highlights => {
    const highlightsElemArr = [];
    for (let idx = 0; idx < highlights.length; idx += 1) {
      const highlightStr = highlights[idx];
      highlightsElemArr.push(
        <div className={`${classes.highlight} flexrow w100`}>
          <div className={classes.space}>-</div>
          <Typography
            className={classes.text}
            variant="caption2"
            color="textPrimary"
          >
            {highlightStr}
          </Typography>
        </div>
      );
    }
    return highlightsElemArr;
  };
  console.log('isediting', isEditing)
  return !isEditing ? (
    <div className={classes.content}>
      {buildHightlights(highlights)}
    </div>
  ) : (
    <HighlightsEdit highlights={highlights} highlightsSet={highlightsSet}/>
  );
};

// export
export default Highlights;
