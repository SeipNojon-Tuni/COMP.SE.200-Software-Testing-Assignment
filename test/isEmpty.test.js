import chai from "chai";
import isEmpty from "../src/isEmpty.js";

describe("Is Empty", () => {
  it("Should return true for empty values", () => {
    chai.expect(isEmpty(null)).to.equal(true);
    chai.expect(isEmpty("")).to.equal(true);
    chai.expect(isEmpty([])).to.equal(true);
    chai.expect(isEmpty({})).to.equal(true);
    chai.expect(isEmpty(123)).to.equal(true);
    chai.expect(isEmpty(Number.MAX_SAFE_INTEGER)).to.equal(true);
  });
  it("Should return false for non-empty values", () => {
    chai.expect(isEmpty("String not empty")).to.equal(false);
    chai.expect(isEmpty([1, 2, 3])).to.equal(false);
    chai.expect(isEmpty({"a": 134})).to.equal(false);
    chai.expect(isEmpty([[]])).to.equal(false);
  });
});
