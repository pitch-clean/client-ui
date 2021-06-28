// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  Paper,
} from '@material-ui/core';
// components
import StartupCardHeader from './StartupCardHeader';
import StartupImage from './StartupImage';
import StartupCardPIC from './StartupCardPIC';
import StartupCardBottomBar from './StartupCardBottomBar';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignSelf: 'stretch',
    backgroundColor: `#eee`,
    minWidth: `200px`,
    width: `350px`,
    maxWidth: `29%`,
    margin: `15px 10px`,
    backgroundColor: 'whitesmoke',
    boxShadow: `
      0px 2px 1px -1px rgba(0,0,0,0.03),
      0px 1px 1px 0px rgba(0,0,0,0.02),
      0px 1px 3px 0px rgba(0,0,0,0.01)
    `,
    borderRadius: '5px',
  },
  lowerListItem: {
    maxWidth: `100%`,
    flex: '1 1',
  },
}));

/**
 * main
 */
const StartupCard = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  // state
  const cardBody = useSelector(s => s.view.startup.startupsArr[idx].content.cardBody);

  return (
    <Paper className={`StartupCard ${classes.root} flexcol`} key={`startupcard--${idx}`} elevation={0}>
      <StartupImage idx={idx} />
      <StartupCardHeader idx={idx} />
      <ListItem className={`${classes.lowerListItem} flexcol`}>
        {cardBody}
      </ListItem>
      <StartupCardBottomBar idx={idx} />
    </Paper>
  );
};

// export
export default StartupCard;
