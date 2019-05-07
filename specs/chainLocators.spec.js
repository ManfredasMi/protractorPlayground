const chainLocators = require("../pages/chainLocators");

describe("Protractor demo chain locators test suite: ", () => {
    beforeAll(() => {
      browser.get("https://juliemr.github.io/protractor-demo/");
    });
  
    it("Add two values and show result", () => {
      chainLocators.enterFirstValue("3");
      chainLocators.enterSecondValue("5");
      chainLocators.clickGoButton();
      chainLocators.result();
    });
  });