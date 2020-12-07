import chai from "chai";
import camelCase from "../src/camelCase.js";

describe("camelCase()", () => {
  it('Should return "fooBar" for "Foo Bar"', () => {
    const testParam = "Foo Bar";
    const result = camelCase(testParam);
    chai.expect(result).to.equal("fooBar");
  });

  it('Should return "fooBar" for "--foo-bar--"', () => {
    const testParam = "--foo-bar--";
    const result = camelCase(testParam);
    chai.expect(result).to.equal("fooBar");
  });

  it('Should return "fooBar" for "__FOO_BAR__"', () => {
    const testParam = "__FOO_BAR__";
    const result = camelCase(testParam);
    chai.expect(result).to.equal("fooBar");
  });
});
