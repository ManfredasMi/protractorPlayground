const Frames = function() {
  this.framesLink = $("a[href*='sign_in']");

  this.printFrameLink = () => {
    browser.switchTo().frame("courses-iframe");
    this.framesLink.getText().then(text => {
      console.log(text);
    });
  };
};
module.exports = new Frames();
