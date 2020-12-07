import chai from "chai";
import isDate from "../src/isDate.js";

describe("isDate()", () => {
  it("Should return true for Date objects", () => {
    chai.expect(isDate(new Date)).to.equal(true);
  });
  // Having null as separate negative test case is
  // redundant as null should be considered just 'not a Date'
  it("Should return false for values that are not Date objects", () => {
    chai.expect(isDate(null)).to.equal(false);
    chai.expect(isDate("Not a date")).to.equal(false);
    chai.expect(isDate('13.2.2020')).to.equal(false);
  });
});
