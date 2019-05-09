const Frames = function() {
  const framesLink = $("a[href*='sign_in']");

  this.printFrameLink = () => {
    browser.switchTo().frame("courses-iframe");
    framesLink.getText().then(text => {
      console.log(text);
    });
  };
};
module.exports = new Frames();
