const Dropdown = function() {
  const firstInputBox = element(by.model("first"));
  const secondInputBox = element(by.model("second"));
  const goButton = element(by.id("gobutton"));
  const operator = element.all(by.tagName("option"));
  const divide = $('option[value="MULTIPLICATION"]');
  const allRepeaters = element.all(by.repeater("result in memory"));

  this.calculation = (a, b, c) => {
    firstInputBox.sendKeys(a);
    secondInputBox.sendKeys(b);
    operator.each(item => {
      item.getAttribute("value").then(values => {
        if (values == c) {
          item.click();
        }
      });
    });
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

  this.division = () => {
    divide.click();
  };
};
module.exports = new Dropdown();
