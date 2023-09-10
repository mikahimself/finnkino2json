/**
 * @interface ScheduleParams - Defines an interface for parameters used in retrieving a schedule.
 * @property {string} [theatreAreaId] Identifier of a Theatre Area. Defaults to first item received from getArea()
 * @property {string} [date] Date of the schedule using the format YYYY/MM/DD. Defaults to present day
 * @property {string} [eventId] Identifier of an event. Defaults to all events.
 * @property {number} [numberOfDays] Number of days for which to fetch events. Allowed values are 1-31. Defaults to 1. 
 */
export interface ScheduleParams {
  theatreAreaId?: string,
  date?: string,
  eventId?: string,
  numberOfDays?: number
}