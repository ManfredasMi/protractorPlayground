const Forms = function() {
  const nameFieldBox = $("input[name='name'][required]");
  const email = $("input[name='email']");
  const password = $("#exampleInputPassword1");
  const checkbox = $("#exampleCheck1");
  const gender = $("#exampleFormControlSelect1").$$("option");
  //   const gender = element(by.cssContainingText("#exampleFormControlSelect1 option", "Female"))
  const radioButton = element.all(by.name("inlineRadioOptions"));
  const submit = element(by.buttonText("Submit"));
  // const submitMessage = $(".alert strong");
  const submitMessage = $("div[class*='success']");
  const nameErrorMessage = $(".form-group .alert");     // alt selector: [class="alert alert-danger"]

  this.inputName = text => {
    nameFieldBox.sendKeys(text);
  };

  this.inputEmail = text => {
    email.sendKeys(text);
  };

  this.inputPassword = text => {
    password.sendKeys(text);
  };

  this.checkCheckbox = () => {
    checkbox.click();
  };

  this.selectGender = number => {
    gender.get(number).click();
  };

  this.checkRadioButton = () => {
    radioButton.first().click();
  };

  this.clickSubmit = () => {
    submit.click();
  };

  this.getSuccessMessage = () => {
    submitMessage.getText().then(text => {
      console.log(text);
    });
  };

  this.validateNameErrorMessage = () => {
    return nameErrorMessage.getText();
  }
};
module.exports = new Forms();
