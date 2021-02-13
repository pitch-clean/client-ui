export const convertUnixMsToDate = (unixMsInt) => {
  let dateItem = new Date(unixMsInt);
  return dateItem.toLocaleDateString();
};
export const calculateTermLength = (timeDeltaMs) => {
  const totalTermDays = Math.floor(timeDeltaMs / (1000*60*60*24))
  const termYears = Math.floor(totalTermDays / 365.25);
  const termDays = Math.round(totalTermDays - (termYears * 365.25));
  const yearsPlural = termYears > 1 ? 'years' : 'year';
  const daysPlural = termDays > 1 ? 'days' : 'day';
  const termYearsStr = totalTermDays >= 365.25 ? `${termYears} ${yearsPlural}, ${termDays} ${daysPlural}` : `${termDays} ${daysPlural}`;
  return termYearsStr;
};