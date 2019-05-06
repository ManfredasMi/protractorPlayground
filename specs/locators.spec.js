const locators = require("../pages/locators");
const assert = require('assert');

describe("Protractor demo homepage test suite: ", () => {
  beforeAll(() => {
    browser.get("https://juliemr.github.io/protractor-demo/");
  });

  it("Add two values and show result", () => {
    locators.enterFirstValue("3");
    locators.enterSecondValue("5");
    locators.clickGoButton();
    locators
      .getResult()
      .then((text) => {
        assert.equal(text, "9");
      })
      .catch(error => {
        console.error("The sum is invalid", error);
      });
  });
});
