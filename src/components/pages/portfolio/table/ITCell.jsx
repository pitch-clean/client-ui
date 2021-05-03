// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex-end',
    padding: `15px 40px`,
    height: 50,
    maxHeight: 50,
    backgroundColor: 'whitesmoke',
    borderTop: '1px solid #262826',
    color: `black`,
    fontSize: '1.5rem',
  },
  headerRoot: {
    backgroundColor: '#262826',
    color: 'whitesmoke',
    justifyContent: 'center',
    justifySelf: 'start',
  },
  firstCol: {

  },
  lastCol: {

  },
}));

/**
 * main
 */
const ITCell = ({isHeader, input, isFirstCol, isLastCol}) => {
  // init hooks
  const classes = useStyles();

  return (
    <div
      className={`HeaderITCell ${classes.root} ${isHeader && classes.headerRoot} ${isFirstCol && classes.firstCol} ${isLastCol && classes.lastCol} flexrow w100`}
    >
      {input}
    </div>
  );
};

// export
export default ITCell;
