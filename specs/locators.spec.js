const locators = require("../pages/locators");
const url = require("../pages/urls");

describe("Protractor locators test suite: ", () => {
  beforeAll(() => {
    url.getUrl();
  });

  it("Add two values and show result", () => {
    locators.enterFirstValue("3");
    locators.enterSecondValue("5");
    locators.clickGoButton();
    expect(locators.getResult()).toEqual("8");
  });
});