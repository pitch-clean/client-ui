// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button, Avatar } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Sidebar from '../../../elements/SideBar';
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
  const team = useSelector(s => s.view.startup.activeStartup.team);
  // build
  const buildCard = entity => {
    const {
      profile,
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

  return <Sidebar width="wide">{buildList(team)}</Sidebar>;
};

// export
export default LeadershipTeam;
