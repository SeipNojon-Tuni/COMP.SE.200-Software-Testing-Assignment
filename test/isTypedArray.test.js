import chai from "chai";
import isTypedArray from "../src/isTypedArray.js";

describe("isTypedArray", () => {
  it("Should return true for typed arrays", () => {
    chai.expect(isTypedArray(new Uint8Array)).to.equal(true);
    chai.expect(isTypedArray(new Float32Array)).to.equal(true);
  });

  it("Should return false for values that are not typed arrays", () => {
    chai.expect(isTypedArray([])).to.equal(false);
    chai.expect(isTypedArray(undefined)).to.equal(false);
    chai.expect(isTypedArray("Not typed array")).to.equal(false);
    chai.expect(isTypedArray(123)).to.equal(false);
  });
});
