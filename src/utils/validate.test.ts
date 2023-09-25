import { isValidDate, isValidPattern, isValidDayMonthOrder } from "./validate";
import { createDateString } from "./testHelpers";

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
    const dateToTest1 = createDateString(5);
    const dateToTest2 = createDateString(31);
    const dateToTest3 = createDateString(50);

    const expectedMsg = { valid: true, msg: "" }
    expect(isValidDate(dateToTest1)).toMatchObject(expectedMsg);
    expect(isValidDate(dateToTest2)).toMatchObject(expectedMsg);
    expect(isValidDate(dateToTest3)).not.toMatchObject(expectedMsg);
  });
  
  it("date validation returns false for an incorrectly formatted date", () => {
    const dateToTest1 = "2023/22/03";
    const dateToTest2 = "2023/13/10";
    const dateToTest3 = "2022/01/44";

    const expectedObject = { valid: false, msg: "Invalid date format. Please enter date in DDDD/MM/YY format."}

    expect(isValidDate(dateToTest1)).toMatchObject(expectedObject);
    expect(isValidDate(dateToTest2)).toMatchObject(expectedObject);
    expect(isValidDate(dateToTest3)).toMatchObject(expectedObject);
  });

  it("returns true when given date is within 1-31 days of the current date", () => {
    const dateToTest1 = createDateString(1);
    const dateToTest2 = createDateString(31);
    const dateToTest3 = createDateString(15);

    expect(isValidDate(dateToTest1)).toMatchObject({ valid: true, msg: ""})
    expect(isValidDate(dateToTest2)).toMatchObject({ valid: true, msg: ""})
    expect(isValidDate(dateToTest3)).toMatchObject({ valid: true, msg: ""})
  })
})