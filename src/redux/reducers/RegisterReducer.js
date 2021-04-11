import * as types from '../types/RegisterTypes';

const initialState = {
  loginInfo: {
    fields: {
      firstName: { value: '', error: '', isOptional: false },
      middleName: { value: '', error: '', isOptinoal: true },
      lastName: { value: '', error: '' },
      email: { value: '', error: '' },
      password: { value: '', error: '' },
      confirmPassword: { value: '', error: '' },
    },
  },
  profileType: {
    value: null,
  },
  investorPurpose: {
    fields: {
      items: {
        p1: { prompt: 'I earn > $200,000 per year', isChecked: false },
        p2: { prompt: 'I have > $1M in assets', isChecked: false },
        p3: { prompt: 'I work for an accredited investment entity', isChecked: false },
        p4: {
          prompt: 'I hold a Series 7, 65 or 82 license currently in good standing',
          isChecked: false,
        },
        none: { prompt: 'None of the above', isChecked: false },
      },
    },
  },
  investorPii: {
    fields: {
      employer: { value: '', error: '' },
      companyWebsite: { value: '', error: '' },
      linkedinUrl: { value: '', error: '' },
      address1: { value: '', error: '' },
      address2: { value: '', error: '', isOptional: true },
      country: { value: 'USA', error: '' },
      stateProvince: { value: '', error: '' },
      city: { value: '', error: '' },
      zipcode: { value: '', error: '' },
    },
  },
  validForms: {
    loginInfo: false,
    profileType: false,
    investorPurpose: false,
    investorPii: false,
  },
  activeForm: {
    name: 'loginInfo',
    isFormValid: false,
  },
  areAllFormsValid: false,
};

export default function RegisterReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case types.UPDATE_PROFILE_FORM:
      newState[action.form] = { ...newState[action.form], ...action.payload };
      return newState;
    case types.UPDATE_FORM_FIELD:
      newState[action.form].fields[action.field] = action.payload;
      return newState;
    case types.UPDATE_FORM_FIELD_VALUE:
      newState[action.form].fields[action.field].value = action.payload;
      return newState;
    case types.UPDATE_FORM_FIELD_ERROR:
      newState[action.form].fields[action.field].error = action.payload;
      return newState;
    case types.UPDATE_FORM_VALID:
      // change both form and the activeForm to the updated value
      newState.activeForm.isFormValid = action.isValid;
      newState.validForms[action.form] = action.isValid;
      return newState;
    case types.UPDATE_ACTIVE_FORM:
      newState.activeForm = {
        name: action.formName,
        isFormValid: newState.validForms[action.form],
      };
      return newState;
    case types.CHECK_IF_VALID_FORM:
      if (action.error) {
        newState.activeForm.isFormValid = false;
        newState.validForms[action.form] = false;
        return newState;
      }
      // cycle thru each field in form
      // eslint-disable-next-line no-case-declarations
      const fieldsObj = newState[action.form].fields;
      for (let idx = 0; idx < Object.keys(fieldsObj).length; idx += 1) {
        const key = Object.keys(fieldsObj)[idx];
        const element = fieldsObj[key];
        if (!element.isOptional) {
          if (element.error || !element.value) {
            newState.activeForm.isFormValid = false;
            newState.validForms[action.form] = false;
            return newState;
          }
        }
      }
      newState.activeForm.isFormValid = true;
      newState.validForms[action.form] = true;
      return newState;
    case types.CHECK_IF_ALL_VALID_FORMS:
      // loop thru each form and see if theyre all valid
      for (let idx = 0; idx < Object.keys(newState.validForms).length; idx += 1) {
        const key = Object.keys(newState.validForms)[idx];
        const elem = newState.validForms[key];
        // if any are invalid, then mark as false
        if (!elem) {
          newState.areAllFormsValid = false;
          return newState;
        }
      }
      newState.areAllFormsValid = true;
      return newState;
    default:
      return newState;
  }
}
