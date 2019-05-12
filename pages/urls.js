const Urls = function() {
  this.url = "https://juliemr.github.io/protractor-demo/";
  this.urlEcommerce = "http://qaclickacademy.github.io/protocommerce";

  this.getUrl = () => {
    browser.get(this.url);
  };

  this.getUrlEcommerce = () => {
    browser.get(this.urlEcommerce);
  };
};
module.exports = new Urls();
