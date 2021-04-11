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
const InvestorPiiForm = ({ reducerName }) => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`${classes.root} InvestorPiiForm flexcol w100`}>
      <TextField
        fieldName="employer"
        label="Employer"
        validator={Joi.string()
          .regex(/^[ a-zA-Z'-]+$/)
          .max(128)}
        reducerName={reducerName}
        formName={formName}
        autofocus
      />
      <TextField
        fieldName="companyWebsite"
        label="Company Website"
        validator={Joi.string().uri().max(512)}
        reducerName={reducerName}
        formName={formName}
      />
      <TextField
        fieldName="linkedinUrl"
        label="Personal LinkedIn URL"
        validator={Joi.string().uri().max(512)}
        reducerName={reducerName}
        formName={formName}
      />
      <div className="addressGroup">
        <TextField
          fieldName="address1"
          label="Address"
          validator={Joi.string().max(512)}
          reducerName={reducerName}
          formName={formName}
        />
        <TextField
          fieldName="address2"
          label="Address (cont.)"
          validator={Joi.string().allow('').max(512)}
          reducerName={reducerName}
          formName={formName}
        />
        <div>
          <SelectField
            fieldName="country"
            label="Country"
            valuesArr={[{ code: 'USA', name: 'United States' }]}
            formName={formName}
          />
          <SelectField
            fieldName="stateProvince"
            label="State/Province"
            valuesArr={unitedStates}
            formName={formName}
          />
          <TextField
            fieldName="city"
            label="City"
            validator={Joi.string()
              .regex(/^[ a-zA-Z'-]+$/)
              .max(128)}
            formName={formName}
          />
          <TextField
            fieldName="zipcode"
            label="Zip Code"
            validator={Joi.string()
              .regex(/^[0-9-]+$/)
              .min(5)
              .max(16)}
            formName={formName}
          />
        </div>
      </div>
    </div>
  );
};

// export
export default InvestorPiiForm;
