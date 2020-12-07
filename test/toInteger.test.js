import chai from "chai";
import toInteger from "../src/toInteger.js";

describe("toInteger()", () => {
  it("Should convert float to integer rounding it correctly", () => {
    chai.expect(toInteger(3.2)).to.equal(3);
    chai.expect(toInteger(3.7)).to.equal(3);
    chai.expect(toInteger(15.87125)).to.equal(15);
  });

  it("Input integers should remain unchanged", () => {
    chai.expect(toInteger(-2)).to.equal(-2);
    chai.expect(toInteger(123)).to.equal(123);
    chai.expect(toInteger(15678)).to.equal(15678);
  });

  it("Infinity should return 1.7976931348623157e+308", () => {
    chai.expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    chai.expect(toInteger(-Infinity)).to.equal(-1.7976931348623157e+308);
  });

  it("Number.MINIMUM_VALUE should return 0", () => {
    chai.expect(toInteger(Number.MINIMUM_VALUE)).to.equal(0);
  });

  it("Should convert NaN to 0", () => {
    chai.expect(toInteger(undefined)).to.equal(0);
    chai.expect(toInteger("cat")).to.equal(0);
    chai.expect(toInteger(["dog", "cat"])).to.equal(0);
    chai.expect(toInteger({"dog": "cat"})).to.equal(0);
  });
});
