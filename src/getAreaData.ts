import xml2js from "xml2js";
import axios from "axios";
import { TheatreArea } from "./interfaces/TheatreArea";
import { TheatreAreaXml2Js } from "./interfaces/TheatreAreaXml2Js";

export async function getAreaData(): Promise<TheatreArea[]> {
  const xmlData = await getAreaXml();
  const jsonData = await convertAreaXmlToJson(xmlData)
  return jsonData;
}

async function getAreaXml(): Promise<string> {
  const xmlData = await axios.get("https://www.finnkino.fi/xml/TheatreAreas/");
  return xmlData.data;
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