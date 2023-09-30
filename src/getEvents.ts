import { parseStringPromise } from "xml2js";
import * as utils from "./utils/getDataFromUrl";
import { Show, ShowXml2Js } from "./interfaces/Show";
import { ScheduleParams } from "./interfaces/ScheduleParams";
import { EventXml2Js } from "./interfaces/Event";

export async function getEvents(params?: ScheduleParams) {
  if (!params) {
    params = {};
  }
  try {
    const xmlData = await utils.getEventsXML();
    const jsonData = await convertDataToJson(xmlData);
    const parsedJson = parseResultsFromRawJson(jsonData);
    return jsonData;
  } catch (error) {
    console.log("Failed to transform Schedule XML to JSON.")
    throw error;
  }
}

async function convertDataToJson(xmlData:string) {
  let showArray: ShowXml2Js[];
  const showArrayJson: Show[] = []
  const rawJsonData = await parseStringPromise(xmlData, (err, result) => {
    if (err) {
      console.log("Failed to parse XML data to JSON")
    }
    console.log("PARSEPROM")
    console.log(result.Events.Event[0])
    return result.Events;
  });
  return rawJsonData;
  console.log("RAWDOG")
  console.log(rawJsonData.Events.Event[0].ContentDescriptors[0])
  // const eventArrayJson = rawJsonData.Events.Event.map(())
}

function parseResultsFromRawJson(event:EventXml2Js[]){
  
}