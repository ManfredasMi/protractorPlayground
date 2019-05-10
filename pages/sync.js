let EC = protractor.expectedConditions;

const Sync = function() {
  const link = $("a[href*='loadAjax']");
  const results = element(by.id("results"));
  const spinner = element(by.id("loader"));

  this.clickLink = () => {
    link.click();
  };

  this.getResult = () => {
    browser.wait(EC.invisibilityOf(spinner), 8000);
    results.getText().then(text => {
      console.log(text);
    });
  };
};
module.exports = new Sync();
