import xml2js from "xml2js";
import { getScheduleDatesXML } from "./utils/getDataFromUrl";
import { ScheduleDate } from "./interfaces/ScheduleDate";

export async function getScheduleDates(areaId: number = 0) {
  const xmlData = await getScheduleDatesXML(areaId)
  const jsonData = convertDataToJson(xmlData);
  return jsonData;
}

async function convertDataToJson(xmlData:string): Promise<ScheduleDate[]> {
  let dateArray;
  const dateArrayJson: ScheduleDate[] = []
  await xml2js.parseString(xmlData, (err, result) => {
    dateArray = result.Dates.dateTime;
  })

  dateArray.forEach(element => {
    dateArrayJson.push({"date": element})
  });
  return dateArrayJson;
}