import chai from "chai";
import drop from "../src/drop.js";

describe("drop()", () => {
  //Positive tests:
  it('Should return [2, 3] for ([1, 2, 3])', () => {
    const result = drop([1, 2, 3]);
    chai.expect(result).to.deep.equal([2, 3]);
  });

  it('Should return [3] for ([1, 2, 3], 2)', () => {
    const result = drop([1, 2, 3], 2);
    chai.expect(result).to.deep.equal([3]);
  });

  it('Should return [] for ([1, 2, 3], 5)', () => {
    const result = drop([1, 2, 3], 5);
    chai.expect(result).to.deep.equal([]);
  });

  it('Should return [1, 2, 3] for ([1, 2, 3], 0)', () => {
    const result = drop([1, 2, 3], 0);
    chai.expect(result).to.deep.equal([1, 2, 3]);
  });

  //Negative tests:
  it('Should return [] for ([])', () => {
    const result = drop([]);
    chai.expect(result).to.deep.equal([]);
  });

  it('Should return [] for ([], 0)', () => {
    const result = drop([]);
    chai.expect(result).to.deep.equal([]);
  });

  it('Should return "TestString" for ("TestString", 0)', () => {
    const result = drop("TestString", 0);
    chai.expect(result).to.deep.equal("TestString");
  });
});
