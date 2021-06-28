// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Divider,
  Typography as TG,
} from '@material-ui/core';
// components
import CardHeaderProfile from '../../../elements/CardHeaderProfile';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  mCtrls: {
    justifyContent: 'start',
  },
  AddParticipant: {
    justifyContent: 'start',
  },
  APTitle: {
    justifyContent: 'start',
  },
  APTitleText: {
    padding: 5,
  },
  plusSign: {
    marginBottom: 3,
  },
  participantGroup: {
    justifyContent: 'start',
  },
}));
// fxns
const clickOpenAddMember = isOpenSet => () => isOpenSet(true);

/**
 * data + display component
 */
 const MemberCtrls = ({ isOpenSet }) => {
  // init hooks
  const classes = useStyles();
  // state
  const participants = useSelector(s => s.view.messages.activeConversationObj.participants) || [];
  // build list
  const memberElemArr = [];
  for (let idx = 0; idx < participants.length; idx += 1) {
    const {
      alias,
      pii: {
        firstName,
        lastName,
      },
      active: {
        position,
        organization: {
          pii: {
            name: orgName,
          },
        },
      },
      images: {
        profile: { thumbnail },
      },
    } = participants[idx];
    const fullName = `${firstName} ${lastName}`;
    const subheader = `${position} at ${orgName}`;
    memberElemArr.push(<CardHeaderProfile type="sidebar" thumbnail={thumbnail} alias={alias} title={fullName} subheader={subheader} />)
  }
  return (
    <div className={`MemberCtrls ${classes.mCtrls} flexcol w100`}>
      <Button
        className={`AddParticipant ${classes.AddParticipant} flexcol w100`}
        onClick={clickOpenAddMember(isOpenSet)}
        fullWidth
      >
        <div className={`${classes.APTitle} flexrow w100`}>
          <TG className={`${classes.APTitleText} ${classes.plusSign} flexcol h100`}>+</TG>
          <TG className={`${classes.APTitleText} flexcol h100`}>Add/Remove Members</TG>
        </div>
      </Button>
      <Divider variant="fullWidth" />
      <div className={`participantGroup ${classes.participantGroup} flexcol w100`}>
        {memberElemArr}
      </div>
    </div>
  );
};

// export
export default MemberCtrls;
