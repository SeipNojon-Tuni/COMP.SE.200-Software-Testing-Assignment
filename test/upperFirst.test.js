import chai from "chai";
import upperFirst from "../src/upperFirst.js";

describe("Upper First", () => {
  it("Should capitalize first letter of string", () => {
    chai.expect(upperFirst("OMEGA")).to.equal("OMEGA");
    chai.expect(upperFirst("Alpha")).to.equal("Alpha");
    chai.expect(upperFirst("beTa")).to.equal("BeTa");
    chai.expect(upperFirst("LIma")).to.equal("LIma");
    chai.expect(upperFirst("gamma")).to.equal("Gamma");
    chai.expect(upperFirst("delta-123-456!!!")).to.equal("Delta-123-456!!!");
  });
  it("Empty string should return empty string", () => {
    chai.expect(upperFirst("")).to.equal("");
  });

  // New test case, not documented in original plan.
  it("String containing special character as first character should remain unchanged", () => {
    chai.expect(upperFirst("!alpha")).to.equal("!alpha");
  });
  it("Should throw error when parameter is not a string", () => {
    chai.expect(() => {upperFirst(8127523)}).to.throw();
  });
});
