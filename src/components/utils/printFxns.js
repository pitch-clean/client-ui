export const calculateTermLength = (timeDeltaMs) => {
  const totalTermDays = Math.floor(timeDeltaMs / (1000*60*60*24))
  const termYears = Math.floor(totalTermDays / 365.25);
  const termDays = Math.round(totalTermDays - (termYears * 365.25));
  const yearsPlural = termYears > 1 ? 'years' : 'year';
  const daysPlural = termDays > 1 ? 'days' : 'day';
  const termYearsStr = totalTermDays >= 365.25 ? `${termYears} ${yearsPlural}, ${termDays} ${daysPlural}` : `${termDays} ${daysPlural}`;
  return termYearsStr;
};

export const calcOfferSize = offerSize => {
  if (offerSize >= 1000000) {
    return `$${Math.round(offerSize/10000)/100}M`;
  } else if (offerSize >= 1000) {
    return `$${Math.round(offerSize/10)/100}K`;
  }
  return offerSize;
};

export const formatPctStr = (number) => {
  const toInteger = Math.round(number * 10000)/100;
  const toStr = `${toInteger}%`;
  return toStr;
};