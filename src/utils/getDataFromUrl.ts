import axios, { AxiosError } from "axios";
import { config } from "../config";
import { ScheduleParams } from "../interfaces/ScheduleParams";
import { writeFile } from "fs/promises"; 
import path from "path";
import { existsSync, mkdir } from "fs";

const dateTimeOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
};

function checkDownloadDirectory() {
  if (existsSync(config.downloadDir)) {
    return true;
  }
  try {
    mkdir(config.downloadDir, () => "");
    return true;
  } catch (error) {
    console.error(`Failed to create download directory at ${config.downloadDir}: `, error)
    return false;
  }
}

function formXmlFilePath(baseFilename: string, modifier?: string) {
  try {
    const filename = modifier ? `${baseFilename}_${modifier}.xml` : `${baseFilename}.xml`;
    const filePath = path.join(config.downloadDir, filename);
    return filePath;
  } catch (error) {
    console.error(`Failed to form proper name for XML file. Using "downloads/data.xml"`);
    return "downloads/data.xml";
  }
}

/**
 * Retrieve an array of TheatreAreas in XML format
 * @returns XML string representation of the TheatreArea array
 */
export async function getAreasXML(storeXml: boolean = false):Promise<string> {
  const file = formXmlFilePath(config.areaXmlFilename);
  try {
    const xmlData = await axios.get<string>(config.areasUrl);
    if (storeXml && xmlData && checkDownloadDirectory()) {
      await writeFile(file, xmlData.data ?? "")
    }
    
    return xmlData.data ?? "";
  } catch (error) {
    if (error.response) {
      // Request was made but the server responded with an error
      console.log("servervirhe")
      throw new Error(`Unable to download XML Area data from ${config.areasUrl}: ${error.response.code}`);
    } else if (error.request) {
      // Request was made but no response was received from the server
      console.log("ei resoponssi servervirhe")
      throw new Error(`Unable to download XML Area data from ${config.areasUrl}: ${error.request}`);
    }
  }
}

/**
 * Retrieve XML data containing ScheduleDates for a TheatreArea
 * @param {string} areaId AreaID of the Theatre Area from which you want to fetch available dates.
 * @returns {string} XML string representation of ScheduleDates for a defined area
 */
export async function getScheduleDatesXML(areaId: string, storeXml: boolean): Promise<string> {
  const scheduleUrl = new URL(config.scheduleDatesUrl);
  if (areaId) scheduleUrl.searchParams.set("area", areaId);
 
  try {
    const xmlData = await axios.get<string>(scheduleUrl.href);
    if (storeXml && checkDownloadDirectory()) {
      const file = formXmlFilePath(config.scheduleDatesXmlFilename, areaId);
      await writeFile(file, xmlData.data ?? "")
    }
    return xmlData.data ?? "";
  } catch (error) {
    if (error.response) {
      // Request was made but the server responded with an error
      console.log("Unable to download XML Schedule dates")
      throw new Error(`Unable to download XML Schedule dates from ${config.scheduleDatesUrl}: ${error.response.code}`);
    } else if (error.request) {
      // Request was made but no response was received from the server
      console.log("No response from server")
      throw new Error(`Unable to download XML Schedule dates from ${config.scheduleDatesUrl}: ${error.request}`);
    }
  }
}

/**
 * Retrieve a Schedule for a date
 * @param scheduleParams 
 * @returns 
 */
export async function getScheduleXML(
  { theatreAreaId = config.defaultArea,
    date = new Date().toLocaleDateString("fi", dateTimeOptions),
    eventId,
    numberOfDays = config.numberOfDays } :ScheduleParams): Promise<string> {
  try {
    const params = {}
    if (theatreAreaId) {
      params["area"] = theatreAreaId;
    }
    if (date) {
      params["dt"] = date;
    }
    if (eventId) {
      params["eventID"] = eventId;
    }
    if (numberOfDays) {
      params["nrOfDays"] = numberOfDays;
    }

    const searchParamsObj = new URLSearchParams(params);
    console.log(searchParamsObj)
    const searchParamsString = searchParamsObj.toString().length > 0 ? `?${searchParamsObj.toString()}` : '';
    const xmlData = await axios.get(`${config.scheduleUrl}/${searchParamsString}`, {responseType: "document"})
    return xmlData.data ?? "";
  } catch (error) {
    console.log("Failed to get schedule XML")
    // throw error;
  }
}