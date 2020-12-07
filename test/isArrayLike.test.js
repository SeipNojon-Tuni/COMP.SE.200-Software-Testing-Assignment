import chai from "chai";
import isArrayLike from "../src/isArrayLike.js";

describe("isArrayLike()", () => {
  it("Should return true for array-like values", () => {
    chai.expect(isArrayLike([1, 2, 3])).to.equal(true);
    chai.expect(isArrayLike("Has indexing, is arraylike")).to.equal(true);
    chai.expect(isArrayLike([[]])).to.equal(true);
  });
  it("Should return false for values that are not array-like", () => {
    chai.expect(isArrayLike(123)).to.equal(false);
    chai.expect(isArrayLike(()=>{})).to.equal(false);
    chai.expect(isArrayLike(null)).to.equal(false);
    chai.expect(isArrayLike({"a":1, "b":1, "c":2})).to.equal(false);
  });
});
