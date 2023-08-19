interface Config {
  _baseURL: string,
  _defaultArea: string,
  _numberOfDays: number,
  baseURL: string,
  areasUrl: string,
  scheduleDatesUrl?: string,
  scheduleUrl?: string,
  eventsUrl?: string,
  newsUrl?: string,
  newsCategoriesUrl?: string,
  defaultArea: string,
  numberOfDays: number
}

export let config: Config = {
  _baseURL: 'https://www.finnkino.fi/xml',
  _defaultArea: '1046',
  _numberOfDays: 1,
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
  get numberOfDays() { return this._numberOfDays},
  set numberOfDays(value) { this._numberOfDays = value}
}
