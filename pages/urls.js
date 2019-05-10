const Urls = function() {
  this.url = "https://juliemr.github.io/protractor-demo/";

  this.getUrl = () => {
    browser.get(this.url);
  };
};
module.exports = new Urls();
