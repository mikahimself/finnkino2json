import axios from "axios";
import { config } from "../config";
import { ScheduleParams } from "../interfaces/ScheduleParams";

const dateTimeOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
};

/**
 * Retrieve an array of TheatreAreas in XML format
 * @returns XML string representation of the TheatreArea array
 */
export async function getAreasXML():Promise<string> {
  try {
    const xmlData = await axios.get<string>(config.areasUrl);
    return xmlData.data;
  } catch (error) {
    throw new Error(`Unable to download XML Area data from ${config.areasUrl}: ${error}`);
  }
}

/**
 * Retrieve XML data containing ScheduleDates for a TheatreArea
 * @param {string} areaId AreaID of the Theatre Area from which you want to fetch available dates.
 * @returns {string} XML string representation of ScheduleDates for a defined area
 */
export async function getScheduleDatesXML(areaId: string): Promise<string> {
  try {
    const xmlData = await axios.get<string>(`${config.scheduleDatesUrl}?area=${areaId}`)
    return xmlData.data
  } catch (error) {
    throw new Error(`Unable to download XML Schedule Date data from ${config.areasUrl} using Area ID ${areaId}: ${error}`);
  }
}

/**
 * Retrieve a Schedule for a date
 * @param scheduleParams 
 * @returns 
 */
export async function getScheduleXML(
  { areaId = config.defaultArea,
    date = new Date().toLocaleDateString("fi", dateTimeOptions),
    eventId,
    nrOfDays = config.nrOfDays } :ScheduleParams): Promise<string> {
  try {
    const params = {}
    if (areaId) {
      params["area"] = areaId;
    }
    if (date) {
      params["dt"] = date;
    }
    if (eventId) {
      params["eventID"] = eventId;
    }
    if (nrOfDays) {
      params["nrOfDays"] = nrOfDays;
    }

    const searchParamsObj = new URLSearchParams(params);
    const searchParamsString = searchParamsObj.toString().length > 0 ? `?${searchParamsObj.toString()}` : '';
    const xmlData = await axios.get(`${config.scheduleUrl}/${searchParamsString}`)
    return xmlData.data;
  } catch (error) {
    console.log("Failed to get schedule XML")
    throw error;
  }
}