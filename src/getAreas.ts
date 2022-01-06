import xml2js from "xml2js";
import { TheatreArea } from "./interfaces/TheatreArea";
import { TheatreAreaXml2Js } from "./interfaces/TheatreAreaXml2Js";
import { getAreasXML } from "./utils/getDataFromUrl";

export async function getAreas(): Promise<TheatreArea[]> {
  try {
    const xmlData = await getAreasXML();
    const jsonData = await convertAreaXmlToJson(xmlData)
    return jsonData;
  } catch (error) {
    throw new Error("Cannot get/convert areas to JSON.");
  }
}

async function convertAreaXmlToJson(xmlData:string): Promise<TheatreArea[]> {
  try {
    let theatreArray;
    const theatreArrayJson: TheatreArea[] = []
    await xml2js.parseString(xmlData, (err, result: TheatreAreaXml2Js) => {
      theatreArray = result.TheatreAreas.TheatreArea;
    })
    theatreArray.forEach(element => {
      theatreArrayJson.push({id: element.ID[0], name: element.Name[0]})
    });
    return theatreArrayJson;
  } catch (error) {
    throw error;
  }
}
