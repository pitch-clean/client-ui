// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import ITCell from './ITCell';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'space-between',
    borderTop: '1px solid #262826'
  },
  headerRoot: {
    background: `#262826`,
    color: 'white',
  },
}));

/**
 * main
 */
const ITRow = ({isHeader, investmentObj, columnsArr}) => {
  // init hooks
  const classes = useStyles();
  const columns = columnsArr.map(col => {
    return (
      <div className="cell">{col.title}</div>
    );
  });

  return isHeader ? (
    <div
      className={`HeaderITRow ${classes.headerRoot} ${classes.root} flexrow w100`}
    >
      {columnsArr.map(col => {
        console.log('colly', col)
        return (
          <ITCell isHeader input={col.title} />
        );
      })}
    </div>
  );
};

// export
export default ITRow;
