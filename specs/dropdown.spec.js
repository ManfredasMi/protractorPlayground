const dropdown = require("../pages/dropdown")

describe("Protractor dropdown test suite: ", () => {
    beforeAll(() => {
      browser.get("https://juliemr.github.io/protractor-demo/");
    });
  
    it("Add two values, operator and show result", () => {
        dropdown.calculation(2, 12, "MULTIPLICATION");    // 3rd argument can be: ADDITION, DIVISION,
                                                          // MODULO, MULTIPLICATION, SUBTRACTION
        dropdown.calculation(16, 4, "DIVISION");
        dropdown.calculation(16, 4, "SUBTRACTION");
        dropdown.allResults();
    });
  });