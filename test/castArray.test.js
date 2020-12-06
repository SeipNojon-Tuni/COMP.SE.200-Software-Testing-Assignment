import chai from "chai";
import castArray from "../src/castArray.js";

describe("castArray", () => {
  //Positive tests:
  it('Should return [1] for 1', () => {
    const result = castArray(1);
    chai.expect(result).to.deep.equal([1]);
  });

  it('Should return [{ "a": 1 }] for { "a": 1 }', () => {
    const result = castArray({ "a": 1 });
    chai.expect(result).to.deep.equal([{ "a": 1 }]);
  });

  it('Should return ["abc"] for "abc"', () => {
    const result = castArray("abc");
    chai.expect(result).to.deep.equal(["abc"]);
  });

  it('Should return [null] for null', () => {
    const result = castArray(null);
    chai.expect(result).to.deep.equal([null]);
  });

  it('Should return [undefined] for undefined', () => {
    const result = castArray(undefined);
    chai.expect(result).to.deep.equal([undefined]);
  });

  it('Should return [] if no parameter is given', () => {
    const result = castArray();
    chai.expect(result).to.deep.equal([]);
  });

  it('Should return the same array back if parameter is an array', () => {
    const array = [1, 2, 3];
    const result = castArray(array);
    chai.expect(result).to.equal(array);
  });

  //Negative tests:
  it('Should return all parameters casted as an array', () => {
    const result = castArray(1,2,3);
    chai.expect(result).to.deep.equal([1,2,3]);
  });
});