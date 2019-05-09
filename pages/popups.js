const Popups = function() {
  const confirm = element(by.id("confirmbtn"));

  this.popupAccepted = () => {
    confirm.click();
    browser.switchTo().alert().accept();
    // opposite to accept
    // browser.switchTo().alert().dismiss();
  };
};
module.exports = new Popups();
