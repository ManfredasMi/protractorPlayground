const dropdown = require("../pages/dropdown")
const url = require("../pages/urls");

describe("Protractor dropdown test suite: ", () => {
    beforeAll(() => {
      url.getUrl();
    });
  
    it("Add two values, operator and show result", () => {
        dropdown.calculation(2, 12, "MULTIPLICATION");    // 3rd argument can be: ADDITION, DIVISION,
                                                          // MODULO, MULTIPLICATION, SUBTRACTION
        dropdown.calculation(16, 4, "DIVISION");
        dropdown.calculation(16, 4, "SUBTRACTION");
        dropdown.allResults();
    });
  });