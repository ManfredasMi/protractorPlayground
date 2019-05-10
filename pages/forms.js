const Forms = function() {
  const nameFieldBox = $("input[name='name'][required]");
  const email = $("input[name='email']");
  const password = $("#exampleInputPassword1");
  const checkbox = $("#exampleCheck1");
  const gender = $("#exampleFormControlSelect1").$$("option");
  //   const gender = element(by.cssContainingText("#exampleFormControlSelect1 option", "Female"))
  const radioButton = element.all(by.name("inlineRadioOptions"));
  const submit = element(by.buttonText("Submit"));

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
};
module.exports = new Forms();
