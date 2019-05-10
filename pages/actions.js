const Actions = function() {
  this.placeInput = element(by.model("userInputQuery"));
  this.location = element(by.model("locationQuery"));

  this.enterPlace = text => {
    this.placeInput.sendKeys(text);
  };

  this.enterLocation = text => {
    browser
      .actions()
      .mouseMove(this.location.sendKeys(text))
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
