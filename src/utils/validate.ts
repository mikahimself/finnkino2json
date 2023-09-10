export const isValidPattern = (dateString: string): boolean => {
  const dateFormatPattern = /^\d{4}\/\d{2}\/\d{2}$/;
  return(dateFormatPattern.test(dateString))
}

export const isValidDayMonthOrder = (dateString: string) => {
  const [year, month, day] = dateString.split("/"); 
  const monthInt = parseInt(month, 10);
  if (monthInt < 1 || monthInt > 12) return false;

  return true;
}

export const isValidDate = (dateString: string): boolean => {
  if (!isValidPattern(dateString)) return false;
  if (!isValidDayMonthOrder(dateString)) return false;

  const testDate = new Date(dateString);
  if (!isNaN(testDate.valueOf())) return true;
  return false;
}