import chai from "chai";
import divide from "../src/divide.js";

describe("divide()", () => {
  //Positive tests:
  it('Should return 1.5 for (6, 4)', () => {
    const result = divide(6, 4);
    chai.expect(result).to.equal(1.5);
  });

  it('Should return 2 for (6, 3)', () => {
    const result = divide(6, 3);
    chai.expect(result).to.equal(2);
  });

  it('should return correct result with divided random numbers', () => {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor((Math.random() * 100) + 1);
    const result = divide(number1, number2);
    chai.expect(result).to.equal(number1 / number2);
  });

  //Negative tests:
  it('should return Nan when diving with zero', () => {
    const result = divide(50, 0);
    chai.expect(result).to.deep.equal(NaN);
  });

  it('Should throw error when parameter is a string', () => {
    chai.expect(() => {divide("testString", 1)}).to.throw();
  });

  it('Should throw error when parameter is an array', () => {
    chai.expect(() => {divide([10], 1)}).to.throw();
  });

  it('Should throw error when parameter is an object', () => {
    chai.expect(() => {divide({test: 1}, 1)}).to.throw();
  });
});
