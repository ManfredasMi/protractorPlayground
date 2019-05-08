const ChainLocators = function() {
  const firstInputBox = element(by.model("first"));
  const secondInputBox = element(by.model("second"));
  const goButton = element(by.id("gobutton"));
  const repeater = element(by.repeater("result in memory"))
    .$$(".ng-binding")
    .get(4);

  this.enterFirstValue = number => {
    firstInputBox.sendKeys(number);
  };

  this.enterSecondValue = number => {
    secondInputBox.sendKeys(number);
  };

  this.clickGoButton = () => {
    goButton.click();
  };

  this.result = () => {
    return repeater.getText().then(text => {
      console.log(text);
    });
  };
};
module.exports = new ChainLocators();
