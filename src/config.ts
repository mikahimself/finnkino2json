interface Config {
  _baseURL: string,
  _defaultArea: string,
  _numberOfDays: number,
  _downloadDir: string,
  _areaXmlFilename: string,
  _scheduleDatesXmlFilename: string,
  _scheduleXmlFilename: string,
  _dateTimeOptions: Intl.DateTimeFormatOptions,
  baseURL: string,
  areasUrl: string,
  scheduleDatesUrl?: string,
  scheduleUrl?: string,
  eventsUrl?: string,
  newsUrl?: string,
  newsCategoriesUrl?: string,
  defaultArea: string,
  numberOfDays: number,
  downloadDir?: string,
  areaXmlFilename: string,
  scheduleDatesXmlFilename: string,
  scheduleXmlFilename: string,
  dateTimeOptions: Intl.DateTimeFormatOptions
}

export let config: Config = {
  _baseURL: 'https://www.finnkino.fi/xml',
  _defaultArea: '',
  _numberOfDays: undefined,
  _downloadDir: './downloads',
  _areaXmlFilename: 'Areas',
  _scheduleDatesXmlFilename: "ScheduleDates",
  _scheduleXmlFilename: "Schedule",
  _dateTimeOptions: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  },
  get baseURL() { return this._baseURL },
  set baseURL(value) {
    this._baseURL = value;
  },
  get areasUrl() { return this._baseURL + '/TheatreAreas/' },
  get scheduleDatesUrl() { return this._baseURL + '/ScheduleDates/' },
  get scheduleUrl() { return this._baseURL + '/Schedule/' },
  get eventsUrl() { return this._baseURL + '/Events/' },
  get newsUrl() { return this._baseURL + '/News/' },
  get newsCategoriesUrl() { return this._baseURL + '/NewsCategories/' },
  get defaultArea() { return this._defaultArea},
  set defaultArea(value) { this._defaultArea = value },
  get numberOfDays() { return this._numberOfDays },
  set numberOfDays(value: number) { this._numberOfDays = value },
  get downloadDir() { return this._downloadDir },
  set downloadDir(value: string) { this._downloadDir = value },
  get areaXmlFilename() { return this._areaXmlFilename },
  set areaXmlFilename(value: string) { this._areaXmlFilename = value },
  get scheduleDatesXmlFilename() { return this._scheduleDatesXmlFilename },
  set scheduleDatesXmlFilename(value: string) { this._scheduleDatesXmlFilename = value },
  get scheduleXmlFilename() { return this._scheduleXmlFilename },
  set scheduleXmlFilename(value: string) { this._scheduleXmlFilename = value },
  get dateTimeOptions() { return this._dateTimeOptions },
  set dateTimeOptions(value: { year: "2-digit" | "numeric", month: "numeric" | "2-digit" | "long" | "short" | "narrow", day: "numeric" | "2-digit"}) { this._dateTimeOptions = value }

}
