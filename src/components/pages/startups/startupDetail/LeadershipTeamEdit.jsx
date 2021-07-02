// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button, Avatar, CardHeader } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Sidebar from '../../../elements/SideBar';
import TextFieldEdit from '../../../forms/fields/TextFieldEdit';
// constants
const useStyles = makeStyles({
  card: {
    justifyContent: 'space-between',
    padding: `0.5rem`,
  },
  header: {
    justifyContent: 'start',
  },
  avatar: {
    height: `3rem`,
    width: `3rem`,
    margin: `0 0.2rem`,
  },
  headerRight: {
    justifyContent: 'center',
    alignItems: 'start',
    padding: `0 0.3rem`,
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
  role: {
    paddingTop: 1,
    paddingBottom: 5,
  },
  textBody: {
    padding: `0.3rem 0.3rem`,
    paddingRight: 10,
    lineHeight: 1.3,
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
const updateLeadershipTeam = ({ arr, idx, field, setter }, e) => {
  const newArr = [...arr];
  if (field === 'name') {
    newArr[idx].name = e.target.value;
  } else if (field === 'role') {
    newArr[idx].role = e.target.value;
  } else if (field === 'linkedin') {
    newArr[idx].linkedin = e.target.value;
  } else if (field === 'bio') {
    newArr[idx].bio = e.target.value;
  }
  setter(newArr);
};
const addLeadershipTeamMember = (arr, setter) => {
  const newArr = [...arr, {}];
  setter(newArr);
}

/**
 * main
 */
const LeadershipTeamEdit = ({
  team,
  teamSet,
  activeProfile,
  profile,
  isEditingSet,
  isEditing,
}) => {
  // init hooks
  const classes = useStyles();
  // build
  const buildCard = (idx, entity) => {
    const {
      name,
      role,
      image,
      linkedin,
      bio,
    } = entity;
    const updateFxnInputs = {
      idx,
      arr: team,
      setter: teamSet,
    };
    return (
      <>
        <div className={`card ${classes.card} w100 flexcol`}>
          <div className={`header ${classes.header} flexrow w100`}>
            <Avatar className={`avatar ${classes.avatar}`} alt="Entity" src={image} />
            <div className={`headerRight ${classes.headerRight} flexcol f1`}>
              <TextFieldEdit value={name} updateFxn={updateLeadershipTeam} updateFxnInputs={{ field: 'name', ...updateFxnInputs}} />
              <TextFieldEdit value={linkedin} updateFxn={updateLeadershipTeam} updateFxnInputs={{ field: 'linkedin', ...updateFxnInputs}} />
              <TextFieldEdit value={role} updateFxn={updateLeadershipTeam} updateFxnInputs={{ field: 'role', ...updateFxnInputs}} />
              <TextFieldEdit value={bio} updateFxn={updateLeadershipTeam} updateFxnInputs={{ field: 'bio', ...updateFxnInputs}} />
            </div>
          </div>
        </div>
        <Divider className="w100" variant="fullWidth"/>
      </>
    )
  };
  const buildList = arr => {
    const elemArr = [];
    for (let idx = 0; idx < arr.length; idx += 1) {
      const entity = arr[idx];
      elemArr.push(buildCard(idx, entity));
    }
    return elemArr;
  };

  return (
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
  );
};

// export
export default LeadershipTeamEdit;
