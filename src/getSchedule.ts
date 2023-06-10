import { parseStringPromise } from "xml2js";
import * as utils from "./utils/getDataFromUrl";
import { Show, ShowXml2Js } from "./interfaces/Show";
import { ScheduleParams } from "./interfaces/ScheduleParams";

export async function getSchedule(params?: ScheduleParams) {
  if (!params) {
    params = {};
  }
  try {
    const xmlData = await utils.getScheduleXML(params);
    const jsonData = await convertDataToJson(xmlData);
    return jsonData;
  } catch (error) {
    console.log("Failed to transform Schedule XML to JSON.")
    throw error;
  }
}

async function convertDataToJson(xmlData:string): Promise<Show[]> {
  let showArray: ShowXml2Js[];
  const showArrayJson: Show[] = []
  const rawJsonData = await parseStringPromise(xmlData, (err, result) => {
    if (err) {
      console.log("Failed to parse XML data to JSON")
    }
    return result;
  });
  // showArray.forEach((element: ShowXml2Js) => {
  rawJsonData.Schedule.Shows[0].Show.forEach((element: ShowXml2Js) => {
    showArrayJson.push(
      {
        id: Number(element.ID[0]),
        dtAccounting: element.dtAccounting[0],
        dttmShowStart: element.dttmShowStart[0],
        dttmShowStartUTC: element.dttmShowStartUTC[0],
        dttmShowEnd: element.dttmShowEnd[0],
        dttmShowEndUTC: element.dttmShowEndUTC[0],
        showSalesStartTime: element.ShowSalesStartTime[0],
        showSalesStartTimeUTC: element.ShowSalesStartTimeUTC[0],
        showSalesEndTime: element.ShowSalesEndTime[0],
        showSalesEndTimeUTC: element.ShowSalesEndTimeUTC[0],
        showReservationStartTime: element.ShowReservationStartTime[0],
        showReservationStartTimeUTC: element.ShowReservationStartTimeUTC[0],
        showReservationEndTime: element.ShowReservationEndTime[0],
        showReservationEndTimeUTC: element.ShowReservationEndTimeUTC[0],
        eventId: Number(element.EventID[0]),
        title: element.Title[0],
        originalTitle: element.OriginalTitle[0],
        productionYear: Number(element.ProductionYear[0]),
        lengthInMinutes: Number(element.LengthInMinutes[0]),
        dtLocalRelease: element.dtLocalRelease[0],
        rating: element.Rating[0],
        ratingLabel: element.RatingLabel[0],
        ratingImageUrl: element.RatingImageUrl[0],
        eventType: element.EventType[0],
        genres: element.Genres[0],
        theatreId: Number(element.TheatreID[0]),
        theatreAuditriumId: Number(element.TheatreAuditriumID[0]),
        theatre: element.Theatre[0],
        theatreAuditorium: element.TheatreAuditorium[0],
        theatreAndAuditorium: element.TheatreAndAuditorium[0],
        presentationMethodAndLanguage: element.PresentationMethodAndLanguage[0],
        presentationMethod: element.PresentationMethod[0],
        eventSeries: element.EventSeries[0],
        showUrl: element.ShowURL[0],
        eventUrl: element.EventURL[0],
        ...element?.SpokenLanguage && {spokenLanguage: {
          ...element.SpokenLanguage[0]?.ID && { id: element.SpokenLanguage[0].ID[0] },
          ...element.SpokenLanguage[0]?.Name && { name: element.SpokenLanguage[0].Name[0] },
          ...element.SpokenLanguage[0]?.LocalName && { localName: element.SpokenLanguage[0].LocalName[0] },
          ...element.SpokenLanguage[0]?.ISOCode && { isoCode: element.SpokenLanguage[0].ISOCode[0] },
          ...element.SpokenLanguage[0]?.ISOTwoLetterCode && { isoTwoLetterCode: element.SpokenLanguage[0].ISOTwoLetterCode[0] },

        }},
        ...element?.SubtitleLanguage1 && {subtitleLanguage1: {
          ...element.SubtitleLanguage1[0]?.ID && { id: element.SubtitleLanguage1[0].ID[0] },
          ...element.SubtitleLanguage1[0]?.Name && { name: element.SubtitleLanguage1[0].Name[0] },
          ...element.SubtitleLanguage1[0]?.LocalName && { localName: element.SubtitleLanguage1[0].LocalName[0] },
          ...element.SubtitleLanguage1[0]?.ISOCode && { isoCode: element.SubtitleLanguage1[0].ISOCode[0] },
          ...element.SubtitleLanguage1[0]?.ISOTwoLetterCode && { isoTwoLetterCode: element.SubtitleLanguage1[0].ISOTwoLetterCode[0] },

        }},
        ...element?.SubtitleLanguage2 && {subtitleLanguage2: {
          ...element?.SubtitleLanguage2[0]?.ID && { id: element.SubtitleLanguage2[0].ID[0] },
          ...element?.SubtitleLanguage2[0]?.Name && { name: element.SubtitleLanguage2[0].Name[0] },
          ...element?.SubtitleLanguage2[0]?.LocalName && { localName: element.SubtitleLanguage2[0].LocalName[0] },
          ...element?.SubtitleLanguage2[0]?.ISOCode && { isoCode: element.SubtitleLanguage2[0].ISOCode[0] },
          ...element?.SubtitleLanguage2[0]?.ISOTwoLetterCode && { isoTwoLetterCode: element.SubtitleLanguage2[0].ISOTwoLetterCode[0] },
        }},
        images: {
          ...element.Images[0]?.EventMicroImagePortrait && { eventMicroImagePortrait: element.Images[0].EventMicroImagePortrait[0] },
          ...element.Images[0]?.EventSmallImagePortrait && { eventSmallImagePortrait: element.Images[0].EventSmallImagePortrait[0] },
          ...element.Images[0]?.EventMediumImagePortrait && { eventMediumImagePortrait: element.Images[0].EventMediumImagePortrait[0] },
          ...element.Images[0]?.EventLargeImagePortrait && { eventLargeImagePortrait: element.Images[0].EventLargeImagePortrait[0] },
          ...element.Images[0]?.EventSmallImageLandscape && { eventSmallImageLandscape: element.Images[0].EventSmallImageLandscape[0] },
          ...element.Images[0]?.EventLargeImageLandscape && { eventLargeImageLandscape: element.Images[0].EventLargeImageLandscape[0] },
        },
        contentDescriptors: element.ContentDescriptors
      })
  });
  return showArrayJson;
}