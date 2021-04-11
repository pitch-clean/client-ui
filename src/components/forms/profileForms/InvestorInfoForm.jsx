// react
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { updateFormField, updateFormValid } from '../../../redux/actions/RegisterActions';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
    '&$checked': {
      color: green[600],
    },
  },
  greenCheck: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
}));
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);
const formName = 'investmentPurpose';

// main
const InvestorInfoForm = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const itemsObj = useSelector(s => s.register.investmentPurpose.items);

  // callbacks
  const handleChange = event => {
    const newObj = { ...itemsObj };
    if (event.target.name === 'none' && event.target.checked) {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in itemsObj) {
        if (Object.hasOwnProperty.call(itemsObj, key)) {
          const item = itemsObj[key];
          if (key !== 'none') {
            item.isChecked = false;
          }
        }
      }
    }
    const itemObj = { ...itemsObj[event.target.name], isChecked: event.target.checked };
    newObj[event.target.name] = itemObj;
    dispatch(updateFormField(formName, 'items', newObj));
  };

  const checkboxArr = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in itemsObj) {
    if (Object.hasOwnProperty.call(itemsObj, key)) {
      const element = itemsObj[key];
      checkboxArr.push(
        <FormControlLabel
          control={
            key === 'none' ? (
              <Checkbox checked={element.isChecked} onChange={handleChange} name={key} />
            ) : (
              <GreenCheckbox
                disabled={itemsObj.none.isChecked}
                checked={element.isChecked}
                onChange={handleChange}
                name={key}
              />
            )
          }
          label={element.prompt}
        />,
      );
    }
  }
  const error = Object.keys(itemsObj).filter(v => itemsObj[v].isChecked).length === 0;
  if (error) {
    dispatch(updateFormValid(formName, false));
  } else {
    dispatch(updateFormValid(formName, true));
  }

  return (
    <div className={`InvestorInfoForm ${classes.root}`}>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormGroup>{checkboxArr}</FormGroup>
        <FormHelperText style={{ color: error ? `red` : 'transparent' }}>
          Please select at least one
        </FormHelperText>
      </FormControl>
    </div>
  );
};

// export
export default InvestorInfoForm;
