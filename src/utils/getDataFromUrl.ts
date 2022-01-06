import axios from "axios";
import { ScheduleParams } from "../interfaces/ScheduleParams";

export async function getAreasXML() {
  try {
    const xmlData = await axios.get("https://www.finnkino.fi/xml/TheatreAreas/");
    return xmlData.data;
  } catch (error) {
    throw error;
  }
}

export async function getScheduleDatesXML(areaId: number = 0): Promise<string> {
  try {
    let xmlData;
    if (areaId) {
      xmlData = await axios.get(`https://www.finnkino.fi/xml/ScheduleDates/?area=${areaId}`)
    } else {
      xmlData = await axios.get(`https://www.finnkino.fi/xml/ScheduleDates/`)
    }
    return xmlData.data
  } catch (error) {
    throw error;
  }
}

export async function getScheduleXML(scheduleParams: ScheduleParams): Promise<string> {
  try {
    const params = {}
    if (scheduleParams.areaId) {
      params["area"] = scheduleParams.areaId;
    }
    if (scheduleParams.date) {
      const date = new Date(scheduleParams.date);
      const formattedDate = `${("0" + date.getDate()).slice(-2)}.${("0" + date.getMonth() + 1).slice(-2)}.${date.getFullYear()}`;
      params["dt"] = formattedDate;
    }
    if (scheduleParams.eventId) {
      params["eventID"] = scheduleParams.eventId;
    }
    if (scheduleParams.nrOfDays) {
      params["nrOfDays"] = scheduleParams.nrOfDays;
    }

    const searchParamsObj = new URLSearchParams(params);
    const searchParamsString = searchParamsObj.toString().length > 0 ? `?${searchParamsObj.toString()}` : '';
    const xmlData = await axios.get(`https://www.finnkino.fi/xml/Schedule/${searchParamsString}`)
    return xmlData.data;

  } catch (error) {
    throw error;
  }
}