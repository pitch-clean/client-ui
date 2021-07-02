import _ from 'lodash';
import * as types from '../../types/CreateRSVPTypes';
import { initialState } from '../../initialStates/rsvp';

export default function CreateRSVPReducer(state = _.cloneDeep(initialState), action) {
  const newState = { ...state };
  switch (action.type) {
    case types.RSVP_UPDATE_FORM_FIELD:
      newState[action.form].fields[action.field] = action.payload;
      return newState;
    case types.RSVP_UPDATE_FORM_FIELD_VALUE:
      newState[action.form].fields[action.field].value = action.payload;
      return newState;
    case types.RSVP_UPDATE_FORM_FIELD_ERROR:
      newState[action.form].fields[action.field].error = action.payload;
      return newState;
    case types.RSVP_UPDATE_FORM_VALID:
      // change both form and the activeForm to the updated value
      newState.activeForm.isFormValid = action.isValid;
      newState.validForms[action.form] = action.isValid;
      return newState;
    case types.RSVP_UPDATE_ACTIVE_FORM:
      newState.activeForm = {
        name: action.formName,
        isFormValid: newState.validForms[action.formName],
      };
      return newState;
    case types.RSVP_CHECK_IF_VALID_FORM:
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
    case types.RSVP_CHECK_IF_ALL_VALID_FORMS:
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
    case types.RSVP_RESET_ALL_FORMS:
      return { ...initialState };
    default:
      return newState;
  }
}
