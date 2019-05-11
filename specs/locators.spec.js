const locators = require("../pages/locators");
const url = require("../pages/urls");
const testData = require("../testData/testData");

describe("Protractor locators test suite: ", () => {
  beforeAll(() => {
    url.getUrl();
  });

  it("Add two values and show result", () => {
    locators.enterFirstValue();
    locators.enterSecondValue();
    locators.clickGoButton();
    expect(locators.getResult()).toEqual(testData.values.result);
  });
  afterAll(() => {
    console.log("Test is complete");
  });
});