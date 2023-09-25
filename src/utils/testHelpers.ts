import { config } from "../config";

export const createDateString = (daysInPastOrFuture: number) => {
  const now = new Date();
  const dateToTest1 = new Date();
  dateToTest1.setDate(now.getDate() + daysInPastOrFuture);
  const dateToTest1_str = dateToTest1.toLocaleString("en-CA", config.dateTimeOptions);
  const dateToTest1_str_formatted = dateToTest1_str.split("-").join("/")
  return dateToTest1_str_formatted;
}