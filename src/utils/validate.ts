const DATE_FORMAT_ERROR_PATTERN = "Invalid date format. Please enter date in DDDD/MM/YY format.";
const DATE_RANGE_ERROR_PAST = (daysInPast: number) => {
  return `Schedule start date cannot be in the past. The date entered was ${Math.floor(Math.abs(daysInPast))} days in the past.`
}

const DATE_RANGE_ERROR_FUTURE = (daysInFuture: number) => {
  return `Schedule start date must be within 1-31 days of the current date. The date entered was ${daysInFuture} days in the future.`
}

export const isValidPattern = (dateString: string): boolean => {
  const dateFormatPattern = /^\d{4}\/\d{2}\/\d{2}$/;
  return(dateFormatPattern.test(dateString))
}

export const isValidDayMonthOrder = (dateString: string) => {
  const [year, month, day] = dateString.split("/"); 
  const monthInt = parseInt(month, 10);
  const dayInt = parseInt(day, 10);
  if (monthInt < 1 || monthInt > 12) return false;
  if (dayInt < 1 || dayInt > 31) return false;

  return true;
}

export const isValidTimeFrame = (dateString: string) => {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  // Start counting at the start of the days
  currentDate.setHours(0,0,0,0);
  inputDate.setHours(0,0,0,0);

  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  // Count difference in milliseconds and convert to days
  const differenceInMilliseconds = inputDate.getTime() - currentDate.getTime();
  const differenceInDays = differenceInMilliseconds / oneDayInMilliseconds;
  const isValid = differenceInDays >= 1 && differenceInDays <= 31;

  return { valid: isValid, differenceInDays };
}

export const isValidDate = (dateString: string): { valid: boolean, msg: string } => {
  if (!isValidPattern(dateString)) return { valid: false, msg: DATE_FORMAT_ERROR_PATTERN};
  if (!isValidDayMonthOrder(dateString)) return { valid: false, msg: DATE_FORMAT_ERROR_PATTERN};
  const validTimeframe = isValidTimeFrame(dateString);
  if (!validTimeframe.valid) {
    return {
      valid: false,
      msg: validTimeframe.differenceInDays > 0 ? DATE_RANGE_ERROR_FUTURE(validTimeframe.differenceInDays) : DATE_RANGE_ERROR_PAST(validTimeframe.differenceInDays)
    }
  } 

  const testDate = new Date(dateString);
  if (!isNaN(testDate.valueOf())) {
    return { valid: true, msg: ""};
  }
  return {
    valid: false,
    msg: "Unknown error while validating date string."
  };
}