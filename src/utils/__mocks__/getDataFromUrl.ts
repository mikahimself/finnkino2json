export async function getAreasXML() {
  return new Promise((resolve, reject) => {
    resolve (`
    <TheatreAreas xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <TheatreArea>
        <ID>1029</ID>
        <Name>Valitse alue/teatteri</Name>
      </TheatreArea>
      <TheatreArea>
        <ID>1014</ID>
        <Name>Pääkaupunkiseutu</Name>
      </TheatreArea>
      <TheatreArea>
        <ID>1012</ID>
        <Name>Espoo</Name>
      </TheatreArea>
      <TheatreArea>
        <ID>1039</ID>
        <Name>Espoo: OMENA</Name>
      </TheatreArea>
      <TheatreArea>
        <ID>1038</ID>
        <Name>Espoo: SELLO</Name>
      </TheatreArea>
    </TheatreAreas>
    `)
  })
}

export async function getScheduleDatesXML() {
  return new Promise((resolve, reject) => {
    resolve(`
    <Dates xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <dateTime>2021-12-26T00:00:00</dateTime>
      <dateTime>2021-12-27T00:00:00</dateTime>
      <dateTime>2022-01-18T00:00:00</dateTime>
      <dateTime>2022-01-19T00:00:00</dateTime>
      <dateTime>2022-01-24T00:00:00</dateTime>
    </Dates>
    `)
  })
}