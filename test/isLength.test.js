import chai from "chai";
import isLength from "../src/isLength.js";

describe("Is Length", () => {
  it("Should return true for positive integers", () => {
    chai.expect(isLength(2)).to.equal(true);
    chai.expect(isLength(Number.MAX_SAFE_INTEGER)).to.equal(true);
  });

  it("Should return false for NaN, negative or infinite values", () => {
    chai.expect(isLength(Number.MIN_VALUE)).to.equal(false);
    chai.expect(isLength(2.5)).to.equal(false);
    chai.expect(isLength(Infinity)).to.equal(false);
    chai.expect(isLength("12")).to.equal(false);
    chai.expect(isLength(-3)).to.equal(false);
    chai.expect(isLength([])).to.equal(false);
     chai.expect(isLength(null)).to.equal(false);
  });
});

