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
  })
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
  })
})