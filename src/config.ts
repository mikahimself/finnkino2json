interface Config {
  _baseURL: string,
  _defaultArea: string,
  _nrOfDays: string,
  baseURL: string,
  areasUrl: string,
  scheduleDatesUrl?: string,
  scheduleUrl?: string,
  eventsUrl?: string,
  newsUrl?: string,
  newsCategoriesUrl?: string,
  defaultArea: string,
  nrOfDays: string
}

export let config: Config = {
  _baseURL: 'https://www.finnkino.fi/xml',
  _defaultArea: '1046',
  _nrOfDays: '1',
  get baseURL() { return this._baseURL },
  set baseURL(value) {
    this._baseURL = value;
  },
  get areasUrl() { return this._baseURL + '/TheatreAreas/' },
  get scheduleDatesUrl() { return this._baseURL + '/ScheduleDates/'},
  get scheduleUrl() { return this._baseURL + '/Schedule/'},
  get eventsUrl() { return this._baseURL + '/Events/'},
  get newsUrl() { return this._baseURL + '/News/'},
  get newsCategoriesUrl() { return this._baseURL + '/NewsCategories/'},
  get defaultArea() { return this._defaultArea},
  set defaultArea(value) { this._defaultArea = value },
  get nrOfDays() { return this._nrOfDays},
  set nrOfDays(value) { this._nrOfDays = value}
}
