import { isValid, parseISO } from 'date-fns';

export const getValidDate = (date: Date | string) => {
  const potentialValidDate = typeof date === 'string' ? parseISO(date) : date;

  // Make sure that the date is a valid ISO otherwise fallback to Date API
  // The following date string "Mon Mar 09 2020 13:33:55 GMT+0100 (heure normale d’Europe centrale)"
  // is considered as invalid because it's a string reprensentation of the Date in spite of the fact that
  // it's valid when using the Date API.
  if (isValid(potentialValidDate)) {
    return potentialValidDate;
  }

  return new Date(date);
};
