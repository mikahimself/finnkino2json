import { Actor } from "./Actor";
import { ContentDescriptor } from "./ContentDescriptor";
import { Director } from "./Director";
import { EventVideo } from "./EventVideo";
import { Images } from "./Images";

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
