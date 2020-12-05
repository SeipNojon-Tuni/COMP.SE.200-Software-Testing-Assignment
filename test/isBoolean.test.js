import chai from "chai";
import isBoolean from "../src/isBoolean.js";

describe("isBoolean", () => {
  //Positive tests:
  it('Should return true for false', () => {
    const result = isBoolean(false);
    chai.expect(result).to.equal(true);
  });

  it('Should return true for true', () => {
    const result = isBoolean(true);
    chai.expect(result).to.equal(true);
  });

  it('Should return true for Boolean("true")', () => {
    const param = new Boolean("true");
    const result = isBoolean(param);
    chai.expect(result).to.equal(true);
  });

  it('Should return true for Boolean(false)', () => {
    const param = new Boolean(false);
    const result = isBoolean(param);
    chai.expect(result).to.equal(true);
  });

  it('Should return true for Boolean([])', () => {
    const param = new Boolean([]);
    const result = isBoolean(param);
    chai.expect(result).to.equal(true);
  });

  it('Should return true for Boolean("")', () => {
    const param = new Boolean("");
    const result = isBoolean(param);
    chai.expect(result).to.equal(true);
  });

  it('Should return false for null', () => {
    const result = isBoolean(null);
    chai.expect(result).to.equal(false);
  });

  it('Should return false for 5', () => {
    const result = isBoolean(5);
    chai.expect(result).to.equal(false);
  });

  it('Should return false for "testString"', () => {
    const result = isBoolean("testString");
    chai.expect(result).to.equal(false);
  });
});
