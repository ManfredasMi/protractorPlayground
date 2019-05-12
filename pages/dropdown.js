const Dropdown = function() {
  this.firstInputBox = element(by.model("first"));
  this.secondInputBox = element(by.model("second"));
  this.goButton = element(by.id("gobutton"));
  this.operator = element.all(by.tagName("option"));
  this.divide = $('option[value="MULTIPLICATION"]');
  this.allRepeaters = element.all(by.repeater("result in memory"));
  this.result = ("td:nth-child(3)");

  this.calculation = (a, b, c) => {
    this.firstInputBox.sendKeys(a);
    this.secondInputBox.sendKeys(b);
    this.operator.each(item => {
      item.getAttribute("value").then(values => {
        if (values == c) {
          item.click();
        }
      });
    });
    this.goButton.click();
  };

  this.allResults = () => {
    this.allRepeaters.each(item => {
      item
        .$(this.result)
        .getText()
        .then(text => {
          console.log(text);
        });
    });
  };

  this.division = () => {
    this.divide.click();
  };
};
module.exports = new Dropdown();
