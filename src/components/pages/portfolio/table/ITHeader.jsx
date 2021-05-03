// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import ITCell from './ITCell';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex-start',
  },
}));

/**
 * main
 */
const ITHeader = ({columnsArr}) => {
  // init hooks
  const classes = useStyles();
  console.log('ITHeaderITHeader', columnsArr)
  // custom cell
  const columns = columnsArr.map(col => {
    return (
      <div className="cell">{col.title}</div>
    );
  });
  // const cell = (title, ) => {return <div>{columnsArr.title}</div>};

  return (
    <div
      className={`ITHeader ${classes.root} flexrow`}
    >
      {columns}
    </div>
  );
};

// export
export default ITHeader;
