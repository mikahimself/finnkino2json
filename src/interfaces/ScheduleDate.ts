export interface ScheduleDate {
  date: Date,
}

export interface ScheduleDateXml2Js {
  Dates: {
    $: {
      'xmlns:xsd': string,
      'xmlns:xsi': string,
    },
    dateTime: string[];
  }
}

/**
 * @type {ScheduleDateParams} Defines the parameters used for retrieving ScheduleDate data.
 * @param {string} [areaId] Identifier of the theatre area for which you want to retrieve Schedule Data.
 * @param {boolean} [storeXml] Defines whether you want to store the fetched XML data. 
 */
export interface ScheduleDateParams {
  areaId?: string;
  storeXml?: boolean;
}