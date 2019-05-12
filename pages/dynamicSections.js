const DynamicSections = function() {
  this.shop = $("a[href*='shop']");
  this.allBuyOptions = $$("app-card");     // try implementing with element.all(by.tagName("app-card"));
  this.allCardTitles = (".card-title");
  this.addToCart = (".card-footer .btn");  // "button[class='btn btn-info']"

  this.clickShop = () => {
    this.shop.click();
  };

  this.clickAddToCartIphoneX = () => {
    this.allBuyOptions.each(item => {
      item
        .$$(this.allCardTitles)
        .getText()
        .then(text => {
          if (text == "Samsung Note 8") {
            console.log("Test passed your phone is :" + text);
            item.$(this.addToCart).click();
          } else {
            console.log("Not Samsung Note 8, looping forward");
          }
        });
    });
  };
};
module.exports = new DynamicSections();
