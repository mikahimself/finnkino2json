import { parseStringPromise } from "xml2js";
import * as utils from "./utils/getDataFromUrl";
import { ScheduleParams } from "./interfaces/ScheduleParams";
import { TheatreEvent, TheatreEventXml2Js } from "./interfaces/TheatreEvent";
import { ActorXml2Js } from "./interfaces/Actor";

export async function getTheatreEvents(params?: ScheduleParams) {
  if (!params) {
    params = {};
  }
  try {
    const xmlData = await utils.getEventsXML();
    const jsonData = await convertDataToJson(xmlData);
    const parsedJson = parseResultsFromRawJson(jsonData);
    return parsedJson;
  } catch (error) {
    console.log("Failed to transform Schedule XML to JSON.")
    throw error;
  }
}

async function convertDataToJson(xmlData:string) {
  const rawJsonData = await parseStringPromise(xmlData, (err, result) => {
    if (err) {
      console.log("Failed to parse XML data to JSON")
    }
    return result.Events;
  });
  return rawJsonData.Events.Event;
}

function parseResultsFromRawJson(theatreEvents:TheatreEventXml2Js[]): TheatreEvent[] {
  const parsedData: TheatreEvent[] = theatreEvents.map((event:TheatreEventXml2Js) => {

    return {
      id: event.ID[0],
      title: event.Title[0],
      originalTitle: event.OriginalTitle[0],
      productionYear: parseInt(event.ProductionYear[0]),
      lengthInMinutes: parseInt(event.LengthInMinutes[0]),
      dtLocalRelease: event.dtLocalRelease[0],
      rating: parseInt(event.Rating[0]),
      ratingLabel: parseInt(event.RatingLabel[0]),
      ratingImageUrl: event.RatingImageUrl[0],
      localDistributorName: event.LocalDistributorName[0],
      globalDistributorName: event.GlobalDistributorName[0],
      productionCompanies: event.ProductionCompanies[0],
      theatreEventType: event.EventType[0],
      genres: event.Genres,
      shortSynopsis: event.ShortSynopsis[0],
      synopsis: event.Synopsis[0],
      eventUrl: event.EventURL[0],
      images: {
        eventMicroImagePortrait: event.Images[0].EventMicroImagePortrait ? event.Images[0].EventMicroImagePortrait[0] : undefined,
        eventSmallImagePortrait: event.Images[0].EventSmallImagePortrait ? event.Images[0].EventSmallImagePortrait[0] : undefined,
        eventMediumImagePortrait: event.Images[0].EventMediumImagePortrait ? event.Images[0].EventMediumImagePortrait[0] : undefined,
        eventLargeImagePortrait: event.Images[0].EventLargeImagePortrait ? event.Images[0].EventLargeImagePortrait[0] : undefined,
        eventSmallImageLandscape: event.Images[0].EventSmallImageLandscape ? event.Images[0].EventSmallImageLandscape[0] : undefined,
        eventMediumImageLandscape: event.Images[0].EventMediumImageLandscape ? event.Images[0].EventMediumImageLandscape[0] : undefined,
        eventLargeImageLandscape: event.Images[0].EventLargeImageLandscape ? event.Images[0].EventLargeImageLandscape[0] : undefined,
      },
      videos: event.Videos[0].EventVideo?.map(video => {
        return {
          title: video.Title[0],
          location: video.Location[0],
          thumbnailLocation: video.ThumbnailLocation[0],
          mediaResourceSubType: video.MediaResourceSubType[0],
          mediaResourceFormat: video.MediaResourceFormat[0]
        }
      }),
      cast: event.Cast[0].Actor?.map((actor: ActorXml2Js) => {
        return {
          firstName: actor.FirstName[0],
          lastName: actor.LastName[0]
        }
      }),
      directors: event.Directors[0].Director?.map((director) => {
        return {
          firstName: director.FirstName[0],
          lastName: director.LastName[0],
        }
      }),
      contentDescriptors: event.ContentDescriptors[0].ContentDescriptor?.map((descriptor) => {
        return {
          name: descriptor.Name[0],
          imageUrl: descriptor.ImageURL[0]
        }
      })
    }
  });
  return parsedData
}
