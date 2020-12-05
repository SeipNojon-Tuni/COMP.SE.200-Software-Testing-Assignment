import chai from "chai";
import defaultTo from "../src/defaultTo.js";

describe("defaultTo", () => {
  //Positive tests:
  it('Should return 1 for (1, 10)', () => {
    const result = defaultTo(1, 10);
    chai.expect(result).to.equal(1);
  });

  it('Should return 10 for (undefined, 10)', () => {
    const result = defaultTo(undefined, 10);
    chai.expect(result).to.equal(10);
  });

  it('Should return 10 for (null, 10)', () => {
    const result = defaultTo(null, 10);
    chai.expect(result).to.equal(10);
  });

  //Negative tests:
  it('Should return null for (null, null)', () => {
    const result = defaultTo(null, null);
    chai.expect(result).to.equal(null);
  });
});
