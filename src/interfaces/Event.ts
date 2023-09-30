import { Actor, ActorXml2Js } from "./Actor";
import { ContentDescriptor, ContentDescriptorXml2Js } from "./ContentDescriptor";
import { Director, DirectorXmlJs } from "./Director";
import { EventVideo } from "./EventVideo";
import { Images, ImagesXml2Js } from "./Images";

export interface Event {
  id: number,
  title: string,
  originalTitle: string,
  productionYear: number,
  lengthInMinutes: number,
  dtLocalRelease: Date,
  rating: number,
  ratingLabel: number,
  ratingImageUrl: string,
  localDistributorName: string,
  globalDistributorName: string,
  productionCompanies: string,
  eventType: string,
  genres: string,
  shortSynopsis: string,
  synopsis: string,
  eventUrl: string,
  images: Images,
  videos: EventVideo[] | null,
  cast: Actor[] | null,
  directors: Director[] | null,
  contentDescriptors: ContentDescriptor[] | null,
}

export interface EventXml2Js {
  ID: [string],
  Title: [string],
  OriginalTitle: [string],
  ProductionYear: [string],
  LengthInMinutes: [string],
  dtLocalRelease: [string],
  Rating: [string],
  RatingLabel: [string],
  EatingImageUrl: [string],
  LocalDistributorName: [string],
  GlobalDistributorName: [string],
  ProductionCompanies: [string],
  EventType: [string],
  Genres: [string],
  ShortSynopsis: [string],
  Synopsis: [string],
  EventUrl: [string],
  Images: [ImagesXml2Js[]],
  Videos: [EventXml2Js[]],
  cast: [ActorXml2Js[]] | null,
  directors: [DirectorXmlJs] | null,
  contentDescriptors: [ContentDescriptorXml2Js[]] | null,
}
