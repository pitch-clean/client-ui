// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { updateProfileForm, updateFormValid } from '../../../redux/actions/RegisterActions';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: `100%`,
  },
}));
const formName = 'profileType';

/**
 * Allows you to check if sponsor or investor
 */
const ProfileTypeForm = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const profileType = useSelector(s => s.register.profileType);
  // callbacks
  const handleChange = e => {
    dispatch(updateProfileForm('profileType', { value: e.target.value }));
    dispatch(updateFormValid(formName, true));
  };

  return (
    <div className="ProfileTypeForm">
      <FormControl component="fieldset" className={classes.root}>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={profileType.value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="investor"
            control={<Radio />}
            label="This is an individual investor account"
          />
          <FormControlLabel
            value="sponsor"
            control={<Radio />}
            label="This is an account for a company or entity"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

// export
export default ProfileTypeForm;
