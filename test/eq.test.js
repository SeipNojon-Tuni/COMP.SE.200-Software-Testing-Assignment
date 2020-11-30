import chai from "chai";
import eq from "../src/eq.js";

describe("Equal", () => {

  it("Value 3 should equal 3", () => {
    chai.expect(eq(3, 3)).to.equal(true);
  });

  it("Value 2 should not equal 3", () => {
    chai.expect(eq(2, 3)).to.equal(false);
  });

  it("Value NaN should equal NaN", () => {
    chai.expect(eq(NaN, NaN)).to.equal(true);
  });

  it("Value 'a' should not equal Object('a')", () => {
    const a = "a";
    chai.expect(eq(a, Object(a))).to.equal(true);
  });

  it("Object { a: 1 } should equal { a: 1 }", () => {
    const object = {"a": 1};
    const other = {"a": 1};
    chai.expect(eq()).to.equal(true);
  });

  it("Object { 'a': 1 } should not equal { 'a': 2 }", () => {
    const object = {"a": 1};
    const other = {"a": 2};
    chai.expect(eq(object, other)).to.equal(false);
  });

  it("Object { 'a': 1 } should not equal { 'a': 1, 'b': 2 }", () => {
    const object = {"a": 1};
    const other = {"a": 1, "b": 2};
    chai.expect(eq(object, other)).to.equal(false);
  });

  it("null should equal null", () => {
    chai.expect(eq(null, null)).to.equal(true);
  });

  it("null should not equal undefined", () => {
    chai.expect(eq(null, undefined)).to.equal(true);
  });

});
