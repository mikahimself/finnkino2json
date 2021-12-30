import xml2js from "xml2js";
import { TheatreArea } from "./interfaces/TheatreArea";
import { TheatreAreaXml2Js } from "./interfaces/TheatreAreaXml2Js";
import { getAreasXML } from "./utils/getDataFromUrl";

export async function getAreaData(): Promise<TheatreArea[]> {
  const xmlData = await getAreasXML();
  const jsonData = await convertAreaXmlToJson(xmlData)
  return jsonData;
}

async function convertAreaXmlToJson(xmlData:string): Promise<TheatreArea[]> {
  let theatreArray;
  const theatreArrayJson: TheatreArea[] = []
  await xml2js.parseString(xmlData, (err, result: TheatreAreaXml2Js) => {
    theatreArray = result.TheatreAreas.TheatreArea;
  })
  theatreArray.forEach(element => {
    theatreArrayJson.push({id: element.ID[0], name: element.Name[0]})
  });
  return theatreArrayJson;
}