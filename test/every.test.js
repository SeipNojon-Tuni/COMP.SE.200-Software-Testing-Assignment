import chai from "chai";
import every from "../src/every.js";

describe("Every", () => {
  describe("Arrays", () => {
    it("Empty array should always equal true", () => {
      chai.expect(every([], Boolean)).to.equal(true);
    });

    it("Array of true values should return true with predicate Boolean", () => {
      chai.expect(every([true, true, true], Boolean)).to.equal(true);
    });

    it("Array of false values should return false with predicate Boolean", () => {
      chai.expect(every([false, false, false], Boolean)).to.equal(false);
    });

    it("Array [true] should return true with predicate Boolean", () => {
      chai.expect(every([true], Boolean)).to.equal(true);
    });

    it("Array [false] should return false with predicate Boolean", () => {
      chai.expect(every([false], Boolean)).to.equal(false);
    });

    it("Array [1, 2, 3, 4, 5] should return true with predicate Boolean", () => { Boolean
    chai.expect(every([1, 2, 3, 4, 5], Boolean )).to.equal(true);
                                                                                });

    it("Array [0, 2, 3, 4, 5] should return false with predicate Boolean", () => { Boolean
    chai.expect(every([0, 2, 3, 4, 5], Boolean )).to.equal(false);
                                                                                 });

    it("Array [0, 0, 0, 0] should return false with predicate Boolean", () => { Boolean
    chai.expect(every([0, 0, 0, 0], Boolean )).to.equal(false);
                                                                              });

    it("Array [1, 2, 3, 4, 5] should return true with predicate 'x < 7'", () => {
      const predicate = (i) => {return i < 7};
      chai.expect(every([1, 2, 3, 4, 5], predicate )).to.equal(true);
    });

    it("Array [1, 67, 13, 3, 43, 5] should return false with predicate 'x < 7'", () => {
      const predicate = (i) => {return i < 7};
      chai.expect(every([1, 67, 13, 3, 43, 5], predicate )).to.equal(false);
    });

    it("Array [ [1, 2, 3], [4, 5] ] should return false with predicate 'x < 7'", () => {
      const predicate = (i) => {return i < 7};
      chai.expect(every([[1, 2, 3], [4, 5]], predicate )).to.equal(false);
    });
  });

  describe("Single values", () => {
    it("Single value true should return true with predicate Boolean", () => {
      chai.expect(every(true, Boolean)).to.equal(true);
    });

    it("Single value false should return false with predicate Boolean", () => {
      chai.expect(every(false, Boolean)).to.equal(false);
    });

    it("Single value 2 should return true with predicate 'x < 7'", () => {
      const predicate = (i) => {return i < 7};
      chai.expect(every(2, predicate )).to.equal(true);
    });

    it("Single value 22 should return false with predicate 'x < 7'", () => {
      const predicate = (i) => {return i < 7};
      chai.expect(every(22, predicate)).to.equal(false);
    });
  });

});
