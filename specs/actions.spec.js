const actions = require("../pages/actions");

describe("Actions demo: ", () => {
  beforeAll(() => {
    browser.get("https://posse.com/");
  });

  it("opens posse website", () => {
    actions.enterPlace("river");
    actions.enterLocation("London");
    browser.sleep(3000);
  });
});
