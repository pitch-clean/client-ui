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

export const searchKeyDownHandler = e => {
  // const filteredStr = `${e.currentTarget.value}`.replace(/\W/g, '');
  if (e.key === 'Enter') {
    e.preventDefault();
    console.log('submitting GET request for filtered info: ', e.target.value)
  }
}