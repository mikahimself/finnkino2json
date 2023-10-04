export interface ContentDescriptor {
  name: string,
  imageUrl: string
}

export interface ContentDescriptorXml2Js {
  Name: [string],
  ImageURL: [string]
}

export interface ContentDescriptorsXml2Js {
  ContentDescriptor: [ContentDescriptorXml2Js]
}
