const assert = require("assert");
const calculator = require("./app");

describe("calculator", () => {
  describe("add", function () {
    it("should return the sum of two numbers", function () {
      assert.strictEqual(calculator.add(6, 4), 10);
      assert.strictEqual(calculator.add(-6, 4), -2);
      assert.strictEqual(calculator.add(-6, -4), -10);
    });
    // TODO: edge cases
  });
  describe("subtract", () => {
    it("should return the difference of two numbers", () => {
      assert.strictEqual(calculator.subtract(6, 4), 2);
      assert.strictEqual(calculator.subtract(-6, 4), -10);
      assert.strictEqual(calculator.subtract(-6, -4), -2);

      //TODO: edge cases
    });
  });
  describe("multiply", () => {
    it("should return the product of two numbers", () => {
      assert.strictEqual(calculator.multiply(6, 4), 24);
      assert.strictEqual(calculator.multiply(-6, 4), -24);
      assert.strictEqual(calculator.multiply(-6, -4), 24);
      //TODO: edge cases
    });
  });
});
