import chai from "chai";
import isArguments from "../src/isArguments.js";

describe("isArguments()", () => {
  it("Should return true for arguments object.", () => {
    chai.expect(isArguments( function() {return arguments}() )).to.equal(true);
  });
  it("Should return false for values that are not arguments objects.", () => {
    chai.expect(isArguments({"a":2})).to.equal(false);
    chai.expect(isArguments("Not arguments")).to.equal(false);
    chai.expect(isArguments(undefined)).to.equal(false);
    chai.expect(isArguments(null)).to.equal(false);
    chai.expect(isArguments(13)).to.equal(false);
    chai.expect(isArguments([])).to.equal(false);
  });
});
