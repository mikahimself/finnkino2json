import { Actor } from "./Actor";
import { CastXml2Js } from "./Cast";
import { ContentDescriptor, ContentDescriptorsXml2Js } from "./ContentDescriptor";
import { Director } from "./Director";
import { DirectorsXml2Js } from "./Directors";
import { EventVideo, Videos } from "./EventVideo";
import { Images, ImagesXml2Js } from "./Images";

export interface TheatreEvent {
  id: string,
  title: string,
  originalTitle: string,
  productionYear: number,
  lengthInMinutes: number,
  dtLocalRelease: string,
  rating: number,
  ratingLabel: number,
  ratingImageUrl: string,
  localDistributorName: string,
  globalDistributorName: string,
  productionCompanies: string,
  eventType: string,
  genres: [string],
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
  RatingImageUrl: [string],
  LocalDistributorName: [string],
  GlobalDistributorName: [string],
  ProductionCompanies: [string],
  EventType: [string],
  Genres: [string],
  ShortSynopsis: [string],
  Synopsis: [string],
  EventURL: [string],
  Images: [ImagesXml2Js],
  Videos: [Videos],
  Cast: [CastXml2Js],
  Directors: [DirectorsXml2Js] | null,
  ContentDescriptors: [ContentDescriptorsXml2Js] | null,
}
