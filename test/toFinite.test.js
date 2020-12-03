import chai from "chai";
import toFinite from "../src/toFinite.js";

describe("To Finite", () => {
  it("Numbers should remain unchanged", () => {
     it("Integers", () => {
        chai.expect(toFinite(123)).to.equal(123);
     });
    it("Floats", () => {
        chai.expect(toFinite(12.3)).to.equal(12.3);
     });
  });

  it("Should return 1.7976931348623157e+308 for Infinity", () => {
    chai.expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308);
  });

  it("Should return 5e-324 for Number.MIN_VALUE", () => {
    chai.expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324);
  });

  it("Should return 0 for null", () => {
    chai.expect(toFinite(null)).to.equal(0);
  });

  it("Should return 0 for NaN", () => {
    chai.expect(toFinite(NaN)).to.equal(0);
  });

  it("Should return 0 for undefined", () => {
    chai.expect(toFinite(undefined)).to.equal(0);
  });

});
