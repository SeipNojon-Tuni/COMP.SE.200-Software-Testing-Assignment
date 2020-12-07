import chai from "chai";
import toNumber from "../src/toNumber.js";

describe("toNumber()", () => {
  it("Should convert string containing digits to integer", () => {
    chai.expect(toNumber("1234")).to.equal(1234);
  });

  it("Should convert string containing '-' followed by digits to negative integers", () => {
    chai.expect(toNumber("-87153123")).to.equal(-87153123);
  });

  it("Should convert stringified digits separated by period to floats", () => {
    chai.expect(toNumber("12.34")).to.equal(12.34);
  });

  it("Should convert string containing '-' followed by digits separated by period to negative float", () => {
    chai.expect(toNumber("-4.34")).to.equal(-4.34);
  });

  it("Should return Infinity for 'Infinity'", () => {
    chai.expect(toNumber("Infinity")).to.equal(Infinity);
  });

  it("Should return 5e-324 for Number.MIN_VALUE", () => {
    chai.expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
  });

  it("Should return 0 when parameter is null", () => {
    chai.expect(toNumber(null)).to.equal(0);
  });

  it("Should return NaN when parameter is undefined", () => {
    chai.expect(toNumber(undefined)).to.be.NaN;
  });

  it("Should return NaN when value is not convertable to number", () => {
    chai.expect(toNumber("Alpha")).to.be.NaN;
    chai.expect(toNumber(["a", "b"])).to.be.NaN;
  });

});
