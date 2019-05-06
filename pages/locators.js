const Locators = function() {
  const firstInputBox = element(by.model("first"));
  const secondInputBox = element(by.model("second"));
  const goButton = element(by.id("gobutton"));
  //tagname[attribute="value"]
  const result = $('h2[class="ng-binding"]');

  this.enterFirstValue = number => {
    firstInputBox.sendKeys(number);
  };

  this.enterSecondValue = number => {
    secondInputBox.sendKeys(number);
  };

  this.clickGoButton = () => {
    goButton.click();
  };

  this.getResult = () => {
    return result.getText();
  };
};
module.exports = new Locators();
