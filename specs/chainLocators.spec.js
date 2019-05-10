const chainLocators = require("../pages/chainLocators");
const url = require("../pages/urls");

describe("Protractor chain locators test suite: ", () => {
    beforeAll(() => {
      url.getUrl();
    });
  
    it("Add two values and show result", () => {
      chainLocators.enterFirstValue("3");
      chainLocators.enterSecondValue("5");
      chainLocators.clickGoButton();
      chainLocators.result();
    });
  });