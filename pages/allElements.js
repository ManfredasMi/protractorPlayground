const AllElements = function() {
  const firstInputBox = element(by.model("first"));
  const secondInputBox = element(by.model("second"));
  const goButton = element(by.id("gobutton"));

  // my locators:

  // const allResults = $$(by.repeater('result in memory')).$('td:nth-child(3)');
  // const allResults = $(('.table')).$$(('td:nth-child(3)'));

  const allRepeaters = element.all(by.repeater("result in memory"));
  const result = $("td:nth-child(3)");

  this.enterFirstValue = number => {
    firstInputBox.sendKeys(number);
  };

  this.enterSecondValue = number => {
    secondInputBox.sendKeys(number);
  };

  this.clickGoButton = () => {
    goButton.click();
  };

  this.sum = (a, b) => {
    firstInputBox.sendKeys(a);
    secondInputBox.sendKeys(b);
    goButton.click();
  };

  this.allResults = () => {
    allRepeaters.each(item => {
      item
        .$("td:nth-child(3)")    // why I can't use result const in here???
        .getText()
        .then(text => {
          console.log(text);
        });
    });
  };

  // mine method:

  //   this.result = () => {
  //     return allResults.getText().then((text) => {
  //       console.log(text);
  //     });
  //   };
};
module.exports = new AllElements();
