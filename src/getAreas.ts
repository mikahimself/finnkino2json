import { parseStringPromise } from "xml2js";
import { TheatreArea } from "./interfaces/TheatreArea";
import { TheatreAreasXml2Js } from "./interfaces/TheatreAreasXml2Js";
import { getAreasXML } from "./utils/getDataFromUrl";

export async function getAreas(): Promise<TheatreArea[]> {
  try {
    const xmlData = await getAreasXML();
    const jsonData = await convertAreaXmlToJson(xmlData)
    return jsonData;
  } catch (error) {
    throw new Error("Cannot get/convert areas to JSON:");
  }
}

async function convertAreaXmlToJson(xmlData:string): Promise<TheatreArea[]> {
  try {
    const rawJson: TheatreAreasXml2Js = await parseStringPromise(xmlData, (err:any) => {
      if (err) {
        throw new Error(`Unable to convert XML input to JSON: ${err}`);
      }
    })
    const parsedJson: TheatreArea[] = rawJson.TheatreAreas.TheatreArea.map(theatre => {
      return { id: theatre.ID[0], name: theatre.Name[0], area: theatre.Name[0].split(":")[0] }
    })
    return parsedJson;
  } catch (error) {
    throw error;
  }
}
