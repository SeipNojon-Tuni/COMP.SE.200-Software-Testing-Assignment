import chai from "chai";
import endsWith from "../src/endsWith.js";

describe("Ends with", () => {
  it("String 'abcde' should end with 'e'", () => {
    chai.expect(endsWith("abcde", "e")).to.equal(true);
  });

  it("String 'abcde' should end with 'de'", () => {
      chai.expect(endsWith("abcde", "de")).to.equal(true);
  });

  /**
   * Function documentation for endsWith() describes following:
   * endsWith('abc', 'b', 2)
   * // => true
   *
   * Whereas function only returns true when:
   * endsWith('abc', 'bc', 2)
   * // => true
   *
   * This is either error in documentation
   * or the function implementation.
   */
  it("String 'abraham' should have 'ra' with position 4 ('abra' should end with 'ra')", () => {
    chai.expect(endsWith("abraham", "ra", 4)).to.equal(true);
  });

  it("String 'abraham' should end with 'ham'", () => {
    chai.expect(endsWith("abraham", "ham")).to.equal(true);
  });

  it("String '' should end with ''", () => {
    chai.expect(endsWith("", "")).to.equal(true);
  });

  it("String 'asd' should end with 'd' with position greater than string length", () => {
    chai.expect(endsWith("asd", "d", 6)).to.equal(true);
  });

  it("String 'orchid' should end with 'hid' when position is greater than string length", () => {
    chai.expect(endsWith("orchid", "hid", 12)).to.equal(true);
  });

  it("String 'orchid' should not end with 'hid' with position parameter 5 ('orchi' should not end with 'hid') ", () => {
    chai.expect(endsWith("orchid", "hid", 5)).to.equal(false);
  });

  it("Should return false with negative position", () => {
    chai.expect(endsWith("asd", "d", -2)).to.equal(false);
  });

  it("Should return false when parameter is not string", () => {
    chai.expect(endsWith(123, 3)).to.equal(false);
  });

});
