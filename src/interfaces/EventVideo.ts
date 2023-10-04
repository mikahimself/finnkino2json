export interface EventVideo {
  title: string,
  location: string,
  locationAsUrl?: string,
  thumbnailLocation?: string,
  mediaResourceSubType: string,
  mediaResourceFormat: string
}

export interface EventVideoXml2Js {
  Title: [string],
  Location: [string],
  ThumbnailLocation: [string],
  MediaResourceSubType: [string],
  MediaResourceFormat: [string]
}

export interface Videos {
  EventVideo: [EventVideoXml2Js]
}