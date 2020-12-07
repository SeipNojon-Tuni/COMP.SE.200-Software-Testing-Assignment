import chai from "chai";
import map from "../src/map.js";

describe("map()", () => {
  it("Should map array values ", () => {
    const square = (n) => { return Math.pow(n, 2) };
    chai.expect(map([2, 3, 4, 8], square )).to.eql([4, 9, 16, 64]);

    const double = (n) => { return 2*n }
    chai.expect( map([2, 3, 4, 8], double)).to.eql([4, 6, 8, 16]);
  });

  it("Should return empty array unchanged", () => {
    const double = (n) => { return 2*n }
    chai.expect([], double).to.eql([]);
  });

  it("Should throw error when parameter is not array", () => {
    const double = (n) => { return 2*n }

    chai.expect(() => {map(undefined, double)}).to.throw();
    chai.expect(() => {map("not an array!", double)}).to.throw();
  });

  it("Should throw error when iteratee is not defined or not a function", () => {
    chai.expect(() => {map([1, 2, 3], undefined)}).to.throw();
    chai.expect(() => {map([1, 2, 3], "not a function!")}).to.throw();
  });

});
