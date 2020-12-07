import chai from "chai";
import isBuffer from "../src/isBuffer.js";

describe("isBuffer()", () => {
  it("Should return true for Buffer", () => {
    chai.expect( isBuffer(new Buffer(2)) ).to.equal(true);
  });

  // Redundant to call empty value as separate negative test as it equals 'not a Buffer'
  it("Should return false for values that are not Buffers", () => {
    chai.expect(isBuffer("Not a buffer")).to.equal(false);
    chai.expect(isBuffer([])).to.equal(false);
    chai.expect( isBuffer(12) ).to.equal(false);
    chai.expect( isBuffer(new Uint8Array(2))).to.equal(false);
    chai.expect( isBuffer(null) ).to.equal(false);
  });
});
