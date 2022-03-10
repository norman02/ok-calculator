const assert = require("assert");
const calculator = require("./app");

describe("calculator", () => {
  describe("add", function () {
    it("should add two numbers", function () {
      assert.strictEqual(calculator.add(6, 4), 10);
      assert.strictEqual(calculator.add(-6, 4), -2);
      assert.strictEqual(calculator.add(-6, -4), -10);
    });
    // TODO: edge cases
  });
  describe("subtract", () => {
    it("should subtract a number", () => {
      assert.strictEqual(calculator.subtract(6, 4), 2);
      assert.strictEqual(calculator.subtract(-6, 4), -10);
      assert.strictEqual(calculator.subtract(-6, -4), -2)

      //TODO: edge cases
    });
  });
});
