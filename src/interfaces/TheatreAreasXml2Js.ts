import { TheatreAreaXml2Js } from "./TheatreArea";

export interface TheatreAreasXml2Js {
  TheatreAreas: {
    $: {
      'xmlns:xsd': string,
      'xmlns:xsi': string,
    },
    TheatreArea: TheatreAreaXml2Js[]
  }
}