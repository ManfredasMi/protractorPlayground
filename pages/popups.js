const Popups = function() {
  this.confirm = element(by.id("confirmbtn"));

  this.popupAccepted = () => {
    this.confirm.click();
    browser.switchTo().alert().accept();
    // opposite to accept
    // browser.switchTo().alert().dismiss();
  };
};
module.exports = new Popups();
