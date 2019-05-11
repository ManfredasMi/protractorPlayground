const locatorsMultipleTest = require("../pages/locatorsMultipleTest");
const url = require("../pages/urls");
const objectDataProvider = require("../testData/objectDataprovider");
const using = require("jasmine-data-provider");

describe("Protractor locators test suite: ", () => {
  beforeAll(() => {
    url.getUrl();
  });

  using(objectDataProvider.datadriven, (data, description) => {
    it("Add two values and test result " + description, () => {
      locatorsMultipleTest.enterFirstValue(data.firstValue);
      locatorsMultipleTest.enterSecondValue(data.secondValue);
      locatorsMultipleTest.clickGoButton();
      expect(locatorsMultipleTest.getResult()).toEqual(data.result);
    });
  });

  afterEach(() => {
    console.log("Test is complete");
  });
});
