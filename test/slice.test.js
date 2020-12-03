import chai from "chai";
import slice from "../src/slice.js";

describe("Slice", () => {
  it("Should return starting slice of array until given index", () => {
    const ref1 = ["alpha", "beta", "charlie"]
    const ref2 = ["alpha", "beta", "charlie", "gamma", 12, 15]
    const ref3 = ["alpha", "beta", "charlie", 12, "gamma", "echo",  15]
    chai.expect(slice(ref1, 0, 2)).to.be.an('array').to.eql(["alpha", "beta"]);
    chai.expect(slice(ref2, 0, 3)).to.be.an('array').to.eql(["alpha", "beta", "charlie"]);
    chai.expect(slice(ref2, 0, 5)).to.be.an('array').to.eql(["alpha", "beta", "charlie", "gamma", 12]);
    chai.expect(slice(ref3, 0, 2)).to.be.an('array').to.eql(["alpha", "beta"]);
    chai.expect(slice(ref3, 0, 5)).to.be.an('array').to.eql(["alpha", "beta", "charlie", 12, "gamma"]);
  });

  it("Should return slice of array starting from index until end", () => {
    const ref1 = ["alpha", "beta", "charlie"]
    const ref2 = ["alpha", "beta", "charlie", "gamma", "echo"]
    chai.expect(slice(ref2, 2, 4)).to.be.an('array').to.eql(["charlie"]);
    chai.expect(slice(ref1, 2, 5)).to.be.an('array').to.eql(["beta", "charlie", "gamma"]);
  });

  it("Should consider negative index offset from end", () => {
    const ref2 = ["alpha", "beta", "charlie", "gamma", "echo"]
    chai.expect(slice(ref2, 2, -1)).to.be.an('array').to.eql(["charlie", "gamma"]);
  });

  it("Should only return slices until array end when ending index is too great", () => {
    const ref1 = ["alpha", "beta", "charlie"]
    chai.expect(slice(ref1, 0, 7)).to.be.an('array').to.eql(["alpha", "beta", "charlie"]);
  });

  it("Should return empty array when starting index is greater that array length", () => {
    const ref1 = ["alpha", "beta", "charlie"]
    chai.expect(slice(ref1, 7, 8)).to.be.an('array').to.eql([]);
  });

  it("Should return empty array when starting index is greater than end index", () => {
    chai.expect( slice(["a", "b", "c", "d", "e"], 3, 1)).to.eql([]);
  });

  it("Should return empty array when parameter is not an array", () => {
    chai.expect( slice(12334, 1, 4) ).to.eql([]);
  });

  // String is array-like having 'length', but is not explicitly documented
  // to be considered an array.
  it("Should return empty array when parameter is string", () => {
    chai.expect(slice("This is not array.", 1, 4)).to.eql([]);
  });

  it("Should return empty array when index is NaN", () => {
    chai.expect( slice(["a", "b", "c", "d", "e"], "i", 3)).to.eql([]);
  });

});
