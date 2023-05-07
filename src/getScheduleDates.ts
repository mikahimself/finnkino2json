import { parseStringPromise } from "xml2js";
import { getScheduleDatesXML } from "./utils/getDataFromUrl";
import { ScheduleDate, ScheduleDateXml2Js } from "./interfaces/ScheduleDate";
import { config } from "./config";

/**
 * Returns 
 * @param {string} [areaId] Identifier of a TheatreArea. If no areaId is provided, 
 * the default areaId defined in config.defaultArea will be used.
 * @returns {Promise<ScheduleDate[]>} Promise that contains an array of ScheduleDates for the chosen TheatreArea.
 */
export async function getScheduleDates(areaId: string = config.defaultArea ): Promise<ScheduleDate[]> {
  const xmlData = await getScheduleDatesXML(areaId)
  const jsonData = convertDataToJson(xmlData);
  return jsonData;
}

async function convertDataToJson(xmlData:string): Promise<ScheduleDate[]> {
  const rawJsonData: ScheduleDateXml2Js = await parseStringPromise(xmlData, (err) => {
    if (err) throw new Error (`Error converting date array to JSON: ${err}`)
  })
  const parsedJson: ScheduleDate[] = rawJsonData.Dates.dateTime.map((date:string) => {
    return { date: new Date(date) }
  });
  return parsedJson;
}