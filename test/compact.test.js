import chai from "chai";
import compact from "../src/compact.js";

describe("compact()", () => {
  //Positive tests:
  it('Should return [1, 2, 3] for [0, 1, false, 2, "", 3]', () => {
    const testParam = [0, 1, false, 2, "", 3];
    const result = compact(testParam);
    chai.expect(result).to.equal([1, 2, 3]);
  });

  it('Should return [] for [false]', () => {
    const testParam = [false];
    const result = compact(testParam);
    chai.expect(result).to.deep.equal([]);
  });

  //negative tests:
  it('Should return [] for []', () => {
    const testParam = [];
    const result = compact(testParam);
    chai.expect(result).to.deep.equal([]);
  });

  it('Should throw error when parameter is a number', () => {
    chai.expect(() => {compact(10)}).to.throw();
  });

  it('Should throw error when parameter is a string', () => {
    chai.expect(() => {compact("testString")}).to.throw();
  });

  it('Should throw error when parameter is an object', () => {
    chai.expect(() => {compact({test: 5})}).to.throw();
  });
});
