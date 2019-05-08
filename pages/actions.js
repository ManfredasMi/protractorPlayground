const Actions = function() {
  const placeInput = element(by.model("userInputQuery"));
  const location = element(by.model("locationQuery"));

  this.enterPlace = text => {
    placeInput.sendKeys(text);
  };

  this.enterLocation = text => {
    browser
      .actions()
      .mouseMove(location.sendKeys(text))
      .perform();
    browser
      .actions()
      .sendKeys(protractor.Key.ARROW_DOWN)
      .perform();
    browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  };
};
module.exports = new Actions();
