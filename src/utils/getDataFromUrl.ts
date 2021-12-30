import axios from "axios";

export async function getAreasXML() {
  const xmlData = await axios.get("https://www.finnkino.fi/xml/TheatreAreas/");
  return xmlData.data;
}

export async function getScheduleDatesXML(areaId: number = 0): Promise<string> {
  let xmlData;
  if (areaId) {
    xmlData = await axios.get(`https://www.finnkino.fi/xml/ScheduleDates/?area=${areaId}`)
  } else {
    xmlData = await axios.get(`https://www.finnkino.fi/xml/ScheduleDates/`)
  }
  return xmlData.data
}