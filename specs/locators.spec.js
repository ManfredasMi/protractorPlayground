const locators = require("../pages/locators");

describe("Protractor locators test suite: ", () => {
  beforeAll(() => {
    browser.get("https://juliemr.github.io/protractor-demo/");
  });

  it("Add two values and show result", () => {
    locators.enterFirstValue("3");
    locators.enterSecondValue("5");
    locators.clickGoButton();
    expect(locators.getResult()).toBe("8");
  });
});