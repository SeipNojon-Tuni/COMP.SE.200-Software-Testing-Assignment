import chai from "chai";
import get from "../src/get.js";

describe("get()", () => {
  it("Should return correct path value.", () => {
    const a = [[1, 2]]
    const obj = {"b":[{"c":[1, 2, 3]}, {}]}
    chai.expect(get(a, '[0][1]')).to.equal(2);
    chai.expect(get(obj, 'b[0]c[2]')).to.equal(3);
  });
  it("Should return defaultValue.", () => {
    const a = [[1, 2]]
    const obj = {"b":[{"c":[1, 2, 3]}, {}]}
    const defaultValue = 13;

    chai.expect(get(a, 'default', defaultValue)).to.equal(defaultValue);
    chai.expect(get(obj, undefined, defaultValue)).to.equal(defaultValue);
    chai.expect(get(undefined, undefined, defaultValue)).to.equal(defaultValue);
  });
  it("Should throw error when defaultValue is undefined.", () => {
    chai.expect( () => {get(obj, undefined, undefined) }).to.throw();
  });
});
