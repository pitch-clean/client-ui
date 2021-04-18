// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Divider } from '@material-ui/core';
import { updateProfileTab } from '../../../../redux/actions/ViewActions';
// constants
const useStyles = makeStyles(() => ({
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
  sectionDivider: {
    minHeight: `1px`,
    minWidth: `75%`,
  },
  inline: {
    display: 'inline',
  },
}));

// main
const About = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateProfileTab('about'));
  }, []);
  // state
  const pii = useSelector(s => s.view.profile.viewProfile.pii);
  const education = useSelector(s => s.view.profile.viewProfile.education);
  const about = useSelector(s => s.view.profile.viewProfile.about);
  const employment = useSelector(s => s.view.profile.viewProfile.employment);
  // build
  const bioCard = (pii, about, employment) => {
    const fullName = `${pii.firstName} ${pii.lastName}`;
    const employmentTxt = `${employment[0].title} at ${employment[0].employer}`;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.container}>
          <Typography className={classes.title} variant="h5" component="h6">
            {fullName}
          </Typography>
          <Typography variant="caption" component="p" color="textSecondary">
            {employmentTxt}
          </Typography>
          <Divider className={classes.divider} component="div" />
          <Typography className={classes.body} variant="p" component="div">
            {about.profileBio}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  const experiencesCard = employmentArr => {
    const employmentList = employmentArr.map(({ employer, title, dtEnd, dtStart, img }, idx) => {
      const dtStartStr = `${new Date(dtStart).getFullYear()}`;
      const dtEndStr = `${new Date(dtEnd).getFullYear()}`;
      return (
        <React.Fragment key={`abt-emp-list${idx}`}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={img} />
            </ListItemAvatar>
            <ListItemText
              primary={employer}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {title}
                  </Typography>
                  {` | (${dtStartStr} - ${dtEndStr})`}
                </>
              }
            />
          </ListItem>
        </React.Fragment>
      );
    });
    return (
      <div className="experiences">
        <Card className={classes.card}>
          <CardContent className={classes.container}>
            <Typography className={classes.title} variant="h5" component="h6">
              Professional Experience
            </Typography>
            <Divider className={classes.divider} component="div" />
            <List>{employmentList}</List>
          </CardContent>
        </Card>
      </div>
    );
  };
  const educationCard = educationArr => {
    const educationList = educationArr.map(({ organization, degree, dtEnd, dtStart, img }, idx) => {
      const dtStartStr = `${new Date(dtStart).getFullYear()}`;
      const dtEndStr = `${new Date(dtEnd).getFullYear()}`;
      return (
        <React.Fragment key={`abt-edu-list${idx}`}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={img} />
            </ListItemAvatar>
            <ListItemText
              primary={organization}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {degree}
                  </Typography>
                  {` | (${dtStartStr} - ${dtEndStr})`}
                </>
              }
            />
          </ListItem>
        </React.Fragment>
      );
    });
    return (
      <div className="education">
        <Card className={classes.card}>
          <CardContent className={classes.container}>
            <Typography className={classes.title} variant="h5" component="h6">
              Education
            </Typography>
            <Divider className={classes.divider} component="div" />
            <List>{educationList}</List>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="About w100">
      {pii && (
        <>
          {bioCard(pii, about, employment)}
          <Divider className={classes.sectionDivider} component="div" />
          {experiencesCard(employment)}
          {educationCard(education)}
        </>
      )}
    </div>
  );
};

// export
export default About;
