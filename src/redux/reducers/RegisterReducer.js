import * as types from '../types/RegisterTypes';

const initialState = {
  loginInfo: {
    firstName: { value: '', error: '', isOptional: false },
    middleName: { value: '', error: '', isOptinoal: true },
    lastName: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' },
    confirmPassword: { value: '', error: '' },
    isFormValid: false,
  },
  profileType: {
    value: null,
    isFormValid: false,
  },
  investmentPurpose: {
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
    isFormValid: false,
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
      newState[action.form][action.field] = action.payload;
      return newState;
    case types.UPDATE_FORM_FIELD_VALUE:
      newState[action.form][action.field].value = action.payload;
      return newState;
    case types.UPDATE_FORM_FIELD_ERROR:
      newState[action.form][action.field].error = action.payload;
      return newState;
    case types.UPDATE_FORM_VALID:
      // change both form and the activeForm to the updated value
      newState[action.form].isFormValid = action.isValid;
      newState.activeForm.isFormValid = action.isValid;
      // loop thru each form and see if theyre all valid
      for (let idx = 0; idx < Object.keys(newState).length; idx += 1) {
        const key = Object.keys(newState)[idx];
        if (key !== 'areAllFormsValid') {
          const elem = newState[key];
          // if any are invalid, then mark as false
          if (!elem.isFormValid) {
            newState.areAllFormsValid = false;
            return newState;
          }
        }
      }
      newState.areAllFormsValid = true;
      return newState;
    case types.CHECK_IF_VALID_FORM:
      if (action.error) {
        newState[action.form].isFormValid = false;
        newState.activeForm.isFormValid = false;
        return newState;
      }
      // cycle thru each field in form
      for (let idx = 0; idx < Object.keys(newState[action.form]).length; idx += 1) {
        const key = Object.keys(newState[action.form])[idx];
        const element = newState[action.form][key];
        if (!element.isOptional && key !== 'isFormValid') {
          if (element.error || !element.value) {
            newState[action.form].isFormValid = false;
            newState.activeForm.isFormValid = false;
            return newState;
          }
        }
      }
      newState[action.form].isFormValid = true;
      newState.activeForm.isFormValid = true;
      return newState;
    case types.UPDATE_ACTIVE_FORM:
      console.log('state', newState)
      console.log('action', action)
      newState.activeForm = {
        name: action.formName,
        isFormValid: newState[action.formName].isFormValid,
      };
      console.log(newState.activeForm)
      return newState;
    default:
      return newState;
  }
}
