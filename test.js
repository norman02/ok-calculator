const assert = require("assert");
const calculator = require("./app");

describe("calculator", () => {
  describe("add", function () {
    // can nest more describe()'s here, or tests go here
    it("should add two numbers", function () {
        assert.strictEqual(calculator.add(6, 4), 10);
        assert.strictEqual(calculator.add(-6, 4), -2);
        assert.strictEqual(calculator.add(-6, -4), -10);
    });
    
  });
});
