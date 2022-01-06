export interface Language {
  id?: string,
  name: string,
  localName?: string,
  nameInLanguage?: string,
  isoCode?: string,
  isoTwoLetterCode: string,
}

export interface LanguageXml2Js {
  ID?: [string],
  Name: [string],
  LocalName?: [string],
  NameInLanguage?: [string],
  ISOCode?: [string],
  ISOTwoLetterCode: [string],
}