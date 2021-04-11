// react
import React from 'react';
// utils
import Joi from 'joi';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../fields/TextField';
import SelectField from '../fields/SelectField';
import { unitedStates } from '../fields/statesProvinces';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 600,
      display: 'flex',
    },
  },
}));
const formName = 'investorPii';

/**
 * This allows you to enter
 * dtRequest is appended
 */
const InvestorPiiForm = () => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`${classes.root} InvestorPiiForm flexcol w100`}>
      <TextField
        autofocus
        formName={formName}
        fieldName="employer"
        label="Employer"
        validator={Joi.string()
          .regex(/^[ a-zA-Z'-]+$/)
          .max(128)}
      />
      <TextField
        formName={formName}
        fieldName="companyWebsite"
        label="Company Website"
        validator={Joi.string().uri().max(512)}
      />
      <TextField
        formName={formName}
        fieldName="linkedinUrl"
        label="Personal LinkedIn URL"
        validator={Joi.string().uri().max(512)}
      />
      <div className="addressGroup">
        <TextField
          formName={formName}
          fieldName="address1"
          label="Address"
          validator={Joi.string().max(512)}
        />
        <TextField
          formName={formName}
          fieldName="address2"
          label="Address (cont.)"
          validator={Joi.string().allow('').max(512)}
        />
        <div>
          <SelectField
            formName={formName}
            fieldName="country"
            label="Country"
            valuesArr={[{ code: 'USA', name: 'United States' }]}
          />
          <SelectField
            formName={formName}
            fieldName="stateProvince"
            label="State/Province"
            valuesArr={unitedStates}
          />
          <TextField
            formName={formName}
            fieldName="city"
            label="City"
            validator={Joi.string()
              .regex(/^[ a-zA-Z'-]+$/)
              .max(128)}
          />
          <TextField
            formName={formName}
            fieldName="zipcode"
            label="Zip Code"
            validator={Joi.string()
              .regex(/^[0-9-]+$/)
              .min(5)
              .max(16)}
          />
        </div>
      </div>
    </div>
  );
};

// export
export default InvestorPiiForm;
