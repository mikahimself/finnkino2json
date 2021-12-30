import axios from "axios";

export async function getAreasXML() {
  try {
    const xmlData = await axios.get("https://www.finnkino.fi/xml/TheatreAreas/");
    return xmlData.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
}

export async function getScheduleDatesXML(areaId: number = 0): Promise<string> {
  try {
    let xmlData;
    if (areaId) {
      xmlData = await axios.get(`https://www.finnkino.fi/xml/ScheduleDates/?area=${areaId}`)
    } else {
      xmlData = await axios.get(`https://www.finnkino.fi/xml/ScheduleDates/`)
    }
    return xmlData.data
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
}