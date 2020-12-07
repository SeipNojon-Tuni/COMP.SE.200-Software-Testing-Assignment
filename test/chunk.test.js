import chai from "chai";
import chunk from "../src/chunk.js";

describe("chunk()", () => {
  //Positive tests
  it("Should return [[a, b], [c, d]] for ([a, b, c, d], 2)", () => {
    const result = chunk(['a', 'b', 'c', 'd'], 2);
    chai.expect(result).to.equal([['a', 'b'],['c', 'd']]);
  });

  it("Should return [[a, b, c], [d]] for ([a, b, c, d], 3)", () => {
    const result = chunk(["a", "b", "c", "d"], 3);
    chai.expect(result).to.equal([["a", "b", "c"], ["d"]]);
  });

  it("Should return [[a], [b], [c], [d]] for ([a, b, c, d])", () => {
    const result = chunk(["a", "b", "c", "d"]);
    chai.expect(result).to.equal([["a"], ["b"], ["c"], ["d"]]);
  });

  it("Should return [[1, 2], [3, 4]] for ([1, 2, 3, 4], 2)", () => {
    const result = chunk([1, 2, 3, 4], 2);
    chai.expect(result).to.equal([[1, 2],[3, 4]]);
  });

  //Negative tests:
  it("Should return [] when given an empty array", () => {
    const result = chunk([], 2);
    chai.expect(result).to.deep.equal([]);
  });

  it("Should return same array back if chunk length > array length", () => {
    const result = chunk(['a', 'b', 'c', 'd'], 10);
    chai.expect(result).to.equal(['a', 'b', 'c', 'd']);
  });
});
