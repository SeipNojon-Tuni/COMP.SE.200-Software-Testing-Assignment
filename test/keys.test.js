import chai from "chai";
import keys from "../src/keys.js";

describe("keys()", () => {
  it("Should return keys for object", () => {
    chai.expect(keys({"a":1, "b":2, "c":4 })).to.eql(["a", "b", "c"]);
  });
  it("Should return indexes for string and array", () => {
    chai.expect(keys("hello")).to.eql(["0", "1", "2", "3", "4"]);
  });
  it("Should return empty array for empty array or object", () => {
    chai.expect(keys([])).to.eql([]);
    chai.expect(keys({})).to.eql([]);
  });
  it("Should return empty array for undefined parameter", () => {
    chai.expect(keys(undefined)).to.eql([])
  });
});
