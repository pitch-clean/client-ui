export const updateInputField = (e, stateUpdateFxn) => {
  e.preventDefault();
  stateUpdateFxn(e.currentTarget.value);
};

export const formKeyDownHandler = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const isFormValid = null//validateForm(formData);
    if (isFormValid) {
      console.log('form is valid')
      // const res = submitRegisterForm(formData);
      // console.log('response for form submission', res)
    }
  }
};