// react
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CardHeader, Grid, CardMedia, Typography, Divider, Button, Avatar } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// constants
const useStyles = makeStyles({
  root: {},
  avatarContainer: {
    alignSelf: 'center',
  },
  avatar: {
    margin: `5px 1.5rem`,
    height: `10rem`,
    width: `10rem`,
  },
  card: {
    justifyContent: 'space-between',
    padding: '40px 20px',
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
    padding: `5px 0`,
    paddingRight: 70,
    lineHeight: 1.3,
  },
});

/**
 * main
 */
const AdvisorsAndInvestors = () => {
  // init hooks
  const classes = useStyles();
  // state
  const investors = useSelector(s => s.view.startup.activeStartup.investors);
  const advisors = useSelector(s => s.view.startup.activeStartup.advisors);
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
        <div className={`card ${classes.card} w100 flexrow`}>
          <div className={`${classes.avatarContainer} h100`}>
            <Avatar className={`${classes.avatar}`} alt="Entity" src={image} />
          </div>
          <div className={`${classes.cardContent} h100 flexcol f1`}>
            <Typography variant="h6" color="textPrimary">
              {name}
              <Button variant="medium" disableTouchRipple className={`${classes.linkedin}`} onClick={() => { window.location.href = linkedin }}>
                <LinkedInIcon/>
              </Button>
            </Typography>
            <Typography className={classes.title} variant="caption2" color="textPrimary">
              {title}
            </Typography>
            <Typography className={classes.textBody} variant="caption1" color="textPrimary">
              {text}
            </Typography>
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
      elemArr.push(buildCard(entity));
    }
    return elemArr;
  };

  return buildList([...investors, ...advisors]);
};

// export
export default AdvisorsAndInvestors;
