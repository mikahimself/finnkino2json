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