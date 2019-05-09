const popups = require("../pages/popups");

describe("Protractor alerts test suite: ", () => {
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    browser.get("http://qaclickacademy.com/practice.php");
  });

  it("Test alert", () => {
    popups.popupAccepted();
    browser.sleep(4000);
  });
});
