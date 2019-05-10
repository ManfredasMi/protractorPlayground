const sync = require("../pages/sync");

describe("Protractor synchronization test suite: ", () => {
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    browser.driver
      .manage()
      .window()
      .maximize(); // maximize the web window
    browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
  });

  it("Test sync", () => {
    sync.clickLink();
    sync.getResult();
    browser.sleep(4000);
  });
});
