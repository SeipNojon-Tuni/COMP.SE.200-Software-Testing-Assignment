import chai from "chai";
import isObject from "../src/isObject.js";

describe("isObject()", () => {
  it("Should return true for objects", () => {
    chai.expect(isObject({"a": 12})).to.equal(true);
    chai.expect(isObject([1, 2])).to.equal(true);
    chai.expect(isObject( function(){} )).to.equal(true);

  });
  it("Should return false for values that are not objects", () => {
    chai.expect(isObject(undefined)).to.equal(false);
    chai.expect(isObject(null)).to.equal(false);
    chai.expect(isObject("Object-like")).to.equal(false);
    chai.expect(isObject(777)).to.equal(false);
  });
});
