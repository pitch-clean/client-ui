export const mouseDownFocusBlur = (e, parentRef, childRef) => {
  e.preventDefault();
  if (!childRef.current.style.display || childRef.current.style.display === 'none') {
    parentRef.current.focus();
  } else if (childRef.current.style.display === "flex") {
    parentRef.current.blur();
  }
};

export const showHideDropdown = (dropDownRef, isFocused) => {
  dropDownRef.current.style.display = isFocused ? `flex` : `none`;
};
