import chai from "chai";
import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  //Positive tests:
  it('Should return "Fred" for "FRED"', () => {
    const testParam = "FRED";
    const result = capitalize(testParam);
    chai.expect(result).to.equal("Fred");
  });

  it('Should return "Fred" for "fRED"', () => {
    const testParam = "fRED";
    const result = capitalize(testParam);
    chai.expect(result).to.equal("Fred");
  });

  it('Should return "Fred" for "fred"', () => {
    const testParam = "fred";
    const result = capitalize(testParam);
    chai.expect(result).to.equal("Fred");
  });

  it('Should return "F_red5" for "f_rEd5"', () => {
    const testParam = "f_rEd5";
    const result = capitalize(testParam);
    chai.expect(result).to.equal("F_red5");
  });

  it('Should return "" for ""', () => {
    const testParam = "";
    const result = capitalize(testParam);
    chai.expect(result).to.equal("");
  });
});
