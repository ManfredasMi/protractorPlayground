const DynamicSections = function() {
  this.shop = $("a[href*='shop']");
  this.allBuyOptions = by.tagName("app-card");
  this.allCardTitles = ".card-title a";
  this.addToCart = ".card-footer .btn"; // "button[class='btn btn-info']"
  //   this.checkoutItems = "a[class='nav-link btn btn-primary']";
  this.checkoutItems = by.partialLinkText("Checkout");

  this.clickShop = () => {
    this.shop.click();
  };

  this.clickAddToCartIphoneX = () => {
    element.all(this.allBuyOptions).each(item => {
      item
        .$$(this.allCardTitles)
        .getText()
        .then(text => {
          if (text == "Samsung Note 8") {
            console.log("Looking for Samsung Note 8, added " + text);
            item.$(this.addToCart).click();
          } else if (text == "iphone X") {
            console.log("Looking for iphone x, added " + text);
            item.$(this.addToCart).click();
          } else {
            console.log("Not any of wanted phones, looping foward.");
          }
        });
    });
  };

  this.countCheckoutItems = () => {
    return element(this.checkoutItems)
      .getText()
      .then(number => {
        var phoneCount = number.split("(");
        expect(phoneCount[1].trim().charAt(0)).toEqual("2");   // have to fix that expect was in spec
        console.log("The checkout has items in it: " + number);
      });
  };
};
module.exports = new DynamicSections();
