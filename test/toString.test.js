import chai from "chai";
import toString from "../src/toString.js";

describe("To String", () => {
  it("Should convert integer to string", () => {
    chai.expect(toString(123)).to.equal("123");
    chai.expect(toString(0)).to.equal("0");
    chai.expect(toString(8126750)).to.equal("8126750");
  });

  it("Should return '' for null or undefined", () => {
    chai.expect(toString(null)).to.equal("");
    chai.expect(toString(undefined)).to.equal("");
  });

  it("Should convert array of strings to single string where items are separated by commas", () => {
    chai.expect(toString([])).to.equal("");
    chai.expect(toString(["Alpha", "Gamma", "Epsilon", "Delta"])).to.equal("Alpha,Gamma,Epsilon,Delta");
  });

  it("Should convert array of integers to single string where items are separated by commas", () => {
    chai.expect(toString([12, 156, 13, 2, 89123])).to.equal("12,156,13,2,89123");
  });
  it("Should throw an error when parameter is not convertable to string", () => {
    chai.expect( () => { toString({"a":12} ) }).to.throw();
  });
});
