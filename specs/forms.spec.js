const forms = require("../pages/forms");

describe("Protractor forms test suite: ", () => {
  beforeAll(() => {
    browser.driver
      .manage()
      .window()
      .maximize(); // maximize the web window
    browser.get("http://qaclickacademy.github.io/protocommerce");
  });

  it("Test forms", () => {
    forms.inputName("Manfredas");
    forms.inputEmail("sveix@ggg.com");
    forms.inputPassword("sveix");
    forms.checkCheckbox();
    forms.selectGender(1); // 0 - male, 1 - female
    forms.checkRadioButton();
    forms.clickSubmit();
    browser.sleep(4000);
  });
});
