// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Button
} from '@material-ui/core';
// components
import CardHeaderProfile from '../../../elements/CardHeaderProfile';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: 500,
    overflow: 'auto',
  },
  selectedMember: {},
  memberContainer: {},
  delete: {
    backgroundColor: '#e5cccc',
  },
}));
// fxns
const removeMember = (memberObj, selectedProfiles, selectedProfilesSet) => e => {
  const newSelectedProfiles = selectedProfiles.filter(({ _id: profileId }) => {
    return profileId !== memberObj._id;
  });
  selectedProfilesSet(newSelectedProfiles);
};

/**
 * main
 */
const SelectedMember = ({ memberObj, selectedProfiles, selectedProfilesSet }) => {
  // init hooks
  const classes = useStyles();
  const {
    pii: { firstName, lastName },
    images: { profile: { thumbnail }},
  } = memberObj;
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className={`${classes.memberContainer} flexrow w100`}>
      <CardHeaderProfile type="modal" thumbnail={thumbnail} title={fullName} />
      <Button
        disableElevation
        variant="contained"
        className={`${classes.delete}`}
        onClick={removeMember(memberObj, selectedProfiles, selectedProfilesSet)}
      >
        Remove
      </Button>
    </div>
  );
};

/**
 * main
 */
const ModalSelectedMembers = ({ selectedProfiles, selectedProfilesSet }) => {
  // init hooks
  const classes = useStyles();
  // build
  const selectedMembersElemArr = [];
  for (let idx = 0; idx < selectedProfiles.length; idx += 1) {
    const memberObj = selectedProfiles[idx];
    selectedMembersElemArr.push(<SelectedMember memberObj={memberObj} selectedProfiles={selectedProfiles} selectedProfilesSet={selectedProfilesSet} />);
  }

  return (
    <div className={`ModalSelectedMembers ${classes.root} flexcol f1`}>
      {selectedMembersElemArr}
    </div>
  );
};

// export
export default ModalSelectedMembers;
