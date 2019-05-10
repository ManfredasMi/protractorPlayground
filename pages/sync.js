const Sync = function() {
  this.EC = protractor.ExpectedConditions;
  this.link = $("a[href*='loadAjax']");
  this.results = element(by.id("results"));
  this.spinner = element(by.id("loader"));

  this.clickLink = () => {
    this.link.click();
  };

  this.getResult = () => {
    browser.wait(this.EC.invisibilityOf(this.spinner), 8000);
    this.results.getText().then(text => {
      console.log(text);
    });
  };
};
module.exports = new Sync();
