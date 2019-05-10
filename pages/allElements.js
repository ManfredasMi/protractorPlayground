const AllElements = function() {
  this.firstInputBox = element(by.model("first"));
  this.secondInputBox = element(by.model("second"));
  this.goButton = element(by.id("gobutton"));

  // my locators:

  // this.allResults = $$(by.repeater('result in memory')).$('td:nth-child(3)');
  // this.allResults = $(('.table')).$$(('td:nth-child(3)'));

  this.allRepeaters = element.all(by.repeater("result in memory"));
  this.result = $("td:nth-child(3)");

  this.enterFirstValue = number => {
    this.firstInputBox.sendKeys(number);
  };

  this.enterSecondValue = number => {
    this.secondInputBox.sendKeys(number);
  };

  this.clickGoButton = () => {
    this.goButton.click();
  };

  this.sum = (a, b) => {
    this.firstInputBox.sendKeys(a);
    this.secondInputBox.sendKeys(b);
    this.goButton.click();
  };

  this.allResults = () => {
    this.allRepeaters.each(item => {
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
  //     this.allResults.getText().then((text) => {
  //       console.log(text);
  //     });
  //   };
};
module.exports = new AllElements();
