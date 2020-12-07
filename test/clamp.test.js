import chai from "chai";
import clamp from "../src/clamp.js";

describe("clamp()", () => {
  //Positive tests:
  it('Should return -5 for (-10, -5, 5)', () => {
    const result = clamp(-10, -5, 5);
    chai.expect(result).to.equal(-5);
  });

  it('Should return -5 for (-10000000, -5, 5)', () => {
    const result = clamp(-10000000, -5, 5);
    chai.expect(result).to.equal(-5);
  });

  it('Should return 5 for (10, -5, 5)', () => {
    const result = clamp(10, -5, 5);
    chai.expect(result).to.equal(5);
  });

  it('Should return 5 for (10000000, -5, 5)', () => {
    const result = clamp(10000000, -5, 5);
    chai.expect(result).to.equal(5);
  });

  //Negative tests:
  it('Should return -5 if lower and upper bound are vice versa', () => {
    const result = clamp(-10, 5, -5);
    chai.expect(result).to.equal(-5);
  });

  it('Should return Nan when the first parameter is a string', () => {
    const result = clamp("TestString", -5, 5);
    chai.expect(result).to.deep.equal(NaN);
  });

  it('Should return Nan when the second parameter is a string', () => {
    const result = clamp(10, "TestString", 5);
    chai.expect(result).to.deep.equal(NaN);
  });

  it('Should return Nan when the third parameter is a string', () => {
    const result = clamp(10, -5, "TestString");
    chai.expect(result).to.deep.equal(NaN);
  });
});
