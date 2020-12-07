import chai from "chai";
import countBy from "../src/countBy.js";

describe("countBy()", () => {
  it("Should return correct calculation.", () => {
    chai.expect(countBy([true, false, true, true], value => value )).to.eql({'false': 1, 'true': 3});
    chai.expect(countBy([{'key': true}, {'key': false}, {'key': true}, {'key': true}], value => value.key )).to.eql({'false': 1, 'true': 3});
  });
  it("Should return empty object if value is not iterable", () => {
    chai.expect(countBy(undefined, value => value) ).to.eql({});
    chai.expect(countBy(13, value => value) ).to.eql({});
    chai.expect(countBy([], value => value) ).to.eql({});
  });
});
