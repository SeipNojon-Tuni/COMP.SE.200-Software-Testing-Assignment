import chai from "chai";
import reduce from "../src/reduce.js";

describe("reduce()", () => {
  it("Should return reduction for input by given iteratee", () => {
    chai.expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3);
    chai.expect(reduce([1, 2, 4], (sum, n) => sum + n, 3)).to.equal(10);
    chai.expect(reduce([1, 2, 4], (sum, n) => sum - n, 10)).to.equal(3);

    const reduction = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
                                (result[value] || (result[value] = [])).push(key)
                                 return result;
                                  }, {});
    chai.expect(reduction).to.eql({ '1': ['a', 'c'], '2': ['b'] });

    // String handling is not explicitly defined. Javascript considers it both Object and iterable.
    chai.expect( reduce("That", (sum, n) => sum + n, "This-")).to.equal("This-That");
    chai.expect( reduce("aaabbc", (sum, n) => { return n == "a" ? (sum + n) : sum }, "")).to.equal("aaa");
  });

  it("Should return original accumulated value if parameter is not iterable", () => {
    chai.expect( reduce(7, (sum, n) => sum + n, 0)).to.equal(0);
    chai.expect( reduce(undefined, (sum, n) => sum + n, 2)).to.equal(2);
    chai.expect( reduce(7, (sum, n) => sum + n, {})).to.eql({});
  });

  it("Should throw an error when accumulator is undefined", () => {
    chai.expect( () => { reduce({ 'a': 1, 'b': 2, 'c': 1 },
                                 (result, value, key) =>
                                   {
                                      (result[value] || (result[value] = [])).push(key)
                                       return result;
                                   },
                                undefined)
                       }).to.throw();
    chai.expect( () => { reduce(7, (sum, n) => sum + n, undefined)}).to.throw();
  });

  it("Should throw error when iteratee is undefined", () => {
    chai.expect(() => {reduce([1, 2, 3], undefined, 0)}).to.throw();
  });

});
