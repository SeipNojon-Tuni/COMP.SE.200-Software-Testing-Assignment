import chai from "chai";
import defaultToAny from "../src/defaultToAny.js";

describe("defaultToAny()", () => {
  //Positive tests:
  it('Should return 1 for (1, 10, 20)', () => {
    const result = defaultToAny(1, 10, 20);
    chai.expect(result).to.equal(1);
  });

  it('Should return 10 for (undefined, 10, 20)', () => {
    const result = defaultToAny(undefined, 10, 20);
    chai.expect(result).to.equal(10);
  });

  it('Should return 20 for (undefined, null, 20)', () => {
    const result = defaultToAny(undefined, null, 20);
    chai.expect(result).to.equal(20);
  });

  it('Should return Nan for (undefined, null, NaN)', () => {
    const result = defaultToAny(undefined, null, NaN);
    chai.expect(result).to.deep.equal(NaN);
  });

  it('Should return "TestString" for ("TestString", null, NaN)', () => {
    const result = defaultToAny("TestString", null, NaN);
    chai.expect(result).to.deep.equal("TestString");
  });

  //Negative tests:
  it('Should return value parameter (10) back if no defaultValues are given', () => {
    const result = defaultToAny(10);
    chai.expect(result).to.deep.equal(10);
  });

  it('Should return value parameter (undefined) back if no defaultValues are given', () => {
    const result = defaultToAny(undefined);
    chai.expect(result).to.deep.equal(undefined);
  });

  it('Should return value parameter (Nan) back if no defaultValues are given', () => {
    const result = defaultToAny(NaN);
    chai.expect(result).to.deep.equal(NaN);
  });
 
});
