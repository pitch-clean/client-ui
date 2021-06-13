// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// constants
const useStyles = makeStyles({
  container: {
    padding: '10px 24px 12px',
  },
});

/**
 * main
 */
const RSVPDetails = () => {
  // init hooks
  const styles = useStyles();

  return(
    <div className={styles.container}>
      <h4>Details</h4>
    </div>
  );
};

// export
export default RSVPDetails;
