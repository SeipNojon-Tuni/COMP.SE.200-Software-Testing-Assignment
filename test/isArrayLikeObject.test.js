import chai from "chai";
import isArrayLikeObject from "../src/isArrayLikeObject.js";

describe("isArrayLikeObject()", () => {
  it("Should return true for values that are objects and array-like.", () => {
    chai.expect(isArrayLikeObject([1, 2, 3])).to.equal(true);
  });
  it("Should return true for empty arrays.", () => {
    chai.expect(isArrayLikeObject([])).to.equal(true);
  });
  it("Should return false for values that are not objects or array-like.", () => {
    chai.expect(isArrayLikeObject("Not an object.")).to.equal(false);
    chai.expect(isArrayLikeObject(13)).to.equal(false);
    chai.expect(isArrayLikeObject( () => {})).to.equal(false);
    chai.expect(isArrayLikeObject({"a":1, "b":2})).to.equal(false);
    chai.expect(isArrayLikeObject(undefined)).to.equal(false);
  });
});
