const ChainLocators = function() {
  this.firstInputBox = element(by.model("first"));
  this.secondInputBox = element(by.model("second"));
  this.goButton = element(by.id("gobutton"));
  this.repeater = element(by.repeater("result in memory"))
    .$$(".ng-binding")
    .get(4);

  this.enterFirstValue = number => {
    this.firstInputBox.sendKeys(number);
  };

  this.enterSecondValue = number => {
    this.secondInputBox.sendKeys(number);
  };

  this.clickGoButton = () => {
    this.goButton.click();
  };

  this.result = () => {
    return this.repeater.getText().then(text => {
      console.log(text);
    });
  };
};
module.exports = new ChainLocators();
