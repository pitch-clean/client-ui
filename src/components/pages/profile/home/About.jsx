// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import { updateProfileTab } from '../../../../redux/actions/ViewActions';
// constants
const useStyles = makeStyles(() => ({
  root: {},
  card: {
    justifyContent: 'start',
    alignItems: 'start',
    padding: `0 10px`,
    paddingTop: `10px`,
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start',
    padding: `10px 5%`,
  },
  title: {
    justifyContent: 'flex-start',
  },
  body: {
    alignItems: 'flex-start',
    justifyItems: 'flex-start',
    textAlign: 'start',
  },
  divider: {
    minHeight: `1px`,
    minWidth: `75%`,
    marginBottom: `5px`,
  },
  inline: {
    display: 'inline',
  },
}));

// main
const About = () => {
  // init hooks
  const classes = useStyles();
  // state
  const pii = useSelector(s => s.view.profile.viewProfile.pii);
  const profileBio = useSelector(s => s.view.profile.viewProfile.profileBio);
  const active = useSelector(s => s.view.profile.viewProfile.active);
  const fullName = `${pii.firstName} ${pii.lastName}`;
  const employmentTxt = `${active.position} at ${active.organization.pii.name}`;

  return (
    <div className={`About ${classes.root} w100`}>
      {/* {pii && <>{bioCard(pii, about, active)}</>} */}
      <Card className={classes.card}>
        <CardContent className={classes.container}>
          <Typography className={classes.title} variant="h5" component="h6">
            {fullName}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {employmentTxt}
          </Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.body} variant="p">
            {profileBio}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

// export
export default About;
