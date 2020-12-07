import chai from "chai";
import isSymbol from "../src/isSymbol.js";

describe("isSymbol()", () => {
  it("Should return true for symbols", () => {
    chai.expect(isSymbol(Symbol())).to.equal(true);
    chai.expect(isSymbol(Symbol("asd"))).to.equal(true);
    chai.expect(isSymbol(Symbol(()=>{}))).to.equal(true);
  });
  it("Should return false when value is not a symbol", () => {
    chai.expect(isSymbol(123)).to.equal(false);
    chai.expect(isSymbol([])).to.equal(false);
    chai.expect(isSymbol("Not symbol")).to.equal(false);
  });
});
