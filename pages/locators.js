const testData = require("../testData/testData");

const Locators = function() {
  this.firstInputBox = element(by.model("first"));
  this.secondInputBox = element(by.model("second"));
  this.goButton = element(by.id("gobutton"));
  //tagname[attribute="value"]
  this.result = $('h2[class="ng-binding"]');

  this.enterFirstValue = () => {
    this.firstInputBox.sendKeys(testData.values.firstValue);
  };

  this.enterSecondValue = () => {
    this.secondInputBox.sendKeys(testData.values.secondValue);
  };

  this.clickGoButton = () => {
    this.goButton.click();
  };

  this.getResult = () => {
    return this.result.getText();
  };
};
module.exports = new Locators();
