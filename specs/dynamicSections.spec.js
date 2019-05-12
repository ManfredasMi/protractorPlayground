const dynamicSections = require("../pages/dynamicSections");
const urls = require("../pages/urls");

const forms = require("../pages/forms");

describe("Protractor dynamic sections handling test suite: ", () => {
  beforeEach(() => {
    urls.getUrlEcommerce();
  });

  it("Testing handling", () => {
    dynamicSections.clickShop();
    dynamicSections.clickAddToCartIphoneX();
    // expect(forms.validateNameErrorMessage()).toBe("Name should be at least 2 characters");
    browser.sleep(4000);
  });
  afterEach(() => {
    console.log("Test is complete");
  });
});


