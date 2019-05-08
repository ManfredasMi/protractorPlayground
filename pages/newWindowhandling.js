browser.switchTo().window(nameOrHandle); // attribute about what you have to call - nameOrHandle

browser.getAllWindowHandles().then(handles => {
  browser.switchTo().window(handles[1]);
  // test if you switched to that window
  browser.getTitle().then(title => {
      console.log(title);
  });
});
