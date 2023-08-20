/**
 * @type {TheatreArea} Defines a Theatre Area.
 * @param {string} id Identifier of the Theatre Area
 * @param {string} area Name of the city, where the theatre is located
 * @param {string} name Name of the theatre
 */
export interface TheatreArea {
  id: string,
  area: string
  name: string,
}

export interface TheatreAreaXml2Js {
  ID: string[],
  Name: string[]
}