// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import { updateProfileTab } from '../../../../redux/actions/ViewActions';
// constants
const useStyles = makeStyles(() => ({
  divider: {
    minHeight: `1px`,
    minWidth: `75%`,
    marginBottom: `5px`,
  },
  inline: {
    display: 'inline',
  },
}));
const envCompanyPath = 'company';
const envOfferingPath = 'offering';

// main
const Investments = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const investments = useSelector(s => s.view.profile.viewProfile.investments);
  // effects
  useEffect(() => {
    dispatch(updateProfileTab('investments'));
  }, []);
  if (!investments) {
    return <div />;
  }

  // build
  const investmentList = investments
    ? investments.map(({ offering, img, isPublic }, idx) => {
        const { sponsor, title, slug: offeringSlug, location } = offering;
        const {
          address: { city, stateProvince },
        } = location;
        const { name: sponsorName, slug: sponsorSlug } = sponsor;

        return (
          <React.Fragment key={`inv-${idx}`}>
            <ListItem>
              <ListItemAvatar style={{ filter: isPublic ? `none` : `blur(5px)` }}>
                <Avatar alt="Profile Picture" src={img} />
              </ListItemAvatar>
              <ListItemText
                style={{ filter: isPublic ? `none` : `blur(5px)` }}
                primary={
                  <Link
                    to={`/${envOfferingPath}/${offeringSlug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {title}
                  </Link>
                }
                secondary={
                  <>
                    <Link
                      to={`/${envCompanyPath}/${sponsorSlug}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                        blur
                      >
                        {sponsorName}
                      </Typography>
                    </Link>
                    {`  (${city}, ${stateProvince})`}
                  </>
                }
              />
              {!isPublic && <LockOutlinedIcon />}
            </ListItem>
            <Divider className={classes.divider} component="div" />
          </React.Fragment>
        );
      })
    : [];

  return (
    <div className="Investments w100">
      <Paper square className={classes.paper}>
        <List className={classes.list}>{investmentList}</List>
      </Paper>
    </div>
  );
};

// export
export default Investments;
