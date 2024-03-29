import { Language, LanguageXml2Js } from "./Language";
import { ContentDescriptor } from "./ContentDescriptor";
import { Images, ImagesXml2Js } from "./Images";

export interface Show {
  id: string,
  dtAccounting: string,
  dttmShowStart: string,
  dttmShowStartUTC: string,
  dttmShowEnd: string,
  dttmShowEndUTC: string,
  showSalesStartTime: string,
  showSalesStartTimeUTC: string,
  showSalesEndTime: string,
  showSalesEndTimeUTC: string,
  showReservationStartTime: string,
  showReservationStartTimeUTC: string,
  showReservationEndTime: string,
  showReservationEndTimeUTC: string,
  theatreEventId: string,
  title: string,
  originalTitle: string,
  productionYear: number,
  lengthInMinutes: number,
  dtLocalRelease: string,
  rating: string,
  ratingLabel: string,
  ratingImageUrl: string,
  theatreEventType: string,
  genres: string,
  theatreAreaId: string,
  theatreAuditoriumId: string,
  theatre: string,
  theatreAuditorium: string,
  theatreAndAuditorium: string,
  presentationMethodAndLanguage: string,
  presentationMethod: string,
  theatreEventSeries: string,
  showUrl: string,
  theatreEventUrl: string,
  spokenLanguage?: Language,
  subtitleLanguage1: Language,
  subtitleLanguage2?: Language,
  images: Images,
  contentDescriptors: ContentDescriptor[] | ContentDescriptor | null,
}

export interface ShowXml2Js {
  ID: [string],
  dtAccounting: [string],
  dttmShowStart: [string],
  dttmShowStartUTC: [string],
  dttmShowEnd: [string],
  dttmShowEndUTC: [string],
  ShowSalesStartTime: [string],
  ShowSalesStartTimeUTC: [string],
  ShowSalesEndTime: [string],
  ShowSalesEndTimeUTC: [string],
  ShowReservationStartTime: [string],
  ShowReservationStartTimeUTC: [string],
  ShowReservationEndTime: [string],
  ShowReservationEndTimeUTC: [string],
  EventID: [string],
  Title: [string],
  OriginalTitle: [string],
  ProductionYear: [number],
  LengthInMinutes: [number],
  dtLocalRelease: [string],
  Rating: [string],
  RatingLabel: [string],
  RatingImageUrl: [string],
  EventType: [string],
  Genres: [string],
  TheatreID: [string],
  TheatreAuditriumID: [string],
  Theatre: [string],
  TheatreAuditorium: [string],
  TheatreAndAuditorium: [string],
  PresentationMethodAndLanguage: [string],
  PresentationMethod: [string],
  EventSeries: [string],
  ShowURL: [string],
  EventURL: [string],
  SpokenLanguage?: [LanguageXml2Js],
  SubtitleLanguage1: [LanguageXml2Js],
  SubtitleLanguage2?: [LanguageXml2Js],
  Images: ImagesXml2Js,
  ContentDescriptors: ContentDescriptor[] | ContentDescriptor | null,
}