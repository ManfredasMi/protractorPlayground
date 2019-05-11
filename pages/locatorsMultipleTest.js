const testData = require("../testData/testData");

const LocatorsMultipleTest = function() {
  this.firstInputBox = element(by.model("first"));
  this.secondInputBox = element(by.model("second"));
  this.goButton = element(by.id("gobutton"));
  //tagname[attribute="value"]
  this.result = $('h2[class="ng-binding"]');

  this.enterFirstValue = (number) => {
    this.firstInputBox.sendKeys(number);
  };

  this.enterSecondValue = (number) => {
    this.secondInputBox.sendKeys(number);
  };

  this.clickGoButton = () => {
    this.goButton.click();
  };

  this.getResult = () => {
    return this.result.getText();
  };
};
module.exports = new LocatorsMultipleTest();
