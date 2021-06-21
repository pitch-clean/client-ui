// react
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CardHeader, Typography, Divider, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { blue } from '@material-ui/core/colors';
// constants
const useStyles = makeStyles({
  root: {
    color: `black`,
    marginBottom: 20,
  },
  bar: {
    justifyContent: 'space-between',
  },
  buttonActive: {
    color: `blue`,
  },
  buttonInactive: {
    color: `black`,
  },
});

/**
 * main
 */
const Factory = ({ componentName, title, children }) => {
  // init hooks
  const classes = useStyles();
  // state
  const profile = useSelector(s => s.view.startup.activeStartup.profile);
  const activeProfile = useSelector(s => s.auth.activeProfile) || {};
  const [isEditing, isEditingSet] = useState(false);
  // console.log('here', )

  return (
    <Paper className={`${componentName} ${classes.root} w100 flexcol`} elevation={0}>
      <div className={`${classes.bar} flexrow w100`}>
        <CardHeader
          className={`${classes.header} f1`}
          title={title}
        />
        <CardHeader
          className={`${classes.header}`}
          title={profile === activeProfile._id && <Button className={isEditing ? classes.buttonActive : classes.buttonInactive} disableRipple size="small" onClick={() => isEditingSet(!isEditing)}><SettingsIcon /></Button>}
        />
      </div>
      <Divider className="w100" variant="fullWidth"/>
      {React.cloneElement(children, { isEditing })}
    </Paper>
  );
};

// export
export default Factory;
