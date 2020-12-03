import chai from "chai";
import words from "../src/words.js";

describe("Words", () => {
  it("String 'Apple doesn't fall far from tree.' shoud contain words ['Apple', 'doesn't', 'fall', 'far', 'from', 'tree']", () => {
    const reference = ['Apple', "doesn't", 'fall', 'far', 'from', 'tree'];
    chai.expect(words("Apple doesn't fall far from tree.")).to.be.an('array').to.have.members(reference);
  });

  it("Empty string '' shoud return [].", () => {
    const reference = [];
    chai.expect(words("")).to.be.an('array').to.have.members(reference);
  });

  it("String 'This is a string' should return ['string'] for pattern 'string'", () => {
    const reference = ["string"];
    chai.expect(words("This is a string.", "string")).to.be.an('array').to.have.members(reference);
  });

  it("Empty pattern result should not contain commas", () => {
    const reference = ["alpha", "lima", "charlie", "echo"];
    chai.expect(words("alpha, lima, charlie, echo")).to.be.an('array').to.have.members(reference);
  });

  /**
   * Documentation doesn't explicitly tell whether or not special characters should be
   * included in final result. (Supposedly they at least should not be considered separate 'words').
   */
  it("Empty pattern result should not contain special characters", () => {
    const reference = ["alpha", "lima", "charlie", "echo"];
    chai.expect(words("alpha?, lima, charlie, echo!")).to.be.an('array').to.have.members(reference);
  });

  /**
   * This is not explicitly noted in documentation, how ever supposedly
   * currency sign is considered to stay together with value.
   *
   * System is also inconsistent on subject
   *   => € sign is considered separate word, $ is ignored and disappears.
   */
  it("Currency symbols should not be considered separate words or ignored", () => {
    const reference = ["Orange", "$10", "Apple", "€5"];
    chai.expect(words("Orange $10, Apple €5")).to.be.an('array').to.have.members(reference);
  });

  it("Should return array of only the strings containing digits with pattern /[a-zA-Z]+[0-9]+/g", () => {
    const reference = ["gamma2", "lima13"];
    chai.expect(words("delta, bravo, gamma2, alpha, lima13", /[a-zA-Z]+[0-9]+/g)).to.be.an('array').to.have.members(reference);
  });

  it("Should throw an error when parameter is not string", () => {
    chai.expect(() => {words(123)}).to.throw();
  });

});
