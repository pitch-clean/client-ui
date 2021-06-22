// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Typography as TG } from '@material-ui/core';
// components
import Sidebar from '../../elements/SideBar';
import CardHeaderProfile from '../../elements/CardHeaderProfile';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    height: `100%`,
    width: `100%`,
  },
  MemberCtrls: {
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

const MemberCtrls = () => {
  // init hooks
  const classes = useStyles();
  // state
  const activeConversationObj = useSelector(s => s.view.messages.activeConversationObj) || {};
  const participants = activeConversationObj.participants || [];
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
        profile: { thumbnail }
      }
    } = participants[idx];
    const fullName = `${firstName} ${lastName}`;
    const subheader = `${position} at ${orgName}`;
    memberElemArr.push(<CardHeaderProfile type="comments" thumbnail={thumbnail} alias={alias} title={fullName} subheader={subheader} />)
  }
  return (
    <div className={`MemberCtrls ${classes.MemberCtrls} flexcol w100`}>
      <Button className={`AddParticipant ${classes.AddParticipant} flexcol w100`} fullWidth>
        <div className={`${classes.APTitle} flexrow w100`}>
          <TG className={`${classes.APTitleText} ${classes.plusSign} flexcol h100`}>+</TG>
          <TG className={`${classes.APTitleText} flexcol h100`}>Add Member</TG>
        </div>
      </Button>
      <Divider variant="fullWidth" />
      <div className={`participantGroup ${classes.participantGroup} flexcol w100`}>
        {memberElemArr}
      </div>
    </div>
  );
};

/**
 * main
 */
const MsgConvCtrls = () => {
  // init hooks
  const classes = useStyles();
  // state
  // const conversationsCt = useSelector(s => s.view.messages.conversationsArr.length);

  return (
    <Sidebar h100 elevation={1}>
      <MemberCtrls />
    </Sidebar>
  );
};

export default MsgConvCtrls;