interface TheatreArea {
  ID: string[],
  Name: string[]
}

export interface TheatreAreaXml2Js {
  TheatreAreas: {
    $: {
      'xmlns:xsd': string,
      'xmlns:xsi': string,
    },
    TheatreArea: TheatreArea[]
  }
}