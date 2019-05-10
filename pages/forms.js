const Forms = function() {
  this.nameFieldBox = $("input[name='name'][required]");
  this.email = $("input[name='email']");
  this.password = $("#exampleInputPassword1");
  this.checkbox = $("#exampleCheck1");
  this.gender = $("#exampleFormControlSelect1").$$("option");
  //   this.gender = element(by.cssContainingText("#exampleFormControlSelect1 option", "Female"))
  this.radioButton = element.all(by.name("inlineRadioOptions"));
  this.submit = element(by.buttonText("Submit"));
  // this.submitMessage = $(".alert strong");
  this.submitMessage = $("div[class*='success']");
  this.nameErrorMessage = $(".form-group .alert");     // alt selector: [class="alert alert-danger"]

  this.inputName = text => {
    this.nameFieldBox.sendKeys(text);
  };

  this.inputEmail = text => {
    this.email.sendKeys(text);
  };

  this.inputPassword = text => {
    this.password.sendKeys(text);
  };

  this.checkCheckbox = () => {
    this.checkbox.click();
  };

  this.selectGender = number => {
    this.gender.get(number).click();
  };

  this.checkRadioButton = () => {
    this.radioButton.first().click();
  };

  this.clickSubmit = () => {
    this.submit.click();
  };

  this.getSuccessMessage = () => {
    this.submitMessage.getText().then(text => {
      console.log(text);
    });
  };

  this.validateNameErrorMessage = () => {
    return this.nameErrorMessage.getText();
  }
};
module.exports = new Forms();
