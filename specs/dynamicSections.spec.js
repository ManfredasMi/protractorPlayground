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
    dynamicSections.countCheckoutItems();
  });
  afterEach(() => {
    console.log("Test is complete");
  });
});


