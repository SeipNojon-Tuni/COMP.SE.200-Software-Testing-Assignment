import chai from "chai";
import isObjectLike from "../src/isObjectLike.js";

describe("isObjecLike()", () => {
  it("Should return true for object-like values", () => {
    chai.expect(isObjectLike({})).to.equal(true);
    chai.expect(isObjectLike([])).to.equal(true);

  });
  it("Should return false for non-object-like values", () => {
    chai.expect(isObjectLike(undefined)).to.equal(false);
    chai.expect(isObjectLike(null)).to.equal(false);
    chai.expect(isObjectLike("Object-like")).to.equal(false);
    chai.expect(isObjectLike(777)).to.equal(false);
    chai.expect(isObjectLike( function(){} )).to.equal(false);
  });
});
