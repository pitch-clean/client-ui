// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Button } from '@material-ui/core';
import {
  MoreHoriz as MoreHorizIcon,
  MoreVert as MoreVertIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  AccountBalance as AccountBalanceIcon,
  Description as DescriptionIcon,
  Group as GroupIcon,
  AttachMoney as AttachMoneyIcon,
  Room as RoomIcon,
  Business as BusinessIcon,
} from '@material-ui/icons';
// components
// constants
const useStyles = makeStyles({
  root: {
    color: `black`,
    marginBottom: 20,
  },
  avatarContainer: {
    alignSelf: 'start',
  },
  avatar: {
    margin: `5px 1.5rem`,
    height: `8rem`,
    width: `8rem`,
  },
  row1: {
    justifyContent: 'start',
  },
  socials: {
    paddingLeft: `5px`,
    justifyContent: 'start',
  },
  socialButton: {
    marginLeft: 5,
    padding: 0,
    minWidth: 30,
  },
  row: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: `center`,
    padding: `5px 0`,
    '& .linkButton': {
      margin: 10,
    },
  },
  infoContainer: {
    display: 'flex',
    paddingRight: 40,
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: 0,
    '& > svg': {
      marginRight: 10,
      top: `-3px`,
    },
  },
  about: {
    paddingRight: 40,
    lineHeight: 1.5,
  },
})

/**
 * main
 */
const GeneralInfo = () => {
  // init hooks
  const classes = useStyles();
  // state
  const profile = useSelector(s => s.view.startup.activeStartup.profile);
  const images = useSelector(s => s.view.startup.activeStartup.images);
  const title = useSelector(s => s.view.startup.activeStartup.title);
  const address = useSelector(s => s.view.startup.activeStartup.location.address);
  const sector = useSelector(s => s.view.startup.activeStartup.sector);
  const social = useSelector(s => s.view.startup.activeStartup.social);
  const fundingRounds = useSelector(s => s.view.startup.activeStartup.fundingRounds);
  const website = useSelector(s => s.view.startup.activeStartup.website);
  const slogan = useSelector(s => s.view.startup.activeStartup.slogan);
  const about = useSelector(s => s.view.startup.activeStartup.content.about);
  const employeeCt = useSelector(s => s.view.startup.activeStartup.employeeCt);
  const latestFundingRound = fundingRounds[fundingRounds.length - 1];

  return true ? (
    <div className={`flexrow`}>
      <div className={`${classes.avatarContainer}`}>
        <Avatar className={`${classes.avatar}`} alt="Picture" src={images.thumbnail} children={<BusinessIcon />} />
      </div>
      <div>
        <div className={`${classes.row1} ${classes.row} flexrow`}>
          <Typography variant="h6" color="textPrimary">
            {title}
          </Typography>
          <div className={`${classes.socials} flexrow`}>
            <Button variant="medium" disableTouchRipple className={`${classes.socialButton}`} onClick={() => { window.location.href = social.linkedin }}>
              <LinkedInIcon onClick/>
            </Button>
            <Button variant="medium" disableTouchRipple className={`${classes.socialButton}`} onClick={() => { window.location.href = social.twitter }}>
              <TwitterIcon onClick/>
            </Button>
          </div>
        </div>
        <Typography className={classes.row} variant="h6" color="textSecondary">
          {slogan}
        </Typography>
        <div className={`${classes.row} ${classes.row3}`}>
          <div className={`${classes.infoContainer}`}>
            <RoomIcon />
            <Typography variant="caption2" color="textSecondary">
              {`${address.city}, ${address.provinceState}`}
            </Typography>
          </div>
          <div className={`${classes.infoContainer}`}>
            <BusinessIcon />
            <Typography variant="caption2" color="textSecondary">
              {sector}
            </Typography>
          </div>
        </div>
        <Typography className={`${classes.row} ${classes.about}`} variant="body2" color="textPrimary">
          {about}
        </Typography>
        <div className={`${classes.row} ${classes.row5}`}>
          <div className={`${classes.infoContainer}`}>
            <AccountBalanceIcon />
            <Typography variant="caption2" color="textSecondary">
              {latestFundingRound.round}
            </Typography>
          </div>
          <div className={`${classes.infoContainer}`}>
            <DescriptionIcon />
            <Typography variant="caption2" color="textSecondary">
              {latestFundingRound.type}
            </Typography>
          </div>
        </div>
        <div className={`${classes.row} ${classes.row6}`}>
          <div className={`${classes.infoContainer}`}>
            <GroupIcon />
            <Typography variant="caption2" color="textSecondary">
              {employeeCt}
            </Typography>
          </div>
          <div className={`${classes.infoContainer}`}>
            <AttachMoneyIcon />
            <Typography variant="caption2" color="textSecondary">
              ${latestFundingRound.amount} Raised
            </Typography>
          </div>
        </div>
        <div className={`linksContainer ${classes.row}`}>
          <Button className={`linkButton`} variant="contained" onClick={() => {}}>
            Contact
          </Button>
          <Button className={`linkButton`} variant="contained" onClick={() => window.location.href = website }>
            Website
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
};

// export
export default GeneralInfo;
