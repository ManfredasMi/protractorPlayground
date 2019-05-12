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

  this.clickAddPhoneToCart = phone => {
    element.all(this.allBuyOptions).each(item => {
      item
        .$$(this.allCardTitles)
        .getText()
        .then(text => {
          if (text == phone) {
            item.$(this.addToCart).click();
          }
        });
    });
  };

  this.countCheckoutItems = () => {
    return element(this.checkoutItems)
      .getText()
      .then(number => {
        var phoneCount = number.split("(");
        return phoneCount[1].trim().charAt(0);
      });
  };
};
module.exports = new DynamicSections();
