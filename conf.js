const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",    // not needed when running tests on jenkins
  specs: ["specs/dynamicSections.spec.js"],
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  },
  capabilities: {
    browserName: "chrome"
  },
  suites: {
    smoke: ['specs/chainLocators.spec.js', 'specs/dropdown.spec.js'],
    regression: 'specs/actions.spec.js'
  },
  onPrepare: () => {
    // maximize the web window
    browser.driver
      .manage()
      .window()
      .maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: "target/screenshots"
      })
    );
  }
};
