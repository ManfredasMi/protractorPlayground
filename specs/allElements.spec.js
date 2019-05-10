const allElements = require("../pages/allElements");
const url = require("../pages/urls");

describe("Protractor all locator test suite: ", () => {
  beforeAll(() => {
    url.getUrl();
  });

  it("Add two values and show result", () => {
    allElements.enterFirstValue("3");
    allElements.enterSecondValue("6");
    allElements.clickGoButton();
    // one method to add up two numbers and walk out with a sum
    allElements.sum("1222", "12345");
    allElements.sum("20", "400");
    allElements.allResults();
  });
});
