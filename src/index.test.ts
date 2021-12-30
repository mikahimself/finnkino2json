import { getAreaData, getScheduleDates } from "./index";

jest.mock("./utils/getDataFromUrl")

describe("Get Areas from Finnkino API", () => {
  test("It should convert received areas to JSON", async () => {
    const expected = [
      { id: '1029', name: 'Valitse alue/teatteri' },
      { id: '1014', name: 'Pääkaupunkiseutu' },
      { id: '1012', name: 'Espoo' },
      { id: '1039', name: 'Espoo: OMENA' },
      { id: '1038', name: 'Espoo: SELLO' },
    ]
    expect(await getAreaData()).toMatchObject(expected);
  });
  test("It should return error if axios query fails", () => {

  });
})

describe("Get dates from Finnkino API", () => {
  test('should get dates for default area from the API', async () => {
    const expected = [
      {"date": "2021-12-26T00:00:00"},
      {"date": "2021-12-27T00:00:00"},
      {"date": "2022-01-18T00:00:00"},
      {"date": "2022-01-19T00:00:00"},
      {"date": "2022-01-24T00:00:00"},
    ]
    expect(await getScheduleDates()).toMatchObject(expected)
  });
  test('should get dates for a defined area from the API', async() => {

  });
  test("It should return error if axios query fails", () => {

  });
})

describe("Get schedule data from Finnkino API", () => {
  test('should get schedule for default area with all events for the current date', async() => {

  });
  test('should get schedule for default area with all events for a defined date', async() => {

  })
  test('should get schedule for defined area and default date', async() => {

  });
  test('should get schedule for defined area and defined date', async() => {

  });
  test('should get schedule for defined area, defined date and defined event', async() => {

  });
  test('should get schedule for defined area and defined date for defined number of days', async() => {

  });
  test("It should return error if axios query fails", () => {

  });
})