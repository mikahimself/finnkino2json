import { getAreaData } from "./finnkino2json";

describe("Get Areas from Finnkino API", () => {
  test("It should convert received areas to JSON", async () => {
    const expected = [
      { id: '1029', name: 'Valitse alue/teatteri' },
      { id: '1014', name: 'Pääkaupunkiseutu' },
      { id: '1012', name: 'Espoo' },
      { id: '1039', name: 'Espoo: OMENA' },
      { id: '1038', name: 'Espoo: SELLO' },
      { id: '1002', name: 'Helsinki' },
      { id: '1045', name: 'Helsinki: ITIS' },
      { id: '1031', name: 'Helsinki: KINOPALATSI' },
      { id: '1032', name: 'Helsinki: MAXIM' },
      { id: '1033', name: 'Helsinki: TENNISPALATSI' },
      { id: '1013', name: 'Vantaa: FLAMINGO' },
      { id: '1015', name: 'Jyväskylä: FANTASIA' },
      { id: '1016', name: 'Kuopio: SCALA' },
      { id: '1017', name: 'Lahti: KUVAPALATSI' },
      { id: '1041', name: 'Lappeenranta: STRAND' },
      { id: '1018', name: 'Oulu: PLAZA' },
      { id: '1019', name: 'Pori: PROMENADI' },
      { id: '1021', name: 'Tampere' },
      { id: '1034', name: 'Tampere: CINE ATLAS' },
      { id: '1035', name: 'Tampere: PLEVNA' },
      { id: '1022', name: 'Turku: KINOPALATSI' }
    ]
    expect(await getAreaData()).toMatchObject(expected);
  })
})