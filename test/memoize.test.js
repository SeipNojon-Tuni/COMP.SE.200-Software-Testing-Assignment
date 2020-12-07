import chai from "chai";
import memoize from "../src/memoize.js";

describe("memoize()", () => {
  it("Should memoize function output", () => {
    const obj = {"a": 12, "b": 25, "c": 30}
    const memo = memoize(Object.values);
    chai.expect(memo(obj)).to.eql([12, 25, 30]);

    const memo2 = memoize(Object.keys);
    chai.expect(memo2(obj)).to.eql(["a", "b", "c"]);

    const f = () => {return 1 + 1};
    const memo3 = memoize(f);
    chai.expect(memo3()).to.eql(2);
  });

  it("Memoized output should remain unchanged after source is modified", () => {
    const obj = {"a": 12, "b": 25, "c": 30}
    const memo = memoize(Object.values);

    const ref = memo(obj);
    obj.b = 13;
    chai.expect(memo(obj)).to.equal(ref);
  });

  it("Should throw an error when memoizable value is not defined or not a function", () => {
    chai.expect( () => { memoize("Hello world!") }).to.throw();
    chai.expect( () => { memoize({}) }).to.throw();
    chai.expect( () => { memoize(13) }).to.throw();
    chai.expect( () => { memoize(undefined) }).to.throw();
  });

  it("Should throw an error when resolver is not defined or not a function",() => {
    chai.expect( () => {memoize(f, undefined)}).to.throw();
  });
});
