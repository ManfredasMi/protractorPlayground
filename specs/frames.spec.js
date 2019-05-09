const frames = require("../pages/frames");

describe("Protractor frames test suite: ", () => {
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();         // maximize the web window
    browser.get("http://qaclickacademy.com/practice.php");
  });

  it("Test frames", () => {
    frames.printFrameLink();
    browser.sleep(4000);
  });
});
