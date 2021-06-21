// react
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button, Avatar, CardHeader } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// components
import Sidebar from '../../../elements/SideBar';
import LeadershipTeamEdit from './LeadershipTeamEdit';
// constants
const useStyles = makeStyles({
  card: {
    justifyContent: 'space-between',
    padding: `0.8rem`,
    paddingLeft: `1.2rem`,
  },
  header: {
    justifyContent: 'start',
  },
  avatar: {
    height: `3.5rem`,
    width: `3.5rem`,
    margin: `0 0.2rem`,
  },
  headerRight: {
    justifyContent: 'center',
    alignItems: 'start',
    padding: `0 0.3rem`,
    paddingTop: '0.5rem',
  },
  cardContent: {
    alignItems: 'start',
    justifyContent: 'start',
  },
  linkedin: {
    marginLeft: 5,
    padding: 0,
    marginBottom: '5px',
    minWidth: 30,
  },
  title: {
    paddingTop: 1,
    paddingBottom: 5,
  },
  textBody: {
    padding: `0.3rem 0.3rem`,
    paddingRight: 10,
    lineHeight: 1.3,
  },
});

/**
 * main
 */
const LeadershipTeam = () => {
  // init hooks
  const classes = useStyles();
  // state
  const profile = useSelector(s => s.view.startup.activeStartup.profile);
  const activeProfile = useSelector(s => s.auth.activeProfile) || {};
  const [isEditing, isEditingSet] = useState(false);
  const team_ = useSelector(s => s.view.startup.activeStartup.team);
  const [team, teamSet] = useState(team_);
  // build
  const buildCard = entity => {
    const {
      name,
      title,
      image,
      linkedin,
      text,
    } = entity;

    return (
      <>
        <div className={`card ${classes.card} w100 flexcol`}>
          <div className={`header ${classes.header} flexrow w100`}>
            <Avatar className={`avatar ${classes.avatar}`} alt="Entity" src={image} />
            <div className={`headerRight ${classes.headerRight} flexcol f1`}>
              <Typography variant="h6" color="textPrimary">
                {name}
                <Button variant="medium" disableTouchRipple className={`${classes.linkedin}`} onClick={() => { window.location.href = linkedin }}>
                  <LinkedInIcon/>
                </Button>
              </Typography>
              <Typography className={classes.title} variant="subtitle2" color="textPrimary">
              {title}
            </Typography>
            </div>
          </div>
          <Typography className={classes.textBody} variant="caption" color="textPrimary">
            {text}
          </Typography>
        </div>
        <Divider className="w100" variant="fullWidth"/>
      </>
    )
  };
  const buildList = arr => {
    const elemArr = [];
    for (let idx = 0; idx < arr.length; idx += 1) {
      const entity = arr[idx];
      elemArr.push(buildCard(entity));
    }
    return elemArr;
  };

  return !isEditing ? (
    <Sidebar width="wide">
      <div className={`${classes.bar} flexrow w100`}>
        <CardHeader
          className={`${classes.header} f1`}
          title='Leadership Team'
        />
        <CardHeader
          className={`${classes.header}`}
          title={profile === activeProfile._id && <Button className={isEditing ? classes.buttonActive : classes.buttonInactive} disableRipple size="small" onClick={() => isEditingSet(!isEditing)}><SettingsIcon /></Button>}
        />
      </div>
      <Divider className="w100" variant="fullWidth"/>
      {buildList(team)}
    </Sidebar>
  ) : <LeadershipTeamEdit activeProfile={activeProfile} profile={profile} isEditingSet={isEditingSet} isEditing={isEditing} team={team} teamSet={teamSet} />;
};

// export
export default LeadershipTeam;
