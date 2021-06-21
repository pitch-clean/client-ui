// react
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Avatar,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  AccountBalance as AccountBalanceIcon,
  Description as DescriptionIcon,
  Group as GroupIcon,
  AttachMoney as AttachMoneyIcon,
  Room as RoomIcon,
  Business as BusinessIcon,
} from '@material-ui/icons';
// constants
const useStyles = makeStyles(theme => ({
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
  slogan: {
    paddingRight: 10,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))
const updateFormField = (field, stateObj, stateObjSet) => e => {
  const newStateObj = { ...stateObj };
  if (field === 'city') {
    newStateObj.location.address.city = e.currentTarget.value;
  } else if (field === 'provinceState') {
    newStateObj.location.address.provinceState = e.currentTarget.value;
  } else if (field === 'about') {
    newStateObj.content.about = e.currentTarget.value;
  } else if (field === 'latestFundingRound.type') {
    newStateObj.fundingRounds[newStateObj.fundingRounds.length - 1].type = e.target.value;
  } else if (field === 'latestFundingRound.amount') {
    newStateObj.fundingRounds[newStateObj.fundingRounds.length - 1].amount = e.target.value;
  } else if (field === 'linkedin') {
    newStateObj.social.linkedin = e.target.value;
  } else if (field === 'twitter') {
    newStateObj.social.twitter = e.target.value;
  } else {
    newStateObj[field] = e.target.value;
  }
  stateObjSet(newStateObj);
};

/**
 * main
 */
const GeneralInfoEdit = ({ activeStartup, activeStartupSet }) => {
  // init hooks
  const classes = useStyles();
  // state
  const {
    images,
    fundingRounds,
    website,
  } = activeStartup;
  const latestFundingRound = fundingRounds[fundingRounds.length - 1];
  const unsafeForm = activeStartup;
  const unsafeFormSet = activeStartupSet;
  // const [unsafeForm, unsafeFormSet] = useState(activeStartup);
  console.log(activeStartup)
  return (
    <div className={`GeneralInfoEdit flexrow`}>
      <div className={`${classes.avatarContainer}`}>
        <Avatar
          className={`${classes.avatar}`}
          alt="Picture"
          src={images.thumbnail}
          children={<BusinessIcon />}
        />
      </div>
      <div>
        <TextField
          className={`${classes.slogan} f1`}
          variant="outlined"
          placeholder="Title"
          size="small"
          margin="dense"
          value={unsafeForm.title}
          onChange={updateFormField('title', unsafeForm, unsafeFormSet)}
        />
        <TextField
          className={`${classes.slogan} f1 w100`}
          variant="outlined"
          placeholder="Slogan"
          size="small"
          margin="dense"
          value={unsafeForm.slogan}
          onChange={updateFormField('slogan', unsafeForm, unsafeFormSet)}
        />
        <TextField
          className={`${classes.slogan} f1 w100`}
          variant="outlined"
          placeholder="Linkedin"
          size="small"
          margin="dense"
          value={unsafeForm.social.linkedin}
          onChange={updateFormField('linkedin', unsafeForm, unsafeFormSet)}
        />
        <TextField
          className={`${classes.slogan} f1 w100`}
          variant="outlined"
          placeholder="Twitter"
          size="small"
          margin="dense"
          value={unsafeForm.social.twitter}
          onChange={updateFormField('twitter', unsafeForm, unsafeFormSet)}
        />
        <TextField
          className={`${classes.slogan} f1 w100`}
          variant="outlined"
          placeholder="Website"
          size="small"
          margin="dense"
          value={unsafeForm.website}
          onChange={updateFormField('website', unsafeForm, unsafeFormSet)}
        />
        <div className={`${classes.row} ${classes.row3}`}>
          <div className={`${classes.infoContainer}`}>
            <RoomIcon />
            <TextField
              className={`${classes.address}`}
              variant="outlined"
              placeholder="Slogan"
              size="small"
              margin="dense"
              value={unsafeForm.location.address.city}
              onChange={updateFormField('city', unsafeForm, unsafeFormSet)}
            />
            <TextField
              className={`${classes.address}`}
              variant="outlined"
              placeholder="Province/State"
              size="small"
              margin="dense"
              value={unsafeForm.location.address.provinceState}
              onChange={updateFormField('provinceState', unsafeForm, unsafeFormSet)}
            />
          </div>
          <div className={`${classes.infoContainer}`}>
            <BusinessIcon />
            <TextField
              className={`${classes.sector}`}
              variant="outlined"
              placeholder="Sector"
              size="small"
              margin="dense"
              value={unsafeForm.sector}
              onChange={updateFormField('sector', unsafeForm, unsafeFormSet)}
            />
          </div>
        </div>
        <TextField
          className={`${classes.about} w100`}
          multiline
          variant="outlined"
          placeholder="About"
          size="small"
          margin="dense"
          value={unsafeForm.content.about}
          onChange={updateFormField('about', unsafeForm, unsafeFormSet)}
        />
        <div className={`${classes.row} ${classes.row5}`}>
          <div className={`${classes.infoContainer}`}>
            <AccountBalanceIcon />
            <Typography variant="caption2" color="textSecondary">
              {latestFundingRound.round}
            </Typography>
          </div>
          <div className={`${classes.infoContainer}`}>
            <DescriptionIcon />
            <FormControl className={classes.formControl}>
              <Select
                labelId="select-label"
                id="select"
                value={unsafeForm.fundingRounds[fundingRounds.length - 1].type}
                onChange={updateFormField('latestFundingRound.type', unsafeForm, unsafeFormSet)}
              >
                <MenuItem value={'Convertable Notes'}>Convertable Notes</MenuItem>
                <MenuItem value={'Category 2'}>Category 2</MenuItem>
                <MenuItem value={'Category 3'}>Category 3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={`${classes.row} ${classes.row6}`}>
          <div className={`${classes.infoContainer}`}>
            <GroupIcon />
            <FormControl className={classes.formControl}>
              <Select
                labelId="select-label-employeeCt"
                id="select-employeeCt"
                value={unsafeForm.employeeCt}
                onChange={updateFormField('employeeCt', unsafeForm, unsafeFormSet)}
              >
                <MenuItem value={'1-10 employees'}>1-10 employees</MenuItem>
                <MenuItem value={'10-50 employees'}>10-50 employees</MenuItem>
                <MenuItem value={'50-200 employees'}>50-200 employees</MenuItem>
                <MenuItem value={'200-1000 employees'}>200-1000 employees</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={`${classes.infoContainer}`}>
            <AttachMoneyIcon />
            <TextField
              className={`${classes.about} w100`}
              multiline
              variant="outlined"
              placeholder="About"
              size="small"
              margin="dense"
              value={unsafeForm.fundingRounds[fundingRounds.length - 1].amount}
              onChange={updateFormField('latestFundingRound.amount', unsafeForm, unsafeFormSet)}
            />
          </div>
        </div>
        <div className={`linksContainer ${classes.row}`}>
          <Button
            className={`linkButton`}
            variant="contained"
            onClick={() => {}}
          >
            Contact
          </Button>
          <Button className={`linkButton`} variant="contained" onClick={() => window.location.href = website }>
            Website
          </Button>
        </div>
      </div>
    </div>
  );
};

// export
export default GeneralInfoEdit;
