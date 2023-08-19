import { getAreas, getScheduleDates, getSchedule } from "./index";
import { mockedScheduleXml, mockedAreasXml, mockedDatesXml } from "./utils/mockData";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const expectedAreasJson = [
  { id: '1029', name: 'Valitse alue/teatteri' },
  { id: '1014', name: 'Pääkaupunkiseutu' },
  { id: '1012', name: 'Espoo' },
  { id: '1039', name: 'Espoo: OMENA' },
  { id: '1038', name: 'Espoo: SELLO' },
]

const expectedDatesJson = [
  {"date": "2021-12-26T00:00:00"},
  {"date": "2021-12-27T00:00:00"},
  {"date": "2022-01-18T00:00:00"},
  {"date": "2022-01-19T00:00:00"},
  {"date": "2022-01-24T00:00:00"},
]

const expectedScheduleJson = [
  {
    id: 1653666,
    dtAccounting: '2022-01-01T00:00:00',
    dttmShowStart: '2022-01-01T10:30:00',
    dttmShowStartUTC: '2022-01-01T08:30:00Z',
    dttmShowEnd: '2022-01-01T13:14:00',
    dttmShowEndUTC: '2022-01-01T11:14:00Z',
    showSalesStartTime: '2000-01-01T00:00:00',
    showSalesStartTimeUTC: '2000-01-01T00:00:00Z',
    showSalesEndTime: '2021-12-31T10:30:00',
    showSalesEndTimeUTC: '2021-12-31T08:30:00Z',
    showReservationStartTime: '0001-01-01T00:00:00',
    showReservationStartTimeUTC: '0001-01-01T00:00:00Z',
    showReservationEndTime: '0001-01-01T00:00:00',
    showReservationEndTimeUTC: '0001-01-01T00:00:00Z',
    eventId: 303601,
    title: 'Oma näytös',
    originalTitle: 'Oma näytös',
    productionYear: 2021,
    lengthInMinutes: 154,
    dtLocalRelease: '2021-02-24T00:00:00',
    rating: '(none)',
    ratingLabel: '(none)',
    ratingImageUrl: 'https://media.finnkino.fi/images/rating_large_(none).png',
    eventType: 'Movie',
    genres: 'Oma näytös',
    theatreId: 1038,
    theatreAuditriumId: 1279,
    theatre: 'Tennispalatsi, Helsinki',
    theatreAuditorium: 'sali 6',
    theatreAndAuditorium: 'Tennispalatsi, Helsinki, sali 6',
    presentationMethodAndLanguage: '2D',
    presentationMethod: '2D',
    eventSeries: '',
    showUrl: 'http://www.finnkino.fi/websales/show/1653666/',
    eventUrl: 'http://www.finnkino.fi/event/303601/title/oma_n%C3%A4yt%C3%B6s/',
    subtitleLanguage1: { name: 'Valitun elokuvan mukainen', isoTwoLetterCode: 'NA' },
    images: {
      eventSmallImagePortrait: 'http://media.finnkino.fi/1012/Event_13086/portrait_small/juliste_1080x1600.png',
      eventMediumImagePortrait: 'http://media.finnkino.fi/1012/Event_13086/portrait_medium/juliste_1080x1600.png',
      eventLargeImagePortrait: 'http://media.finnkino.fi/1012/Event_13086/portrait_small/juliste_1080x1600.png',
      eventSmallImageLandscape: 'http://media.finnkino.fi/1012/Event_13086/landscape_small/juliste_444x300.png',
      eventLargeImageLandscape: 'http://media.finnkino.fi/1012/Event_13086/landscape_large/juliste_670x250.png'
    },
    contentDescriptors: [ '' ]
  },
]

beforeEach(() => {
  mockedAxios.get.mockReset();
})

describe("Get Areas from Finnkino API", () => {
  test("It should convert received areas to JSON", async () => {
    mockedAxios.get.mockResolvedValue(mockedAreasXml);

    expect(await getAreas()).toMatchObject(expectedAreasJson);
    expect(axios.get).toHaveBeenCalledWith("https://www.finnkino.fi/xml/TheatreAreas/");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("It should return error if axios query fails", async () => {
    mockedAxios.get.mockRejectedValue(new Error("Cannot get/convert areas to JSON."));

    await expect(getAreas()).rejects.toThrow("Cannot get/convert areas to JSON.");
    expect(axios.get).toHaveBeenCalledWith("https://www.finnkino.fi/xml/TheatreAreas/");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
})

describe("Get dates from Finnkino API", () => {
  test('should get dates for default area from the API', async () => {
    mockedAxios.get.mockResolvedValue(mockedDatesXml);

    expect(await getScheduleDates()).toMatchObject(expectedDatesJson);
    expect(axios.get).toHaveBeenCalledWith("https://www.finnkino.fi/xml/ScheduleDates/");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
  test('should get dates for a defined area from the API', async() => {

  });
  test("It should return error if axios query fails", () => {

  });
})

describe("Get schedule data from Finnkino API", () => {
  it('should get schedule for default area with all events for the current date', async() => {
    mockedAxios.get.mockResolvedValueOnce(mockedScheduleXml);

    expect(await getSchedule()).toMatchObject(expectedScheduleJson);
    expect(axios.get).toHaveBeenCalledWith("https://www.finnkino.fi/xml/Schedule/");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
  test('should get schedule for default area with all events for a defined date', async() => {
    mockedAxios.get.mockResolvedValueOnce(mockedScheduleXml);

    expect(await getSchedule({ date: '2022-01-01T00:00:00' })).toMatchObject(expectedScheduleJson);
    expect(axios.get).toHaveBeenCalledWith("https://www.finnkino.fi/xml/Schedule/?dt=01.01.2022");
    expect(axios.get).toHaveBeenCalledTimes(1);
  })
  test('should get schedule for defined area and default date', async() => {
    mockedAxios.get.mockResolvedValueOnce(mockedScheduleXml);

    expect(await getSchedule({ theatreAreaId: '1038' })).toMatchObject(expectedScheduleJson);
    expect(axios.get).toHaveBeenCalledWith("https://www.finnkino.fi/xml/Schedule/?area=1038");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('should get schedule for defined event', async() => {
    mockedAxios.get.mockResolvedValueOnce(mockedScheduleXml);

    expect(await getSchedule({ eventId: '303601' })).toMatchObject(expectedScheduleJson);
    expect(axios.get).toHaveBeenCalledWith("https://www.finnkino.fi/xml/Schedule/?eventID=303601");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
  test('should get schedule for defined number of days', async() => {
    mockedAxios.get.mockResolvedValueOnce(mockedScheduleXml);

    expect(await getSchedule({ numberOfDays: 3 })).toMatchObject(expectedScheduleJson);
    expect(axios.get).toHaveBeenCalledWith("https://www.finnkino.fi/xml/Schedule/?nrOfDays=3");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('should get schedule for defined area, defined event, and defined number of days', async() => {
    mockedAxios.get.mockResolvedValueOnce(mockedScheduleXml);

    expect(await getSchedule({ theatreAreaId: '1038', eventId: '303601', numberOfDays: 3 })).toMatchObject(expectedScheduleJson);
    expect(axios.get).toHaveBeenCalledWith("https://www.finnkino.fi/xml/Schedule/?area=1038&eventID=303601&nrOfDays=3");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("It should return error if axios query fails", () => {

  });
});