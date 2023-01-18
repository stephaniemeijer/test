const templateFunction = require("../src/template");

describe("TemplateFunction should return half of the provided", () => {
  it("2 -> 1 ", () => {
    expect(templateFunction(2)).toEqual(1);
  });
});
