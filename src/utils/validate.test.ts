import { isValidDate, isValidPattern, isValidDayMonthOrder } from "./validate";

describe("Tests validation utilities", () => {
  it("correctly tests date format pattern", () => {
    const dateToTest1 = "2023/12/31";
    const dateToTest2 = "12/31/2023";
    const dateToTest3 = "12/2023/31";
    
    expect(isValidPattern(dateToTest1)).toBe(true);
    expect(isValidPattern(dateToTest2)).toBe(false);
    expect(isValidPattern(dateToTest3)).toBe(false);
  })

  it("correctly checks that months and days are in correct order",  () =>{
    const dateToTest1 = "2023/12/31";
    const dateToTest2 = "2023/31/12";
    const dateToTest3 = "2023/15/04";
    const dateToTest4 = "2023/02/20";

    expect(isValidDayMonthOrder(dateToTest1)).toBe(true)
    expect(isValidDayMonthOrder(dateToTest2)).toBe(false)
    expect(isValidDayMonthOrder(dateToTest3)).toBe(false)
    expect(isValidDayMonthOrder(dateToTest4)).toBe(true)
  })

  it("date validation returns true for a correctly formatted date", () => {
    const dateToTest1 = "2023/04/03";
    const dateToTest2 = "12/06/2023";
    const dateToTest3 = "2023/12/24";
    expect(isValidDate(dateToTest1)).toBe(true);
    expect(isValidDate(dateToTest2)).toBe(false);
    expect(isValidDate(dateToTest3)).toBe(true);
  })
  
  it("date validation returns false for an incorrectly formatted date", () => {
    const dateToTest1 = "2023/22/03";
    const dateToTest2 = "2023/12/03";
    const dateToTest3 = "2023/13/10";
    const dateToTest4 = "2022/01/01";
    const dateToTest5 = "2022/01/44";

    expect(isValidDate(dateToTest1)).toBe(false);
    expect(isValidDate(dateToTest2)).toBe(true);
    expect(isValidDate(dateToTest3)).toBe(false);
    expect(isValidDate(dateToTest4)).toBe(true);
    expect(isValidDate(dateToTest5)).toBe(false);
  })

  it("date validation returns false for an correctly formatted but incorrect date", () => {
    const dateToTest1 = "2022/01/44";
    const dateToTest2 = "1969/01/44";

    expect(isValidDate(dateToTest1)).toBe(false);
    expect(isValidDate(dateToTest2)).toBe(false);
  })
})