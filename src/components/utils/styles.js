export const fixedWidth = (amt, modifier) => {
    if (!amt) {console.error('Please add amt')}
    if (!modifier) {console.error('Please add modifier')}
    return {
        width: `${amt}${modifier}`,
        minWidth: `${amt}${modifier}`,
        maxWidth: `${amt}${modifier}`
    }
};
export const fixedHeight = (amt, modifier) => {
    if (!amt) {console.error('Please add amt')}
    if (!modifier) {console.error('Please add modifier')}
    return {
        height: `${amt}${modifier}`,
        minHeight: `${amt}${modifier}`,
        maxHeight: `${amt}${modifier}`
    }
};