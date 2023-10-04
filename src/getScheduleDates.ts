import { parseStringPromise } from "xml2js";
import { getScheduleDatesXML } from "./utils/getDataFromUrl";
import { ScheduleDate, ScheduleDateParams, ScheduleDateXml2Js } from "./interfaces/ScheduleDate";
import { config } from "./config";

/**
 * Fetch available Schedule Dates for the chosen Theatre Area and optionally store the retrieved XML data on disk.
 * @param {ScheduleDateParams} [scheduleDateParams]
 * @returns {Promise<ScheduleDate[]>} Promise that contains an array of ScheduleDates for the chosen TheatreArea.
 */
export async function getScheduleDates(scheduleDateParams?: ScheduleDateParams): Promise<ScheduleDate[]> {
  try {
    const { areaId = config.defaultArea, storeXml = false } = scheduleDateParams ?? {};
    const xmlData = await getScheduleDatesXML(areaId, storeXml)
    const jsonData = convertDataToJson(xmlData);
    return jsonData;
  } catch (error) {
    console.error(error)
    throw new Error (error);
  }
}

async function convertDataToJson(xmlData:string): Promise<ScheduleDate[]> {
  if (!xmlData) return;
  const rawJsonData: ScheduleDateXml2Js = await parseStringPromise(xmlData, (err:any) => {
    if (err) {
      throw new Error (`Error converting date array to JSON: ${err}`)
    }
  })
  const parsedJson: ScheduleDate[] = rawJsonData.Dates.dateTime.map((date:string) => {
    // Add UTC+0 to prevent date from being yesterday.
    const dateWithCode = new Date(date.split("T")[0] + " UTC-00:00");
    return { date: new Date(dateWithCode) }
  });

  return parsedJson;
}