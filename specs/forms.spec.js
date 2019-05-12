const forms = require("../pages/forms");
const urls = require("../pages/urls");

describe("Protractor forms test suite: ", () => {
  beforeEach(() => {
    urls.getUrlEcommerce();
  });

  xit("Test forms", () => {
    forms.inputName("Manfredas");
    forms.inputEmail("sveix@ggg.com");
    forms.inputPassword("sveix");
    forms.checkCheckbox();
    forms.selectGender(1); // 0 - male, 1 - female
    forms.checkRadioButton();
    forms.clickSubmit();
    forms.getSuccessMessage();
  });

  it("Test validation error", () => {
    forms.inputName("M");
    forms.inputEmail("sveix@ggg.com");
    expect(forms.validateNameErrorMessage()).toBe("Name should be at least 2 characters");
    browser.sleep(4000);
  });
  afterEach(() => {
    console.log("Test is complete");
  });
});


