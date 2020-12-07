import chai from "chai";
import difference from "../src/difference.js";

describe("difference()", () => {
  //Positive tests:
  it('Should return [1] for ([2, 1], [2, 3])', () => {
    const result = difference([2, 1], [2, 3]);
    chai.expect(result).to.deep.equal([1]);
  });

  it('Should return [1, 2, 6] for ([2, 1, 4, 5, 10, 6], [4, 5, 10])', () => {
    const result = difference([2, 1, 4, 5, 10, 6], [4, 5, 10]);
    chai.expect(result).to.deep.equal([2, 1, 6]);
  });

  it('Should return ["TestString"] for ([2, "TestString"], [2, 3])', () => {
    const result = difference([2, "TestString"], [2, 3]);
    chai.expect(result).to.deep.equal(["TestString"]);
  });

  it('Should return [] for ([], [2, 3])', () => {
    const result = difference([], [2, 3]);
    chai.expect(result).to.deep.equal([]);
  });

  it('Should return [1, 2] for ([1, 2], [])', () => {
    const result = difference([1, 2], []);
    chai.expect(result).to.deep.equal([1, 2]);
  });

  //Negative tests:
  it('Should return [1, 2] for ([1, 2])', () => {
    const result = difference([1, 2]);
    chai.expect(result).to.deep.equal([1, 2]);
  });
});