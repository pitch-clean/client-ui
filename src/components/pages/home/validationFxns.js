const validateType = (inputValue, targetType) => {
  if (typeof inputValue !== targetType) {

  }
};
const validateLength = (inputStr, targetLength) => {
  if (inputStr.length < targetLength) {
    throw new Error(`Field needs to be at least 8 characters. Currently ${inputStr.length}`)
  } else {
    return null;
  }
};
const containsCapitolLetter = () => {};
const containsNumber = () => {};
const onlyContainsAlphanumeric = (inputStr) => {
  const badCharacterList = [];
  for (let idx = 0; idx < inputStr.length; idx++) {
    const currentInputChar = inputStr[idx];
    if (!'1234567890_qwertyuiopasdfghjklzxcvbnm'.contains(currentInputChar.toLowerCase())) {
      badCharacterList.push(currentInputChar);
    }
  }
  
  if (badCharacterList.length !== 0) {
    throw new Error(`Field cannot contain characters: ${badCharacterList.join(', ')}`);
  }
};
const containsNonAlphabet = () => {};
const containsNoSpecialChar = () => {};
export const validateUsername = (inputStr) => {
  validateLength(inputStr, 3);
  onlyContainsAlphanumeric(inputStr)
}